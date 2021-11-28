export default class modal {
  constructor(root, options = {}) {
    const defaultOptions = {
      root: document.getElementById("btn_open"),
      click: "click",
      hidden: "hidden",
      btnClose: document.getElementById("btn_close"),
      modalBox: document.getElementById("modal"),
      mask: document.getElementById("mask"),
    };
    this.o = Object.assign(defaultOptions, options);
    this.root = this.o.root;
    this.options = options;
    this.click = this.o.click;
    this.hidden = this.o.hidden;
    this.btnClose = this.o.btnClose;
    this.modalBox = this.o.modalBox;
    this.mask = this.o.mask;
  }
  modalOpen() {
    this.root.addEventListener(this.click, () => {
      this.modalBox.classList.remove(this.hidden);
      this.mask.classList.remove(this.hidden);
    });
  }
  modalClose() {
    this.btnClose.addEventListener(this.click, () => {
      this.modalBox.classList.add(this.hidden);
      this.mask.classList.add(this.hidden);
    });
  }
  modalMask() {
    this.mask.addEventListener(this.click, () => {
      this.btnClose.click();
    });
  }
  init() {
    this.modalOpen();
    this.modalClose();
    this.modalMask();
  }
}
