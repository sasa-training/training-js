(()=>{"use strict";new class{constructor(t,e={}){const o={root:document.querySelector(t)};this.o=Object.assign(o,e),this.root=this.o.root,this.options=e}scrollTop(){this.root.addEventListener("click",(()=>{window.scroll({top:0,behavior:"smooth"})}))}btnStyleChange(){window.addEventListener("scroll",(()=>{window.pageYOffset>this.options?this.root.style.opacity="1":window.pageYOffset<this.options&&(this.root.style.opacity="0")}))}init(){this.scrollTop(),this.btnStyleChange()}}("#page-top",400).init(),new class{constructor(t,e={}){const o={root:document.querySelectorAll(t),options:document.querySelectorAll(e),active:'"active"'};this.o=Object.assign(o,e),this.root=this.o.root,this.options=this.o.options,this.active=this.o.active}changeTab(){this.root.forEach((t=>{t.addEventListener("click",(e=>{e.preventDefault(),t.classList.remove(this.active),t.classList.add(this.active),this.options.forEach((t=>{this.options.classList.remove(this.active)})),document.getElementById(t.dataset.id).classList.add(this.active)}))}))}init(){this.changeTab()}}(".menu li a",".content").init(),function(){const t="open",e=document.querySelector("nav"),o=document.querySelector(".toggle-btn");o.addEventListener("click",(()=>{e.classList.toggle(t),o.classList.toggle(t)}))}(),function(){const t="click",e="hidden",o=(document.getElementById("btn_open"),document.getElementById("btn_close"),document.getElementById("modal")),s=document.getElementById("mask");btn_open.addEventListener(t,(()=>{o.classList.remove(e),s.classList.remove(e)})),btn_close.addEventListener(t,(()=>{o.classList.add(e),s.classList.add(e)})),s.addEventListener(t,(()=>{btn_close.click()}))}()})();