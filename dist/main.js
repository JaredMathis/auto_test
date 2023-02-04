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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.mjs */ \"./src/main.mjs\");\n\n(0,_main_mjs__WEBPACK_IMPORTED_MODULE_0__.main)();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./node_modules/m00/src/arguments/assert.mjs":
/*!***************************************************!*\
  !*** ./node_modules/m00/src/arguments/assert.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arguments_assert\": () => (/* binding */ arguments_assert)\n/* harmony export */ });\n/* harmony import */ var _undefined_is_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../undefined/is.mjs */ \"./node_modules/m00/src/undefined/is.mjs\");\n/* harmony import */ var _assert_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assert.mjs */ \"./node_modules/m00/src/assert.mjs\");\n/* harmony import */ var _for_each_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../for/each.mjs */ \"./node_modules/m00/src/for/each.mjs\");\n\n\n\nfunction arguments_assert(_arguments) {\n    (0,_assert_mjs__WEBPACK_IMPORTED_MODULE_1__.assert)(!(0,_undefined_is_mjs__WEBPACK_IMPORTED_MODULE_0__.undefined_is)(_arguments));\n    let types = Array.from(arguments).slice(1);\n    (0,_assert_mjs__WEBPACK_IMPORTED_MODULE_1__.assert)(_arguments.length === types.length);\n    (0,_for_each_mjs__WEBPACK_IMPORTED_MODULE_2__.for_each)(types, (type, index) => {\n        let argument = _arguments[index];\n        (0,_assert_mjs__WEBPACK_IMPORTED_MODULE_1__.assert)(type(argument));\n    });\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/arguments/assert.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/assert.mjs":
/*!*****************************************!*\
  !*** ./node_modules/m00/src/assert.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"assert\": () => (/* binding */ assert)\n/* harmony export */ });\nfunction assert(condition) {\n    if (!condition) {\n        throw new Error(``);\n    }\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/assert.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/defined/is.mjs":
/*!*********************************************!*\
  !*** ./node_modules/m00/src/defined/is.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defined_is\": () => (/* binding */ defined_is)\n/* harmony export */ });\n/* harmony import */ var _undefined_is_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../undefined/is.mjs */ \"./node_modules/m00/src/undefined/is.mjs\");\n\nfunction defined_is(v) {\n    return !(0,_undefined_is_mjs__WEBPACK_IMPORTED_MODULE_0__.undefined_is)(v);\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/defined/is.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/element/text.mjs":
/*!***********************************************!*\
  !*** ./node_modules/m00/src/element/text.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"element_text\": () => (/* binding */ element_text)\n/* harmony export */ });\n/* harmony import */ var _arguments_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../arguments/assert.mjs */ \"./node_modules/m00/src/arguments/assert.mjs\");\n/* harmony import */ var _defined_is_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../defined/is.mjs */ \"./node_modules/m00/src/defined/is.mjs\");\n/* harmony import */ var _string_is_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../string/is.mjs */ \"./node_modules/m00/src/string/is.mjs\");\n\n\n\nfunction element_text(e, text) {\n    (0,_arguments_assert_mjs__WEBPACK_IMPORTED_MODULE_0__.arguments_assert)(arguments, _defined_is_mjs__WEBPACK_IMPORTED_MODULE_1__.defined_is, _string_is_mjs__WEBPACK_IMPORTED_MODULE_2__.string_is);\n    e.innerHTML = text;\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/element/text.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/for/each.mjs":
/*!*******************************************!*\
  !*** ./node_modules/m00/src/for/each.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"for_each\": () => (/* binding */ for_each)\n/* harmony export */ });\n/* harmony import */ var _each_key_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./each/key.mjs */ \"./node_modules/m00/src/for/each/key.mjs\");\n\nfunction for_each(list, lambda) {\n    (0,_each_key_mjs__WEBPACK_IMPORTED_MODULE_0__.for_each_key)(list, key => {\n        let l = list[key];\n        lambda(l, key);\n    });\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/for/each.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/for/each/key.mjs":
/*!***********************************************!*\
  !*** ./node_modules/m00/src/for/each/key.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"for_each_key\": () => (/* binding */ for_each_key)\n/* harmony export */ });\nfunction for_each_key(list, lambda) {\n    for (let i in list) {\n        lambda(i);\n    }\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/for/each/key.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/string/is.mjs":
/*!********************************************!*\
  !*** ./node_modules/m00/src/string/is.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"string_is\": () => (/* binding */ string_is)\n/* harmony export */ });\nfunction string_is(s) {\n    return typeof s === typeof '';\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/string/is.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/undefined/is.mjs":
/*!***********************************************!*\
  !*** ./node_modules/m00/src/undefined/is.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"undefined_is\": () => (/* binding */ undefined_is)\n/* harmony export */ });\nfunction undefined_is(a) {\n    return a === undefined;\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/undefined/is.mjs?");

/***/ }),

/***/ "./src/main.mjs":
/*!**********************!*\
  !*** ./src/main.mjs ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var _node_modules_m00_src_element_text_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../node_modules/m00/src/element/text.mjs */ \"./node_modules/m00/src/element/text.mjs\");\n\nfunction main() {\n    element_with_text(document.body, 'div', 'Hello');\n}\n\n//# sourceURL=webpack:///./src/main.mjs?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;