<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Crypto Price Target Calculator</title>
  <meta name="description" content="Terms of use for the Crypto Price Target Calculator, a free client-side tool providing market data insights without warranties." />
  <meta property="og:title" content="Terms and Conditions | Crypto Price Target Calculator" />
  <meta property="og:description" content="Terms of use for the Crypto Price Target Calculator, a free client-side tool providing market data insights without warranties." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: December 31, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>Crypto Price Target Calculator</strong> ("the Tool"), a free, static web utility, you agree to these Terms and Conditions. If you do not agree, please refrain from using the Tool. We reserve the right to update these terms at any time, with changes effective upon posting.</p>

    <h2>2. Description of the Tool</h2>
    <p>The Tool is a client-side application that fetches public cryptocurrency data from CoinGecko, allows price inputs, and performs calculations for required moves, volatility adjustments, and visualizations. All operations occur in your browser for privacy and performance.</p>

    <h2>3. Use of the Tool</h2>
    <p>You may use the Tool for personal, non-commercial purposes. Permitted activities include:</p>
    <ul>
      <li>Selecting cryptocurrencies and viewing live prices.</li>
      <li>Inputting targets and reviewing results/charts.</li>
      <li>Sharing direct links to results pages.</li>
    </ul>
    <p>Prohibited uses include automated scraping, redistribution of data as a service, or any action interfering with functionality.</p>

    <h2>4. No Financial Advice</h2>
    <p><strong>The Tool does not provide financial, investment, or trading advice.</strong> Calculations and data are for informational purposes only, based on public sources. Cryptocurrency markets are volatile; past performance does not indicate future results. Use at your own risk—we are not liable for any decisions or losses.</p>

    <h2>5. Third-Party Data</h2>
    <p>Price and historical data come from CoinGecko's public API. We do not guarantee accuracy, timeliness, or availability. CoinGecko's terms apply to their data usage.</p>

    <h2>6. Intellectual Property</h2>
    <p>The Tool's code, design, and content are open-source where applicable or owned by us. You may not modify, reverse-engineer, or claim ownership without permission.</p>

    <h2>7. Disclaimer of Warranties</h2>
    <p>The Tool is provided <strong>"as is"</strong> without warranties of any kind, express or implied, including accuracy, reliability, or fitness for purpose. We do not warrant uninterrupted access or error-free operation.</p>

    <h2>8. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of the Tool, including data inaccuracies or trading losses.</p>

    <h2>9. Governing Law</h2>
    <p>These terms are governed by general internet usage principles. Disputes, if any, should be resolved amicably.</p>

    <h2>10. Contact</h2>
    <p>For questions, refer to the About or Blog sections.</p>

    <p class="italic-note"><strong>By using the Tool, you acknowledge these terms and accept all risks associated with cryptocurrency analysis.</strong></p>
  </article>
</div>

<style>
  /* Same consistent styling */
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2 {
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>