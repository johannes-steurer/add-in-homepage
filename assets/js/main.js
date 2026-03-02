// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const header = document.getElementById('header');

if (toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile nav when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Sticky nav shadow on scroll
const headerEl = document.getElementById('header');
if (headerEl) {
  window.addEventListener('scroll', () => {
    headerEl.style.boxShadow = window.scrollY > 8
      ? '0 2px 16px rgba(0,0,0,0.08)'
      : 'none';
  }, { passive: true });
}
