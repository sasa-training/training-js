export default class dropdown {
  constructor(root, options = {}) {
    const defaultOptions = {
      root: document.getElementsByClassName(".main_menu"),
      classSubmenu: document.getElementsByClassName(".sub_menu"),
      mouseOver: "mouseover",
      mouseOut: "mouseOut",
      open: document.getElementsByClassName(".open"),
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
    this.root.forEach((e) => {
      console.log(this);
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
