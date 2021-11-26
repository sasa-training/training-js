/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_scrollToTop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/scrollToTop.js */ \"./src/js/module/scrollToTop.js\");\n/* harmony import */ var _module_spMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/spMenu.js */ \"./src/js/module/spMenu.js\");\n/* harmony import */ var _module_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/modal.js */ \"./src/js/module/modal.js\");\n/* harmony import */ var _module_tab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/tab.js */ \"./src/js/module/tab.js\");\n\r\n\r\n\r\n\r\n\r\nconst scrollToTopDo = new _module_scrollToTop_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"#page-top\", 400);\r\nscrollToTopDo.init();\r\nconst tabDo = new _module_tab_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\".menu li a\");\r\ntabDo.init();\r\n(0,_module_spMenu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_module_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/module/modal.js":
/*!********************************!*\
  !*** ./src/js/module/modal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n  const click = \"click\";\r\n  const hidden = \"hidden\";\r\n  const btnOpen = document.getElementById(\"btn_open\");\r\n  const btnClose = document.getElementById(\"btn_close\");\r\n  const modal = document.getElementById(\"modal\");\r\n  const mask = document.getElementById(\"mask\");\r\n  btn_open.addEventListener(click, () => {\r\n    modal.classList.remove(hidden);\r\n    mask.classList.remove(hidden);\r\n  });\r\n  btn_close.addEventListener(click, () => {\r\n    modal.classList.add(hidden);\r\n    mask.classList.add(hidden);\r\n  });\r\n  mask.addEventListener(click, () => {\r\n    btn_close.click();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/module/modal.js?");

/***/ }),

/***/ "./src/js/module/scrollToTop.js":
/*!**************************************!*\
  !*** ./src/js/module/scrollToTop.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollToTop)\n/* harmony export */ });\nclass ScrollToTop {\r\n  constructor(root, options = {}) {\r\n    // 変数定義場所\r\n    const defaultOptions = {\r\n      root: document.querySelector(root),\r\n    };\r\n    this.o = Object.assign(defaultOptions, options);\r\n    this.root = this.o.root;\r\n    this.options = options;\r\n  }\r\n  // メソッド\r\n  scrollTop() {\r\n    this.root.addEventListener(\"click\", () => {\r\n      window.scroll({ top: 0, behavior: \"smooth\" });\r\n    });\r\n  }\r\n  btnStyleChange() {\r\n    window.addEventListener(\"scroll\", () => {\r\n      if (window.pageYOffset > this.options) {\r\n        this.root.style.opacity = \"1\";\r\n      } else if (window.pageYOffset < this.options) {\r\n        this.root.style.opacity = \"0\";\r\n      }\r\n    });\r\n  }\r\n  init() {\r\n    this.scrollTop();\r\n    this.btnStyleChange();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/module/scrollToTop.js?");

/***/ }),

/***/ "./src/js/module/spMenu.js":
/*!*********************************!*\
  !*** ./src/js/module/spMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n  //ハンバーガーメニュー\r\n  const open = \"open\";\r\n  const nav = document.querySelector(\"nav\");\r\n  const toggleBtn = document.querySelector(\".toggle-btn\");\r\n  toggleBtn.addEventListener(\"click\", () => {\r\n    nav.classList.toggle(open);\r\n    toggleBtn.classList.toggle(open);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/module/spMenu.js?");

/***/ }),

/***/ "./src/js/module/tab.js":
/*!******************************!*\
  !*** ./src/js/module/tab.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tab)\n/* harmony export */ });\nclass tab {\r\n  constructor(root, options = {}) {\r\n    // 変数定義場所\r\n    const defaultOptions = {\r\n      root: document.querySelectorAll(\".menu li a\"),\r\n      contents: document.querySelectorAll(\".content\"),\r\n      active: \"active\",\r\n    };\r\n    this.o = Object.assign(defaultOptions, options);\r\n    this.root = this.o.root;\r\n    this.options = options;\r\n    this.contents = this.o.contents;\r\n    this.active = this.o.active;\r\n  }\r\n  // メソッド\r\n  tabChange() {\r\n    this.root.forEach((clickedItem) => {\r\n      clickedItem.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        this.root.forEach((clickedItem) => {\r\n          clickedItem.classList.remove(this.active);\r\n        });\r\n        clickedItem.classList.add(this.active);\r\n        this.contents.forEach((content) => {\r\n          content.classList.remove(this.active);\r\n        });\r\n        document\r\n          .getElementById(clickedItem.dataset.id)\r\n          .classList.add(this.active);\r\n      });\r\n    });\r\n  }\r\n  init() {\r\n    this.tabChange();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/module/tab.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;