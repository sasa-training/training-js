import ScrollToTop from "./module/scrollToTop.js";
import spMenu from "./module/spMenu.js";
import modal from "./module/modal.js";
import tab from "./module/tab.js";

const scrollToTopDo = new ScrollToTop("#page-top", 400);
scrollToTopDo.init();
const tabDo = new tab(".menu li a", ".content");
tabDo.init();
spMenu();
modal();
