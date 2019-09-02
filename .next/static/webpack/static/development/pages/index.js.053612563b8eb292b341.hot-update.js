webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/data.json */ "./data/data.json");
var _data_data_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/data.json */ "./data/data.json", 1);
/* harmony import */ var _utils_rafLoop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/rafLoop */ "./utils/rafLoop.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* harmony import */ var _utils_main_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/main.scss */ "./utils/main.scss");
/* harmony import */ var _utils_main_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utils_main_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Header_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Header.jsx */ "./components/Header.jsx");
/* harmony import */ var _components_Video_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Video.jsx */ "./components/Video.jsx");
/* harmony import */ var _components_Products_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Products.jsx */ "./components/Products.jsx");

















var Index =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$PureComponent);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "rafLoop", typeof window !== 'undefined' ? new _utils_rafLoop__WEBPACK_IMPORTED_MODULE_10__["RafLoop"]({
      mainScroll: true
    }) : false);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["354305743", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["fontSizer"])(98), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75)]]]) + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["354305743", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["fontSizer"])(98), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75)]]])
      }, "De Studio"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["354305743", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["fontSizer"])(98), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "description",
        content: "",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["354305743", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["fontSizer"])(98), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75)]]])
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Header_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Video_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["354305743", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["fontSizer"])(98), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75)]]])
      }, "We make relentlessly honest objects."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Products_jsx__WEBPACK_IMPORTED_MODULE_15__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "354305743",
        dynamic: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["fontSizer"])(98), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75)]
      }, "h1.__jsx-style-dynamic-selector{font-family:'NBGrotesk';font-size:48px;padding:".concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4), "vw ").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(2), "vw;padding-bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75), "vw;width:100%;}@media (min-width:900px){h1.__jsx-style-dynamic-selector{font-size:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["fontSizer"])(98), "vw;padding:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(.75), "vw ").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(1), "vw;padding-bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75), "vw;width:75%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQzRCLEFBR2lELEFBV3FCLHdCQVY5QixlQUV1RCxFQVVJLG9FQVQ1QixFQVVJLDRDQVJ2QyxFQVVHLFNBVGxCLENBVUkiLCJmaWxlIjoiL1VzZXJzL2Rpb24vU2l0ZXMvZGVzdHVkaW8vcGFnZXMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhL2RhdGEuanNvbidcbmltcG9ydCB7IFJhZkxvb3AgfSBmcm9tICcuLi91dGlscy9yYWZMb29wJ1xuXG5pbXBvcnQgeyBnZXRDb2xzLCBmb250U2l6ZXIgfSBmcm9tICcuLi91dGlscy91dGlscydcblxuaW1wb3J0ICcuLi91dGlscy9tYWluLnNjc3MnXG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIuanN4J1xuaW1wb3J0IFZpZGVvIGZyb20gJy4uL2NvbXBvbmVudHMvVmlkZW8uanN4J1xuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdHMuanN4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICAgIHJhZkxvb3AgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IG5ldyBSYWZMb29wKHttYWluU2Nyb2xsOiB0cnVlfSkgOiBmYWxzZVxuXG4gICAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRlIFN0dWRpbzwvdGl0bGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiXCIvPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8VmlkZW8gLz5cbiAgICAgICAgICAgICAgICA8aDE+V2UgbWFrZSByZWxlbnRsZXNzbHkgaG9uZXN0IG9iamVjdHMuPC9oMT5cblxuICAgICAgICAgICAgICAgIDxQcm9kdWN0cyAvPlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ05CR3JvdGVzayc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7IC8vIFRPRE86IHJlc3BvbnNpdmUgZm9udCBzaXplIG1vYmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAkeyBnZXRDb2xzKDQpIH12dyAkeyBnZXRDb2xzKDIpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkeyBnZXRDb2xzKDQuNzUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkeyBmb250U2l6ZXIoOTgpIH12dztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICR7IGdldENvbHMoLjc1KSB9dncgJHsgZ2V0Q29scygxKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206ICR7IGdldENvbHMoNC43NSkgfXZ3O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/dion/Sites/destudio/pages/index.jsx */")));
    });

    return _this;
  }

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);



/***/ })

})
//# sourceMappingURL=index.js.053612563b8eb292b341.hot-update.js.map