/* ============================================================
   THE BURGER HOUSE & CRUNCHY HUB — Main JavaScript
   ============================================================ */

/* ---- Loader ---- */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  setTimeout(() => loader.classList.add('hidden'), 2000);
});

/* ---- Navbar Scroll Effect ---- */
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

/* ---- Hamburger Menu ---- */
const hamburger = document.querySelector('.nav-hamburger');
const mobileMenu = document.querySelector('.nav-mobile');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    const isOpen = mobileMenu.classList.contains('open');
    spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px,5px)' : '';
    spans[1].style.opacity  = isOpen ? '0' : '1';
    spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px,-5px)' : '';
  });
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}

/* ---- Active Nav Link ---- */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

/* ---- Fade-in on Scroll ---- */
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
fadeEls.forEach(el => observer.observe(el));

/* ---- Popular Slider ---- */
const sliderTrack = document.querySelector('.slider-track');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let totalSlides = 0;
let slideWidth = 0;
let visibleCount = 3;

function initSlider() {
  if (!sliderTrack) return;
  const slides = sliderTrack.querySelectorAll('.slide-card');
  totalSlides = slides.length;
  visibleCount = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  slideWidth = (sliderTrack.parentElement.offsetWidth / visibleCount);
  slides.forEach(s => { s.style.flex = `0 0 ${slideWidth - 24}px`; });
  goToSlide(0);
}

function goToSlide(n) {
  const maxSlide = totalSlides - visibleCount;
  currentSlide = Math.max(0, Math.min(n, maxSlide));
  sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

document.querySelector('.slider-prev')?.addEventListener('click', () => goToSlide(currentSlide - 1));
document.querySelector('.slider-next')?.addEventListener('click', () => goToSlide(currentSlide + 1));
dots.forEach((d, i) => d.addEventListener('click', () => goToSlide(i)));

window.addEventListener('resize', initSlider);
if (sliderTrack) initSlider();

/* ---- Add to Cart Toast ---- */
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">🛒</span><span class="toast-text"></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector('.toast-text').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

document.querySelectorAll('.food-card-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const name = btn.closest('.food-card, .slide-card')?.querySelector('.food-card-name, .slide-name')?.textContent || 'Item';
    showToast(`${name} added to your order!`);
  });
});

/* ---- Contact Form ---- */
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      showToast('Message sent! We\'ll get back to you soon 🎉');
      contactForm.reset();
      btn.textContent = orig;
      btn.disabled = false;
    }, 1400);
  });
}

/* ---- Menu Filter Tabs (for menu pages) ---- */
const filterBtns = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.food-card[data-category]');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    menuCards.forEach(card => {
      if (cat === 'all' || card.dataset.category === cat) {
        card.style.display = '';
        card.style.animation = 'fadeUp 0.4s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
