(()=>{var e={391:()=>{const e=document.querySelector(".menu-btn"),t=document.querySelector(".menu"),r=Array.from(t.children);function n(){t.classList.remove("open"),e.classList.remove("active")}e.addEventListener("click",(function(r){r.preventDefault(),t.classList.toggle("open"),e.classList.toggle("active")})),r.forEach((e=>{e.addEventListener("click",n)}))},635:()=>{function e(e){let t=e.target;const r=t.min,n=t.max,o=t.value;t.style.backgroundSize=100*(o-r)/(n-r)+"% 100%"}document.querySelectorAll(".form-range input").forEach((t=>{t.addEventListener("input",e)}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,r),c.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(635),r(391)})()})();