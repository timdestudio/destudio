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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["2751031843", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["fontSizer"])(98), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75)]]]) + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["2751031843", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["fontSizer"])(98), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75)]]])
      }, "De Studio"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["2751031843", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["fontSizer"])(98), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "description",
        content: "",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["2751031843", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["fontSizer"])(98), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75)]]])
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Header_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Video_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["2751031843", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["fontSizer"])(98), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75)]]])
      }, "We make relentlessly honest objects."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Products_jsx__WEBPACK_IMPORTED_MODULE_15__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2751031843",
        dynamic: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["fontSizer"])(98), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75)]
      }, "h1.__jsx-style-dynamic-selector{font-family:'NBGrotesk';font-size:48px;line-height:1em;-webkit-letter-spacing:-.04em;-moz-letter-spacing:-.04em;-ms-letter-spacing:-.04em;letter-spacing:-.04em;padding:".concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4), "vw ").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(2), "vw;padding-bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75), "vw;width:100%;}@media (min-width:900px){h1.__jsx-style-dynamic-selector{font-size:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["fontSizer"])(98), "vw;padding:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(.75), "vw ").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(1), "vw;padding-bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getCols"])(4.75), "vw;width:75%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQzRCLEFBR2lELEFBYXFCLHdCQVo5QixlQUNDLEVBYTBELGNBWmhELHdEQWF3Qiw4Q0FFcEMsR0Fid0QsT0FjdEUsK0RBYjhDLDhDQUVuQyxXQUNmIiwiZmlsZSI6Ii9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL3BhZ2VzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9kYXRhLmpzb24nXG5pbXBvcnQgeyBSYWZMb29wIH0gZnJvbSAnLi4vdXRpbHMvcmFmTG9vcCdcblxuaW1wb3J0IHsgZ2V0Q29scywgZm9udFNpemVyIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5cbmltcG9ydCAnLi4vdXRpbHMvbWFpbi5zY3NzJ1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzeCdcbmltcG9ydCBWaWRlbyBmcm9tICcuLi9jb21wb25lbnRzL1ZpZGVvLmpzeCdcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzLmpzeCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgICByYWZMb29wID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBuZXcgUmFmTG9vcCh7bWFpblNjcm9sbDogdHJ1ZX0pIDogZmFsc2VcblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5EZSBTdHVkaW88L3RpdGxlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPFZpZGVvIC8+XG4gICAgICAgICAgICAgICAgPGgxPldlIG1ha2UgcmVsZW50bGVzc2x5IGhvbmVzdCBvYmplY3RzLjwvaDE+XG5cbiAgICAgICAgICAgICAgICA8UHJvZHVjdHMgLz5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOQkdyb3Rlc2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4OyAvLyBUT0RPOiByZXNwb25zaXZlIGZvbnQgc2l6ZSBtb2JpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uMDRlbTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJHsgZ2V0Q29scyg0KSB9dncgJHsgZ2V0Q29scygyKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJHsgZ2V0Q29scyg0Ljc1KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHsgZm9udFNpemVyKDk4KSB9dnc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAkeyBnZXRDb2xzKC43NSkgfXZ3ICR7IGdldENvbHMoMSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkeyBnZXRDb2xzKDQuNzUpIH12dztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iXX0= */\n/*@ sourceURL=/Users/dion/Sites/destudio/pages/index.jsx */")));
    });

    return _this;
  }

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);



/***/ })

})
//# sourceMappingURL=index.js.8f95bef9d92974b7b18f.hot-update.js.map