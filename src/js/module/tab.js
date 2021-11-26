export default class tab {
  constructor(root, options = {}) {
    // 変数定義場所
    const defaultOptions = {
      root: document.querySelectorAll(".menu li a"),
      contents: document.querySelectorAll(".content"),
      active: "active",
    };
    this.o = Object.assign(defaultOptions, options);
    this.root = this.o.root;
    this.options = options;
    this.contents = this.o.contents;
    this.active = this.o.active;
  }
  // メソッド
  tabChange() {
    this.root.forEach((clickedItem) => {
      clickedItem.addEventListener("click", (e) => {
        e.preventDefault();
        this.root.forEach((clickedItem) => {
          clickedItem.classList.remove(this.active);
        });
        clickedItem.classList.add(this.active);
        this.contents.forEach((content) => {
          content.classList.remove(this.active);
        });
        document
          .getElementById(clickedItem.dataset.id)
          .classList.add(this.active);
      });
    });
  }
  init() {
    this.tabChange();
  }
}
