export default function () {
  //ハンバーガーメニュー
  const open = "open";
  const nav = document.querySelector("nav");
  const toggleBtn = document.querySelector(".toggle-btn");
  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle(open);
    toggleBtn.classList.toggle(open);
  });
}
