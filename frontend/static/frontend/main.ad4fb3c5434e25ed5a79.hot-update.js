webpackHotUpdate("main",{

/***/ "./frontend/src/actions/messages.js":
/*!******************************************!*\
  !*** ./frontend/src/actions/messages.js ***!
  \******************************************/
/*! exports provided: createMessage, returnErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMessage\", function() { return createMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"returnErrors\", function() { return returnErrors; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./frontend/src/actions/types.js\");\n // Create Message\n\nvar createMessage = function createMessage(msg) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"CREATE_MESSAGE\"],\n    payload: msg\n  };\n}; // Return Errors\n\nvar returnErrors = function returnErrors(msg, status) {\n  return {\n    type: GET_ERRORS,\n    payload: {\n      msg: msg,\n      status: status\n    }\n  };\n};\n\n//# sourceURL=webpack:///./frontend/src/actions/messages.js?");

/***/ })

})