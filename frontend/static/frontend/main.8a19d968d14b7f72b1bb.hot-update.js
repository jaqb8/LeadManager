webpackHotUpdate("main",{

/***/ "./frontend/src/reducers/index.js":
/*!****************************************!*\
  !*** ./frontend/src/reducers/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _leads__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leads */ \"./frontend/src/reducers/leads.js\");\n/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ \"./frontend/src/reducers/errors.js\");\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ \"./frontend/src/reducers/messages.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  leads: _leads__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  errors: _errors__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  messages: _messages__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./frontend/src/reducers/index.js?");

/***/ }),

/***/ "./frontend/src/reducers/messages.js":
/*!*******************************************!*\
  !*** ./frontend/src/reducers/messages.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./frontend/src/actions/types.js\");\n\nvar initialState = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var type = action.type,\n      payload = action.payload;\n\n  switch (type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_MESSAGES\"]:\n      return payload;\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"CREATE_MESSAGE\"]:\n      return state = payload;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./frontend/src/reducers/messages.js?");

/***/ })

})