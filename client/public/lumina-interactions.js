/* Lumina Interactions v0.7.0 — no-build Admin Kit behaviors. */
(function(global){
  function closeAll(selector){document.querySelectorAll(selector).forEach(function(node){node.dataset.luOpen='false';node.setAttribute('aria-hidden','true');});}
  function boot(root){
    root=root||document;
    root.querySelectorAll('[data-lu-tab]').forEach(function(tab){tab.addEventListener('click',function(){var group=tab.closest('[data-lu-tabs]');if(!group)return;group.querySelectorAll('[data-lu-tab]').forEach(function(item){item.setAttribute('aria-selected',item===tab?'true':'false');});group.querySelectorAll('[data-lu-tab-panel]').forEach(function(panel){panel.hidden=panel.dataset.luTabPanel!==tab.dataset.luTab;});});});
    root.querySelectorAll('[data-lu-drawer-open]').forEach(function(button){button.addEventListener('click',function(){var drawer=document.querySelector(button.dataset.luDrawerOpen);if(!drawer)return;drawer.dataset.luOpen='true';drawer.setAttribute('aria-hidden','false');var close=drawer.querySelector('[data-lu-drawer-close]');if(close)close.focus();});});
    root.querySelectorAll('[data-lu-drawer-close]').forEach(function(button){button.addEventListener('click',function(){var drawer=button.closest('[data-lu-drawer]');if(!drawer)return;drawer.dataset.luOpen='false';drawer.setAttribute('aria-hidden','true');});});
    root.querySelectorAll('[data-lu-toast]').forEach(function(button){button.addEventListener('click',function(){var target=document.querySelector(button.dataset.luToast);if(!target)return;var item=document.createElement('div');item.className='lu-toast';item.setAttribute('role','status');item.innerHTML='<strong>'+ (button.dataset.luToastTitle||'Saved') +'</strong><button type="button" aria-label="Dismiss" data-lu-toast-close>×</button>';target.appendChild(item);setTimeout(function(){item.remove();},4200);});});
    root.querySelectorAll('[data-lu-command-open]').forEach(function(button){button.addEventListener('click',function(){var command=document.querySelector(button.dataset.luCommandOpen);if(!command)return;command.dataset.luOpen='true';command.setAttribute('aria-hidden','false');var input=command.querySelector('.lu-command-input');if(input)input.focus();});});
    root.querySelectorAll('[data-lu-command-filter]').forEach(function(input){input.addEventListener('input',function(){var query=input.value.toLowerCase();var visible=0;input.closest('[data-lu-command]').querySelectorAll('[data-lu-command-item]').forEach(function(item){var match=item.textContent.toLowerCase().indexOf(query)>-1;item.hidden=!match;if(match)visible++;});var empty=input.closest('[data-lu-command]').querySelector('.lu-command-empty');if(empty)empty.hidden=visible>0;});});
    root.querySelectorAll('[data-lu-command-close]').forEach(function(button){button.addEventListener('click',function(){var command=button.closest('[data-lu-command]');if(command){command.dataset.luOpen='false';command.setAttribute('aria-hidden','true');}});});
  }
  document.addEventListener('keydown',function(event){if(event.key==='Escape'){closeAll('[data-lu-drawer][data-lu-open="true"],[data-lu-command][data-lu-open="true"]');}});
  global.LuminaInteractions={boot:boot};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){boot();});else boot();
})(window);
