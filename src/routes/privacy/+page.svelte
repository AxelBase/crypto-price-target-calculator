<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Crypto Price Target Calculator</title>
  <meta name="description" content="The Crypto Price Target Calculator is a fully client-side tool that collects no personal data, ensuring complete privacy while using real-time CoinGecko API for calculations." />
  <meta property="og:title" content="Privacy Policy | Crypto Price Target Calculator" />
  <meta property="og:description" content="The Crypto Price Target Calculator is a fully client-side tool that collects no personal data, ensuring complete privacy while using real-time CoinGecko API for calculations." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: December 31, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>Crypto Price Target Calculator</strong>, a static, client-side web utility ("we," "us," or "our"). This Privacy Policy explains our data practices for this tool, which enables users to select cryptocurrencies, input prices, and compute required moves with volatility adjustments using live CoinGecko data. We prioritize <strong>user privacy</strong> through a design where <strong>all processing occurs in your browser</strong>. We do not collect, store, or transmit any personal information. This policy provides full transparency on our no-data-collection approach.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>The tool operates without gathering any user data. Specifically, we do not collect:</p>
    <ul>
      <li><strong>Personal Information</strong>: Names, emails, IP addresses, or device details.</li>
      <li><strong>Input Data</strong>: Selected cryptocurrencies, current/target prices, or calculated results remain local to your session.</li>
      <li><strong>Usage Analytics</strong>: No tracking of visits, interactions, or behavior via cookies, pixels, or third-party tools.</li>
      <li><strong>Session Data</strong>: The application is stateless; no persistent storage beyond temporary browser memory.</li>
    </ul>
    <p>Since everything runs <strong>client-side</strong>, your inputs and results never leave your device.</p>

    <h2>3. How the Tool Functions</h2>
    <p>When using the Crypto Price Target Calculator:</p>
    <ul>
      <li><strong>Selections and Inputs</strong>: Crypto choices and price entries are processed locally using JavaScript.</li>
      <li><strong>Live Data Retrieval</strong>: Real-time prices and historical data are fetched directly from CoinGecko's public API in your browser—no intermediary servers involved.</li>
      <li><strong>Calculations and Visuals</strong>: Required moves, volatility adjustments, and charts are computed and rendered on your device only.</li>
    </ul>
    <p>This architecture ensures <strong>complete isolation</strong> of your activity, ideal for private market analysis.</p>

    <h2>4. Third-Party Interactions</h2>
    <p>The only external calls are to CoinGecko's public endpoints for market data (CORS-enabled, no authentication required). These do not involve personal information. Chart.js is loaded via CDN but performs no tracking. No advertising, analytics, or other services are integrated.</p>

    <h2>5. Cookies and Tracking</h2>
    <p>We <strong>do not use cookies</strong>, local storage for persistence, or any tracking technologies. Your experience is entirely anonymous.</p>

    <h2>6. Data Security</h2>
    <p>As no data is collected, security risks are minimal. We recommend using updated browsers and secure connections for API calls. Responsibility for device security lies with the user.</p>

    <h2>7. Children's Privacy</h2>
    <p>The tool is not directed at children under 13. We do not knowingly process any related data.</p>

    <h2>8. International Compliance</h2>
    <p>Our no-collection model aligns with global standards including <strong>GDPR</strong> and <strong>CCPA</strong> by design.</p>

    <h2>9. Policy Updates</h2>
    <p>Changes will be posted here with updated effective dates. Continued use constitutes acceptance.</p>

    <h2>10. Contact</h2>
    <p>For questions, refer to the About page or tool repository.</p>

    <p class="italic-note">We are committed to <strong>zero data collection</strong>, letting you analyze crypto targets privately.</p>
  </article>
</div>

<style>
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