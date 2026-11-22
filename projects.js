/* =========================================================
   projects.js — renders the projects page from data.js
   ========================================================= */

const GROUPS = [
  { id: 'software', label: 'Software, AI & Security' },
  { id: 'infra',    label: 'Systems & Networking' },
  { id: 'creative', label: 'Creative' }
];

/* entryHTML() and the card/modal helpers live in modal.js (shared). */

function initPage() {
  /* projects, grouped */
  const root = document.getElementById('projects-root');
  if (root) {
    root.innerHTML = GROUPS.map(g => {
      const items = PROJECTS.filter(p => p.group === g.id);
      if (!items.length) return '';
      return (
        '<div style="margin-bottom:clamp(2.5rem,5vw,3.5rem)">' +
          '<div class="section-head reveal" style="margin-bottom:1.25rem">' +
            '<div class="eyebrow">' + esc(g.label) + '</div>' +
          '</div>' +
          '<div class="card-grid">' + items.map(projectCardHTML).join('') + '</div>' +
        '</div>'
      );
    }).join('');
  }

  const fill = (id, list) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = list.map(entryHTML).join('');
  };
  fill('experience-root', EXPERIENCE);
  fill('awards-root', AWARDS);
  fill('leadership-root', LEADERSHIP);

  /* skills + certs */
  const skills = document.getElementById('skills-root');
  if (skills) {
    skills.innerHTML =
      SKILLS.map(g =>
        '<div class="pill-group">' +
          '<div class="pill-group__label">' + esc(g.label) + '</div>' +
          '<div class="pills">' + g.items.map(i => '<span>' + esc(i) + '</span>').join('') + '</div>' +
        '</div>').join('') +
      '<div class="pill-group">' +
        '<div class="pill-group__label">Certifications</div>' +
        '<div class="pills">' + CERTS.map(c => '<span>' + esc(c) + '</span>').join('') + '</div>' +
      '</div>' +
      '<div class="pill-group">' +
        '<div class="pill-group__label">Languages &amp; interests</div>' +
        '<div class="pills">' +
          ['Tamil (proficient)', 'Spanish (intermediate)', 'Graphic design', 'Video editing',
           'Taekwondo — 2nd Dan black belt'].map(c => '<span>' + esc(c) + '</span>').join('') +
        '</div>' +
      '</div>';
  }
}
