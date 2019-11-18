webpackHotUpdate("main",{

/***/ "./frontend/src/reducers/auth.js":
/*!***************************************!*\
  !*** ./frontend/src/reducers/auth.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./frontend/src/actions/types.js\");\n\nvar initialState = {\n  token: localStorage.getItem('token'),\n  isAuthenticated: null,\n  loading: false,\n  user: null\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var type = action.type,\n      payload = action.payload;\n\n  switch (type) {\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./frontend/src/reducers/auth.js?");

/***/ })

})