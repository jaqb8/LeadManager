webpackHotUpdate("main",{

/***/ "./frontend/src/reducers/errors.js":
/*!*****************************************!*\
  !*** ./frontend/src/reducers/errors.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./frontend/src/actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  msg: {},\n  status: null\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var type = action.type,\n      payload = action.payload;\n\n  switch (type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_ERRORS\"]:\n      return _objectSpread({}, state, {\n        msg: payload.msg,\n        status: payload.status\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./frontend/src/reducers/errors.js?");

/***/ }),

/***/ "./frontend/src/reducers/index.js":
/*!****************************************!*\
  !*** ./frontend/src/reducers/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _leads__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leads */ \"./frontend/src/reducers/leads.js\");\n/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ \"./frontend/src/reducers/errors.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  leads: _leads__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  errors: _errors__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./frontend/src/reducers/index.js?");

/***/ })

})