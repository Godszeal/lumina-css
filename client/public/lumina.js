/* Lumina CSS CDN — theme, copy, and the native SVG icon language. */
(function (global) {
  'use strict';
  var paths = {
    spark: '<path d="M12 2.5 14.2 9l6.3 3-6.3 3-2.2 6.5L9.8 15 3.5 12l6.3-3Z"/><path d="m18.5 3 .6 2.1L21 6l-1.9.9-.6 2.1-.7-2.1Z"/>',
    grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>',
    layers: '<path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z"/><path d="m5 11.5-1.5 1L12 17l8.5-4.5-1.5-1"/><path d="m5 16-1.5 1L12 21.5l8.5-4.5-1.5-1"/>',
    code: '<path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M13.5 4.5l-3 15"/>',
    palette: '<path d="M12 3.5a8.5 8.5 0 1 0 0 17h1.3a1.7 1.7 0 0 0 0-3.4h-.8a1.6 1.6 0 0 1 0-3.2H15a5.5 5.5 0 0 0 5.5-5.5C20.5 5.6 16.7 3.5 12 3.5Z"/><circle cx="7.5" cy="10" r=".8"/><circle cx="9.5" cy="6.5" r=".8"/><circle cx="14" cy="6" r=".8"/><circle cx="17" cy="9" r=".8"/>',
    motion: '<path d="M4 12h16M12 4l8 8-8 8M4 7v10"/>',
    accessibility: '<circle cx="12" cy="4.5" r="2"/><path d="M5 8.5c4.5 1.5 9.5 1.5 14 0M9 10l3 3 3-3M10 13l-2 7M14 13l2 7"/>',
    arrow: '<path d="M4 12h15M13 6l6 6-6 6"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    sun: '<circle cx="12" cy="12" r="3.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/>'
  };
  function icon(name, label) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('class', 'lu-icon'); svg.setAttribute('fill', 'none'); svg.setAttribute('stroke', 'currentColor'); svg.setAttribute('stroke-width', '1.65'); svg.setAttribute('stroke-linecap', 'round'); svg.setAttribute('stroke-linejoin', 'round'); svg.innerHTML = paths[name] || paths.spark;
    if (label) { svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', label); } else svg.setAttribute('aria-hidden', 'true');
    return svg;
  }
  function boot(root) {
    root = root || document;
    root.querySelectorAll('[data-lu-icon]').forEach(function (node) { node.replaceChildren(icon(node.dataset.luIcon, node.getAttribute('aria-label'))); });
    root.querySelectorAll('[data-lu-copy]').forEach(function (button) { button.addEventListener('click', function () { var text = button.dataset.luCopy; navigator.clipboard && navigator.clipboard.writeText(text); var before = button.innerHTML; button.innerHTML = 'Copied'; setTimeout(function () { button.innerHTML = before; }, 1400); }); });
    root.querySelectorAll('[data-lu-theme-toggle]').forEach(function (button) { button.addEventListener('click', function () { var next = document.documentElement.dataset.luTheme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.luTheme = next; localStorage.setItem('lu-theme', next); }); });
  }
  var saved = localStorage.getItem('lu-theme'); if (saved) document.documentElement.dataset.luTheme = saved;
  global.Lumina = { boot: boot, icon: icon, icons: Object.keys(paths), version: '0.2.0' };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { boot(); }); else boot();
})(window);
