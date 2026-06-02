/* ============================================================
   main.js — Nikolai Martino Portfolio
   ============================================================ */

/* ------------------------------------------------------------
   Navbar — mobile toggle (dropdown menu)
   ------------------------------------------------------------ */
const navToggle = document.querySelector('.navbar__toggle');
const navMobile = document.querySelector('.navbar__mobile');

if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.textContent = isOpen ? '✕' : '☰';
  });

  navMobile.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.textContent = '☰';
    });
  });
}

/* ------------------------------------------------------------
   Navbar — scroll reveal effect
   ------------------------------------------------------------ */
const navbar = document.querySelector('.navbar');

if (navbar && !navbar.classList.contains('navbar--solid')) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 80);
  }, { passive: true });
}

/* ------------------------------------------------------------
   Carousel — crossfade between slides
   ------------------------------------------------------------ */
function initCarousel(carouselEl) {
  const slides   = carouselEl.querySelectorAll('.carousel__slide');
  const dotsWrap = carouselEl.querySelector('.carousel__dots');
  const btnPrev  = carouselEl.querySelector('.carousel__btn-prev');
  const btnNext  = carouselEl.querySelector('.carousel__btn-next');

  if (!slides.length) return;

  let current = 0;
  let timer;

  /* Activate first slide */
  slides[0].classList.add('is-active');

  /* Create dots */
  const dots = [];
  if (dotsWrap) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel__dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', 'Vai alla slide ' + (i + 1));
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
      dots.push(dot);
    });
  }

  function updateDots() {
    dots.forEach((d, i) => d.classList.toggle('is-active', i === current));
  }

  function goTo(index) {
    slides[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    updateDots();
    resetTimer();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(next, 6500);
  }

  if (btnPrev) btnPrev.addEventListener('click', prev);
  if (btnNext) btnNext.addEventListener('click', next);

  /* Swipe support on mobile */
  let startX = 0;
  carouselEl.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  }, { passive: true });
  carouselEl.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  });

  resetTimer();
}

document.querySelectorAll('.carousel').forEach(initCarousel);

/* ------------------------------------------------------------
   Lightbox — all images with class .lightbox-trigger
   ------------------------------------------------------------ */
(function () {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lbImg   = lightbox.querySelector('.lightbox__img');
  const lbClose = lightbox.querySelector('.lightbox__close');
  const lbPrev  = lightbox.querySelector('.lightbox__prev');
  const lbNext  = lightbox.querySelector('.lightbox__next');

  let images     = [];
  let currentIdx = 0;

  function open(idx) {
    currentIdx = (idx + images.length) % images.length;
    lbImg.src  = images[currentIdx].getAttribute('data-full') || images[currentIdx].src;
    lbImg.alt  = images[currentIdx].alt;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  function collectImages() {
    images = Array.from(document.querySelectorAll('.lightbox-trigger'));
    images.forEach((img, i) => img.addEventListener('click', () => open(i)));
  }

  collectImages();

  if (lbClose) lbClose.addEventListener('click', close);
  if (lbNext)  lbNext.addEventListener('click', () => open(currentIdx + 1));
  if (lbPrev)  lbPrev.addEventListener('click', () => open(currentIdx - 1));

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowRight') open(currentIdx + 1);
    if (e.key === 'ArrowLeft')  open(currentIdx - 1);
  });
}());

/* ------------------------------------------------------------
   Cookie Banner
   ------------------------------------------------------------ */
(function () {
  const banner    = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');

  if (!banner) return;

  if (!localStorage.getItem('cookieAccepted')) {
    banner.style.display = 'block';
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookieAccepted', 'true');
      banner.style.display = 'none';
    });
  }
}());

/* ------------------------------------------------------------
   Scroll Reveal — fade-up on intersection
   ------------------------------------------------------------ */
(function () {
  const selectors = [
    '.section h2',
    '.section h3',
    '.bio-excerpt__img-wrap',
    '.bio-excerpt > div',
    '.card',
    '.bio-section',
    '.project-meta',
    '.project-body',
    '.contatti-info__item',
    '.map-wrap',
    '.cta-section__title',
    '.cta-section__text',
    '.portfolio-project__figure',
    '.form',
    '.marquee',
    '.privacy-page h2',
    '.preview__heading',
    '.preview__sub',
    '.preview__cta',
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      /* Stagger sibling elements slightly */
      if (i > 0 && i < 6) {
        el.style.transitionDelay = (i * 0.12) + 's';
      }
      observer.observe(el);
    });
  });
}());

/* ------------------------------------------------------------
   Active nav link highlight based on scroll position
   ------------------------------------------------------------ */
(function () {
  const sections = document.querySelectorAll('section[id]');
  if (!sections.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.querySelectorAll('.navbar__link').forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(s => observer.observe(s));
}());

/* ------------------------------------------------------------
   Photoshop Gallery Lightbox (portfolio-photoshop.html)
   ------------------------------------------------------------ */
(function () {
  const lightbox   = document.getElementById('ps-lightbox');
  if (!lightbox) return;

  const lbImg      = document.getElementById('ps-lightbox-img');
  const lbCap      = document.getElementById('ps-lightbox-cap');
  const lbClose    = document.getElementById('ps-lightbox-close');
  const lbBackdrop = document.getElementById('ps-lightbox-backdrop');

  function openLightbox(imgSrc, caption, altText) {
    lbImg.src = imgSrc;
    lbImg.alt = altText || '';
    lbCap.textContent = caption || '';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  document.querySelectorAll('.ps-gallery__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const imgSrc  = btn.getAttribute('data-img');
      const caption = btn.getAttribute('data-caption');
      const altText = btn.querySelector('.ps-gallery__img')?.alt || '';
      openLightbox(imgSrc, caption, altText);
    });
  });

  if (lbClose)    lbClose.addEventListener('click', closeLightbox);
  if (lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', e => {
    if (!lightbox.hidden && e.key === 'Escape') closeLightbox();
  });
}());
/* ------------------------------------------------------------
   Form — prevent default submit on static site
   ------------------------------------------------------------ */
(function () {
  document.querySelectorAll('.form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.reset();
      const btn = form.querySelector('[type="submit"]');
      if (!btn) return;
      const original = btn.textContent;
      btn.textContent = 'Messaggio inviato ✓';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
      }, 3000);
    });
  });
}());

/* ------------------------------------------------------------
   Portfolio filter tabs (portfolio.html)
   ------------------------------------------------------------ */
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.getAttribute('data-filter');
      document.querySelectorAll('[data-category]').forEach(item => {
        const show = filter === 'all' || item.getAttribute('data-category') === filter;
        item.style.opacity     = show ? '1' : '0.2';
        item.style.pointerEvents = show ? '' : 'none';
        item.style.transition  = 'opacity 0.8s ease';
      });
    });
  });
}());
