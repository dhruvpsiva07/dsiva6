/* =========================================================
   modal.js — one reusable modal for the whole site.
   Used by the desktop project cards and the Polestar seasons.
   ========================================================= */

const Modal = (() => {
  let overlay, box, lastFocus;

  const ICON_CLOSE =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">' +
    '<line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>';

  function build() {
    if (overlay) return;
    overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML =
      '<div class="modal" id="modal-box">' +
      '<button class="modal__close" aria-label="Close">' + ICON_CLOSE + '</button>' +
      '<div class="modal__content"></div>' +
      '</div>';
    document.body.appendChild(overlay);
    box = overlay.querySelector('.modal');

    // click anywhere outside the modal closes it
    overlay.addEventListener('mousedown', e => { if (e.target === overlay) close(); });
    overlay.querySelector('.modal__close').addEventListener('click', close);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.classList.contains('is-mounted')) close();
    });
  }

  function open(html, opts) {
    build();
    opts = opts || {};
    lastFocus = document.activeElement;
    box.classList.toggle('modal--wide', !!opts.wide);
    overlay.querySelector('.modal__content').innerHTML = html;
    box.scrollTop = 0;
    overlay.classList.add('is-mounted');
    document.body.style.overflow = 'hidden';
    // next frame so the transition actually runs
    requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add('is-open')));
    overlay.querySelector('.modal__close').focus({ preventScroll: true });
    if (typeof opts.onOpen === 'function') opts.onOpen(box);
  }

  function close() {
    if (!overlay || !overlay.classList.contains('is-mounted')) return;
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    const done = () => {
      overlay.classList.remove('is-mounted');
      overlay.querySelector('.modal__content').innerHTML = '';
    };
    setTimeout(done, 280);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  return { open, close };
})();

/* ---------- shared bits of markup ---------- */

const ICONS = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="M3 7l9 6 9-6"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="18" x2="18" y2="6"/><polyline points="9 6 18 6 18 15"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 9 12 16 19 9"/></svg>',
  left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 5 8 12 15 19"/></svg>',
  right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 5 16 12 9 19"/></svg>'
};

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* media block with optional background image */
function mediaStyle(image) {
  return image ? ' style="background-image:url(\'' + esc(image) + '\')"' : '';
}

/* ---------- project card ---------- */

function projectCardHTML(p) {
  return (
    '<button class="card reveal" type="button" data-project="' + esc(p.id) + '" aria-label="Open ' + esc(p.title) + '">' +
      '<div class="card__media"' + mediaStyle(p.image) + '>' +
        (p.image ? '' : '<span class="card__ph">Image</span>') +
      '</div>' +
      '<div class="card__body">' +
        '<div class="card__title">' + esc(p.title) + '</div>' +
        '<div class="card__meta">' + esc(p.meta || '') + '</div>' +
      '</div>' +
    '</button>'
  );
}

/* ---------- project modal ---------- */

function openProjectModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  let html =
    '<div class="modal__media"' + mediaStyle(p.image) + '>' +
      (p.image ? '' : '<span class="card__ph">Image</span>') +
    '</div>' +
    '<div class="modal__body">' +
      '<h2 class="modal__title">' + esc(p.title) + '</h2>' +
      '<div class="modal__meta"><span>' + esc(p.meta || '') + '</span></div>' +
      '<hr class="modal__rule">' +
      (p.body || []).map(t => '<p>' + esc(t) + '</p>').join('');

  if (p.bullets && p.bullets.length) {
    html += '<ul>' + p.bullets.map(b => '<li>' + esc(b) + '</li>').join('') + '</ul>';
  }
  if (p.tech && p.tech.length) {
    html += '<div class="modal__label">Stack</div><div class="tags">' +
      p.tech.map(t => '<span class="tag">' + esc(t) + '</span>').join('') + '</div>';
  }
  if (p.links && p.links.length) {
    html += '<div class="modal__links">' + p.links.map(l =>
      '<a class="btn btn--ghost" href="' + esc(l.url) + '" target="_blank" rel="noopener">' +
      ICONS.github + esc(l.label) + '</a>').join('') + '</div>';
  }
  if (p.todo) {
    html += '<div class="note">Placeholder content — details and links for this project are still being written up.</div>';
  }
  html += '</div>';

  Modal.open(html);
}

/* delegate every card click on the page */
document.addEventListener('click', e => {
  const card = e.target.closest('[data-project]');
  if (card) openProjectModal(card.dataset.project);
});
