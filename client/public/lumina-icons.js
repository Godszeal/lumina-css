/* Lumina Icons v0.7.0 — standalone SVG icon runtime. */
(function(global){
  var paths={activity:'<path d="M3 12h4l2-6 4 12 2-6h6"/>',gauge:'<path d="M4 16a8 8 0 1 1 16 0M12 12l4-3M7 18h10"/>',users:'<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M16 6.5a3 3 0 0 1 0 5.8M17 14a5 5 0 0 1 4 6"/>',check:'<path d="m5 12 4 4L19 6"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>',search:'<circle cx="10.8" cy="10.8" r="6.5"/><path d="m16 16 5 5"/>'};
  function render(name,label){var svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('class','lu-icon');svg.setAttribute('fill','none');svg.setAttribute('stroke','currentColor');svg.setAttribute('stroke-width','1.65');svg.setAttribute('stroke-linecap','round');svg.setAttribute('stroke-linejoin','round');if(label){svg.setAttribute('role','img');svg.setAttribute('aria-label',label);}else svg.setAttribute('aria-hidden','true');svg.innerHTML=paths[name]||paths.activity;return svg;}
  function boot(root){(root||document).querySelectorAll('[data-lu-icon]').forEach(function(node){node.replaceChildren(render(node.dataset.luIcon,node.getAttribute('aria-label')));});}
  global.LuminaIcons={boot:boot,render:render,names:Object.keys(paths)};if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){boot();});else boot();
})(window);
