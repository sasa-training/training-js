export default class dropdown {
  constructor(root, options = {}) {
    const defaultOptions = {
      root: document.querySelectorAll(".main_menu"),
      classSubmenu: ".sub_menu",
      mouseOver: "mouseover",
      open: "open",
    };
    this.o = Object.assign(defaultOptions, options);
    this.root = this.o.root;
    this.options = options;
    this.classSubmenu = this.o.classSubmenu;
    this.open = this.o.open;
  }
  dropdownItem() {
    console.log(this.open);
    this.root.forEach((element) => {
      element.addEventListener(
        "mouseover",
        () => {
          element.querySelectorAll(this.classSubmenu).classList.add(this.open);
        },
        false
      );
      element.addEventListener(
        "mouseover",
        () => {
          element
            .querySelectorAll(this.classSubmenu)
            .classList.remove(this.open);
        },
        false
      );
    });
  }
  init() {
    this.dropdownItem();
  }
}
