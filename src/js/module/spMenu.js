export default class spMenu {
  constructor(root, options = {}) {
    const defaultOptions = {
      root: document.querySelector(root),
      nav: document.querySelector("nav"),
      elementOpen: "open",
    };
    this.o = Object.assign(defaultOptions, options);
    this.root = this.o.root;
    this.nav = this.o.nav;
    this.elementOpen = this.o.elementOpen;
  }
  spMenu() {
    this.root.addEventListener("click", () => {
      this.root.classList.toggle(this.elementOpen);
      this.nav.classList.toggle(this.elementOpen);
    });
  }
  init() {
    this.spMenu();
  }
}
