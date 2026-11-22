/* =========================================================
   main.js — shared behaviour: scroll reveal, socials,
   contact cards, and the home-page highlight reel.
   ========================================================= */

/* ---------- links in one place ---------- */

const LINKS = {
  email:     'dsiva6@gatech.edu',
  github:    'https://github.com/dhruvpsiva07',
  linkedin:  'https://www.linkedin.com/in/dhruvsiva/',
  instagram: 'https://www.instagram.com/polestar.vlogs/'
};

/* ---------- scroll reveal ---------- */

function initReveal(root) {
  const items = (root || document).querySelectorAll('.reveal:not(.is-in)');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      const delay = Math.min(i * 70, 280);
      setTimeout(() => entry.target.classList.add('is-in'), delay);
      obs.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach(el => io.observe(el));
}

/* ---------- socials + contact ---------- */

function renderSocials(el) {
  if (!el) return;
  el.innerHTML = [
    ['github', LINKS.github, 'GitHub'],
    ['linkedin', LINKS.linkedin, 'LinkedIn'],
    ['instagram', LINKS.instagram, 'Instagram'],
    ['mail', 'mailto:' + LINKS.email, 'Email']
  ].map(([icon, url, label]) =>
    '<a class="social" href="' + url + '"' + (icon === 'mail' ? '' : ' target="_blank" rel="noopener"') +
    ' aria-label="' + label + '">' + ICONS[icon] + '</a>'
  ).join('');
}

function renderContact(el) {
  if (!el) return;
  const rows = [
    ['mail', 'Email', LINKS.email, 'mailto:' + LINKS.email],
    ['linkedin', 'LinkedIn', '/in/dhruvsiva', LINKS.linkedin],
    ['github', 'GitHub', '@dhruvpsiva07', LINKS.github],
    ['instagram', 'Polestar vlogs', '@polestar.vlogs', LINKS.instagram]
  ];
  el.innerHTML = rows.map(([icon, k, v, url]) =>
    '<a class="contact-card reveal" href="' + url + '"' +
    (icon === 'mail' ? '' : ' target="_blank" rel="noopener"') + '>' +
      '<span class="contact-card__icon">' + ICONS[icon] + '</span>' +
      '<span><span class="contact-card__k">' + k + '</span>' +
      '<span class="contact-card__v" style="display:block">' + v + '</span></span>' +
      '<span class="contact-card__arrow">' + ICONS.arrow + '</span>' +
    '</a>'
  ).join('');
}

/* ---------- home: desktop rotator ---------- */

function initFeatured() {
  const host = document.getElementById('featured');
  const stack = document.getElementById('stack');
  if (!host && !stack) return;

  const items = PROJECTS.filter(p => p.featured);

  /* --- desktop rotator --- */
  if (host) {
    host.innerHTML =
      '<div class="featured__grid">' +
        '<div class="featured__stage">' +
          items.map((p, i) =>
            '<div class="featured__slide' + (i === 0 ? ' is-active' : '') + '" data-slide="' + i + '">' +
              projectCardHTML(p).replace('card reveal', 'card') +
            '</div>').join('') +
        '</div>' +
        '<div class="featured__text">' +
          items.map((p, i) =>
            '<div class="featured__slide' + (i === 0 ? ' is-active' : '') + '" data-slide="' + i + '">' +
              '<div class="featured__num">' + String(i + 1).padStart(2, '0') + ' / ' +
                String(items.length).padStart(2, '0') + ' &nbsp;·&nbsp; ' + esc(p.meta || '') + '</div>' +
              '<h3 class="featured__title">' + esc(p.title) + '</h3>' +
              '<p class="featured__blurb">' + esc(p.blurb) + '</p>' +
              (p.tech && p.tech.length
                ? '<div class="tags">' + p.tech.map(t => '<span class="tag">' + esc(t) + '</span>').join('') + '</div>'
                : '') +
              '<div class="featured__controls">' +
                '<button class="arrow" data-nav="-1" aria-label="Previous project">' + ICONS.left + '</button>' +
                '<button class="arrow" data-nav="1" aria-label="Next project">' + ICONS.right + '</button>' +
                '<div class="dots">' + items.map((_, j) =>
                  '<button class="dot' + (j === i ? ' is-active' : '') + '" data-go="' + j + '" ' +
                  'aria-label="Show project ' + (j + 1) + '"></button>').join('') + '</div>' +
              '</div>' +
            '</div>').join('') +
        '</div>' +
      '</div>';

    let idx = 0;
    let timer = null;
    const DELAY = 7000;
    const slides = host.querySelectorAll('.featured__slide');

    const show = n => {
      idx = (n + items.length) % items.length;
      slides.forEach(s => s.classList.toggle('is-active', +s.dataset.slide === idx));
      host.querySelectorAll('.dot').forEach(d =>
        d.classList.toggle('is-active', +d.dataset.go === idx));
    };

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const start = () => { if (!reduced && !timer) timer = setInterval(() => show(idx + 1), DELAY); };
    const stop  = () => { clearInterval(timer); timer = null; };

    host.addEventListener('click', e => {
      const nav = e.target.closest('[data-nav]');
      const go  = e.target.closest('[data-go]');
      if (!nav && !go) return;
      stop();
      show(nav ? idx + (+nav.dataset.nav) : +go.dataset.go);
      start();
    });
    host.addEventListener('mouseenter', stop);
    host.addEventListener('mouseleave', start);
    host.addEventListener('focusin', stop);
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
    start();
  }

  /* --- mobile stack (no modals, info inline) --- */
  if (stack) {
    stack.innerHTML = items.map(p =>
      '<article class="stack__item reveal">' +
        '<div class="stack__media"' + mediaStyle(p.image) + '>' +
          (p.image ? '' : '<span class="card__ph">Image</span>') + '</div>' +
        '<div class="stack__body">' +
          '<h3 class="stack__title">' + esc(p.title) + '</h3>' +
          '<div class="stack__meta">' + esc(p.meta || '') + '</div>' +
          '<p class="stack__desc">' + esc(p.blurb) + '</p>' +
          ((p.links && p.links.length)
            ? '<a class="stack__link" href="' + esc(p.links[0].url) + '" target="_blank" rel="noopener">' +
              esc(p.links[0].label) + ICONS.arrow + '</a>'
            : '') +
        '</div>' +
      '</article>').join('');
  }
}


