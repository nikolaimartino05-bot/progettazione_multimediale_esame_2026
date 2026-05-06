/* ============================================================
   main.js — Portfolio di Nikolai Martino
   ============================================================ */

/* ------------------------------------------------------------
   Navbar — mobile toggle
   ------------------------------------------------------------ */
const navToggle = document.querySelector('.navbar__toggle');
const navMenu   = document.querySelector('.navbar__links');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.textContent = isOpen ? '✕' : '☰';
  });

  /* Close menu when a link is clicked (single-page navigation feel) */
  navMenu.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.textContent = '☰';
    });
  });
}

/* ------------------------------------------------------------
   Navbar — scroll effect
   ------------------------------------------------------------ */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (navbar && !document.body.classList.contains('page-portfolio')) {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }
});
