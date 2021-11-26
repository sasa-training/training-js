export default class tab {
  constructor(root, options = {}) {
    // 変数定義場所
    const defaultOptions = {
      root: document.querySelectorAll(root),
      options: document.querySelectorAll(options),
      active: '"active"',
    };
    this.o = Object.assign(defaultOptions, options);
    this.root = this.o.root;
    this.options = this.o.options;
    this.active = this.o.active;
  }
  changeTab() {
    this.root.forEach((clickedItem) => {
      clickedItem.addEventListener("click", (e) => {
        e.preventDefault();
        clickedItem.classList.remove(this.active);
        clickedItem.classList.add(this.active);
        this.options.forEach((content) => {
          this.options.classList.remove(this.active);
        });
        document
          .getElementById(clickedItem.dataset.id)
          .classList.add(this.active);
      });
    });
  }
  init() {
    this.changeTab();
  }
}
