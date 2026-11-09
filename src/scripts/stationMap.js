// Interaction for the achievements metro map:
//  - clicking a station slides a details panel in from the right
//  - clicking a legend entry highlights that line and dims the rest
export function initStationMap(root = document) {
  const wrap = root.querySelector('[data-transit]');
  if (!wrap || wrap.dataset.bound === 'true') return;
  const panel = wrap.querySelector('[data-panel]');
  const scrim = wrap.querySelector('[data-scrim]');
  const dataEl = wrap.querySelector('[data-station-data]');
  if (!panel || !scrim || !dataEl) return;
  const data = JSON.parse(dataEl.textContent);

  // A transformed ancestor would turn position:fixed into position:absolute-ish,
  // so the panel and scrim live directly on <body>.
  root.body.appendChild(scrim);
  root.body.appendChild(panel);

  const f = (n) => panel.querySelector('[data-f="' + n + '"]');
  const stations = wrap.querySelectorAll('[data-station]');
  const legendButtons = wrap.querySelectorAll('[data-legend-line]');
  const allButton = wrap.querySelector('[data-legend-all]');
  let lastTrigger = null;

  function render(id) {
    const d = data[id];
    const chip = f('chip');
    chip.textContent = d.lineName;
    chip.style.background = d.colour;
    chip.style.color = d.chipText;
    f('name').textContent = d.name;
    f('meta').textContent = d.institution ? d.institution + ' \u00b7 ' + d.year : d.year;
    f('overview').textContent = d.overview;
    const list = f('highlights');
    list.textContent = '';
    d.highlights.forEach((h) => {
      const li = root.createElement('li');
      const tick = root.createElement('span');
      tick.className = 'sp-check';
      tick.setAttribute('aria-hidden', 'true');
      const text = root.createElement('span');
      text.textContent = h;
      li.appendChild(tick);
      li.appendChild(text);
      list.appendChild(li);
    });
    const cta = f('cta');
    if (d.cta) {
      cta.textContent = d.cta.label;
      cta.setAttribute('href', d.cta.href);
      if (d.cta.external) {
        cta.setAttribute('target', '_blank');
        cta.setAttribute('rel', 'noopener noreferrer');
      } else {
        cta.removeAttribute('target');
        cta.removeAttribute('rel');
      }
      cta.hidden = false;
    } else {
      cta.hidden = true;
      cta.removeAttribute('href');
    }
    panel.style.setProperty('--line', d.colour);
  }

  function open(st) {
    render(st.dataset.station);
    panel.classList.add('is-open');
    scrim.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    lastTrigger = st;
    panel.scrollTop = 0;
    panel.focus({ preventScroll: true });
  }

  function close() {
    if (!panel.classList.contains('is-open')) return;
    panel.classList.remove('is-open');
    scrim.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    if (lastTrigger) lastTrigger.focus({ preventScroll: true });
    lastTrigger = null;
  }

  stations.forEach((st) => {
    st.addEventListener('click', (e) => {
      e.preventDefault();
      open(st);
    });
    st.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(st);
      }
    });
  });

  panel.querySelector('[data-close]').addEventListener('click', close);
  scrim.addEventListener('click', close);
  panel.__close = close;

  // Legend: highlight one line, dim the rest; click again (or "Show all") to restore.
  function setActive(id) {
    if (id) wrap.setAttribute('data-active', id);
    else wrap.removeAttribute('data-active');
    wrap.querySelectorAll('.dimmable').forEach((el) => {
      el.classList.toggle('is-active', !!id && el.getAttribute('data-line-id') === id);
    });
    legendButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.legendLine === id)));
    if (allButton) allButton.setAttribute('aria-pressed', String(!id));
  }
  legendButtons.forEach((b) =>
    b.addEventListener('click', () => {
      const id = b.dataset.legendLine;
      setActive(wrap.getAttribute('data-active') === id ? null : id);
    })
  );
  if (allButton) allButton.addEventListener('click', () => setActive(null));

  wrap.dataset.bound = 'true';

  // One Escape handler for the whole session (pages are swapped, not reloaded).
  const w = root.defaultView || (typeof window !== 'undefined' ? window : null);
  if (w && !w.__stationEscBound) {
    w.__stationEscBound = true;
    root.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      const p = root.querySelector('[data-panel].is-open');
      if (p && p.__close) p.__close();
    });
  }
}
