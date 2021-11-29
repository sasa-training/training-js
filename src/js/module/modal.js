export default class modal {
  constructor(root, options = {}) {
    const defaultOptions = {
      root: document.getElementsByClassName("btn_open"),
      click: "click",
      hidden: "hidden",
      btnClose: document.getElementsByClassName("btn_close"),
      modalBox: document.getElementsByClassName("modal"),
      mask: document.getElementsByClassName("mask"),
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
    console.log(this.root[0]);
    this.root[0].addEventListener(this.click, () => {
      this.modalBox[0].classList.remove(this.hidden);
      this.mask[0].classList.remove(this.hidden);
    });
  }
  modalClose() {
    this.btnClose[0].addEventListener(this.click, () => {
      this.modalBox[0].classList.add(this.hidden);
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
