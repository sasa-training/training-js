"use strict";
{
	class ScrollToTop {
		constructor(btnId,btnPosition ,options = {}) {
	  　// 変数定義場所
		  const defaultOptions = {
			scroll_to_top_btn: btnId,
			showBtnPosition: btnPosition,
		};
		  this.o = Object.assign(defaultOptions, options);
		  this.scroll_to_top_btn = document.querySelector(btnId);
		  this.showBtnPosition = btnPosition;
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
	const schrollToTop = new ScrollToTop("#page-top",400);
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

