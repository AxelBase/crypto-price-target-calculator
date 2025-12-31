<script lang="ts">
  import "../app.css";
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';

  const paypalUsername = 'AxelLab427'; 
  const donationAmounts = [1, 3, 5, 10];
  const currentYear = new Date().getFullYear();
  
  let isDropdownOpen = false;
  
  function toggleDropdown() { isDropdownOpen = !isDropdownOpen; }
  function closeDropdown() { isDropdownOpen = false; }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() { document.removeEventListener('click', handleClick, true); }
    };
  }
</script>

<header class="custom-navbar shadow-sm">
  <nav class="container d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center text-decoration-none">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" style="height: 38px;" class="me-2" />
        <span class="fw-bold fs-4" style="color: var(--brand-green); font-family: 'Poppins';">AxelBase</span>
      </a>

      <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button class="bmac-button d-flex align-items-center gap-2 text-white border-0" on:click={toggleDropdown}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" /></svg>
          <span class="d-none d-md-inline small">Buy me a coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown" transition:fly={{ y: 8, duration: 200 }}>
            {#each donationAmounts as amount}
              <a href="https://paypal.me/{paypalUsername}/{amount}" target="_blank" rel="noopener" on:click={closeDropdown}>${amount}</a>
            {/each}
          </div>
        {/if}
      </div>
    </div>

    <ul class="d-none d-lg-flex align-items-center gap-4 m-0 list-unstyled">
      <li><a class="nav-link-custom" href="{base}/">Home</a></li>
      <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
      <li><a class="nav-link-custom" href="{base}/#how-to-use">How to use</a></li>
      <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
      <li><a class="nav-link-custom" href="{base}/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<slot />

<footer class="releative py-3 border-top shadow-sm">
  <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center">
    <p class="m-0 text-muted small">© {currentYear} AxelBase Crypto Price Target Calculator</p>
    <div class="d-flex gap-3">
      <a href="{base}/privacy" class="text-decoration-none text-muted small hover-green">Privacy</a>
      <a href="{base}/terms" class="text-decoration-none text-muted small hover-green">Terms</a>
    </div>
  </div>
</footer>

<style>
  .nav-link-custom {
    text-decoration: none;
    color: #444;
    font-weight: 600;
    font-size: 0.95rem;
    transition: var(--transition-smooth);
  }
  .nav-link-custom:hover { color: var(--brand-green); }
  .bmac-dropdown {
    position: absolute;
    top: 110%;
    left: 0;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    min-width: 100px;
    z-index: 1000;
    overflow: hidden;
    border: 1px solid #eee;
  }
  .bmac-dropdown a {
    display: block;
    padding: 8px 15px;
    text-decoration: none;
    color: #333;
    font-size: 0.9rem;
  }
  .bmac-dropdown a:hover { background: var(--brand-light-green); color: var(--brand-green); }
  .hover-green:hover { color: var(--brand-green) !important; }
</style>