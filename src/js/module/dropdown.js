export default class dropdown {
  constructor(root, options = {}) {
    const defaultOptions = {
      root: document.querySelectorAll(".main_menu"),
      classSubmenu: document.querySelectorAll(".sub_menu"),
      mouseOver: "mouseover",
      mouseOut: "mouseOut",
      open: document.querySelectorAll(".open"),
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
    this.root.forEach((element) => {
      element.addEventListener(
        this.mouseOver,
        () => {
          element.this.classSubmenu.classList.add(this.open);
        },
        false
      );
      element.addEventListener(
        this.mouseOut,
        () => {
          element.this.classSubmenu.classList.remove(this.open);
        },
        false
      );
    });
  }
  init() {
    this.dropdownItem();
  }
}
