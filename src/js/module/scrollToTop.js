export default class ScrollToTop {
  constructor(root, options = {}) {
    // 変数定義場所
    const defaultOptions = {
      root: document.querySelector(root),
    };
    this.o = Object.assign(defaultOptions, options);
    this.root = this.o.root;
    this.options = options;
  }
  // メソッド
  scrollTop() {
    this.root.addEventListener("click", () => {
      window.scroll({ top: 0, behavior: "smooth" });
    });
  }
  btnStyleChange() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > this.options) {
        this.root.style.opacity = "1";
      } else if (window.pageYOffset < this.options) {
        this.root.style.opacity = "0";
      }
    });
  }
  init() {
    this.scrollTop();
    this.btnStyleChange();
  }
}
