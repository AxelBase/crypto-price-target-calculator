<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { fetchCryptoList, fetchCurrentPrice } from '$lib/calculator';

  let cryptos = [];
  let selectedCrypto = '';
  let currentPrice = '';
  let targetPrice = '';
  let error = '';

  onMount(async () => {
    cryptos = await fetchCryptoList();
  });

  async function handleCryptoChange() {
    if (selectedCrypto) {
      const price = await fetchCurrentPrice(selectedCrypto);
      if (price) currentPrice = price.toFixed(2);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const current = parseFloat(currentPrice);
    const target = parseFloat(targetPrice);
    if (!selectedCrypto || isNaN(current) || isNaN(target)) {
      error = 'Please fill in all fields correctly.';
      return;
    }
    error = '';
    const params = new URLSearchParams({ crypto: selectedCrypto, current: current.toString(), target: target.toString() });
    window.location.href = `${base}/results?${params.toString()}`;
  }
</script>

<svelte:head>
  <title>Crypto Price Target Calculator | Real-Time Required Move & Risk Adjustment</title>
  <meta name="description" content="Free client-side crypto calculator: Compute required price moves, volatility, and risk-adjusted targets using live CoinGecko data. Privacy-first, no tracking." />
  <meta name="keywords" content="crypto price target, required move calculator, volatility adjustment, risk-adjusted targets, CoinGecko API, Bitcoin target, Ethereum calculator" />
  <meta property="og:title" content="Crypto Price Target Calculator | Real-Time Required Move & Risk Adjustment" />
  <meta property="og:description" content="Free client-side crypto calculator: Compute required price moves, volatility, and risk-adjusted targets using live CoinGecko data. Privacy-first, no tracking." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{base}/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Crypto Price Target Calculator | Real-Time Required Move & Risk Adjustment" />
  <meta name="twitter:description" content="Free client-side crypto calculator: Compute required price moves, volatility, and risk-adjusted targets using live CoinGecko data. Privacy-first, no tracking." />
</svelte:head>

<div class="container py-5">
  <section id="home" class="row justify-content-center mb-5">
    <div class="col-lg-6">
      <div class="bg-white p-4 p-md-5 rounded-5 shadow-sm border">
        <h1 class="text-center mb-4 fw-bold" style="color: var(--brand-green)">Price Target</h1>
        <form on:submit={handleSubmit}>
          <div class="mb-4">
            <label for="cryptoSelect" class="form-label small fw-bold">Cryptocurrency</label>
            <select id="cryptoSelect" class="form-select" bind:value={selectedCrypto} on:change={handleCryptoChange}>
              <option value="">Select a coin...</option>
              {#each cryptos as crypto}
                <option value={crypto.id}>{crypto.name}</option>
              {/each}
            </select>
          </div>
          <div class="row mb-4">
            <div class="col-6">
              <label for="currentPrice" class="form-label small fw-bold">Current (USD)</label>
              <input id="currentPrice" type="number" step="any" class="form-control" bind:value={currentPrice} required />
            </div>
            <div class="col-6">
              <label for="targetPrice" class="form-label small fw-bold">Target (USD)</label>
              <input id="targetPrice" type="number" step="any" class="form-control" bind:value={targetPrice} required />
            </div>
          </div>
          {#if error}<div class="alert alert-danger small rounded-3">{error}</div>{/if}
          <button type="submit" class="btn btn-primary w-100 py-3">Calculate Move</button>
        </form>
      </div>
    </div>
  </section>

<section id="about" class="py-5">
  <div class="p-4 p-md-5 rounded-5 bg-white border">
    <h2 class="fw-bold mb-4" style="color: var(--brand-green)">About the Crypto Price Target Calculator</h2>
    <p class="text-muted mb-4">
      The Crypto Price Target Calculator is a fully client-side, privacy-focused web utility designed for cryptocurrency enthusiasts, traders, and investors. It empowers users to instantly determine the precise percentage and absolute price movement required to reach any custom target, while incorporating real-time market data and volatility adjustments for deeper insights.
    </p>
    <p class="text-muted mb-4">
      Built as a static site deployed on GitHub Pages, the tool fetches live prices and seven-day historical data directly from the CoinGecko API in your browser—no servers, no data storage, no tracking. This ensures complete privacy and always-up-to-date calculations without any backend dependencies.
    </p>
    <p class="text-muted mb-4">
      Core functionality revolves around the required move calculation: ((target - current) / current) × 100 for percentage, and target - current for absolute change. For enhanced realism, it computes seven-day volatility using standard deviation of daily prices, then applies a risk-adjustment factor to scale the required move (adjusted = required × (1 + volatility / 100)). This helps users understand how recent market fluctuations might influence achieving targets.
    </p>
    <p class="text-muted mb-4">
      Results are visualized through dual responsive charts: one comparing current vs target prices with a historical trend overlay, and another showing side-by-side required and risk-adjusted moves. All processing is local, making the tool fast, secure, and accessible on any device.
    </p>
    <p class="text-muted mb-4">
      The calculator supports the top 50 cryptocurrencies by market cap, auto-populates current prices, and allows manual overrides for hypothetical analysis. It's ideal for planning trades, assessing risk, or exploring scenarios in volatile markets like December 2025, where Bitcoin hovered around $88,000 and Ethereum near $2,970 amid ongoing fluctuations.
    </p>
    <p class="text-muted">
      This tool is not financial advice—it's an educational resource to aid informed decision-making. All data is public and sourced transparently from CoinGecko. Enjoy precise, real-time crypto target analysis with zero compromise on privacy.
    </p>
  </div>
</section>
<section id="how-to-use" class="py-5">
  <h2 class="fw-bold mb-5 text-center" style="color: var(--brand-green)">How to Use the Calculator</h2>
  <div class="row g-4 text-center">
    <div class="col-md-4">
      <div class="p-4 bg-white rounded-5 border h-100 shadow-sm">
        <div class="display-5 fw-bold mb-3 text-success">1</div>
        <h5 class="fw-bold mb-3">Select Your Cryptocurrency</h5>
        <p class="text-muted small">
          Open the tool and choose from the top 50 cryptocurrencies by market cap. The dropdown populates automatically with live data from CoinGecko. Once selected, the current price field fills instantly with the latest USD value—e.g., Bitcoin at ~$88,000 or Ethereum at ~$2,970 as of December 31, 2025.
        </p>
        <p class="text-muted small">
          You can override the auto-filled price manually for custom scenarios, such as hypothetical trades or off-exchange quotes.
        </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="p-4 bg-white rounded-5 border h-100 shadow-sm">
        <div class="display-5 fw-bold mb-3 text-success">2</div>
        <h5 class="fw-bold mb-3">Enter Your Target Price</h5>
        <p class="text-muted small">
          Input your desired target price in USD. The field supports full decimal precision—essential for crypto where even small fractions matter. For example, target $100,000 for Bitcoin or $3,500 for Ethereum.
        </p>
        <p class="text-muted small">
          Click "Calculate Required Move" to submit. The tool validates inputs and navigates to the results page with your parameters preserved via URL query string.
        </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="p-4 bg-white rounded-5 border h-100 shadow-sm">
        <div class="display-5 fw-bold mb-3 text-success">3</div>
        <h5 class="fw-bold mb-3">Review Results & Insights</h5>
        <p class="text-muted small">
          The results page displays key metrics: required percentage and absolute move, seven-day volatility, and risk-adjusted targets. Dual charts visualize price levels with historical trend and move comparisons.
        </p>
        <p class="text-muted small">
          Use the risk-adjusted values for conservative planning in volatile markets. Share direct links to results for discussions. Return to home for new calculations anytime.
        </p>
      </div>
    </div>
  </div>
</section>
<section id="faq" class="py-5 mb-5">
  <h2 class="fw-bold mb-5 text-center" style="color: var(--brand-green)">Frequently Asked Questions</h2>
  <div class="accordion accordion-flush border rounded-4 overflow-hidden shadow-sm" id="faqAcc">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f1">
          Is this financial advice?
        </button>
      </h2>
      <div id="f1" class="accordion-collapse collapse" data-bs-parent="#faqAcc">
        <div class="accordion-body">
          No. The tool provides educational calculations based on public data and is not investment, trading, or financial advice. Cryptocurrency markets are highly volatile; always conduct your own research and consult professionals.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f2">
          How accurate is the live price data?
        </button>
      </h2>
      <div id="f2" class="accordion-collapse collapse" data-bs-parent="#faqAcc">
        <div class="accordion-body">
          Prices are fetched directly from CoinGecko's public API in real-time, reflecting market values at the moment of calculation. However, crypto prices fluctuate rapidly, so results are snapshots—always verify with multiple sources for critical decisions.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f3">
          What is the risk-adjusted move?
        </button>
      </h2>
      <div id="f3" class="accordion-collapse collapse" data-bs-parent="#faqAcc">
        <div class="accordion-body">
          It scales the basic required move by recent seven-day volatility (standard deviation of prices). In volatile markets, this produces a more conservative estimate, helping account for potential larger swings.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f4">
          Does it work offline?
        </button>
      </h2>
      <div id="f4" class="accordion-collapse collapse" data-bs-parent="#faqAcc">
        <div class="accordion-body">
          No, live price fetching requires internet for CoinGecko API. However, you can enter manual prices for offline calculations.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f5">
          Is my data private?
        </button>
      </h2>
      <div id="f5" class="accordion-collapse collapse" data-bs-parent="#faqAcc">
        <div class="accordion-body">
          Yes—everything runs client-side in your browser. No inputs, selections, or results are stored or transmitted to any server.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f6">
          Why only top 50 coins?
        </button>
      </h2>
      <div id="f6" class="accordion-collapse collapse" data-bs-parent="#faqAcc">
        <div class="accordion-body">
          CoinGecko provides reliable data for major assets. Limiting to top 50 ensures fast loading and accurate history.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f7">
          Can I share results?
        </button>
      </h2>
      <div id="f7" class="accordion-collapse collapse" data-bs-parent="#faqAcc">
        <div class="accordion-body">
          Yes—copy the results page URL to share exact calculations with others.
        </div>
      </div>
    </div>
  </div>
</section>
</div>

<style>
  :global(.accordion-button:not(.collapsed)) {
    background-color: var(--brand-light-green);
    color: var(--brand-green);
  }
</style>