webpackHotUpdate("main",{

/***/ "./frontend/src/reducers/index.js":
/*!****************************************!*\
  !*** ./frontend/src/reducers/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _leads__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leads */ \"./frontend/src/reducers/leads.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  leads: _leads__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./frontend/src/reducers/index.js?");

/***/ }),

/***/ "./frontend/src/reducers/leads.js":
/*!****************************************!*\
  !*** ./frontend/src/reducers/leads.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initialState = [];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var type = action.type,\n      payload = action.payload;\n\n  switch (type) {\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./frontend/src/reducers/leads.js?");

/***/ })

})