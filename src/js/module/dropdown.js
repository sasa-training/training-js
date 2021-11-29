export default class dropdown {
  constructor(root, options = {}) {
    const defaultOptions = {
      root: document.querySelectorAll(".dropdown-toggle"),
      mainMenu: document.querySelectorAll(".main_menu"),
      submenu: document.querySelectorAll("ul.sub_menu"),
      mouseOver: "mouseover",
      mouseOut: "mouseout",
      click: "click",
      open: "is-open",
    };
    this.o = Object.assign(defaultOptions, options);
    this.root = this.o.root;
    this.options = options;
    this.submenu = this.o.submenu;
    this.mainMenu = this.o.mainMenu;
    this.mouseOver = this.o.mouseOver;
    this.mouseOut = this.o.mouseOut;
    this.click = this.o.click;
    this.open = this.o.open;
  }
  dropdownItem() {
    console.log(this.root);
    this.root.forEach((item) => {
      item.addEventListener(
        this.mouseOver,
        () => {
          this.submenu[0].classList.add(this.open);
        },
        false
      );
      item.addEventListener(
        this.mouseOut,
        () => {
          this.submenu[0].classList.remove(this.open);
        },
        false
      );
    });
  }
  init() {
    this.dropdownItem();
  }
}
