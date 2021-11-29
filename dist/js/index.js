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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_scrollToTop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/scrollToTop.js */ \"./src/js/module/scrollToTop.js\");\n/* harmony import */ var _module_spMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/spMenu.js */ \"./src/js/module/spMenu.js\");\n/* harmony import */ var _module_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/modal.js */ \"./src/js/module/modal.js\");\n/* harmony import */ var _module_tab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/tab.js */ \"./src/js/module/tab.js\");\n/* harmony import */ var _module_dropdown_2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/dropdown-2.js */ \"./src/js/module/dropdown-2.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// トップに戻る\r\nconst scrollToTopDo = new _module_scrollToTop_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"#page-top\", 400);\r\nscrollToTopDo.init();\r\n// タブ切り替え\r\nconst tabDo = new _module_tab_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\ntabDo.init();\r\n// トグル・スマホメニュー・ドロップダウンメニュー\r\nconst spMenuDo = new _module_spMenu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".toggle-btn\");\r\nspMenuDo.init();\r\nconst dropdownDo = new _module_dropdown_2_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\ndropdownDo.init();\r\n// モーダル\r\nconst modalDo = new _module_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\".js-modal\");\r\nmodalDo.init();\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/module/dropdown-2.js":
/*!*************************************!*\
  !*** ./src/js/module/dropdown-2.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropdown)\n/* harmony export */ });\nclass dropdown {\r\n  constructor(root, options = {}) {\r\n    const defaultOptions = {\r\n      root: document.querySelector(\".dropdown-toggle\"),\r\n      classSubmenu: document.querySelector(\".sub_menu\"),\r\n      open: \"is-open\",\r\n    };\r\n    this.o = Object.assign(defaultOptions, options);\r\n    this.root = this.o.root;\r\n    this.options = options;\r\n    this.classSubmenu = this.o.classSubmenu;\r\n    this.open = this.o.open;\r\n  }\r\n  dropdownItem() {\r\n    this.root.addEventListener(\"click\", () => {\r\n      this.root.classList.toggle(this.open);\r\n      this.classSubmenu.classList.toggle(this.open);\r\n    });\r\n  }\r\n  init() {\r\n    this.dropdownItem();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/module/dropdown-2.js?");

/***/ }),

/***/ "./src/js/module/modal.js":
/*!********************************!*\
  !*** ./src/js/module/modal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ modal)\n/* harmony export */ });\nclass modal {\r\n  constructor(root, options = {}) {\r\n    const defaultOptions = {\r\n      root: document.querySelectorAll(root),\r\n      click: \"click\",\r\n      hidden: \"hidden\",\r\n      btnOpen: document.getElementsByClassName(\"btn_open\"),\r\n      btnClose: document.getElementsByClassName(\"btn_close\"),\r\n      mask: document.getElementsByClassName(\"mask\"),\r\n    };\r\n    this.o = Object.assign(defaultOptions, options);\r\n    this.root = this.o.root;\r\n    this.options = options;\r\n    this.click = this.o.click;\r\n    this.hidden = this.o.hidden;\r\n    this.btnOpen = this.o.btnOpen;\r\n    this.btnClose = this.o.btnClose;\r\n    this.mask = this.o.mask;\r\n  }\r\n  modalOpen() {\r\n    console.log(this.root);\r\n    this.btnOpen[0].addEventListener(this.click, () => {\r\n      this.root[0].classList.remove(this.hidden);\r\n      this.mask[0].classList.remove(this.hidden);\r\n    });\r\n  }\r\n  modalClose() {\r\n    this.btnClose[0].addEventListener(this.click, () => {\r\n      this.root[0].classList.add(this.hidden);\r\n      this.mask[0].classList.add(this.hidden);\r\n    });\r\n  }\r\n  modalMask() {\r\n    this.mask[0].addEventListener(this.click, () => {\r\n      this.btnClose[0].click();\r\n    });\r\n  }\r\n  init() {\r\n    this.modalOpen();\r\n    this.modalClose();\r\n    this.modalMask();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/module/modal.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ spMenu)\n/* harmony export */ });\nclass spMenu {\r\n  constructor(root, options = {}) {\r\n    const defaultOptions = {\r\n      root: document.querySelector(root),\r\n      nav: document.querySelector(\"nav\"),\r\n      elementOpen: \"open\",\r\n    };\r\n    this.o = Object.assign(defaultOptions, options);\r\n    this.root = this.o.root;\r\n    this.nav = this.o.nav;\r\n    this.elementOpen = this.o.elementOpen;\r\n  }\r\n  spMenu() {\r\n    this.root.addEventListener(\"click\", () => {\r\n      this.root.classList.toggle(this.elementOpen);\r\n      this.nav.classList.toggle(this.elementOpen);\r\n    });\r\n  }\r\n  init() {\r\n    this.spMenu();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/module/spMenu.js?");

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