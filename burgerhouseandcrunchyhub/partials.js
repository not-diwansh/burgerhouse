/* ============================================================
   SHARED PARTIALS — navbar, footer injected dynamically
   ============================================================ */

function injectNav() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.innerHTML = `
    <a href="index.html" class="nav-logo">
      <span class="nav-logo-main">BURGER HOUSE</span>
      <span class="nav-logo-sub">&amp; Crunchy Hub</span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="specials.html">Menu</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="contact.html" class="nav-cta">Order Now</a></li>
    </ul>
    <button class="nav-hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>`;
  document.body.prepend(nav);

  const mob = document.createElement('div');
  mob.className = 'nav-mobile';
  mob.innerHTML = `
    <a href="index.html">Home</a>
    <a href="specials.html">Menu</a>
    <a href="veg.html">Vegetarian</a>
    <a href="nonveg.html">Non-Veg</a>
    <a href="beverages.html">Beverages</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
    <a href="contact.html" class="nav-cta" style="color:#000!important;background:var(--neon-orange);border-radius:8px;padding:.6rem 1rem;text-align:center;display:block">Order Now</a>`;
  nav.after(mob);
}

function injectFooter() {
  const foot = document.createElement('footer');
  foot.innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">BURGER HOUSE</div>
        <p class="footer-desc">Where every bite tells a story. Crafted with fire, finished with flavor — The Burger House &amp; Crunchy Hub is more than a meal, it's a memory.</p>
        <div class="footer-social">
          <a class="social-link" href="#" aria-label="Instagram">📸</a>
          <a class="social-link" href="#" aria-label="Facebook">📘</a>
          <a class="social-link" href="#" aria-label="Twitter">🐦</a>
          <a class="social-link" href="#" aria-label="YouTube">▶️</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Menu</div>
        <nav class="footer-links">
          <a href="veg.html">Vegetarian</a>
          <a href="nonveg.html">Non-Vegetarian</a>
          <a href="beverages.html">Beverages</a>
          <a href="specials.html">Chef's Specials</a>
        </nav>
      </div>
      <div>
        <div class="footer-col-title">Company</div>
        <nav class="footer-links">
          <a href="about.html">Our Story</a>
          <a href="about.html#team">Team</a>
          <a href="contact.html">Contact</a>
          <a href="#">Careers</a>
        </nav>
      </div>
      <div>
        <div class="footer-col-title">Hours</div>
        <nav class="footer-links">
          <a href="#">Mon–Fri: 11 AM – 11 PM</a>
          <a href="#">Sat–Sun: 10 AM – 12 AM</a>
          <a href="#">Dine-In &amp; Takeaway</a>
          <a href="#">Delivery Available</a>
        </nav>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 The Burger House &amp; Crunchy Hub. All rights reserved.</span>
      <span>Made with 🔥 for food lovers</span>
    </div>`;
  document.body.appendChild(foot);
}

document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectFooter();
});
