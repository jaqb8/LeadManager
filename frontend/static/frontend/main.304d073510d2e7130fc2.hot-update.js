webpackHotUpdate("main",{

/***/ "./frontend/src/components/layout/Header.js":
/*!**************************************************!*\
  !*** ./frontend/src/components/layout/Header.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Header = function Header(_ref) {\n  var _ref$auth = _ref.auth,\n      isAuthenticated = _ref$auth.isAuthenticated,\n      loading = _ref$auth.loading;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"navbar navbar-expand-sm navbar-light bg-light\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"navbar-toggler\",\n    type: \"button\",\n    \"data-toggle\": \"collapse\",\n    \"data-target\": \"#navbarTogglerDemo01\",\n    \"aria-controls\": \"navbarTogglerDemo01\",\n    \"aria-expanded\": \"false\",\n    \"aria-label\": \"Toggle navigation\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"navbar-toggler-icon\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"collapse navbar-collapse\",\n    id: \"navbarTogglerDemo01\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"navbar-brand\",\n    href: \"#\"\n  }, \"Lead Manager\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"navbar-nav ml-auto mt-2 mt-lg-0\"\n  }, !loading && (!isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"nav-item\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/register\",\n    className: \"nav-link\"\n  }, \"Register\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"nav-item\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/login\",\n    className: \"nav-link\"\n  }, \"Login\"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"nav-item\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"nav-link btn btn-secondary btn-sm text-light\"\n  }, \"Logout\"))))))));\n};\n\nHeader.propTypes = {\n  auth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    auth: state.auth\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps)(Header));\n\n//# sourceURL=webpack:///./frontend/src/components/layout/Header.js?");

/***/ })

})