/* =========================================================
   polestar.js — season cards + the Season 1 timeline modal
   ========================================================= */

function seasonCardHTML(s) {
  const count = s.arcs.reduce((n, a) => n + a.vlogs.length, 0);
  return (
    '<button class="card reveal' + (s.soon ? ' card--soon' : '') + '" type="button" ' +
      (s.soon ? 'disabled aria-disabled="true"' : 'data-season="' + esc(s.id) + '"') +
      ' aria-label="Open ' + esc(s.title) + '">' +
      '<div class="card__media">' +
        '<span class="card__ph">' + (s.soon ? 'Coming soon' : 'Cover image') + '</span>' +
      '</div>' +
      '<div class="card__body">' +
        '<div class="card__title">' + esc(s.title) + '</div>' +
        '<div class="card__meta">' + esc(s.meta) + (count ? ' · ' + count + ' vlogs' : '') + '</div>' +
      '</div>' +
    '</button>'
  );
}

function timelineHTML(arcs) {
  let i = 0;
  return '<div class="tl">' + arcs.map(arc =>
    '<section class="tl__arc">' +
      '<h3 class="tl__arc-name">' + esc(arc.name) +
        '<span class="tl__count">' + arc.vlogs.length + '</span></h3>' +
      arc.vlogs.map(v => {
        const id = 'v' + (i++);
        return (
          '<div class="vlog" data-vlog="' + id + '">' +
            '<button class="vlog__head" type="button">' +
              '<span class="vlog__t">' + esc(v.title) + '</span>' +
              '<span class="vlog__d">' + esc(v.date) + '</span>' +
              '<span class="vlog__chev">' + ICONS.chevron + '</span>' +
            '</button>' +
            '<div class="vlog__panel">' +
              '<div class="vlog__k">Songs used</div>' +
              '<div class="vlog__v">' + esc(v.songs || '—') + '</div>' +
              '<div class="vlog__k">Description</div>' +
              '<div class="vlog__v">' + esc(v.desc || '—') + '</div>' +
              (v.ig
                ? '<a class="stack__link" href="' + esc(v.ig) + '" target="_blank" rel="noopener">Watch on Instagram' + ICONS.arrow + '</a>'
                : '') +
            '</div>' +
          '</div>'
        );
      }).join('') +
    '</section>').join('') + '</div>';
}

function openSeasonModal(id) {
  const s = SEASONS.find(x => x.id === id);
  if (!s || s.soon) return;
  const count = s.arcs.reduce((n, a) => n + a.vlogs.length, 0);

  const html =
    '<div class="modal__body">' +
      '<h2 class="modal__title">' + esc(s.title) + '</h2>' +
      '<div class="modal__meta">' +
        '<span>' + esc(s.meta) + '</span>' +
        '<span>' + count + ' vlogs</span>' +
        '<span>' + s.arcs.length + ' arcs</span>' +
      '</div>' +
      '<hr class="modal__rule">' +
      '<p>' + esc(s.blurb) + '</p>' +
      '<div class="modal__label">Timeline</div>' +
      timelineHTML(s.arcs) +
    '</div>';

  Modal.open(html, {
    wide: true,
    onOpen(box) {
      box.addEventListener('click', e => {
        const head = e.target.closest('.vlog__head');
        if (head) head.parentElement.classList.toggle('is-open');
      });
    }
  });
}

function initPage() {
  const grid = document.getElementById('season-grid');
  if (grid) grid.innerHTML = SEASONS.map(seasonCardHTML).join('');

  const vlogs = PS_SEASON_1.reduce((n, a) => n + a.vlogs.length, 0);
  const sv = document.getElementById('stat-vlogs');
  const sa = document.getElementById('stat-arcs');
  if (sv) sv.textContent = vlogs;
  if (sa) sa.textContent = PS_SEASON_1.length;

  document.addEventListener('click', e => {
    const card = e.target.closest('[data-season]');
    if (card) openSeasonModal(card.dataset.season);
  });
}
