/* Lumina CSS CDN — one script for tiny progressive-enhancement helpers. */
(function (global) {
  'use strict';
  var icons = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    slash: '<path d="M7 4 17 20"/>',
    grid: '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>'
  };
  function icon(name, label) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('class', 'lu-icon'); svg.setAttribute('fill', 'none'); svg.setAttribute('stroke', 'currentColor'); svg.setAttribute('stroke-width', '1.8'); svg.setAttribute('stroke-linecap', 'round'); svg.setAttribute('stroke-linejoin', 'round');
    svg.innerHTML = icons[name] || icons.slash;
    if (label) svg.setAttribute('aria-label', label); else svg.setAttribute('aria-hidden', 'true');
    return svg;
  }
  function boot(root) {
    root = root || document;
    root.querySelectorAll('[data-lu-icon]').forEach(function (node) { node.replaceChildren(icon(node.dataset.luIcon, node.getAttribute('aria-label'))); });
    root.querySelectorAll('[data-lu-copy]').forEach(function (button) {
      button.addEventListener('click', function () { var text = button.dataset.luCopy; navigator.clipboard && navigator.clipboard.writeText(text); var before = button.innerHTML; button.innerHTML = 'Copied'; setTimeout(function () { button.innerHTML = before; }, 1400); });
    });
    root.querySelectorAll('[data-lu-theme-toggle]').forEach(function (button) { button.addEventListener('click', function () { var next = document.documentElement.dataset.luTheme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.luTheme = next; localStorage.setItem('lu-theme', next); }); });
  }
  var saved = localStorage.getItem('lu-theme'); if (saved) document.documentElement.dataset.luTheme = saved;
  global.Lumina = { boot: boot, icon: icon, version: '0.1.0' };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { boot(); }); else boot();
})(window);
