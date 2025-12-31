<script>
  import { base } from '$app/paths';
  import { onMount, onDestroy } from 'svelte';
  import { calculateRiskAdjustedMove, fetchHistoricalData } from '$lib/calculator';

  let crypto = '';
  let current = 0;
  let target = 0;
  let results = null;
  let historicalPrices = [];
  let error = '';
  let chart1Instance = null;
  let chart2Instance = null;

  onMount(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    crypto = urlParams.get('crypto') || '';
    current = parseFloat(urlParams.get('current')) || 0;
    target = parseFloat(urlParams.get('target')) || 0;

    if (!crypto || current <= 0 || target <= 0) {
      error = 'Invalid parameters. Please go back and try again.';
      return;
    }

    results = await calculateRiskAdjustedMove(crypto, current, target);
    historicalPrices = await fetchHistoricalData(crypto, 7); // Last 7 days prices

    if (!window.Chart) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js';
      script.onload = createCharts;
      document.head.appendChild(script);
    } else {
      createCharts();
    }
  });

  function createCharts() {
    // Chart 1: Price Levels + Historical Trend
    const ctx1 = document.getElementById('priceLevelsChart')?.getContext('2d');
    if (ctx1) {
      chart1Instance = new window.Chart(ctx1, {
        type: 'bar',
        data: {
          labels: ['Current Price', 'Target Price'],
          datasets: [
            {
              label: 'Price (USD)',
              data: [current, target],
              backgroundColor: ['rgba(0, 143, 57, 0.8)', 'rgba(0, 143, 57, 0.6)'],
              borderColor: '#008F39',
              borderWidth: 2,
              borderRadius: 8
            },
            {
              type: 'line',
              label: '7-Day Historical Trend',
              data: [historicalPrices[0] || current, null], // Only show start point for visual reference
              borderColor: '#28a745',
              borderDash: [5, 5],
              pointBackgroundColor: '#008F39',
              tension: 0.4,
              fill: false
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Current vs Target Price',
              color: '#333',
              font: { size: 16, weight: 'bold' }
            },
            legend: { position: 'top' }
          },
          scales: {
            y: {
              beginAtZero: false,
              ticks: { color: '#555' },
              grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: { ticks: { color: '#555' } }
          }
        }
      });
    }

    // Chart 2: Move Comparison
    const ctx2 = document.getElementById('moveChart')?.getContext('2d');
    if (ctx2 && results) {
      chart2Instance = new window.Chart(ctx2, {
        type: 'bar',
        data: {
          labels: ['Required Move', 'Risk-Adjusted Move'],
          datasets: [{
            label: 'Percentage Change (%)',
            data: [results.requiredPercentage, results.adjustedPercentage],
            backgroundColor: [
              'rgba(0, 143, 57, 0.7)',
              'rgba(0, 143, 57, 0.9)'
            ],
            borderColor: '#008F39',
            borderWidth: 2,
            borderRadius: 10,
            hoverBackgroundColor: '#00752e'
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: `Move Comparison (7-Day Volatility: ${results.volatility}%)`,
              color: '#333',
              font: { size: 16, weight: 'bold' }
            },
            tooltip: {
              callbacks: {
                label: (context) => `${context.dataset.label}: ${context.parsed.y}%`
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { color: '#555' },
              grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: { ticks: { color: '#555' } }
          }
        }
      });
    }
  }

  onDestroy(() => {
    if (chart1Instance) chart1Instance.destroy();
    if (chart2Instance) chart2Instance.destroy();
  });
</script>

<div class="container mt-5">
  <h1 class="text-center mb-4">Calculation Results for {crypto.toUpperCase()}</h1>

  {#if error}
    <div class="alert alert-danger">{error}</div>
  {:else if results}
    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">Key Results</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Current Price: ${current.toFixed(2)}</li>
          <li class="list-group-item">Target Price: ${target.toFixed(2)}</li>
          <li class="list-group-item">Required Move: {results.requiredPercentage}% (${results.requiredAbsolute})</li>
          <li class="list-group-item">7-Day Volatility: {results.volatility}%</li>
          <li class="list-group-item"><strong>Risk-Adjusted Move: {results.adjustedPercentage}% (${results.adjustedAbsolute})</strong></li>
        </ul>
      </div>
    </div>

    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">Price Levels Visualization</h5>
        <canvas id="priceLevelsChart"></canvas>
      </div>
    </div>

    <div class="card shadow-sm">
      <div class="card-body">
        <h5 class="card-title">Required vs Risk-Adjusted Move</h5>
        <canvas id="moveChart"></canvas>
      </div>
    </div>
  {/if}

  <div class="mt-4 text-center">
    <a href="{base}/" class="btn btn-primary me-2">New Calculation</a>
  </div>
</div>

<style>
  .card {
    border-radius: 15px;
    border: none;
    background: white;
    box-shadow: 0 4px 15px rgba(0, 143, 57, 0.08);
  }
</style>