export default class dropdown {
  constructor(root, options = {}) {
    const defaultOptions = {
      root: document.querySelectorAll(".main_menu"),
      classSubmenu: document.querySelectorAll(".sub_menu"),
      mouseOver: "mouseover",
      mouseOut: "mouseOut",
      open: document.querySelector(".open"),
    };
    this.o = Object.assign(defaultOptions, options);
    this.root = this.o.root;
    this.options = options;
    this.classSubmenu = this.o.classSubmenu;
    this.mouseOver = this.o.mouseOver;
    this.mouseOut = this.o.mouseOut;
    this.open = this.o.open;
  }
  dropdownItem() {
    console.log(this.root);
    this.root.forEach((e) => {
      this.root.addEventListener(
        this.mouseOver,
        () => {
          this.classSubmenu.classList.add(this.open);
        },
        false
      );
      this.root.addEventListener(
        this.mouseOut,
        () => {
          this.classSubmenu.classList.remove(this.open);
        },
        false
      );
    });
  }
  init() {
    this.dropdownItem();
  }
}