/* ---------- phone: full project list + experience inline ---------- */

function initMobileSections() {
  const list = document.getElementById('plist');
  if (list) {
    list.innerHTML = PROJECTS.map((p, i) =>
      '<button class="prow reveal" type="button" data-sheet="' + esc(p.id) + '" ' +
        'aria-label="Open ' + esc(p.title) + '">' +
        '<span class="prow__n">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="prow__main">' +
          '<span class="prow__t">' + esc(p.title) + '</span>' +
          '<span class="prow__m">' + esc(p.meta || '') + '</span>' +
        '</span>' +
        '<span class="prow__chev">' + ICONS.right + '</span>' +
      '</button>').join('');
  }
  const fill = (id, rows) => {
    const el = document.getElementById(id);
    if (el && typeof entryHTML === 'function') el.innerHTML = rows.map(entryHTML).join('');
  };
  fill('m-experience', typeof EXPERIENCE !== 'undefined' ? EXPERIENCE : []);
  fill('m-awards', typeof AWARDS !== 'undefined' ? AWARDS : []);
  fill('m-leadership', typeof LEADERSHIP !== 'undefined' ? LEADERSHIP : []);
}

/* ---------- phone: nav links scroll instead of navigate ---------- */

function initMobileNav() {
  const link = document.querySelector('[data-nav="projects"]');
  if (!link) return;
  const mq = window.matchMedia('(max-width: 899px)');

  const apply = () => {
    link.setAttribute('href', mq.matches ? '#all-projects' : 'projects.html');
  };
  apply();
  mq.addEventListener ? mq.addEventListener('change', apply) : mq.addListener(apply);

  /* highlight whichever section is in view */
  const targets = ['work', 'all-projects', 'contact']
    .map(id => document.getElementById(id)).filter(Boolean);
  if (!targets.length || !('IntersectionObserver' in window)) return;

  const linkFor = id => document.querySelector(
    id === 'contact' ? '[data-nav="contact"]' : '[data-nav="projects"]');

  const spy = new IntersectionObserver(entries => {
    if (!mq.matches) return;
    entries.forEach(en => {
      const a = linkFor(en.target.id);
      if (!a) return;
      if (en.isIntersecting) {
        document.querySelectorAll('.nav__links a').forEach(x => x.classList.remove('active'));
        a.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  targets.forEach(t => spy.observe(t));
}

/* ---------- boot ---------- */

document.addEventListener('DOMContentLoaded', () => {
  renderSocials(document.getElementById('hero-socials'));
  renderContact(document.getElementById('contact-grid'));
  initFeatured();
  initMobileSections();
  initMobileNav();
  if (typeof initPage === 'function') initPage();   // page-specific hook
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  initReveal();
});
