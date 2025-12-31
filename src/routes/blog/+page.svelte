<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Introduction to the Crypto Price Target Calculator',
      description: 'Discover how this client-side tool helps traders quickly determine the exact percentage move needed to reach any price target for major cryptocurrencies.'
    },
    {
      href: '/blog/posts/post2',
      title: 'Understanding the Required Move Calculation',
      description: 'A deep dive into the core formula: how the tool computes percentage and absolute price changes from current to target levels with full decimal precision.'
    },
    {
      href: '/blog/posts/post3',
      title: 'Incorporating 7-Day Volatility for Realistic Insights',
      description: 'Learn how historical price data from CoinGecko is used to calculate volatility via standard deviation, providing context for recent market behavior.'
    },
    {
      href: '/blog/posts/post4',
      title: 'Risk-Adjusted Price Targets Explained',
      description: 'Explore the advanced adjustment that scales the required move based on current volatility, helping assess more conservative or aggressive scenarios.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Live Data Integration with CoinGecko API',
      description: 'How the tool fetches real-time prices and historical charts directly in your browser, ensuring calculations always reflect the latest market conditions.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Visualizing Results: Charts and Comparisons',
      description: 'Breakdown of the dual-chart system showing price levels, historical trends, and side-by-side required vs risk-adjusted move percentages.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Best Practices for Setting Crypto Price Targets',
      description: 'Practical tips on using volatility-adjusted moves, handling bearish vs bullish targets, and interpreting results in volatile market environments.'
    }
  ];
</script>

<svelte:head>
  <title>Blog | Crypto Price Target Insights</title>
  <meta name="description" content="In-depth articles on using the Crypto Price Target Calculator: required moves, volatility adjustments, risk scaling, and real-time data integration." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-graph-up-arrow"></i> Blog: Crypto Price Target Insights</h1>
    <p class="subtitle">
      Technical guides, explanations, and tips for getting the most out of the Crypto Price Target Calculator. 
      Topics cover calculation mechanics, volatility integration, risk adjustments, API data flow, and visualization features.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card shadow-sm">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--border-color, #e0e0e0);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    color: var(--brand-green, #008F39);
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary, #666);
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
  }

  .post-card {
    text-decoration: none;
    background: white;
    border-radius: 15px;
    overflow: hidden;
    transition: var(--transition-smooth, all 0.3s ease);
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .post-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 143, 57, 0.15);
  }

  .post-title {
    font-size: 1.35rem;
    color: var(--brand-green, #008F39);
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  .post-description {
    color: #555;
    flex-grow: 1;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .read-more {
    color: var(--brand-green, #008F39);
    font-weight: 600;
    transition: var(--transition-smooth);
  }

  .post-card:hover .read-more {
    transform: translateX(8px);
  }
</style>