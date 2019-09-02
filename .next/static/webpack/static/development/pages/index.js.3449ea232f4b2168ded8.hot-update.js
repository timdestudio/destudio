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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1759676256", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]]) + " " + "header"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        target: "_blank",
        rel: "noopener",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1759676256", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }, "Shop"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        target: "_blank",
        rel: "noopener",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1759676256", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }, "About"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1759676256", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]]) + " " + "logo"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 72 72",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1759676256", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M16,55.16a2.17,2.17,0,0,0-3.06,0l-1.5,1.56,5,5,1.5-1.5a2.17,2.17,0,0,0,0-3.06Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1759676256", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M17.89,24.14a2.17,2.17,0,0,0,0-3.06L16,19.16a2.17,2.17,0,0,0-3.06,0l-1.5,1.5,5,5Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1759676256", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M52.81,25.22a2.17,2.17,0,0,0,0-3.06l-1.92-1.92a2.17,2.17,0,0,0-3.06,0l-1.5,1.5,5,5Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1759676256", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M50.89,56.24a2.17,2.17,0,0,0-3.06,0l-1.5,1.5,5,5,1.5-1.5a2.17,2.17,0,0,0,0-3.06Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1759676256", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M38.75,0l2.48,2.48-.78.84L37.1,0H0V72H37l-2.53-2.5-1.92,1.92-.84-.84,4.74-4.74.84.84-1.92,2L38.75,72H72V0ZM52,14.36,58.69,21l-.78.9L51.19,15.2Zm-5,5a3.33,3.33,0,0,1,4.74,0l1.92,1.92a3.33,3.33,0,0,1,0,4.74l-2.4,2.4L44.65,21.8Zm-8.22,8.16,4.26,4.32a2.16,2.16,0,1,0,3.06-3.06L41.83,24.5l.84-.84L47.05,28a3.35,3.35,0,0,1-4.74,4.74L38,28.4ZM27.61,2.66l1.08-1.08a2.64,2.64,0,0,1,3-.48l-.54,1.08a1.36,1.36,0,0,0-1.62.24L28.45,3.5a1.43,1.43,0,0,0,.06,2c.54.54,1.14.42,1.8.06.48-.3,1-.66,1.56-1,1.08-.72,2.22-1.2,3.48.06a2.59,2.59,0,0,1,.06,3.72L34.33,9.44a2.64,2.64,0,0,1-3,.48l.54-1.08a1.36,1.36,0,0,0,1.62-.24l1-1.08a1.49,1.49,0,0,0,0-2c-.54-.54-1.14-.42-1.8-.06-.48.3-1,.66-1.56,1-1.08.72-2.22,1.2-3.48-.06A2.64,2.64,0,0,1,27.61,2.66ZM21,9.38l.84.84L18,14.12l2.1,2.1,3.9-3.9.84.84-3.9,3.9,2.1,2,3.9-3.9.84.84-4.8,4.8-6.66-6.72Zm-8.94,8.88a3.33,3.33,0,0,1,4.74,0l2,2a3.33,3.33,0,0,1,0,4.74l-2.4,2.4L9.67,20.66ZM18.79,61l-2.4,2.4L9.67,56.72l2.4-2.4a3.33,3.33,0,0,1,4.74,0l2,2A3.33,3.33,0,0,1,18.79,61Zm4.14-4.2-6.66-6.66L21,45.44l.84.84L18,50.18l2.1,2.1,3.9-3.9.84.84-3.9,3.9,2.1,2,3.9-3.9.84.84ZM35.41,44.36l-1.08,1.08a2.64,2.64,0,0,1-3,.48l.54-1.08a1.36,1.36,0,0,0,1.62-.24l1-1.08a1.49,1.49,0,0,0,0-2c-.54-.54-1.14-.42-1.8-.06-.48.3-1,.66-1.56,1-1.08.72-2.22,1.2-3.48-.06a2.64,2.64,0,0,1-.06-3.72l1.08-1.08a2.64,2.64,0,0,1,3-.48l-.54,1.08a1.36,1.36,0,0,0-1.62.24L28.45,39.5a1.43,1.43,0,0,0,.06,2c.54.54,1.14.42,1.8.06.48-.3,1-.66,1.56-1,1.08-.72,2.22-1.2,3.48.06A2.59,2.59,0,0,1,35.41,44.36Zm-.84-10.8-1.92,1.92-.84-.84,4.74-4.74.84.84-2,1.92,5.82,5.82-.78.9Zm12.3,35.16a3.34,3.34,0,0,1-4.56,0L38,64.4l.84-.84,4.26,4.32a2.16,2.16,0,1,0,3.06-3.06L41.83,60.5l.84-.84L47.05,64A3.33,3.33,0,0,1,46.87,68.72Zm6.84-6.66-2.4,2.4L44.65,57.8l2.4-2.4a3.33,3.33,0,0,1,4.74,0l1.92,1.92A3.33,3.33,0,0,1,53.71,62.06Zm4.2-4.14L51.19,51.2l.84-.84L58.69,57Zm5-5a3.33,3.33,0,0,1-4.74,0L56.29,51A3.35,3.35,0,0,1,61,46.22L63,48.14A3.33,3.33,0,0,1,63,52.88Zm0-36a3.33,3.33,0,0,1-4.74,0L56.29,15A3.35,3.35,0,0,1,61,10.22L63,12.14A3.33,3.33,0,0,1,63,16.88Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1759676256", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M62.05,12.92,60.13,11a2.17,2.17,0,0,0-3.24,2.88l.18.18L59,16a2.17,2.17,0,0,0,3.24-2.88Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1759676256", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M62.05,48.92,60.13,47a2.17,2.17,0,0,0-3.24,2.88l.18.18L59,52a2.17,2.17,0,1,0,3.24-2.88Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1759676256", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1759676256",
        dynamic: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]
      }, ".header.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;z-index:3;padding:".concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), "vw;}a.__jsx-style-dynamic-selector{font-size:14px;font-weight:600;margin-right:1.75em;color:white;}a.__jsx-style-dynamic-selector:last-of-type{margin-right:2em;}.logo.__jsx-style-dynamic-selector{width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), "vw;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), "vw;}@media (min-width:900px){.header.__jsx-style-dynamic-selector{padding:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), "vw;}a.__jsx-style-dynamic-selector{font-size:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), "vw;margin-right:2em;}a.__jsx-style-dynamic-selector:last-of-type{margin-right:3em;}.logo.__jsx-style-dynamic-selector{width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), "vw;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), "vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvSGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQjRCLEFBR3dDLEFBZUEsQUFPRSxBQUlvQixBQU1NLEFBSUUsQUFLeEIsQUFJb0IsZUE1Q25DLEFBZVUsRUFPcEIsQUFtQkksSUF4Q08sT0FFTSxHQWFPLE1BVWtCLEFBbUJJLEVBYjFDLEVBSXFCLFVBbkJULE9Bb0JaLEtBbkJKLFlBU0EsQUFtQkksMkJBMUN5QixpR0FDTiw2RkFDUixXQUVELFVBRTZCLHVDQUMzQyIsImZpbGUiOiIvVXNlcnMvZGlvbi9TaXRlcy9kZXN0dWRpby9jb21wb25lbnRzL0hlYWRlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRDb2xzLCBmb250U2l6ZXIsIGNsYW1wIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5cbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzeCdcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgdHJpZ2dlclkgPSAtMVxuICAgIHRyaWdnZXJwb2ludCA9IDE1MFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMucmFmTG9vcCAmJiB0aGlzLnByb3BzLnJhZkxvb3AuYWRkKHRoaXMub25TY3JvbGwpXG4gICAgfVxuXG4gICAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIiByZWY9eyBlbCA9PiB0aGlzLm1lbnUgPSBlbCB9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlNob3A8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+QWJvdXQ8L2E+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNzIgNzJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPXt7ZmlsbDogJyMxOTE5MTknfX0gZD1cIk0xNiw1NS4xNmEyLjE3LDIuMTcsMCwwLDAtMy4wNiwwbC0xLjUsMS41Niw1LDUsMS41LTEuNWEyLjE3LDIuMTcsMCwwLDAsMC0zLjA2WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPXt7ZmlsbDogJyMxOTE5MTknfX0gZD1cIk0xNy44OSwyNC4xNGEyLjE3LDIuMTcsMCwwLDAsMC0zLjA2TDE2LDE5LjE2YTIuMTcsMi4xNywwLDAsMC0zLjA2LDBsLTEuNSwxLjUsNSw1WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPXt7ZmlsbDogJyMxOTE5MTknfX0gZD1cIk01Mi44MSwyNS4yMmEyLjE3LDIuMTcsMCwwLDAsMC0zLjA2bC0xLjkyLTEuOTJhMi4xNywyLjE3LDAsMCwwLTMuMDYsMGwtMS41LDEuNSw1LDVaXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9e3tmaWxsOiAnIzE5MTkxOSd9fSBkPVwiTTUwLjg5LDU2LjI0YTIuMTcsMi4xNywwLDAsMC0zLjA2LDBsLTEuNSwxLjUsNSw1LDEuNS0xLjVhMi4xNywyLjE3LDAsMCwwLDAtMy4wNlpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17e2ZpbGw6ICcjMTkxOTE5J319IGQ9XCJNMzguNzUsMGwyLjQ4LDIuNDgtLjc4Ljg0TDM3LjEsMEgwVjcySDM3bC0yLjUzLTIuNS0xLjkyLDEuOTItLjg0LS44NCw0Ljc0LTQuNzQuODQuODQtMS45MiwyTDM4Ljc1LDcySDcyVjBaTTUyLDE0LjM2LDU4LjY5LDIxbC0uNzguOUw1MS4xOSwxNS4yWm0tNSw1YTMuMzMsMy4zMywwLDAsMSw0Ljc0LDBsMS45MiwxLjkyYTMuMzMsMy4zMywwLDAsMSwwLDQuNzRsLTIuNCwyLjRMNDQuNjUsMjEuOFptLTguMjIsOC4xNiw0LjI2LDQuMzJhMi4xNiwyLjE2LDAsMSwwLDMuMDYtMy4wNkw0MS44MywyNC41bC44NC0uODRMNDcuMDUsMjhhMy4zNSwzLjM1LDAsMCwxLTQuNzQsNC43NEwzOCwyOC40Wk0yNy42MSwyLjY2bDEuMDgtMS4wOGEyLjY0LDIuNjQsMCwwLDEsMy0uNDhsLS41NCwxLjA4YTEuMzYsMS4zNiwwLDAsMC0xLjYyLjI0TDI4LjQ1LDMuNWExLjQzLDEuNDMsMCwwLDAsLjA2LDJjLjU0LjU0LDEuMTQuNDIsMS44LjA2LjQ4LS4zLDEtLjY2LDEuNTYtMSwxLjA4LS43MiwyLjIyLTEuMiwzLjQ4LjA2YTIuNTksMi41OSwwLDAsMSwuMDYsMy43MkwzNC4zMyw5LjQ0YTIuNjQsMi42NCwwLDAsMS0zLC40OGwuNTQtMS4wOGExLjM2LDEuMzYsMCwwLDAsMS42Mi0uMjRsMS0xLjA4YTEuNDksMS40OSwwLDAsMCwwLTJjLS41NC0uNTQtMS4xNC0uNDItMS44LS4wNi0uNDguMy0xLC42Ni0xLjU2LDEtMS4wOC43Mi0yLjIyLDEuMi0zLjQ4LS4wNkEyLjY0LDIuNjQsMCwwLDEsMjcuNjEsMi42NlpNMjEsOS4zOGwuODQuODRMMTgsMTQuMTJsMi4xLDIuMSwzLjktMy45Ljg0Ljg0LTMuOSwzLjksMi4xLDIsMy45LTMuOS44NC44NC00LjgsNC44LTYuNjYtNi43MlptLTguOTQsOC44OGEzLjMzLDMuMzMsMCwwLDEsNC43NCwwbDIsMmEzLjMzLDMuMzMsMCwwLDEsMCw0Ljc0bC0yLjQsMi40TDkuNjcsMjAuNjZaTTE4Ljc5LDYxbC0yLjQsMi40TDkuNjcsNTYuNzJsMi40LTIuNGEzLjMzLDMuMzMsMCwwLDEsNC43NCwwbDIsMkEzLjMzLDMuMzMsMCwwLDEsMTguNzksNjFabTQuMTQtNC4yLTYuNjYtNi42NkwyMSw0NS40NGwuODQuODRMMTgsNTAuMThsMi4xLDIuMSwzLjktMy45Ljg0Ljg0LTMuOSwzLjksMi4xLDIsMy45LTMuOS44NC44NFpNMzUuNDEsNDQuMzZsLTEuMDgsMS4wOGEyLjY0LDIuNjQsMCwwLDEtMywuNDhsLjU0LTEuMDhhMS4zNiwxLjM2LDAsMCwwLDEuNjItLjI0bDEtMS4wOGExLjQ5LDEuNDksMCwwLDAsMC0yYy0uNTQtLjU0LTEuMTQtLjQyLTEuOC0uMDYtLjQ4LjMtMSwuNjYtMS41NiwxLTEuMDguNzItMi4yMiwxLjItMy40OC0uMDZhMi42NCwyLjY0LDAsMCwxLS4wNi0zLjcybDEuMDgtMS4wOGEyLjY0LDIuNjQsMCwwLDEsMy0uNDhsLS41NCwxLjA4YTEuMzYsMS4zNiwwLDAsMC0xLjYyLjI0TDI4LjQ1LDM5LjVhMS40MywxLjQzLDAsMCwwLC4wNiwyYy41NC41NCwxLjE0LjQyLDEuOC4wNi40OC0uMywxLS42NiwxLjU2LTEsMS4wOC0uNzIsMi4yMi0xLjIsMy40OC4wNkEyLjU5LDIuNTksMCwwLDEsMzUuNDEsNDQuMzZabS0uODQtMTAuOC0xLjkyLDEuOTItLjg0LS44NCw0Ljc0LTQuNzQuODQuODQtMiwxLjkyLDUuODIsNS44Mi0uNzguOVptMTIuMywzNS4xNmEzLjM0LDMuMzQsMCwwLDEtNC41NiwwTDM4LDY0LjRsLjg0LS44NCw0LjI2LDQuMzJhMi4xNiwyLjE2LDAsMSwwLDMuMDYtMy4wNkw0MS44Myw2MC41bC44NC0uODRMNDcuMDUsNjRBMy4zMywzLjMzLDAsMCwxLDQ2Ljg3LDY4LjcyWm02Ljg0LTYuNjYtMi40LDIuNEw0NC42NSw1Ny44bDIuNC0yLjRhMy4zMywzLjMzLDAsMCwxLDQuNzQsMGwxLjkyLDEuOTJBMy4zMywzLjMzLDAsMCwxLDUzLjcxLDYyLjA2Wm00LjItNC4xNEw1MS4xOSw1MS4ybC44NC0uODRMNTguNjksNTdabTUtNWEzLjMzLDMuMzMsMCwwLDEtNC43NCwwTDU2LjI5LDUxQTMuMzUsMy4zNSwwLDAsMSw2MSw0Ni4yMkw2Myw0OC4xNEEzLjMzLDMuMzMsMCwwLDEsNjMsNTIuODhabTAtMzZhMy4zMywzLjMzLDAsMCwxLTQuNzQsMEw1Ni4yOSwxNUEzLjM1LDMuMzUsMCwwLDEsNjEsMTAuMjJMNjMsMTIuMTRBMy4zMywzLjMzLDAsMCwxLDYzLDE2Ljg4WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPXt7ZmlsbDogJyMxOTE5MTknfX0gZD1cIk02Mi4wNSwxMi45Miw2MC4xMywxMWEyLjE3LDIuMTcsMCwwLDAtMy4yNCwyLjg4bC4xOC4xOEw1OSwxNmEyLjE3LDIuMTcsMCwwLDAsMy4yNC0yLjg4WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPXt7ZmlsbDogJyMxOTE5MTknfX0gZD1cIk02Mi4wNSw0OC45Miw2MC4xMyw0N2EyLjE3LDIuMTcsMCwwLDAtMy4yNCwyLjg4bC4xOC4xOEw1OSw1MmEyLjE3LDIuMTcsMCwxLDAsMy4yNC0yLjg4WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICR7IGdldENvbHMoMikgfXZ3O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7IC8vIFRPRE86IHJlc3BvbnNpdmUgZm9udCBzaXplIG1vYmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS43NWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYTpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scygzLjc1KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7IGdldENvbHMoMy43NSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJHsgZ2V0Q29scygxKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZXIoMTYpfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYTpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoMS41KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkeyBnZXRDb2xzKDEuNSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBvblNjcm9sbCA9IChhcmdzKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5tZW51KSByZXR1cm5cblxuICAgICAgICBpZiAodGhpcy50cmlnZ2VyWSA9PT0gLTEpIHRoaXMudHJpZ2dlclkgPSBhcmdzLnNjcm9sbFkgKyB0aGlzLnRyaWdnZXJwb2ludFxuICAgICAgICBsZXQgZGlmZlkgPSAwXG5cbiAgICAgICAgaWYgKGFyZ3Muc2Nyb2xsWSA+PSB0aGlzLnRyaWdnZXJZKSB7XG4gICAgICAgICAgICBkaWZmWSA9IGNsYW1wKGFyZ3Muc2Nyb2xsWSAtIHRoaXMudHJpZ2dlclksIDAsIDE1MClcblxuICAgICAgICAgICAgaWYgKGRpZmZZID09PSAxNTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJZID0gYXJncy5zY3JvbGxZIC0gZGlmZllcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmRlbHRhWSA8IDAgJiYgZGlmZlkgPT09IDApXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJZID0gYXJncy5zY3JvbGxZICsgdGhpcy50cmlnZ2VycG9pbnRcblxuICAgICAgICB0aGlzLm1lbnUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsIC0ke2RpZmZZfXB4LCAwKWBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=/Users/dion/Sites/destudio/components/Header.jsx */")));
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
//# sourceMappingURL=index.js.3449ea232f4b2168ded8.hot-update.js.map