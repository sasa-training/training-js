(()=>{const e=document.querySelector("#page-top");e.addEventListener("click",(function(){window.scroll({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){window.pageYOffset>400?e.style.opacity="1":window.pageYOffset<400&&(e.style.opacity="0")}))})();