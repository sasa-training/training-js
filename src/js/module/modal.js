export default class modal {
  constructor(root, options = {}) {
    const defaultOptions = {
      root: document.querySelectorAll(root),
      click: "click",
      hidden: "hidden",
      btnOpen: document.getElementsByClassName("btn_open"),
      btnClose: document.getElementsByClassName("btn_close"),
      mask: document.getElementsByClassName("mask"),
    };
    this.o = Object.assign(defaultOptions, options);
    this.root = this.o.root;
    this.options = options;
    this.click = this.o.click;
    this.hidden = this.o.hidden;
    this.btnOpen = this.o.btnOpen;
    this.btnClose = this.o.btnClose;
    this.mask = this.o.mask;
  }
  modalOpen() {
    this.btnOpen[0].addEventListener(this.click, () => {
      this.root[0].classList.remove(this.hidden);
      this.mask[0].classList.remove(this.hidden);
    });
  }
  modalClose() {
    this.btnClose[0].addEventListener(this.click, () => {
      this.root[0].classList.add(this.hidden);
      this.mask[0].classList.add(this.hidden);
    });
  }
  modalMask() {
    this.mask[0].addEventListener(this.click, () => {
      this.btnClose[0].click();
    });
  }
  init() {
    this.modalOpen();
    this.modalClose();
    this.modalMask();
  }
}
