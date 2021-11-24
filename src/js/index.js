"use strict";
{
	class ScrollToTop {
		constructor(root, options = {}) {
	  　// 変数定義場所
		  const defaultOptions = {
			scroll_to_top_btn: "#page-top",
			showBtnPosition: 400,
		};
		  this.o = Object.assign(defaultOptions, options);
		  this.root = root;
		  this.scroll_to_top_btn = document.querySelector("#page-top");
		  this.showBtnPosition = 400;
		};
		// メソッド
		init() { 
			this.scroll_to_top_btn.addEventListener('click',()=>{
				window.scroll({top: 0, behavior: 'smooth'});
			});
			window.addEventListener('scroll', () => {
				if(window.pageYOffset > this.showBtnPosition){
					this.scroll_to_top_btn.style.opacity = '1';
				}else if(window.pageYOffset < this.showBtnPosition){
					this.scroll_to_top_btn.style.opacity = '0';
				}
			});
		};
	}
	const schrollToTop = new ScrollToTop();
	schrollToTop.init();
	//ハンバーガーメニュー
	const open = "open";
	const nav = document.querySelector("nav");
	const toggleBtn = document.querySelector(".toggle-btn");
	toggleBtn.addEventListener("click", () => {
		nav.classList.toggle(open);
		toggleBtn.classList.toggle(open);
	});
}

