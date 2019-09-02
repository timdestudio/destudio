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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["562365871", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]]) + " " + "header"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        target: "_blank",
        rel: "noopener",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["562365871", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }, "Shop"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        target: "_blank",
        rel: "noopener",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["562365871", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }, "About"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["562365871", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]]) + " " + "logo"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 72 72",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["562365871", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M16,55.16a2.17,2.17,0,0,0-3.06,0l-1.5,1.56,5,5,1.5-1.5a2.17,2.17,0,0,0,0-3.06Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["562365871", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M17.89,24.14a2.17,2.17,0,0,0,0-3.06L16,19.16a2.17,2.17,0,0,0-3.06,0l-1.5,1.5,5,5Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["562365871", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M52.81,25.22a2.17,2.17,0,0,0,0-3.06l-1.92-1.92a2.17,2.17,0,0,0-3.06,0l-1.5,1.5,5,5Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["562365871", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M50.89,56.24a2.17,2.17,0,0,0-3.06,0l-1.5,1.5,5,5,1.5-1.5a2.17,2.17,0,0,0,0-3.06Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["562365871", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M38.75,0l2.48,2.48-.78.84L37.1,0H0V72H37l-2.53-2.5-1.92,1.92-.84-.84,4.74-4.74.84.84-1.92,2L38.75,72H72V0ZM52,14.36,58.69,21l-.78.9L51.19,15.2Zm-5,5a3.33,3.33,0,0,1,4.74,0l1.92,1.92a3.33,3.33,0,0,1,0,4.74l-2.4,2.4L44.65,21.8Zm-8.22,8.16,4.26,4.32a2.16,2.16,0,1,0,3.06-3.06L41.83,24.5l.84-.84L47.05,28a3.35,3.35,0,0,1-4.74,4.74L38,28.4ZM27.61,2.66l1.08-1.08a2.64,2.64,0,0,1,3-.48l-.54,1.08a1.36,1.36,0,0,0-1.62.24L28.45,3.5a1.43,1.43,0,0,0,.06,2c.54.54,1.14.42,1.8.06.48-.3,1-.66,1.56-1,1.08-.72,2.22-1.2,3.48.06a2.59,2.59,0,0,1,.06,3.72L34.33,9.44a2.64,2.64,0,0,1-3,.48l.54-1.08a1.36,1.36,0,0,0,1.62-.24l1-1.08a1.49,1.49,0,0,0,0-2c-.54-.54-1.14-.42-1.8-.06-.48.3-1,.66-1.56,1-1.08.72-2.22,1.2-3.48-.06A2.64,2.64,0,0,1,27.61,2.66ZM21,9.38l.84.84L18,14.12l2.1,2.1,3.9-3.9.84.84-3.9,3.9,2.1,2,3.9-3.9.84.84-4.8,4.8-6.66-6.72Zm-8.94,8.88a3.33,3.33,0,0,1,4.74,0l2,2a3.33,3.33,0,0,1,0,4.74l-2.4,2.4L9.67,20.66ZM18.79,61l-2.4,2.4L9.67,56.72l2.4-2.4a3.33,3.33,0,0,1,4.74,0l2,2A3.33,3.33,0,0,1,18.79,61Zm4.14-4.2-6.66-6.66L21,45.44l.84.84L18,50.18l2.1,2.1,3.9-3.9.84.84-3.9,3.9,2.1,2,3.9-3.9.84.84ZM35.41,44.36l-1.08,1.08a2.64,2.64,0,0,1-3,.48l.54-1.08a1.36,1.36,0,0,0,1.62-.24l1-1.08a1.49,1.49,0,0,0,0-2c-.54-.54-1.14-.42-1.8-.06-.48.3-1,.66-1.56,1-1.08.72-2.22,1.2-3.48-.06a2.64,2.64,0,0,1-.06-3.72l1.08-1.08a2.64,2.64,0,0,1,3-.48l-.54,1.08a1.36,1.36,0,0,0-1.62.24L28.45,39.5a1.43,1.43,0,0,0,.06,2c.54.54,1.14.42,1.8.06.48-.3,1-.66,1.56-1,1.08-.72,2.22-1.2,3.48.06A2.59,2.59,0,0,1,35.41,44.36Zm-.84-10.8-1.92,1.92-.84-.84,4.74-4.74.84.84-2,1.92,5.82,5.82-.78.9Zm12.3,35.16a3.34,3.34,0,0,1-4.56,0L38,64.4l.84-.84,4.26,4.32a2.16,2.16,0,1,0,3.06-3.06L41.83,60.5l.84-.84L47.05,64A3.33,3.33,0,0,1,46.87,68.72Zm6.84-6.66-2.4,2.4L44.65,57.8l2.4-2.4a3.33,3.33,0,0,1,4.74,0l1.92,1.92A3.33,3.33,0,0,1,53.71,62.06Zm4.2-4.14L51.19,51.2l.84-.84L58.69,57Zm5-5a3.33,3.33,0,0,1-4.74,0L56.29,51A3.35,3.35,0,0,1,61,46.22L63,48.14A3.33,3.33,0,0,1,63,52.88Zm0-36a3.33,3.33,0,0,1-4.74,0L56.29,15A3.35,3.35,0,0,1,61,10.22L63,12.14A3.33,3.33,0,0,1,63,16.88Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["562365871", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M62.05,12.92,60.13,11a2.17,2.17,0,0,0-3.24,2.88l.18.18L59,16a2.17,2.17,0,0,0,3.24-2.88Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["562365871", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M62.05,48.92,60.13,47a2.17,2.17,0,0,0-3.24,2.88l.18.18L59,52a2.17,2.17,0,1,0,3.24-2.88Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["562365871", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "562365871",
        dynamic: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]
      }, ".header.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;z-index:3;padding:".concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), "vw;mix-blend-mode:difference;color:white;}a.__jsx-style-dynamic-selector{font-size:14px;font-weight:600;margin-right:1.75em;color:white;}a.__jsx-style-dynamic-selector:last-of-type{margin-right:2em;}.logo.__jsx-style-dynamic-selector{width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), "vw;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), "vw;background:#191919;}@media (min-width:900px){.header.__jsx-style-dynamic-selector{padding:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), "vw;}a.__jsx-style-dynamic-selector{font-size:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), "vw;margin-right:2em;}a.__jsx-style-dynamic-selector:last-of-type{margin-right:3em;}.logo.__jsx-style-dynamic-selector{width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), "vw;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), "vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvSGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQjRCLEFBR3dDLEFBa0JBLEFBT0UsQUFJb0IsQUFPTSxBQUlFLEFBS3hCLEFBSW9CLGVBaERuQyxBQWtCVSxFQU9wQixBQW9CSSxJQTVDTyxPQUVNLEdBZ0JPLE1BVWtCLEFBb0JJLEVBYjFDLEVBSXFCLFVBcEJULE9BcUJaLEtBcEJKLFlBU3VCLEFBb0JuQixtQkFuQkosUUEzQjZCLGlHQUNOLDZGQUNSLFdBRUQsVUFFNkIsdUNBRWIsMEJBQ2QsWUFDaEIiLCJmaWxlIjoiL1VzZXJzL2Rpb24vU2l0ZXMvZGVzdHVkaW8vY29tcG9uZW50cy9IZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0Q29scywgZm9udFNpemVyLCBjbGFtcCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJ1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qc3gnXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICAgIHRyaWdnZXJZID0gLTFcbiAgICB0cmlnZ2VycG9pbnQgPSAxNTBcblxuICAgIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnJhZkxvb3AgJiYgdGhpcy5wcm9wcy5yYWZMb29wLmFkZCh0aGlzLm9uU2Nyb2xsKVxuICAgIH1cblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCIgcmVmPXsgZWwgPT4gdGhpcy5tZW51ID0gZWwgfT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5TaG9wPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPkFib3V0PC9hPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDcyIDcyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17e2ZpbGw6ICcjMTkxOTE5J319IGQ9XCJNMTYsNTUuMTZhMi4xNywyLjE3LDAsMCwwLTMuMDYsMGwtMS41LDEuNTYsNSw1LDEuNS0xLjVhMi4xNywyLjE3LDAsMCwwLDAtMy4wNlpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17e2ZpbGw6ICcjMTkxOTE5J319IGQ9XCJNMTcuODksMjQuMTRhMi4xNywyLjE3LDAsMCwwLDAtMy4wNkwxNiwxOS4xNmEyLjE3LDIuMTcsMCwwLDAtMy4wNiwwbC0xLjUsMS41LDUsNVpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17e2ZpbGw6ICcjMTkxOTE5J319IGQ9XCJNNTIuODEsMjUuMjJhMi4xNywyLjE3LDAsMCwwLDAtMy4wNmwtMS45Mi0xLjkyYTIuMTcsMi4xNywwLDAsMC0zLjA2LDBsLTEuNSwxLjUsNSw1WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPXt7ZmlsbDogJyMxOTE5MTknfX0gZD1cIk01MC44OSw1Ni4yNGEyLjE3LDIuMTcsMCwwLDAtMy4wNiwwbC0xLjUsMS41LDUsNSwxLjUtMS41YTIuMTcsMi4xNywwLDAsMCwwLTMuMDZaXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9e3tmaWxsOiAnIzE5MTkxOSd9fSBkPVwiTTM4Ljc1LDBsMi40OCwyLjQ4LS43OC44NEwzNy4xLDBIMFY3MkgzN2wtMi41My0yLjUtMS45MiwxLjkyLS44NC0uODQsNC43NC00Ljc0Ljg0Ljg0LTEuOTIsMkwzOC43NSw3Mkg3MlYwWk01MiwxNC4zNiw1OC42OSwyMWwtLjc4LjlMNTEuMTksMTUuMlptLTUsNWEzLjMzLDMuMzMsMCwwLDEsNC43NCwwbDEuOTIsMS45MmEzLjMzLDMuMzMsMCwwLDEsMCw0Ljc0bC0yLjQsMi40TDQ0LjY1LDIxLjhabS04LjIyLDguMTYsNC4yNiw0LjMyYTIuMTYsMi4xNiwwLDEsMCwzLjA2LTMuMDZMNDEuODMsMjQuNWwuODQtLjg0TDQ3LjA1LDI4YTMuMzUsMy4zNSwwLDAsMS00Ljc0LDQuNzRMMzgsMjguNFpNMjcuNjEsMi42NmwxLjA4LTEuMDhhMi42NCwyLjY0LDAsMCwxLDMtLjQ4bC0uNTQsMS4wOGExLjM2LDEuMzYsMCwwLDAtMS42Mi4yNEwyOC40NSwzLjVhMS40MywxLjQzLDAsMCwwLC4wNiwyYy41NC41NCwxLjE0LjQyLDEuOC4wNi40OC0uMywxLS42NiwxLjU2LTEsMS4wOC0uNzIsMi4yMi0xLjIsMy40OC4wNmEyLjU5LDIuNTksMCwwLDEsLjA2LDMuNzJMMzQuMzMsOS40NGEyLjY0LDIuNjQsMCwwLDEtMywuNDhsLjU0LTEuMDhhMS4zNiwxLjM2LDAsMCwwLDEuNjItLjI0bDEtMS4wOGExLjQ5LDEuNDksMCwwLDAsMC0yYy0uNTQtLjU0LTEuMTQtLjQyLTEuOC0uMDYtLjQ4LjMtMSwuNjYtMS41NiwxLTEuMDguNzItMi4yMiwxLjItMy40OC0uMDZBMi42NCwyLjY0LDAsMCwxLDI3LjYxLDIuNjZaTTIxLDkuMzhsLjg0Ljg0TDE4LDE0LjEybDIuMSwyLjEsMy45LTMuOS44NC44NC0zLjksMy45LDIuMSwyLDMuOS0zLjkuODQuODQtNC44LDQuOC02LjY2LTYuNzJabS04Ljk0LDguODhhMy4zMywzLjMzLDAsMCwxLDQuNzQsMGwyLDJhMy4zMywzLjMzLDAsMCwxLDAsNC43NGwtMi40LDIuNEw5LjY3LDIwLjY2Wk0xOC43OSw2MWwtMi40LDIuNEw5LjY3LDU2LjcybDIuNC0yLjRhMy4zMywzLjMzLDAsMCwxLDQuNzQsMGwyLDJBMy4zMywzLjMzLDAsMCwxLDE4Ljc5LDYxWm00LjE0LTQuMi02LjY2LTYuNjZMMjEsNDUuNDRsLjg0Ljg0TDE4LDUwLjE4bDIuMSwyLjEsMy45LTMuOS44NC44NC0zLjksMy45LDIuMSwyLDMuOS0zLjkuODQuODRaTTM1LjQxLDQ0LjM2bC0xLjA4LDEuMDhhMi42NCwyLjY0LDAsMCwxLTMsLjQ4bC41NC0xLjA4YTEuMzYsMS4zNiwwLDAsMCwxLjYyLS4yNGwxLTEuMDhhMS40OSwxLjQ5LDAsMCwwLDAtMmMtLjU0LS41NC0xLjE0LS40Mi0xLjgtLjA2LS40OC4zLTEsLjY2LTEuNTYsMS0xLjA4LjcyLTIuMjIsMS4yLTMuNDgtLjA2YTIuNjQsMi42NCwwLDAsMS0uMDYtMy43MmwxLjA4LTEuMDhhMi42NCwyLjY0LDAsMCwxLDMtLjQ4bC0uNTQsMS4wOGExLjM2LDEuMzYsMCwwLDAtMS42Mi4yNEwyOC40NSwzOS41YTEuNDMsMS40MywwLDAsMCwuMDYsMmMuNTQuNTQsMS4xNC40MiwxLjguMDYuNDgtLjMsMS0uNjYsMS41Ni0xLDEuMDgtLjcyLDIuMjItMS4yLDMuNDguMDZBMi41OSwyLjU5LDAsMCwxLDM1LjQxLDQ0LjM2Wm0tLjg0LTEwLjgtMS45MiwxLjkyLS44NC0uODQsNC43NC00Ljc0Ljg0Ljg0LTIsMS45Miw1LjgyLDUuODItLjc4LjlabTEyLjMsMzUuMTZhMy4zNCwzLjM0LDAsMCwxLTQuNTYsMEwzOCw2NC40bC44NC0uODQsNC4yNiw0LjMyYTIuMTYsMi4xNiwwLDEsMCwzLjA2LTMuMDZMNDEuODMsNjAuNWwuODQtLjg0TDQ3LjA1LDY0QTMuMzMsMy4zMywwLDAsMSw0Ni44Nyw2OC43MlptNi44NC02LjY2LTIuNCwyLjRMNDQuNjUsNTcuOGwyLjQtMi40YTMuMzMsMy4zMywwLDAsMSw0Ljc0LDBsMS45MiwxLjkyQTMuMzMsMy4zMywwLDAsMSw1My43MSw2Mi4wNlptNC4yLTQuMTRMNTEuMTksNTEuMmwuODQtLjg0TDU4LjY5LDU3Wm01LTVhMy4zMywzLjMzLDAsMCwxLTQuNzQsMEw1Ni4yOSw1MUEzLjM1LDMuMzUsMCwwLDEsNjEsNDYuMjJMNjMsNDguMTRBMy4zMywzLjMzLDAsMCwxLDYzLDUyLjg4Wm0wLTM2YTMuMzMsMy4zMywwLDAsMS00Ljc0LDBMNTYuMjksMTVBMy4zNSwzLjM1LDAsMCwxLDYxLDEwLjIyTDYzLDEyLjE0QTMuMzMsMy4zMywwLDAsMSw2MywxNi44OFpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17e2ZpbGw6ICcjMTkxOTE5J319IGQ9XCJNNjIuMDUsMTIuOTIsNjAuMTMsMTFhMi4xNywyLjE3LDAsMCwwLTMuMjQsMi44OGwuMTguMThMNTksMTZhMi4xNywyLjE3LDAsMCwwLDMuMjQtMi44OFpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17e2ZpbGw6ICcjMTkxOTE5J319IGQ9XCJNNjIuMDUsNDguOTIsNjAuMTMsNDdhMi4xNywyLjE3LDAsMCwwLTMuMjQsMi44OGwuMTguMThMNTksNTJhMi4xNywyLjE3LDAsMSwwLDMuMjQtMi44OFpcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAkeyBnZXRDb2xzKDIpIH12dztcblxuICAgICAgICAgICAgICAgICAgICAgICAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgLy8gVE9ETzogcmVzcG9uc2l2ZSBmb250IHNpemUgbW9iaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjc1ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkeyBnZXRDb2xzKDMuNzUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHsgZ2V0Q29scygzLjc1KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJHsgZ2V0Q29scygxKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZXIoMTYpfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYTpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoMS41KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkeyBnZXRDb2xzKDEuNSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBvblNjcm9sbCA9IChhcmdzKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5tZW51KSByZXR1cm5cblxuICAgICAgICBpZiAodGhpcy50cmlnZ2VyWSA9PT0gLTEpIHRoaXMudHJpZ2dlclkgPSBhcmdzLnNjcm9sbFkgKyB0aGlzLnRyaWdnZXJwb2ludFxuICAgICAgICBsZXQgZGlmZlkgPSAwXG5cbiAgICAgICAgaWYgKGFyZ3Muc2Nyb2xsWSA+PSB0aGlzLnRyaWdnZXJZKSB7XG4gICAgICAgICAgICBkaWZmWSA9IGNsYW1wKGFyZ3Muc2Nyb2xsWSAtIHRoaXMudHJpZ2dlclksIDAsIDE1MClcblxuICAgICAgICAgICAgaWYgKGRpZmZZID09PSAxNTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJZID0gYXJncy5zY3JvbGxZIC0gZGlmZllcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmRlbHRhWSA8IDAgJiYgZGlmZlkgPT09IDApXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJZID0gYXJncy5zY3JvbGxZICsgdGhpcy50cmlnZ2VycG9pbnRcblxuICAgICAgICB0aGlzLm1lbnUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsIC0ke2RpZmZZfXB4LCAwKWBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=/Users/dion/Sites/destudio/components/Header.jsx */")));
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
//# sourceMappingURL=index.js.a752a5d0a8fac5823a60.hot-update.js.map