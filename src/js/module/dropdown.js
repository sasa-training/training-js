export default class dropdown {
  constructor(root, options = {}) {
    const defaultOptions = {
      root: ".dropdown-toggle",
      mainMenu: document.querySelectorAll("li.main_menu"),
      submenu: document.querySelectorAll("ul.sub_menu"),
      click: "click",
      open: "is-open",
    };
    this.o = Object.assign(defaultOptions, options);
    this.root = this.o.root;
    this.options = options;
    this.submenu = this.o.submenu;
    this.mainMenu = this.o.mainMenu;
    this.click = this.o.click;
    this.open = this.o.open;
  }
  dropdownItem() {
    document.addEventListener(this.click, (e) => {
      if (!e.target.closest(this.root)) {
        this.mainMenu[0].classList.remove(this.open);
        this.submenu[0].classList.remove(this.open);
      } else {
        this.submenu[0].classList.add(this.open);
        this.mainMenu[0].classList.add(this.open);
      }
    });
  }
  init() {
    this.dropdownItem();
  }
}
