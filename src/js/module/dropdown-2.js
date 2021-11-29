export default class dropdown {
  constructor(root, options = {}) {
    const defaultOptions = {
      root: document.querySelector(".dropdown-toggle"),
      classSubmenu: document.querySelector(".sub_menu"),
      open: "is-open",
    };
    this.o = Object.assign(defaultOptions, options);
    this.root = this.o.root;
    this.options = options;
    this.classSubmenu = this.o.classSubmenu;
    this.open = this.o.open;
  }
  dropdownItem() {
    this.root.addEventListener("click", () => {
      this.root.classList.toggle(this.open);
      this.classSubmenu.classList.toggle(this.open);
    });
  }
  init() {
    this.dropdownItem();
  }
}
