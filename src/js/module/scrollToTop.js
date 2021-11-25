    export class ScrollToTop {
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

