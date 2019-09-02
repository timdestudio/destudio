webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* harmony import */ var _Image_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Image.jsx */ "./components/Image.jsx");











var Header =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _React$PureComponent);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "triggerY", -1);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "triggerpoint", 150);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "componentDidMount", function () {
      _this.props.rafLoop && _this.props.rafLoop.add(_this.onScroll);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", {
        ref: function ref(el) {
          return _this.menu = el;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1061755323", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]]) + " " + "header"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        target: "_blank",
        rel: "noopener",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1061755323", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }, "Shop"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        target: "_blank",
        rel: "noopener",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1061755323", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }, "About"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1061755323",
        dynamic: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]
      }, ".header.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;z-index:3;padding:".concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), "vw;}a.__jsx-style-dynamic-selector{font-size:14px;font-weight:600;margin-right:1.75em;}a.__jsx-style-dynamic-selector:last-of-type{margin-right:2em;}.logo.__jsx-style-dynamic-selector{width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), "vw;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), "vw;}@media (min-width:900px){.header.__jsx-style-dynamic-selector{padding:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), "vw;}a.__jsx-style-dynamic-selector{font-size:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), "vw;margin-right:2em;}a.__jsx-style-dynamic-selector:last-of-type{margin-right:3em;}.logo.__jsx-style-dynamic-selector{width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), "vw;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), "vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvSGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQjRCLEFBR3dDLEFBaUJBLEFBTUUsQUFJb0IsQUFNTSxBQUlFLEFBS3hCLEFBSW9CLGVBN0NuQyxBQWlCVSxFQU1wQixBQW1CSSxJQXpDTyxPQUVNLEdBZU8sTUFTa0IsQUFtQkksRUFiMUMsRUFJcUIsVUFsQnpCLE9BbUJJLGlCQVZKLEFBbUJJLDJCQTNDeUIsaUdBQ04sNkZBQ1IsV0FFRCxVQUU2Qix1Q0FHM0MiLCJmaWxlIjoiL1VzZXJzL2Rpb24vU2l0ZXMvZGVzdHVkaW8vY29tcG9uZW50cy9IZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0Q29scywgZm9udFNpemVyLCBjbGFtcCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJ1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qc3gnXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICAgIHRyaWdnZXJZID0gLTFcbiAgICB0cmlnZ2VycG9pbnQgPSAxNTBcblxuICAgIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnJhZkxvb3AgJiYgdGhpcy5wcm9wcy5yYWZMb29wLmFkZCh0aGlzLm9uU2Nyb2xsKVxuICAgIH1cblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCIgcmVmPXsgZWwgPT4gdGhpcy5tZW51ID0gZWwgfT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5TaG9wPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPkFib3V0PC9hPlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAkeyBnZXRDb2xzKDIpIH12dztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogbWl4YmxlbmRtb2RlXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgLy8gVE9ETzogcmVzcG9uc2l2ZSBmb250IHNpemUgbW9iaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjc1ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkeyBnZXRDb2xzKDMuNzUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHsgZ2V0Q29scygzLjc1KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAkeyBnZXRDb2xzKDEpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke2ZvbnRTaXplcigxNil9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBhOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scygxLjUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7IGdldENvbHMoMS41KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIG9uU2Nyb2xsID0gKGFyZ3MpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLm1lbnUpIHJldHVyblxuXG4gICAgICAgIGlmICh0aGlzLnRyaWdnZXJZID09PSAtMSkgdGhpcy50cmlnZ2VyWSA9IGFyZ3Muc2Nyb2xsWSArIHRoaXMudHJpZ2dlcnBvaW50XG4gICAgICAgIGxldCBkaWZmWSA9IDBcblxuICAgICAgICBpZiAoYXJncy5zY3JvbGxZID49IHRoaXMudHJpZ2dlclkpIHtcbiAgICAgICAgICAgIGRpZmZZID0gY2xhbXAoYXJncy5zY3JvbGxZIC0gdGhpcy50cmlnZ2VyWSwgMCwgMTUwKVxuXG4gICAgICAgICAgICBpZiAoZGlmZlkgPT09IDE1MCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlclkgPSBhcmdzLnNjcm9sbFkgLSBkaWZmWVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFyZ3MuZGVsdGFZIDwgMCAmJiBkaWZmWSA9PT0gMClcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclkgPSBhcmdzLnNjcm9sbFkgKyB0aGlzLnRyaWdnZXJwb2ludFxuXG4gICAgICAgIHRoaXMubWVudS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwgLSR7ZGlmZll9cHgsIDApYFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */\n/*@ sourceURL=/Users/dion/Sites/destudio/components/Header.jsx */")));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onScroll", function (args) {
      if (!_this.menu) return;
      if (_this.triggerY === -1) _this.triggerY = args.scrollY + _this.triggerpoint;
      var diffY = 0;

      if (args.scrollY >= _this.triggerY) {
        diffY = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["clamp"])(args.scrollY - _this.triggerY, 0, 150);

        if (diffY === 150) {
          _this.triggerY = args.scrollY - diffY;
        }
      }

      if (args.deltaY < 0 && diffY === 0) _this.triggerY = args.scrollY + _this.triggerpoint;
      _this.menu.style.transform = "translate3d(0, -".concat(diffY, "px, 0)");
    });

    return _this;
  }

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.82b4353c3acb82cb4c25.hot-update.js.map