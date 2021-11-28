import ScrollToTop from "./module/scrollToTop.js";
import spMenu from "./module/spMenu.js";
import modal from "./module/modal.js";
import tab from "./module/tab.js";
import dropdown from "./module/dropdown.js";

// トップに戻る
const scrollToTopDo = new ScrollToTop("#page-top", 400);
scrollToTopDo.init();
// タブ切り替え
const tabDo = new tab();
tabDo.init();
// トグル・スマホメニュー・ドロップダウンメニュー
const spMenuDo = new spMenu(".toggle-btn");
spMenuDo.init();
const dropdownDo = new dropdown();
dropdownDo.init();
// モーダル
const modalDo = new modal();
modalDo.init();
