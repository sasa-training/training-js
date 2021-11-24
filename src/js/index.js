"use strict";
{
	//ボタン
	const scroll_to_top_btn = document.querySelector('#page-top');
	//クリック時の処理
	scroll_to_top_btn.addEventListener( 'click' , scroll_to_top );
	function scroll_to_top(){
		window.scroll({top: 0, behavior: 'smooth'});
	};
	//スクロール時の処理
	const　showBtnPosition = 400;
	window.addEventListener( 'scroll' , scroll_event );
	function scroll_event(){
		if(window.pageYOffset > showBtnPosition){
			scroll_to_top_btn.style.opacity = '1';
		}else	if(window.pageYOffset < showBtnPosition){
			scroll_to_top_btn.style.opacity = '0';
		}
	};
	//ハンバーガーメニュー
	const open = "open";
	const nav = document.querySelector("nav");
	const toggleBtn = document.querySelector(".toggle-btn");
	toggleBtn.addEventListener("click", () => {
		nav.classList.toggle(open);
		toggleBtn.classList.toggle(open);
	});
}