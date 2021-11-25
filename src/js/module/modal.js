export default function () {
  const click = "click";
  const hidden = "hidden";
  const btnOpen = document.getElementById("btn_open");
  const btnClose = document.getElementById("btn_close");
  const modal = document.getElementById("modal");
  const mask = document.getElementById("mask");
  btn_open.addEventListener(click, () => {
    modal.classList.remove(hidden);
    mask.classList.remove(hidden);
  });
  btn_close.addEventListener(click, () => {
    modal.classList.add(hidden);
    mask.classList.add(hidden);
  });
  mask.addEventListener(click, () => {
    btn_close.click();
  });
}
