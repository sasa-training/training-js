import ScrollToTop from "./module/scrollToTop.js";
import spMenu from "./module/spMenu.js";
import modal from "./module/modal.js";
import tab from "./module/tab.js";

const schrollToTop = new ScrollToTop("#page-top", 400);
schrollToTop.init();
spMenu();
modal();
tab();
