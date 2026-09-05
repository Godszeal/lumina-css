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
    moon: '<path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/>',
    home: '<path d="m3 11 9-8 9 8M5 10v10h14V10M9 20v-6h6v6"/>',
    user: '<circle cx="12" cy="8" r="3"/><path d="M5 21a7 7 0 0 1 14 0"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1-1.5 1.5-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1.1 1.7v.2h-2.2v-.2a1.8 1.8 0 0 0-1.1-1.7 1.8 1.8 0 0 0-2 .4l-.1.1-1.5-1.5.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.7-1.1h-.2v-2.2h.2a1.8 1.8 0 0 0 1.7-1.1 1.8 1.8 0 0 0-.4-2l-.1-.1 1.5-1.5.1.1a1.8 1.8 0 0 0 2 .4 1.8 1.8 0 0 0 1.1-1.7v-.2h2.2v.2a1.8 1.8 0 0 0 1.1 1.7 1.8 1.8 0 0 0 2-.4l.1-.1 1.5 1.5-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.7 1.1h.2v2.2h-.2a1.8 1.8 0 0 0-1.7 1.1Z"/>',
    bell: '<path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    heart: '<path d="M20.8 8.8c0 5.4-8.8 10.5-8.8 10.5S3.2 14.2 3.2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z"/>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z"/>',
    lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    calendar: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16M8 14h.01M12 14h.01M16 14h.01"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',
    upload: '<path d="M12 15V3M7 8l5-5 5 5M4 21h16"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    github: '<path d="M9 19c-4 1.5-4-2-5.5-2.5M14.5 21v-3.2a2.8 2.8 0 0 0-.8-2.2c2.6-.3 5.3-1.3 5.3-5.8a4.6 4.6 0 0 0-1.2-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.3 1.2a11.2 11.2 0 0 0-6 0C6.1 3.3 5 3.6 5 3.6a4.2 4.2 0 0 0-.1 3.2 4.6 4.6 0 0 0-1.2 3.2c0 4.5 2.7 5.5 5.3 5.8a2.8 2.8 0 0 0-.8 2.2V21"/>',
    command: '<path d="M18 9V6a3 3 0 1 0-3 3h3ZM6 15h3a3 3 0 1 0-3-3v3ZM15 15h3a3 3 0 1 1-3 3v-3ZM9 9H6a3 3 0 1 1 3-3v3Z"/>',
    folder: '<path d="M3 6h7l2 2h9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
    database: '<ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7"/>',
    monitor: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
    tablet: '<rect x="6" y="2.5" width="12" height="19" rx="2"/>',
    phone: '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/>',
    dashboard: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    chart: '<path d="M4 19V5M4 19h16M7 15l3-4 3 2 5-7"/>',
    wallet: '<path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H19a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 16.5ZM4 8h14M16 13h5"/>',
    cart: '<path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.4L20 8H6M9 20h.01M17 20h.01"/>',
    filter: '<path d="M4 5h16l-6 7v6l-4 2v-8Z"/>',
    sort: '<path d="M7 5v14M4 8l3-3 3 3M17 19V5M14 16l3 3 3-3"/>',
    edit: '<path d="m4 16-.8 4.8L8 20l11.5-11.5a2.1 2.1 0 0 0-3-3L4 16ZM14 7l3 3"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3"/>',
    eye: '<path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/>',
    eyeOff: '<path d="m3 3 18 18M10.6 6.2A10.8 10.8 0 0 1 12 6c6 0 9.5 6 9.5 6a18 18 0 0 1-3.1 3.9M6.2 6.7C3.8 8.5 2.5 12 2.5 12s3.5 6 9.5 6a9.6 9.6 0 0 0 2.4-.3"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
    message: '<path d="M4 5h16v12H8l-4 4Z"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.3 2.3 0 1 1 3.5 2c-.9.6-1.3 1-1.3 2M12 16h.01"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    warning: '<path d="m12 3 9 17H3Z"/><path d="M12 9v4M12 17h.01"/>',
    success: '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    logout: '<path d="M10 4H5v16h5M14 8l4 4-4 4M18 12H9"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.8-3L3 11M3 5v6h6M4 13a8 8 0 0 0 14.8 3L21 13M21 19v-6h-6"/>',
    activity: '<path d="M3 12h4l2-6 4 12 2-6h6"/>',
    gauge: '<path d="M4 16a8 8 0 1 1 16 0M12 12l4-3M7 18h10"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M16 6.5a3 3 0 0 1 0 5.8M17 14a5 5 0 0 1 4 6"/>'
  };
  function icon(name, label) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('class', 'lu-icon'); svg.setAttribute('fill', 'none'); svg.setAttribute('stroke', 'currentColor'); svg.setAttribute('stroke-width', '1.65'); svg.setAttribute('stroke-linecap', 'round'); svg.setAttribute('stroke-linejoin', 'round'); svg.innerHTML = paths[name] || paths.spark;
    if (label) { svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', label); } else svg.setAttribute('aria-hidden', 'true');
    return svg;
  }
  function boot(root) {
    root = root || document;
    var storedTheme = localStorage.getItem('lu-theme');
    var storedGrid = localStorage.getItem('lu-grid');
    if (storedTheme) document.documentElement.dataset.luTheme = storedTheme;
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.dataset.luTheme = 'dark';
    if (storedGrid === 'off') document.documentElement.dataset.luGrid = 'off';
    root.querySelectorAll('[data-lu-icon]').forEach(function (node) { node.replaceChildren(icon(node.dataset.luIcon, node.getAttribute('aria-label'))); });
    root.querySelectorAll('[data-lu-copy]').forEach(function (button) { button.addEventListener('click', function () { var text = button.dataset.luCopy; navigator.clipboard && navigator.clipboard.writeText(text); var before = button.innerHTML; button.innerHTML = 'Copied'; setTimeout(function () { button.innerHTML = before; }, 1400); }); });
    root.querySelectorAll('[data-lu-theme-toggle]').forEach(function (button) { button.addEventListener('click', function () { var next = document.documentElement.dataset.luTheme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.luTheme = next; localStorage.setItem('lu-theme', next); }); });
    root.querySelectorAll('[data-lu-grid-toggle]').forEach(function (button) { button.addEventListener('click', function () { var next = document.documentElement.dataset.luGrid === 'off' ? 'on' : 'off'; document.documentElement.dataset.luGrid = next === 'off' ? 'off' : 'on'; localStorage.setItem('lu-grid', next === 'off' ? 'off' : 'on'); }); });
    root.querySelectorAll('[data-lu-dropdown-trigger]').forEach(function (button) { button.addEventListener('click', function () { var dropdown = button.closest('[data-lu-dropdown]'); if (!dropdown) return; var open = dropdown.dataset.luOpen === 'true'; root.querySelectorAll('[data-lu-dropdown][data-lu-open="true"]').forEach(function (item) { item.dataset.luOpen = 'false'; }); dropdown.dataset.luOpen = open ? 'false' : 'true'; button.setAttribute('aria-expanded', open ? 'false' : 'true'); }); });
    root.querySelectorAll('[data-lu-modal-open]').forEach(function (button) { button.addEventListener('click', function () { var modal = document.querySelector(button.dataset.luModalOpen); if (!modal) return; modal.dataset.luOpen = 'true'; modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; var close = modal.querySelector('[data-lu-modal-close]'); if (close) close.focus(); }); });
    root.querySelectorAll('[data-lu-modal-close]').forEach(function (button) { button.addEventListener('click', function () { var modal = button.closest('[data-lu-modal]'); if (!modal) return; modal.dataset.luOpen = 'false'; modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }); });
  }
  document.addEventListener('keydown', function (event) { if (event.key === 'Escape') { document.querySelectorAll('[data-lu-dropdown][data-lu-open="true"]').forEach(function (item) { item.dataset.luOpen = 'false'; }); document.querySelectorAll('[data-lu-modal][data-lu-open="true"]').forEach(function (modal) { modal.dataset.luOpen = 'false'; modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }); } });
  document.addEventListener('click', function (event) { var target = event.target; if (!target.closest('[data-lu-dropdown]')) document.querySelectorAll('[data-lu-dropdown][data-lu-open="true"]').forEach(function (item) { item.dataset.luOpen = 'false'; }); });
  global.Lumina = { boot: boot, icon: icon, icons: Object.keys(paths), version: '0.5.0' };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { boot(); }); else boot();
})(window);
