webpackHotUpdate("main",{

/***/ "./frontend/src/reducers/auth.js":
/*!***************************************!*\
  !*** ./frontend/src/reducers/auth.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initialState = {\n  token: localStorage.getItem('token'),\n  isAuthenticated: null,\n  user: null\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var type = action.type,\n      payload = action.payload;\n\n  switch (type) {\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./frontend/src/reducers/auth.js?");

/***/ }),

/***/ "./frontend/src/reducers/index.js":
/*!****************************************!*\
  !*** ./frontend/src/reducers/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _leads__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leads */ \"./frontend/src/reducers/leads.js\");\n/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ \"./frontend/src/reducers/errors.js\");\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ \"./frontend/src/reducers/messages.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth */ \"./frontend/src/reducers/auth.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  leads: _leads__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  errors: _errors__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  messages: _messages__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  auth: _auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./frontend/src/reducers/index.js?");

/***/ })

})