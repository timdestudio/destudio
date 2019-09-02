(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "componentDidUpdate", function (prevProps) {
      if (!_this.props.rafLoop || _this.props.rafLoop === prevProps.rafLoop) return;

      _this.props.rafLoop.add(_this.onScroll);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", {
        ref: function ref(el) {
          return _this.menu = el;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]]) + " " + "header"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        target: "_blank",
        rel: "noopener",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }, "Shop"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        target: "_blank",
        rel: "noopener",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }, "About"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]]) + " " + "logo"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 72 72",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M16,55.16a2.17,2.17,0,0,0-3.06,0l-1.5,1.56,5,5,1.5-1.5a2.17,2.17,0,0,0,0-3.06Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M17.89,24.14a2.17,2.17,0,0,0,0-3.06L16,19.16a2.17,2.17,0,0,0-3.06,0l-1.5,1.5,5,5Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M52.81,25.22a2.17,2.17,0,0,0,0-3.06l-1.92-1.92a2.17,2.17,0,0,0-3.06,0l-1.5,1.5,5,5Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M50.89,56.24a2.17,2.17,0,0,0-3.06,0l-1.5,1.5,5,5,1.5-1.5a2.17,2.17,0,0,0,0-3.06Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M38.75,0l2.48,2.48-.78.84L37.1,0H0V72H37l-2.53-2.5-1.92,1.92-.84-.84,4.74-4.74.84.84-1.92,2L38.75,72H72V0ZM52,14.36,58.69,21l-.78.9L51.19,15.2Zm-5,5a3.33,3.33,0,0,1,4.74,0l1.92,1.92a3.33,3.33,0,0,1,0,4.74l-2.4,2.4L44.65,21.8Zm-8.22,8.16,4.26,4.32a2.16,2.16,0,1,0,3.06-3.06L41.83,24.5l.84-.84L47.05,28a3.35,3.35,0,0,1-4.74,4.74L38,28.4ZM27.61,2.66l1.08-1.08a2.64,2.64,0,0,1,3-.48l-.54,1.08a1.36,1.36,0,0,0-1.62.24L28.45,3.5a1.43,1.43,0,0,0,.06,2c.54.54,1.14.42,1.8.06.48-.3,1-.66,1.56-1,1.08-.72,2.22-1.2,3.48.06a2.59,2.59,0,0,1,.06,3.72L34.33,9.44a2.64,2.64,0,0,1-3,.48l.54-1.08a1.36,1.36,0,0,0,1.62-.24l1-1.08a1.49,1.49,0,0,0,0-2c-.54-.54-1.14-.42-1.8-.06-.48.3-1,.66-1.56,1-1.08.72-2.22,1.2-3.48-.06A2.64,2.64,0,0,1,27.61,2.66ZM21,9.38l.84.84L18,14.12l2.1,2.1,3.9-3.9.84.84-3.9,3.9,2.1,2,3.9-3.9.84.84-4.8,4.8-6.66-6.72Zm-8.94,8.88a3.33,3.33,0,0,1,4.74,0l2,2a3.33,3.33,0,0,1,0,4.74l-2.4,2.4L9.67,20.66ZM18.79,61l-2.4,2.4L9.67,56.72l2.4-2.4a3.33,3.33,0,0,1,4.74,0l2,2A3.33,3.33,0,0,1,18.79,61Zm4.14-4.2-6.66-6.66L21,45.44l.84.84L18,50.18l2.1,2.1,3.9-3.9.84.84-3.9,3.9,2.1,2,3.9-3.9.84.84ZM35.41,44.36l-1.08,1.08a2.64,2.64,0,0,1-3,.48l.54-1.08a1.36,1.36,0,0,0,1.62-.24l1-1.08a1.49,1.49,0,0,0,0-2c-.54-.54-1.14-.42-1.8-.06-.48.3-1,.66-1.56,1-1.08.72-2.22,1.2-3.48-.06a2.64,2.64,0,0,1-.06-3.72l1.08-1.08a2.64,2.64,0,0,1,3-.48l-.54,1.08a1.36,1.36,0,0,0-1.62.24L28.45,39.5a1.43,1.43,0,0,0,.06,2c.54.54,1.14.42,1.8.06.48-.3,1-.66,1.56-1,1.08-.72,2.22-1.2,3.48.06A2.59,2.59,0,0,1,35.41,44.36Zm-.84-10.8-1.92,1.92-.84-.84,4.74-4.74.84.84-2,1.92,5.82,5.82-.78.9Zm12.3,35.16a3.34,3.34,0,0,1-4.56,0L38,64.4l.84-.84,4.26,4.32a2.16,2.16,0,1,0,3.06-3.06L41.83,60.5l.84-.84L47.05,64A3.33,3.33,0,0,1,46.87,68.72Zm6.84-6.66-2.4,2.4L44.65,57.8l2.4-2.4a3.33,3.33,0,0,1,4.74,0l1.92,1.92A3.33,3.33,0,0,1,53.71,62.06Zm4.2-4.14L51.19,51.2l.84-.84L58.69,57Zm5-5a3.33,3.33,0,0,1-4.74,0L56.29,51A3.35,3.35,0,0,1,61,46.22L63,48.14A3.33,3.33,0,0,1,63,52.88Zm0-36a3.33,3.33,0,0,1-4.74,0L56.29,15A3.35,3.35,0,0,1,61,10.22L63,12.14A3.33,3.33,0,0,1,63,16.88Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M62.05,12.92,60.13,11a2.17,2.17,0,0,0-3.24,2.88l.18.18L59,16a2.17,2.17,0,0,0,3.24-2.88Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M62.05,48.92,60.13,47a2.17,2.17,0,0,0-3.24,2.88l.18.18L59,52a2.17,2.17,0,1,0,3.24-2.88Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]]])
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3250136302",
        dynamic: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5)]
      }, ".header.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:".concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), "vw;z-index:3;}a.__jsx-style-dynamic-selector{font-size:14px;font-weight:600;margin-right:1.75em;}a.__jsx-style-dynamic-selector:last-of-type{margin-right:2em;}.logo.__jsx-style-dynamic-selector{position:relative;width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), "vw;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(3.75), "vw;background:white;}@media (min-width:900px){.header.__jsx-style-dynamic-selector{padding:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), "vw;}a.__jsx-style-dynamic-selector{font-size:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["fontSizer"])(16), "vw;margin-right:2em;}a.__jsx-style-dynamic-selector:last-of-type{margin-right:3em;}.logo.__jsx-style-dynamic-selector{width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), "vw;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1.5), "vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvSGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQzRCLEFBR3dDLEFBY0EsQUFNRSxBQUlDLEFBU3lCLEFBSUUsQUFLeEIsQUFJb0IsZUE3Q25DLEFBY1UsRUFNcEIsQUFzQkksQ0FsQnFDLEdBdkI5QixPQUVNLEdBWU8sTUErQnNCLEVBYjFDLEVBSXFCLFVBckJ6QixJQVMwQyxHQWF0QyxpQkFTQSxrQkFwQmlCLFNBdkJRLFFBd0I3Qix5RkF2QnVCLDZGQUNSLFdBRTRCLHVDQUM3QixVQUNkIiwiZmlsZSI6Ii9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldENvbHMsIGZvbnRTaXplciwgY2xhbXAgfSBmcm9tICcuLi91dGlscy91dGlscydcblxuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanN4J1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgICB0cmlnZ2VyWSA9IC0xXG4gICAgdHJpZ2dlcnBvaW50ID0gMTUwXG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUgPSBwcmV2UHJvcHMgPT4ge1xuICAgICAgICBpZiggIXRoaXMucHJvcHMucmFmTG9vcCB8fCB0aGlzLnByb3BzLnJhZkxvb3AgPT09IHByZXZQcm9wcy5yYWZMb29wICkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5wcm9wcy5yYWZMb29wLmFkZCh0aGlzLm9uU2Nyb2xsKVxuICAgIH1cblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCIgcmVmPXsgZWwgPT4gdGhpcy5tZW51ID0gZWwgfT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5TaG9wPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPkFib3V0PC9hPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDcyIDcyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17e2ZpbGw6ICcjMTkxOTE5J319IGQ9XCJNMTYsNTUuMTZhMi4xNywyLjE3LDAsMCwwLTMuMDYsMGwtMS41LDEuNTYsNSw1LDEuNS0xLjVhMi4xNywyLjE3LDAsMCwwLDAtMy4wNlpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17e2ZpbGw6ICcjMTkxOTE5J319IGQ9XCJNMTcuODksMjQuMTRhMi4xNywyLjE3LDAsMCwwLDAtMy4wNkwxNiwxOS4xNmEyLjE3LDIuMTcsMCwwLDAtMy4wNiwwbC0xLjUsMS41LDUsNVpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17e2ZpbGw6ICcjMTkxOTE5J319IGQ9XCJNNTIuODEsMjUuMjJhMi4xNywyLjE3LDAsMCwwLDAtMy4wNmwtMS45Mi0xLjkyYTIuMTcsMi4xNywwLDAsMC0zLjA2LDBsLTEuNSwxLjUsNSw1WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPXt7ZmlsbDogJyMxOTE5MTknfX0gZD1cIk01MC44OSw1Ni4yNGEyLjE3LDIuMTcsMCwwLDAtMy4wNiwwbC0xLjUsMS41LDUsNSwxLjUtMS41YTIuMTcsMi4xNywwLDAsMCwwLTMuMDZaXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9e3tmaWxsOiAnIzE5MTkxOSd9fSBkPVwiTTM4Ljc1LDBsMi40OCwyLjQ4LS43OC44NEwzNy4xLDBIMFY3MkgzN2wtMi41My0yLjUtMS45MiwxLjkyLS44NC0uODQsNC43NC00Ljc0Ljg0Ljg0LTEuOTIsMkwzOC43NSw3Mkg3MlYwWk01MiwxNC4zNiw1OC42OSwyMWwtLjc4LjlMNTEuMTksMTUuMlptLTUsNWEzLjMzLDMuMzMsMCwwLDEsNC43NCwwbDEuOTIsMS45MmEzLjMzLDMuMzMsMCwwLDEsMCw0Ljc0bC0yLjQsMi40TDQ0LjY1LDIxLjhabS04LjIyLDguMTYsNC4yNiw0LjMyYTIuMTYsMi4xNiwwLDEsMCwzLjA2LTMuMDZMNDEuODMsMjQuNWwuODQtLjg0TDQ3LjA1LDI4YTMuMzUsMy4zNSwwLDAsMS00Ljc0LDQuNzRMMzgsMjguNFpNMjcuNjEsMi42NmwxLjA4LTEuMDhhMi42NCwyLjY0LDAsMCwxLDMtLjQ4bC0uNTQsMS4wOGExLjM2LDEuMzYsMCwwLDAtMS42Mi4yNEwyOC40NSwzLjVhMS40MywxLjQzLDAsMCwwLC4wNiwyYy41NC41NCwxLjE0LjQyLDEuOC4wNi40OC0uMywxLS42NiwxLjU2LTEsMS4wOC0uNzIsMi4yMi0xLjIsMy40OC4wNmEyLjU5LDIuNTksMCwwLDEsLjA2LDMuNzJMMzQuMzMsOS40NGEyLjY0LDIuNjQsMCwwLDEtMywuNDhsLjU0LTEuMDhhMS4zNiwxLjM2LDAsMCwwLDEuNjItLjI0bDEtMS4wOGExLjQ5LDEuNDksMCwwLDAsMC0yYy0uNTQtLjU0LTEuMTQtLjQyLTEuOC0uMDYtLjQ4LjMtMSwuNjYtMS41NiwxLTEuMDguNzItMi4yMiwxLjItMy40OC0uMDZBMi42NCwyLjY0LDAsMCwxLDI3LjYxLDIuNjZaTTIxLDkuMzhsLjg0Ljg0TDE4LDE0LjEybDIuMSwyLjEsMy45LTMuOS44NC44NC0zLjksMy45LDIuMSwyLDMuOS0zLjkuODQuODQtNC44LDQuOC02LjY2LTYuNzJabS04Ljk0LDguODhhMy4zMywzLjMzLDAsMCwxLDQuNzQsMGwyLDJhMy4zMywzLjMzLDAsMCwxLDAsNC43NGwtMi40LDIuNEw5LjY3LDIwLjY2Wk0xOC43OSw2MWwtMi40LDIuNEw5LjY3LDU2LjcybDIuNC0yLjRhMy4zMywzLjMzLDAsMCwxLDQuNzQsMGwyLDJBMy4zMywzLjMzLDAsMCwxLDE4Ljc5LDYxWm00LjE0LTQuMi02LjY2LTYuNjZMMjEsNDUuNDRsLjg0Ljg0TDE4LDUwLjE4bDIuMSwyLjEsMy45LTMuOS44NC44NC0zLjksMy45LDIuMSwyLDMuOS0zLjkuODQuODRaTTM1LjQxLDQ0LjM2bC0xLjA4LDEuMDhhMi42NCwyLjY0LDAsMCwxLTMsLjQ4bC41NC0xLjA4YTEuMzYsMS4zNiwwLDAsMCwxLjYyLS4yNGwxLTEuMDhhMS40OSwxLjQ5LDAsMCwwLDAtMmMtLjU0LS41NC0xLjE0LS40Mi0xLjgtLjA2LS40OC4zLTEsLjY2LTEuNTYsMS0xLjA4LjcyLTIuMjIsMS4yLTMuNDgtLjA2YTIuNjQsMi42NCwwLDAsMS0uMDYtMy43MmwxLjA4LTEuMDhhMi42NCwyLjY0LDAsMCwxLDMtLjQ4bC0uNTQsMS4wOGExLjM2LDEuMzYsMCwwLDAtMS42Mi4yNEwyOC40NSwzOS41YTEuNDMsMS40MywwLDAsMCwuMDYsMmMuNTQuNTQsMS4xNC40MiwxLjguMDYuNDgtLjMsMS0uNjYsMS41Ni0xLDEuMDgtLjcyLDIuMjItMS4yLDMuNDguMDZBMi41OSwyLjU5LDAsMCwxLDM1LjQxLDQ0LjM2Wm0tLjg0LTEwLjgtMS45MiwxLjkyLS44NC0uODQsNC43NC00Ljc0Ljg0Ljg0LTIsMS45Miw1LjgyLDUuODItLjc4LjlabTEyLjMsMzUuMTZhMy4zNCwzLjM0LDAsMCwxLTQuNTYsMEwzOCw2NC40bC44NC0uODQsNC4yNiw0LjMyYTIuMTYsMi4xNiwwLDEsMCwzLjA2LTMuMDZMNDEuODMsNjAuNWwuODQtLjg0TDQ3LjA1LDY0QTMuMzMsMy4zMywwLDAsMSw0Ni44Nyw2OC43MlptNi44NC02LjY2LTIuNCwyLjRMNDQuNjUsNTcuOGwyLjQtMi40YTMuMzMsMy4zMywwLDAsMSw0Ljc0LDBsMS45MiwxLjkyQTMuMzMsMy4zMywwLDAsMSw1My43MSw2Mi4wNlptNC4yLTQuMTRMNTEuMTksNTEuMmwuODQtLjg0TDU4LjY5LDU3Wm01LTVhMy4zMywzLjMzLDAsMCwxLTQuNzQsMEw1Ni4yOSw1MUEzLjM1LDMuMzUsMCwwLDEsNjEsNDYuMjJMNjMsNDguMTRBMy4zMywzLjMzLDAsMCwxLDYzLDUyLjg4Wm0wLTM2YTMuMzMsMy4zMywwLDAsMS00Ljc0LDBMNTYuMjksMTVBMy4zNSwzLjM1LDAsMCwxLDYxLDEwLjIyTDYzLDEyLjE0QTMuMzMsMy4zMywwLDAsMSw2MywxNi44OFpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17e2ZpbGw6ICcjMTkxOTE5J319IGQ9XCJNNjIuMDUsMTIuOTIsNjAuMTMsMTFhMi4xNywyLjE3LDAsMCwwLTMuMjQsMi44OGwuMTguMThMNTksMTZhMi4xNywyLjE3LDAsMCwwLDMuMjQtMi44OFpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17e2ZpbGw6ICcjMTkxOTE5J319IGQ9XCJNNjIuMDUsNDguOTIsNjAuMTMsNDdhMi4xNywyLjE3LDAsMCwwLTMuMjQsMi44OGwuMTguMThMNTksNTJhMi4xNywyLjE3LDAsMSwwLDMuMjQtMi44OFpcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAkeyBnZXRDb2xzKDIpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgLy8gVE9ETzogcmVzcG9uc2l2ZSBmb250IHNpemUgbW9iaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjc1ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkeyBnZXRDb2xzKDMuNzUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHsgZ2V0Q29scygzLjc1KSB9dnc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJHsgZ2V0Q29scygxKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZXIoMTYpfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYTpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoMS41KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkeyBnZXRDb2xzKDEuNSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBvblNjcm9sbCA9IChhcmdzKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5tZW51KSByZXR1cm5cblxuICAgICAgICBpZiAodGhpcy50cmlnZ2VyWSA9PT0gLTEpIHRoaXMudHJpZ2dlclkgPSBhcmdzLnNjcm9sbFkgKyB0aGlzLnRyaWdnZXJwb2ludFxuICAgICAgICBsZXQgZGlmZlkgPSAwXG5cbiAgICAgICAgaWYgKGFyZ3Muc2Nyb2xsWSA+PSB0aGlzLnRyaWdnZXJZKSB7XG4gICAgICAgICAgICBkaWZmWSA9IGNsYW1wKGFyZ3Muc2Nyb2xsWSAtIHRoaXMudHJpZ2dlclksIDAsIDE1MClcblxuICAgICAgICAgICAgaWYgKGRpZmZZID09PSAxNTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJZID0gYXJncy5zY3JvbGxZIC0gZGlmZllcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmRlbHRhWSA8IDAgJiYgZGlmZlkgPT09IDApXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJZID0gYXJncy5zY3JvbGxZICsgdGhpcy50cmlnZ2VycG9pbnRcblxuICAgICAgICB0aGlzLm1lbnUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsIC0ke2RpZmZZfXB4LCAwKWBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=/Users/dion/Sites/destudio/components/Header.jsx */")));
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

/***/ }),

/***/ "./components/Image.jsx":
/*!******************************!*\
  !*** ./components/Image.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







 // import delay from 'delay'
// import Observer from 'react-intersection-observer'
// import {mergeClassNames,} from 'bia-template-helpers'
// import {map, clamp,} from 'bia-math'
// import {ratioPercentage, getResponsiveImage, supportsMixBlendMode,} from '_utils'

var Image =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Image, _React$PureComponent);

  function Image() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Image);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Image).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Image, [{
    key: "render",
    // state = {
    //     src: this.props.src,
    //     inView: false,
    // }
    // async componentDidMount() {
    //     if (this.state.src) return
    //     await delay(250)
    //     if (!this.container) return
    //     const bounds = this.container.getBoundingClientRect()
    //     this.setState({
    //         bounds,
    //         top: bounds.top + window.pageYOffset,
    //         bottom: bounds.bottom + window.pageYOffset,
    //         actualHeight: bounds.height * this.initScale,
    //         hasBlend: supportsMixBlendMode(),
    //     })
    //     this.props.rafScroll && this.props.rafScroll.add(this.rafLoop)
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     if (!this.props.image || prevProps.image.url === this.props.image.url)
    //         return
    //     const newSrc = getResponsiveImage(this.props.image, this.state.bounds)
    //     if (prevState.src && (!this.state.src || newSrc === this.state.src))
    //         return
    //     return this.setState({
    //         src: newSrc,
    //     })
    // }
    // componentWillUnmount() {
    //     this.props.rafScroll && this.props.rafScroll.remove(this.rafLoop)
    // }
    // /**
    //  * Event Handlers
    //  */
    // toggleInView = inView => {
    //     if (this.state.src || inView == false || !this.props.image) return
    //     const imageSrc = getResponsiveImage(this.props.image, this.state.bounds)
    //     this.setState({
    //         src: imageSrc,
    //         inView: true,
    //     })
    //     if (this.props.callback) {
    //         const image = document.createElement(`img`)
    //         image.src = imageSrc
    //         image.onload = e => {
    //             this.props.callback()
    //         }
    //     }
    // }

    /**
     * Renders
     */
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null);
      var image = this.props.image;

      var _ref = image ? image : {},
          _ref$url = _ref.url,
          url = _ref$url === void 0 ? "" : _ref$url,
          _ref$alt = _ref.alt,
          alt = _ref$alt === void 0 ? "" : _ref$alt; // thisthis.props.callback()


      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Observer, {
        className: mergeClassNames(s.container, this.props.className, this.props.animateInView ? s.animateInView : false, this.state.inView //  && this.props.animateInView
        ? s.inView : false),
        onChange: this.toggleInView,
        threshold: 0,
        rootMargin: "0% 0% 25%",
        triggerOnce: true,
        style: this.getContainerStyle()
      }, typeof document === "undefined" && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("noscript", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: url,
        alt: alt
      })), this.props.hasBlendMode && this.state.hasBlend ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: mergeClassNames(s.blendMode, this.props.noBlendHoverState ? s.noHoverState : false, this.props.isActive ? s.active : false, this.props.blendClassName ? this.props.blendClassName : false)
      }) : false, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: s.imageMask
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: mergeClassNames(!this.state.src ? s.src : s.loadedSrc, this.props.hasBlendMode && !this.props.isActive ? s.grayScale : false, this.props.parallax ? s.hasParallax : false),
        ref: function ref(el) {
          return _this.container = el;
        } // onLoad={() => this.props.callback()}
        ,
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props.style, {
          backgroundImage: this.state.src ? "url(".concat(this.state.src, ")") : ""
        })
      }, this.props.events))), this.props.children ? this.props.children : false);
    } // /**
    //  * Helpers
    //  */
    // getContainerStyle = () => {
    //     const {image, ratio = false, byPassRatio = false,} = this.props
    //     if (!image || byPassRatio) return {}
    //     const {width, height,} = image
    //     const padding = ratio ? ratio : ratioPercentage({width, height,})
    //     return {
    //         paddingBottom: `${padding}%`,
    //     }
    // }
    // rafLoop = args => {
    //     const scrollY = args.scrollY + window.innerHeight
    //     if (
    //         !this.state.src ||
    //         scrollY < this.state.top ||
    //         args.scrollY >= this.state.bottom
    //     )
    //         return
    //     const transformValue = clamp(
    //         0,
    //         10,
    //         map(
    //             [0, this.state.actualHeight + window.innerHeight,],
    //             [0, 10,],
    //             scrollY - this.state.top
    //         )
    //     )
    //     if (transformValue > 10) return
    //     this.transform += (transformValue - this.curTransform) * 0.1
    //     this.curTransform = this.transform
    //     this.container.style.transform = `translate3d(0, -${
    //         this.transform
    //     }%, 0)`
    // }

  }]);

  return Image;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./components/Products.jsx":
/*!*********************************!*\
  !*** ./components/Products.jsx ***!
  \*********************************/
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
/* harmony import */ var delay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! delay */ "./node_modules/delay/index.js");
/* harmony import */ var delay__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(delay__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");











var Products =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Products, _React$PureComponent);

  function Products() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Products);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Products)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      position: 'initial'
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "componentDidUpdate", function (prevProps) {
      if (!_this.props.rafLoop || _this.props.rafLoop === prevProps.rafLoop) return;

      _this.props.rafLoop.add(_this.onScroll);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "render", function () {
      var products = [{
        image: '/static/images/dresser-light.png',
        title: 'Task Light',
        price: '600.00'
      }, {
        image: '/static/images/tea-light.png',
        title: 'Task Light',
        price: '600.00'
      }, {
        image: '/static/images/dresser-light.png',
        title: 'Dresser Light',
        price: '900.00'
      }, {
        image: '/static/images/tea-light.png',
        title: 'Puzzle Tea Light',
        price: '120.00'
      }];
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        ref: function ref(el) {
          return _this.stickyWrapper = el;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["744810014", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4.85), _this.state.position === 'bottom' ? 0 : 1, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(20), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(7)]]]) + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        ref: function ref(el) {
          return _this.stickyEl = el;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["744810014", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4.85), _this.state.position === 'bottom' ? 0 : 1, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(20), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(7)]]]) + " " + "sticky-text ".concat(_this.state.position !== 'initial' ? 'fixed' : '')
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["744810014", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4.85), _this.state.position === 'bottom' ? 0 : 1, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(20), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(7)]]])
      }, "Our objects are completely stripped down, they have nothing to hide. Good looking and good for the world.", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["744810014", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4.85), _this.state.position === 'bottom' ? 0 : 1, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(20), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(7)]]])
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        target: "_blank",
        rel: "noopener",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["744810014", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4.85), _this.state.position === 'bottom' ? 0 : 1, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(20), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(7)]]])
      }, "\u2192 More about the studio")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["744810014", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4.85), _this.state.position === 'bottom' ? 0 : 1, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(20), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(7)]]]) + " " + "products"
      }, _this.renderProducts(products)), _this.renderInstagramPost(), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "744810014",
        dynamic: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4.85), _this.state.position === 'bottom' ? 0 : 1, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(20), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(7)]
      }, ".container.__jsx-style-dynamic-selector{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;padding:".concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), "vw;}.sticky-text.__jsx-style-dynamic-selector{font-size:16px;line-height:1.3em;-webkit-letter-spacing:-.01em;-moz-letter-spacing:-.01em;-ms-letter-spacing:-.01em;letter-spacing:-.01em;width:90%;margin-bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4.85), "vw;opacity:").concat(_this.state.position === 'bottom' ? 0 : 1, ";-webkit-transition:opacity .45s ease;transition:opacity .45s ease;}.sticky-text.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{display:block;margin-top:.8em;}@media (min-width:900px){.container.__jsx-style-dynamic-selector{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), "vw;padding-bottom:0;}.sticky-text.__jsx-style-dynamic-selector{position:absolute;top:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), "vw;left:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), "vw;font-size:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(20), "vw;line-height:1.3em;-webkit-letter-spacing:-.01em;-moz-letter-spacing:-.01em;-ms-letter-spacing:-.01em;letter-spacing:-.01em;width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(7), "vw;margin-bottom:0;}.sticky-text.fixed.__jsx-style-dynamic-selector{position:fixed;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvUHJvZHVjdHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVENEIsQUFHMkMsQUFXSCxBQVlELEFBTVcsQUFPSCxBQWFILGNBekJILENBWkUsQUFzQ2xCLEdBakRhLEFBb0MwQixZQVozQyxHQVowQixvQkF5QmtCLG9DQUVLLEdBdEN2QixTQTZCcUIsNkJBVXJCLFFBMUJaLEVBaUJXLFFBaEJ3QixBQTBCbkIsU0FUMUIsYUE3QlcsV0FDQyxZQUUyQixBQVdGLHFDQUNSLEVBWGpDLHFCQW9DNkMscUNBQ3JCLE1BekJ4QixVQTBCSSIsImZpbGUiOiIvVXNlcnMvZGlvbi9TaXRlcy9kZXN0dWRpby9jb21wb25lbnRzL1Byb2R1Y3RzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBkZWxheSBmcm9tICdkZWxheSdcblxuaW1wb3J0IHsgZm9udFNpemVyLCBnZXRDb2xzLCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJ1xuXG5jbGFzcyBQcm9kdWN0cyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2luaXRpYWwnXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlID0gcHJldlByb3BzID0+IHtcbiAgICAgICAgaWYoICF0aGlzLnByb3BzLnJhZkxvb3AgfHwgdGhpcy5wcm9wcy5yYWZMb29wID09PSBwcmV2UHJvcHMucmFmTG9vcCApIHJldHVyblxuXG4gICAgICAgIHRoaXMucHJvcHMucmFmTG9vcC5hZGQodGhpcy5vblNjcm9sbClcbiAgICB9XG5cbiAgICByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltYWdlOiAnL3N0YXRpYy9pbWFnZXMvZHJlc3Nlci1saWdodC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGFzayBMaWdodCcsXG4gICAgICAgICAgICAgICAgcHJpY2U6ICc2MDAuMDAnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltYWdlOiAnL3N0YXRpYy9pbWFnZXMvdGVhLWxpZ2h0LnBuZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUYXNrIExpZ2h0JyxcbiAgICAgICAgICAgICAgICBwcmljZTogJzYwMC4wMCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcvc3RhdGljL2ltYWdlcy9kcmVzc2VyLWxpZ2h0LnBuZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdEcmVzc2VyIExpZ2h0JyxcbiAgICAgICAgICAgICAgICBwcmljZTogJzkwMC4wMCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcvc3RhdGljL2ltYWdlcy90ZWEtbGlnaHQucG5nJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1B1enpsZSBUZWEgTGlnaHQnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnMTIwLjAwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHJlZj17IGVsID0+IHRoaXMuc3RpY2t5V3JhcHBlciA9IGVsIH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzdGlja3ktdGV4dCAkeyB0aGlzLnN0YXRlLnBvc2l0aW9uICE9PSAnaW5pdGlhbCcgPyAnZml4ZWQnIDogJycgfWB9IHJlZj17IGVsID0+IHRoaXMuc3RpY2t5RWwgPSBlbCB9PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE91ciBvYmplY3RzIGFyZSBjb21wbGV0ZWx5IHN0cmlwcGVkIGRvd24sIHRoZXkgaGF2ZSBub3RoaW5nIHRvIGhpZGUuIEdvb2QgbG9va2luZyBhbmQgZ29vZCBmb3IgdGhlIHdvcmxkLlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48YSBocmVmPVwiXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj7ihpIgTW9yZSBhYm91dCB0aGUgc3R1ZGlvPC9hPjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJQcm9kdWN0cyhwcm9kdWN0cykgfSBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJJbnN0YWdyYW1Qb3N0KCkgfSBcblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICR7IGdldENvbHMoMikgfXZ3O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnN0aWNreS10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgLy8gVE9ETzogcmVzcG9uc2l2ZSBmb250IHNpemUgbW9iaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4wMWVtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgZ2V0Q29scyg0Ljg1KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICR7IHRoaXMuc3RhdGUucG9zaXRpb24gPT09ICdib3R0b20nID8gMCA6IDEgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjQ1cyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnN0aWNreS10ZXh0IHN0cm9uZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC44ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJHsgZ2V0Q29scygxKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGlja3ktdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogJHtnZXRDb2xzKDEpfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICR7IGdldENvbHMoMSkgfXZ3O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHsgZm9udFNpemVyKDIwKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAxZW07XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoNykgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGlja3ktdGV4dC5maXhlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZW5kZXJQcm9kdWN0cyA9IHByb2R1Y3RzID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocHJvZHVjdCwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZFwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2UtaG92ZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+eyBwcm9kdWN0LnRpdGxlIH08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVVUiB7IHByb2R1Y3QucHJpY2UgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IGdldENvbHMoMi41KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQ6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBnZXRDb2xzKDYpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHsgZ2V0Q29scygyNioxLjIpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtaW1hZ2U6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjdGN0Y3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHsgcHJvZHVjdC5pbWFnZSB9Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMzVzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWltYWdlLWhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvaG92ZXItcGxhY2Vob2xkZXIuanBnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjc1cyBjdWJpYy1iZXppZXIoLjE5LCAxLCAuMjIsIDEpLCBvcGFjaXR5IC4zNXMgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1pbWFnZTpob3ZlcjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWltYWdlOmhvdmVyIC5wcm9kdWN0LWltYWdlLWhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgLy8gVE9ETzogcmVzcG9uc2l2ZSBmb250IHNpemUgbW9iaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDNlbTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS41ZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcHRpb24gc3Ryb25nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scygxMykgfXZ3O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBnZXRDb2xzKDEuMjUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IGdldENvbHMoLjMpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHsgZ2V0Q29scygxMyoxLjIpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHsgZm9udFNpemVyKDE2KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM3ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNzVlbSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlckluc3RhZ3JhbVBvc3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhZ3JhbS1wb3N0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWdyYW0taW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWdyYW0taW1hZ2UtbWFza1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWdyYW0taW1hZ2UtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlN0YXkgcG9zdGVkPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIEZvbGxvdyB1cyBvbiBpbnN0YWdyYW1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmluc3RhZ3JhbS1wb3N0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YWdyYW0taW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoMTMpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHsgZ2V0Q29scygxMyAqIDEuMjUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YWdyYW0taW1hZ2UtbWFzayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmluc3RhZ3JhbS1pbWFnZS1pbm5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9pbnN0YWdyYW0uanBnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jYXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgLy8gVE9ETzogcmVzcG9uc2l2ZSBmb250IHNpemUgbW9iaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40M2VtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNWVtIDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkeyBnZXRDb2xzKDEzKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY2FwdGlvbiBzdHJvbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zdGFncmFtLXBvc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206ICR7IGdldENvbHMoLjg1KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJHsgZ2V0Q29scygxKSB9dnc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scyg0KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAkeyB0aGlzLnN0YXRlLnBvc2l0aW9uICE9PSAnYm90dG9tJyA/ICd0cmFuc2xhdGVYKC0xMDAlKScgOiAnbm9uZScgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAkeyB0aGlzLnN0YXRlLnBvc2l0aW9uICE9PSAnYm90dG9tJyA/IDA6IDEgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuOTVzIGN1YmljLWJlemllciguMTksIDEsIC4yMiwgMSksIG9wYWNpdHkgLjQ1cyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zdGFncmFtLWltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scyg0KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkeyBnZXRDb2xzKDQgKiAxLjI1KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnN0YWdyYW0taW1hZ2UtbWFzayB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAkeyB0aGlzLnN0YXRlLnBvc2l0aW9uICE9PSAnYm90dG9tJyA/ICd0cmFuc2xhdGVYKC0xMDAlKScgOiAnbm9uZScgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4xNXMgY3ViaWMtYmV6aWVyKC4xOSwgMSwgLjIyLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RhZ3JhbS1pbWFnZS1pbm5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAkeyB0aGlzLnN0YXRlLnBvc2l0aW9uICE9PSAnYm90dG9tJyA/ICd0cmFuc2xhdGVYKDgwJSknIDogJ25vbmUnIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC45NXMgY3ViaWMtYmV6aWVyKC4xOSwgMSwgLjIyLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHsgZm9udFNpemVyKDE2KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzdlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNzVlbSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoNCkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBvblNjcm9sbCA9IGFyZ3MgPT4ge1xuICAgICAgICBpZiggIXRoaXMuc3RpY2t5RWwgfHwgIXRoaXMuc3RpY2t5V3JhcHBlciApIHJldHVyblxuXG4gICAgICAgIGlmKCAhdGhpcy5ib3VuZHMgfHwgdGhpcy5ib3VuZHMud2luZG93V2lkdGggIT09IHdpbmRvdy5pbm5lcldpZHRoICkge1xuICAgICAgICAgICAgY29uc3Qgd3JhcHBlckJvdW5kcyA9IHRoaXMuc3RpY2t5V3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgdGhpcy5ib3VuZHMgPSB7XG4gICAgICAgICAgICAgICAgdG9wOiB3cmFwcGVyQm91bmRzLnRvcCArIGFyZ3Muc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICBib3R0b206IHdyYXBwZXJCb3VuZHMuYm90dG9tICsgYXJncy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qge3RvcCA9IDAsIGJvdHRvbSA9IDB9ID0gdGhpcy5ib3VuZHNcblxuICAgICAgICBsZXQgcG9zaXRpb24gPSAnaW5pdGlhbCdcblxuICAgICAgICBpZiggYXJncy5zY3JvbGxZID4gdG9wICYmIGFyZ3Muc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodCA8IGJvdHRvbSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAnZml4ZWQnXG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0ID49IGJvdHRvbSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAnYm90dG9tJ1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHBvc2l0aW9uID09PSB0aGlzLnN0YXRlLnBvc2l0aW9uICkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzIl19 */\n/*@ sourceURL=/Users/dion/Sites/destudio/components/Products.jsx */")));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "renderProducts", function (products) {
      return products.map(function (product, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: i,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["735608006", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(6), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(26 * 1.2), product.image, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(.3), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13 * 1.2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16)]]]) + " " + "product-card"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "",
          target: "_blank",
          rel: "noopener",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["735608006", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(6), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(26 * 1.2), product.image, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(.3), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13 * 1.2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16)]]]) + " " + "product-image"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["735608006", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(6), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(26 * 1.2), product.image, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(.3), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13 * 1.2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16)]]]) + " " + "product-image-hover"
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["735608006", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(6), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(26 * 1.2), product.image, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(.3), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13 * 1.2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16)]]]) + " " + "caption"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["735608006", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(6), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(26 * 1.2), product.image, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(.3), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13 * 1.2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16)]]])
        }, product.title), "EUR ", product.price), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
          id: "735608006",
          dynamic: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(6), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(26 * 1.2), product.image, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(.3), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13 * 1.2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16)]
        }, ".product-card.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;margin-bottom:".concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2.5), "vw;}.product-card.__jsx-style-dynamic-selector:last-of-type{margin-bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(6), "vw;}.product-image.__jsx-style-dynamic-selector{position:relative;overflow:hidden;width:100%;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(26 * 1.2), "vw;}.product-image.__jsx-style-dynamic-selector:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:#F7F7F7;background-image:url('").concat(product.image, "');background-position:center;background-repeat:no-repeat;background-size:contain;-webkit-transition:opacity .35s ease;transition:opacity .35s ease;}.product-image-hover.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;background-image:url('/static/images/hover-placeholder.jpg');background-position:center;background-repeat:no-repeat;background-size:cover;opacity:0;-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-transition:-webkit-transform .75s cubic-bezier(.19,1,.22,1),opacity .35s ease;-webkit-transition:transform .75s cubic-bezier(.19,1,.22,1),opacity .35s ease;transition:transform .75s cubic-bezier(.19,1,.22,1),opacity .35s ease;}@media (hover:hover){.product-image.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector:before{opacity:0;}.product-image.__jsx-style-dynamic-selector:hover .product-image-hover.__jsx-style-dynamic-selector{-webkit-transform:none;-ms-transform:none;transform:none;opacity:1;}}.caption.__jsx-style-dynamic-selector{font-size:14px;line-height:1.43em;margin:1.5em 0;}.caption.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{display:block;}@media (min-width:900px){.product-card.__jsx-style-dynamic-selector{width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), "vw;margin-bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.25), "vw;}.product-card.__jsx-style-dynamic-selector:last-of-type{margin-bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(.3), "vw;}.product-image.__jsx-style-dynamic-selector{height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13 * 1.2), "vw;}.caption.__jsx-style-dynamic-selector{font-size:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), "vw;line-height:1.37em;margin:1.75em 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvUHJvZHVjdHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStIZ0MsQUFHMEMsQUFTZ0MsQUFJM0IsQUFRUCxBQW1CTyxBQXFCSixBQUlLLEFBTUosQUFPRCxBQUsyQixBQU1RLEFBSVAsQUFJRyxVQW5DN0MsQ0F2Q2tCLEdBd0R0QixDQVB1QixHQTFESCxBQTJCVixNQUNDLEtBbEJELEVBb0JLLEdBNUJBLEFBMERJLENBakRSLEVBNEQwQyxDQVNqRCxHQUl1QixDQXZFWixBQWtCQyxHQW5DaEIsQUFPMEMsQUF5RXRDLElBZkosSUEvQ2dCLENBbUJGLEdBbUJJLEdBa0NNLElBbkR5QyxDQW5CMUMsRUFxQ25CLE9BbEVzQixFQW9HdEIsTUFmQSxDQXBFSixDQWF5RCx5Q0FtQjFCLFlBbEJBLGVBN0JoQixBQWdEaUIsV0E5Q2lCLENBNEJqQixnQkFtQk4sWUFsQkUsVUFvQmQsTUFoRGQsSUFpRDBCLElBbkJPLGtFQUNqQyxRQW1COEUsME9BQzlFIiwiZmlsZSI6Ii9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvUHJvZHVjdHMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGRlbGF5IGZyb20gJ2RlbGF5J1xuXG5pbXBvcnQgeyBmb250U2l6ZXIsIGdldENvbHMsIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5cbmNsYXNzIFByb2R1Y3RzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnaW5pdGlhbCdcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUgPSBwcmV2UHJvcHMgPT4ge1xuICAgICAgICBpZiggIXRoaXMucHJvcHMucmFmTG9vcCB8fCB0aGlzLnByb3BzLnJhZkxvb3AgPT09IHByZXZQcm9wcy5yYWZMb29wICkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5wcm9wcy5yYWZMb29wLmFkZCh0aGlzLm9uU2Nyb2xsKVxuICAgIH1cblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcvc3RhdGljL2ltYWdlcy9kcmVzc2VyLWxpZ2h0LnBuZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUYXNrIExpZ2h0JyxcbiAgICAgICAgICAgICAgICBwcmljZTogJzYwMC4wMCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcvc3RhdGljL2ltYWdlcy90ZWEtbGlnaHQucG5nJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Rhc2sgTGlnaHQnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnNjAwLjAwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWFnZTogJy9zdGF0aWMvaW1hZ2VzL2RyZXNzZXItbGlnaHQucG5nJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0RyZXNzZXIgTGlnaHQnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnOTAwLjAwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWFnZTogJy9zdGF0aWMvaW1hZ2VzL3RlYS1saWdodC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUHV6emxlIFRlYSBMaWdodCcsXG4gICAgICAgICAgICAgICAgcHJpY2U6ICcxMjAuMDAnXG4gICAgICAgICAgICB9LFxuICAgICAgICBdXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgcmVmPXsgZWwgPT4gdGhpcy5zdGlja3lXcmFwcGVyID0gZWwgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHN0aWNreS10ZXh0ICR7IHRoaXMuc3RhdGUucG9zaXRpb24gIT09ICdpbml0aWFsJyA/ICdmaXhlZCcgOiAnJyB9YH0gcmVmPXsgZWwgPT4gdGhpcy5zdGlja3lFbCA9IGVsIH0+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgT3VyIG9iamVjdHMgYXJlIGNvbXBsZXRlbHkgc3RyaXBwZWQgZG93biwgdGhleSBoYXZlIG5vdGhpbmcgdG8gaGlkZS4gR29vZCBsb29raW5nIGFuZCBnb29kIGZvciB0aGUgd29ybGQuXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPuKGkiBNb3JlIGFib3V0IHRoZSBzdHVkaW88L2E+PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlclByb2R1Y3RzKHByb2R1Y3RzKSB9IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckluc3RhZ3JhbVBvc3QoKSB9IFxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJHsgZ2V0Q29scygyKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuc3RpY2t5LXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OyAvLyBUT0RPOiByZXNwb25zaXZlIGZvbnQgc2l6ZSBtb2JpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAxZW07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBnZXRDb2xzKDQuODUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogJHsgdGhpcy5zdGF0ZS5wb3NpdGlvbiA9PT0gJ2JvdHRvbScgPyAwIDogMSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNDVzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuc3RpY2t5LXRleHQgc3Ryb25nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjhlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAkeyBnZXRDb2xzKDEpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0aWNreS10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAke2dldENvbHMoMSl9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJHsgZ2V0Q29scygxKSB9dnc7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkeyBmb250U2l6ZXIoMjApIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uMDFlbTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scyg3KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0aWNreS10ZXh0LmZpeGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJlbmRlclByb2R1Y3RzID0gcHJvZHVjdHMgPT4ge1xuICAgICAgICByZXR1cm4gcHJvZHVjdHMubWFwKChwcm9kdWN0LCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCIgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZS1ob3ZlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57IHByb2R1Y3QudGl0bGUgfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgRVVSIHsgcHJvZHVjdC5wcmljZSB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgZ2V0Q29scygyLjUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZDpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IGdldENvbHMoNikgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkeyBnZXRDb2xzKDI2KjEuMikgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1pbWFnZTpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGN0Y3Rjc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCckeyBwcm9kdWN0LmltYWdlIH0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zNXMgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtaW1hZ2UtaG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9ob3Zlci1wbGFjZWhvbGRlci5qcGcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNzVzIGN1YmljLWJlemllciguMTksIDEsIC4yMiwgMSksIG9wYWNpdHkgLjM1cyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWltYWdlOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtaW1hZ2U6aG92ZXIgLnByb2R1Y3QtaW1hZ2UtaG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4OyAvLyBUT0RPOiByZXNwb25zaXZlIGZvbnQgc2l6ZSBtb2JpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40M2VtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxLjVlbSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FwdGlvbiBzdHJvbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkeyBnZXRDb2xzKDEzKSB9dnc7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IGdldENvbHMoMS4yNSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQ6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgZ2V0Q29scyguMykgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkeyBnZXRDb2xzKDEzKjEuMikgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkeyBmb250U2l6ZXIoMTYpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzdlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS43NWVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVySW5zdGFncmFtUG9zdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdGFncmFtLXBvc3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhZ3JhbS1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhZ3JhbS1pbWFnZS1tYXNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhZ3JhbS1pbWFnZS1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U3RheSBwb3N0ZWQ8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgRm9sbG93IHVzIG9uIGluc3RhZ3JhbVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuaW5zdGFncmFtLXBvc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmluc3RhZ3JhbS1pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scygxMykgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkeyBnZXRDb2xzKDEzICogMS4yNSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmluc3RhZ3JhbS1pbWFnZS1tYXNrIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW5zdGFncmFtLWltYWdlLWlubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2luc3RhZ3JhbS5qcGcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmNhcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4OyAvLyBUT0RPOiByZXNwb25zaXZlIGZvbnQgc2l6ZSBtb2JpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQzZW07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS41ZW0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoMTMpIH12dztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jYXB0aW9uIHN0cm9uZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnN0YWdyYW0tcG9zdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogJHsgZ2V0Q29scyguODUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAkeyBnZXRDb2xzKDEpIH12dztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkeyBnZXRDb2xzKDQpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICR7IHRoaXMuc3RhdGUucG9zaXRpb24gIT09ICdib3R0b20nID8gJ3RyYW5zbGF0ZVgoLTEwMCUpJyA6ICdub25lJyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICR7IHRoaXMuc3RhdGUucG9zaXRpb24gIT09ICdib3R0b20nID8gMDogMSB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC45NXMgY3ViaWMtYmV6aWVyKC4xOSwgMSwgLjIyLCAxKSwgb3BhY2l0eSAuNDVzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnN0YWdyYW0taW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkeyBnZXRDb2xzKDQpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7IGdldENvbHMoNCAqIDEuMjUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RhZ3JhbS1pbWFnZS1tYXNrIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICR7IHRoaXMuc3RhdGUucG9zaXRpb24gIT09ICdib3R0b20nID8gJ3RyYW5zbGF0ZVgoLTEwMCUpJyA6ICdub25lJyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjE1cyBjdWJpYy1iZXppZXIoLjE5LCAxLCAuMjIsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zdGFncmFtLWltYWdlLWlubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICR7IHRoaXMuc3RhdGUucG9zaXRpb24gIT09ICdib3R0b20nID8gJ3RyYW5zbGF0ZVgoODAlKScgOiAnbm9uZScgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjk1cyBjdWJpYy1iZXppZXIoLjE5LCAxLCAuMjIsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkeyBmb250U2l6ZXIoMTYpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zN2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS43NWVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scyg0KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIG9uU2Nyb2xsID0gYXJncyA9PiB7XG4gICAgICAgIGlmKCAhdGhpcy5zdGlja3lFbCB8fCAhdGhpcy5zdGlja3lXcmFwcGVyICkgcmV0dXJuXG5cbiAgICAgICAgaWYoICF0aGlzLmJvdW5kcyB8fCB0aGlzLmJvdW5kcy53aW5kb3dXaWR0aCAhPT0gd2luZG93LmlubmVyV2lkdGggKSB7XG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyQm91bmRzID0gdGhpcy5zdGlja3lXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICB0aGlzLmJvdW5kcyA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IHdyYXBwZXJCb3VuZHMudG9wICsgYXJncy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogd3JhcHBlckJvdW5kcy5ib3R0b20gKyBhcmdzLnNjcm9sbFksXG4gICAgICAgICAgICAgICAgd2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7dG9wID0gMCwgYm90dG9tID0gMH0gPSB0aGlzLmJvdW5kc1xuXG4gICAgICAgIGxldCBwb3NpdGlvbiA9ICdpbml0aWFsJ1xuXG4gICAgICAgIGlmKCBhcmdzLnNjcm9sbFkgPiB0b3AgJiYgYXJncy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0IDwgYm90dG9tKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9ICdmaXhlZCdcbiAgICAgICAgfSBlbHNlIGlmIChhcmdzLnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQgPj0gYm90dG9tKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9ICdib3R0b20nXG4gICAgICAgIH1cblxuICAgICAgICBpZiggcG9zaXRpb24gPT09IHRoaXMuc3RhdGUucG9zaXRpb24gKSByZXR1cm5cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHMiXX0= */\n/*@ sourceURL=/Users/dion/Sites/destudio/components/Products.jsx */")));
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "renderInstagramPost", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["950245254", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13 * 1.25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(.85), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), _this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', _this.state.position !== 'bottom' ? 0 : 1, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4 * 1.25), _this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', _this.state.position !== 'bottom' ? 'translateX(80%)' : 'none', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4)]]]) + " " + "instagram-post"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["950245254", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13 * 1.25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(.85), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), _this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', _this.state.position !== 'bottom' ? 0 : 1, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4 * 1.25), _this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', _this.state.position !== 'bottom' ? 'translateX(80%)' : 'none', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4)]]]) + " " + "instagram-image"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["950245254", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13 * 1.25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(.85), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), _this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', _this.state.position !== 'bottom' ? 0 : 1, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4 * 1.25), _this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', _this.state.position !== 'bottom' ? 'translateX(80%)' : 'none', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4)]]]) + " " + "instagram-image-mask"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["950245254", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13 * 1.25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(.85), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), _this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', _this.state.position !== 'bottom' ? 0 : 1, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4 * 1.25), _this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', _this.state.position !== 'bottom' ? 'translateX(80%)' : 'none', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4)]]]) + " " + "instagram-image-inner"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["950245254", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13 * 1.25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(.85), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), _this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', _this.state.position !== 'bottom' ? 0 : 1, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4 * 1.25), _this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', _this.state.position !== 'bottom' ? 'translateX(80%)' : 'none', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4)]]]) + " " + "caption"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["950245254", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13 * 1.25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(.85), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), _this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', _this.state.position !== 'bottom' ? 0 : 1, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4 * 1.25), _this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', _this.state.position !== 'bottom' ? 'translateX(80%)' : 'none', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4)]]])
      }, "Stay posted"), "Follow us on instagram"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "950245254",
        dynamic: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13 * 1.25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(.85), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), _this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', _this.state.position !== 'bottom' ? 0 : 1, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4 * 1.25), _this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', _this.state.position !== 'bottom' ? 'translateX(80%)' : 'none', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4)]
      }, ".instagram-post.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;width:100%;}.instagram-image.__jsx-style-dynamic-selector{width:".concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), "vw;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13 * 1.25), "vw;}.instagram-image-mask.__jsx-style-dynamic-selector{position:relative;width:100%;height:100%;overflow:hidden;}.instagram-image-inner.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;width:100%;height:100%;background-image:url('/static/images/instagram.jpg');background-size:cover;background-repeat:no-repeat;}.caption.__jsx-style-dynamic-selector{font-size:14px;line-height:1.43em;margin:1.5em 0;width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), "vw;}.caption.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{display:block;}@media (min-width:900px){.instagram-post.__jsx-style-dynamic-selector{position:absolute;bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(.85), "vw;left:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), "vw;width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), "vw;-webkit-transform:").concat(_this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', ";-ms-transform:").concat(_this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', ";transform:").concat(_this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', ";opacity:").concat(_this.state.position !== 'bottom' ? 0 : 1, ";-webkit-transition:-webkit-transform .95s cubic-bezier(.19,1,.22,1),opacity .45s ease;-webkit-transition:transform .95s cubic-bezier(.19,1,.22,1),opacity .45s ease;transition:transform .95s cubic-bezier(.19,1,.22,1),opacity .45s ease;}.instagram-image.__jsx-style-dynamic-selector{width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), "vw;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4 * 1.25), "vw;}.instagram-image-mask.__jsx-style-dynamic-selector{-webkit-transform:").concat(_this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', ";-ms-transform:").concat(_this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', ";transform:").concat(_this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', ";-webkit-transition:-webkit-transform 1.15s cubic-bezier(.19,1,.22,1);-webkit-transition:transform 1.15s cubic-bezier(.19,1,.22,1);transition:transform 1.15s cubic-bezier(.19,1,.22,1);}.instagram-image-inner.__jsx-style-dynamic-selector{-webkit-transform:").concat(_this.state.position !== 'bottom' ? 'translateX(80%)' : 'none', ";-ms-transform:").concat(_this.state.position !== 'bottom' ? 'translateX(80%)' : 'none', ";transform:").concat(_this.state.position !== 'bottom' ? 'translateX(80%)' : 'none', ";-webkit-transition:-webkit-transform .95s cubic-bezier(.19,1,.22,1);-webkit-transition:transform .95s cubic-bezier(.19,1,.22,1);transition:transform .95s cubic-bezier(.19,1,.22,1);}.caption.__jsx-style-dynamic-selector{font-size:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), "vw;line-height:1.37em;margin:1.75em 0;margin-bottom:0;width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), "vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvUHJvZHVjdHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZQNEIsQUFHc0MsQUFRd0IsQUFLbkIsQUFRQSxBQWFILEFBU0QsQUFLUSxBQWFtQixBQUtHLEFBS0EsQUFLRSxjQWhDbEQsQ0FUdUIsR0FyQlIsQUFRTCxBQTJCb0MsTUExQm5DLEtBUkssRUFVRCxHQVlJLEdBNUJ1QixBQXFESSxJQTdDMUIsQ0FTSixBQW1EVyxPQXRDYyxLQVhnQixFQXNCYixDQWhDNUMsSUE2RHdCLGFBOUVFLENBUzFCLEFBcURJLEVBaUJvQixTQXhDeEIsTUFZNkMsQ0E2QkMsY0FwRHBCLHNCQUNNLEFBd0JlLEVBNEIzQyxDQWY0RCxBQUtELG9CQXRFdEMsS0E2QnpCLGdHQTNCZSxLQW1EOEIsTUFsRDdDLCtCQW9Ea0YsaUJBZ0I5RSxHQUxBLHNOQVZBIiwiZmlsZSI6Ii9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvUHJvZHVjdHMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGRlbGF5IGZyb20gJ2RlbGF5J1xuXG5pbXBvcnQgeyBmb250U2l6ZXIsIGdldENvbHMsIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5cbmNsYXNzIFByb2R1Y3RzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnaW5pdGlhbCdcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUgPSBwcmV2UHJvcHMgPT4ge1xuICAgICAgICBpZiggIXRoaXMucHJvcHMucmFmTG9vcCB8fCB0aGlzLnByb3BzLnJhZkxvb3AgPT09IHByZXZQcm9wcy5yYWZMb29wICkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5wcm9wcy5yYWZMb29wLmFkZCh0aGlzLm9uU2Nyb2xsKVxuICAgIH1cblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcvc3RhdGljL2ltYWdlcy9kcmVzc2VyLWxpZ2h0LnBuZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUYXNrIExpZ2h0JyxcbiAgICAgICAgICAgICAgICBwcmljZTogJzYwMC4wMCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcvc3RhdGljL2ltYWdlcy90ZWEtbGlnaHQucG5nJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Rhc2sgTGlnaHQnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnNjAwLjAwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWFnZTogJy9zdGF0aWMvaW1hZ2VzL2RyZXNzZXItbGlnaHQucG5nJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0RyZXNzZXIgTGlnaHQnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnOTAwLjAwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWFnZTogJy9zdGF0aWMvaW1hZ2VzL3RlYS1saWdodC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUHV6emxlIFRlYSBMaWdodCcsXG4gICAgICAgICAgICAgICAgcHJpY2U6ICcxMjAuMDAnXG4gICAgICAgICAgICB9LFxuICAgICAgICBdXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgcmVmPXsgZWwgPT4gdGhpcy5zdGlja3lXcmFwcGVyID0gZWwgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHN0aWNreS10ZXh0ICR7IHRoaXMuc3RhdGUucG9zaXRpb24gIT09ICdpbml0aWFsJyA/ICdmaXhlZCcgOiAnJyB9YH0gcmVmPXsgZWwgPT4gdGhpcy5zdGlja3lFbCA9IGVsIH0+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgT3VyIG9iamVjdHMgYXJlIGNvbXBsZXRlbHkgc3RyaXBwZWQgZG93biwgdGhleSBoYXZlIG5vdGhpbmcgdG8gaGlkZS4gR29vZCBsb29raW5nIGFuZCBnb29kIGZvciB0aGUgd29ybGQuXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPuKGkiBNb3JlIGFib3V0IHRoZSBzdHVkaW88L2E+PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlclByb2R1Y3RzKHByb2R1Y3RzKSB9IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckluc3RhZ3JhbVBvc3QoKSB9IFxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJHsgZ2V0Q29scygyKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuc3RpY2t5LXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OyAvLyBUT0RPOiByZXNwb25zaXZlIGZvbnQgc2l6ZSBtb2JpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAxZW07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBnZXRDb2xzKDQuODUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogJHsgdGhpcy5zdGF0ZS5wb3NpdGlvbiA9PT0gJ2JvdHRvbScgPyAwIDogMSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNDVzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuc3RpY2t5LXRleHQgc3Ryb25nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjhlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAkeyBnZXRDb2xzKDEpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0aWNreS10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAke2dldENvbHMoMSl9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJHsgZ2V0Q29scygxKSB9dnc7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkeyBmb250U2l6ZXIoMjApIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uMDFlbTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scyg3KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0aWNreS10ZXh0LmZpeGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJlbmRlclByb2R1Y3RzID0gcHJvZHVjdHMgPT4ge1xuICAgICAgICByZXR1cm4gcHJvZHVjdHMubWFwKChwcm9kdWN0LCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCIgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZS1ob3ZlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57IHByb2R1Y3QudGl0bGUgfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgRVVSIHsgcHJvZHVjdC5wcmljZSB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgZ2V0Q29scygyLjUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZDpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IGdldENvbHMoNikgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkeyBnZXRDb2xzKDI2KjEuMikgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1pbWFnZTpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGN0Y3Rjc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCckeyBwcm9kdWN0LmltYWdlIH0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zNXMgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtaW1hZ2UtaG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9ob3Zlci1wbGFjZWhvbGRlci5qcGcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNzVzIGN1YmljLWJlemllciguMTksIDEsIC4yMiwgMSksIG9wYWNpdHkgLjM1cyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWltYWdlOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtaW1hZ2U6aG92ZXIgLnByb2R1Y3QtaW1hZ2UtaG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4OyAvLyBUT0RPOiByZXNwb25zaXZlIGZvbnQgc2l6ZSBtb2JpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40M2VtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxLjVlbSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FwdGlvbiBzdHJvbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkeyBnZXRDb2xzKDEzKSB9dnc7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IGdldENvbHMoMS4yNSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQ6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgZ2V0Q29scyguMykgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkeyBnZXRDb2xzKDEzKjEuMikgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkeyBmb250U2l6ZXIoMTYpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzdlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS43NWVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVySW5zdGFncmFtUG9zdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdGFncmFtLXBvc3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhZ3JhbS1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhZ3JhbS1pbWFnZS1tYXNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhZ3JhbS1pbWFnZS1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U3RheSBwb3N0ZWQ8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgRm9sbG93IHVzIG9uIGluc3RhZ3JhbVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuaW5zdGFncmFtLXBvc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmluc3RhZ3JhbS1pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scygxMykgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkeyBnZXRDb2xzKDEzICogMS4yNSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmluc3RhZ3JhbS1pbWFnZS1tYXNrIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW5zdGFncmFtLWltYWdlLWlubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2luc3RhZ3JhbS5qcGcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmNhcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4OyAvLyBUT0RPOiByZXNwb25zaXZlIGZvbnQgc2l6ZSBtb2JpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQzZW07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS41ZW0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoMTMpIH12dztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jYXB0aW9uIHN0cm9uZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnN0YWdyYW0tcG9zdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogJHsgZ2V0Q29scyguODUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAkeyBnZXRDb2xzKDEpIH12dztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkeyBnZXRDb2xzKDQpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICR7IHRoaXMuc3RhdGUucG9zaXRpb24gIT09ICdib3R0b20nID8gJ3RyYW5zbGF0ZVgoLTEwMCUpJyA6ICdub25lJyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICR7IHRoaXMuc3RhdGUucG9zaXRpb24gIT09ICdib3R0b20nID8gMDogMSB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC45NXMgY3ViaWMtYmV6aWVyKC4xOSwgMSwgLjIyLCAxKSwgb3BhY2l0eSAuNDVzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnN0YWdyYW0taW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkeyBnZXRDb2xzKDQpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7IGdldENvbHMoNCAqIDEuMjUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RhZ3JhbS1pbWFnZS1tYXNrIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICR7IHRoaXMuc3RhdGUucG9zaXRpb24gIT09ICdib3R0b20nID8gJ3RyYW5zbGF0ZVgoLTEwMCUpJyA6ICdub25lJyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjE1cyBjdWJpYy1iZXppZXIoLjE5LCAxLCAuMjIsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zdGFncmFtLWltYWdlLWlubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICR7IHRoaXMuc3RhdGUucG9zaXRpb24gIT09ICdib3R0b20nID8gJ3RyYW5zbGF0ZVgoODAlKScgOiAnbm9uZScgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjk1cyBjdWJpYy1iZXppZXIoLjE5LCAxLCAuMjIsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkeyBmb250U2l6ZXIoMTYpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zN2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS43NWVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scyg0KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIG9uU2Nyb2xsID0gYXJncyA9PiB7XG4gICAgICAgIGlmKCAhdGhpcy5zdGlja3lFbCB8fCAhdGhpcy5zdGlja3lXcmFwcGVyICkgcmV0dXJuXG5cbiAgICAgICAgaWYoICF0aGlzLmJvdW5kcyB8fCB0aGlzLmJvdW5kcy53aW5kb3dXaWR0aCAhPT0gd2luZG93LmlubmVyV2lkdGggKSB7XG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyQm91bmRzID0gdGhpcy5zdGlja3lXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICB0aGlzLmJvdW5kcyA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IHdyYXBwZXJCb3VuZHMudG9wICsgYXJncy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogd3JhcHBlckJvdW5kcy5ib3R0b20gKyBhcmdzLnNjcm9sbFksXG4gICAgICAgICAgICAgICAgd2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7dG9wID0gMCwgYm90dG9tID0gMH0gPSB0aGlzLmJvdW5kc1xuXG4gICAgICAgIGxldCBwb3NpdGlvbiA9ICdpbml0aWFsJ1xuXG4gICAgICAgIGlmKCBhcmdzLnNjcm9sbFkgPiB0b3AgJiYgYXJncy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0IDwgYm90dG9tKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9ICdmaXhlZCdcbiAgICAgICAgfSBlbHNlIGlmIChhcmdzLnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQgPj0gYm90dG9tKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9ICdib3R0b20nXG4gICAgICAgIH1cblxuICAgICAgICBpZiggcG9zaXRpb24gPT09IHRoaXMuc3RhdGUucG9zaXRpb24gKSByZXR1cm5cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHMiXX0= */\n/*@ sourceURL=/Users/dion/Sites/destudio/components/Products.jsx */")));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onScroll", function (args) {
      if (!_this.stickyEl || !_this.stickyWrapper) return;

      if (!_this.bounds || _this.bounds.windowWidth !== window.innerWidth) {
        var wrapperBounds = _this.stickyWrapper.getBoundingClientRect();

        _this.bounds = {
          top: wrapperBounds.top + args.scrollY,
          bottom: wrapperBounds.bottom + args.scrollY,
          windowWidth: window.innerWidth
        };
      }

      var _this$bounds = _this.bounds,
          _this$bounds$top = _this$bounds.top,
          top = _this$bounds$top === void 0 ? 0 : _this$bounds$top,
          _this$bounds$bottom = _this$bounds.bottom,
          bottom = _this$bounds$bottom === void 0 ? 0 : _this$bounds$bottom;
      var position = 'initial';

      if (args.scrollY > top && args.scrollY + window.innerHeight < bottom) {
        position = 'fixed';
      } else if (args.scrollY + window.innerHeight >= bottom) {
        position = 'bottom';
      }

      if (position === _this.state.position) return;

      _this.setState({
        position: position
      });
    });

    return _this;
  }

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./components/Video.jsx":
/*!******************************!*\
  !*** ./components/Video.jsx ***!
  \******************************/
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










var Video =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Video, _React$PureComponent);

  function Video() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Video);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Video)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1636597396", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(37.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(27), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(26), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1)]]]) + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("video", {
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1636597396", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(37.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(27), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(26), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1)]]]) + " " + "video"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("source", {
        src: "/static/videos/landing-video.mp4",
        type: "video/mp4",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1636597396", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(37.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(27), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(26), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1)]]])
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1636597396",
        dynamic: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(37.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(27), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(26), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1)]
      }, ".container.__jsx-style-dynamic-selector{position:relative;width:".concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(25), "vw;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(37.5), "vw;overflow:hidden;background:#F7F7F7;margin-left:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), "vw;}video.__jsx-style-dynamic-selector{position:absolute;top:50%;left:0;-webkit-transform:translate(-25%,-50%);-ms-transform:translate(-25%,-50%);transform:translate(-25%,-50%);width:150%;height:auto;}@media (min-width:900px){.container.__jsx-style-dynamic-selector{width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(27), "vw;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(26), "vw;margin-left:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), "vw;}.video.__jsx-style-dynamic-selector{width:100%;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvVmlkZW8uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVc0QixBQUcyQyxBQWVBLEFBWXVCLEFBTzFCLFdBQ2tCLE9BbENJLEFBZTdCLFFBQ0QsT0FFeUIsSUFTVSxrQkExQkosb0JBNEJTLGtCQTNCL0IsY0FpQ2hCLEVBL0JtQixTQTBCbkIsVUF6QjJDLFVBZWhDLFdBQ0MsWUFDaEIsVUFYQSIsImZpbGUiOiIvVXNlcnMvZGlvbi9TaXRlcy9kZXN0dWRpby9jb21wb25lbnRzL1ZpZGVvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvbnRTaXplciwgZ2V0Q29scywgfSBmcm9tICcuLi91dGlscy91dGlscydcblxuY2xhc3MgVmlkZW8gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgICByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDx2aWRlbyBjbGFzc05hbWU9XCJ2aWRlb1wiIGF1dG9QbGF5IGxvb3AgbXV0ZWQgcGxheXNJbmxpbmU+XG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtgL3N0YXRpYy92aWRlb3MvbGFuZGluZy12aWRlby5tcDRgfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cbiAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scygyNSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkeyBnZXRDb2xzKDM3LjUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGN0Y3Rjc7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogJHsgZ2V0Q29scygyKSB9dnc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvdmlkZW8tcGxhY2Vob2xkZXIucG5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1JSwgLTUwJSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoMjcpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7IGdldENvbHMoMjYpIH12dztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkeyBnZXRDb2xzKDEpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW8iXX0= */\n/*@ sourceURL=/Users/dion/Sites/destudio/components/Video.jsx */")));
    });

    return _this;
  }

  return Video;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "./node_modules/core-js/library/fn/date/now.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/core-js/library/fn/is-iterable.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/is.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/is.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/is */ "./node_modules/core-js/library/fn/object/is.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/set */ "./node_modules/core-js/library/fn/set.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "./node_modules/core-js/library/fn/weak-map.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/core-js/library/fn/date/now.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/library/fn/date/now.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.date.now */ "./node_modules/core-js/library/modules/es6.date.now.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Date.now;


/***/ }),

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/is.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/is.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.is */ "./node_modules/core-js/library/modules/es6.object.is.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.is;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/set.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/set.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/library/modules/es6.set.js");
__webpack_require__(/*! ../modules/es7.set.to-json */ "./node_modules/core-js/library/modules/es7.set.to-json.js");
__webpack_require__(/*! ../modules/es7.set.of */ "./node_modules/core-js/library/modules/es7.set.of.js");
__webpack_require__(/*! ../modules/es7.set.from */ "./node_modules/core-js/library/modules/es7.set.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Set;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/fn/weak-map.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/library/fn/weak-map.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.weak-map */ "./node_modules/core-js/library/modules/es6.weak-map.js");
__webpack_require__(/*! ../modules/es7.weak-map.of */ "./node_modules/core-js/library/modules/es7.weak-map.of.js");
__webpack_require__(/*! ../modules/es7.weak-map.from */ "./node_modules/core-js/library/modules/es7.weak-map.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").WeakMap;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/library/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-weak.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-weak.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/library/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.8' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_same-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_same-value.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.date.now.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.date.now.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.is.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.is.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/library/modules/_same-value.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.weak-map.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.weak-map.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/library/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/library/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.to-json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/library/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.weak-map.from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.weak-map.from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js")('WeakMap');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.weak-map.of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.weak-map.of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js")('WeakMap');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/delay/index.js":
/*!*************************************!*\
  !*** ./node_modules/delay/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const createAbortError = () => {
	const error = new Error('Delay aborted');
	error.name = 'AbortError';
	return error;
};

const createDelay = ({clearTimeout: defaultClear, setTimeout: set, willResolve}) => (ms, {value, signal} = {}) => {
	if (signal && signal.aborted) {
		return Promise.reject(createAbortError());
	}

	let timeoutId;
	let settle;
	let rejectFn;
	const clear = defaultClear || clearTimeout;

	const signalListener = () => {
		clear(timeoutId);
		rejectFn(createAbortError());
	};

	const cleanup = () => {
		if (signal) {
			signal.removeEventListener('abort', signalListener);
		}
	};

	const delayPromise = new Promise((resolve, reject) => {
		settle = () => {
			cleanup();
			if (willResolve) {
				resolve(value);
			} else {
				reject(value);
			}
		};

		rejectFn = reject;
		timeoutId = (set || setTimeout)(settle, ms);
	});

	if (signal) {
		signal.addEventListener('abort', signalListener, {once: true});
	}

	delayPromise.clear = () => {
		clear(timeoutId);
		timeoutId = null;
		cleanup();
		settle();
	};

	return delayPromise;
};

const delay = createDelay({willResolve: true});
delay.reject = createDelay({willResolve: false});
delay.createWithTimers = ({clearTimeout, setTimeout}) => {
	const delay = createDelay({clearTimeout, setTimeout, willResolve: true});
	delay.reject = createDelay({clearTimeout, setTimeout, willResolve: false});
	return delay;
};

module.exports = delay;
// TODO: Remove this for the next major release
module.exports.default = delay;


/***/ }),

/***/ "./node_modules/next-server/dist/lib/amp.js":
/*!**************************************************!*\
  !*** ./node_modules/next-server/dist/lib/amp.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amphtml_context_1 = __webpack_require__(/*! ./amphtml-context */ "./node_modules/next-server/dist/lib/amphtml-context.js");

function isAmp() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? false : _ref$enabled,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return enabled && (!hybrid || hybrid && hasQuery);
}

exports.isAmp = isAmp;

function useAmp() {
  var ampMode = react_1.default.useContext(amphtml_context_1.AmpModeContext); // un-comment below to not be considered AMP in dirty mode

  return isAmp(ampMode); // && ampMode.hasQuery
}

exports.useAmp = useAmp;

function withAmp(Component) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$hybrid = _ref2.hybrid,
      hybrid = _ref2$hybrid === void 0 ? false : _ref2$hybrid;

  function WithAmpWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var ampMode = react_1.default.useContext(amphtml_context_1.AmpModeContext);
    ampMode.enabled = true;
    ampMode.hybrid = hybrid;
    return react_1.default.createElement(Component, props);
  }

  WithAmpWrapper.__nextAmpOnly = !hybrid;
  WithAmpWrapper.getInitialProps = Component.getInitialProps;
  return WithAmpWrapper;
}

exports.withAmp = withAmp;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/amphtml-context.js":
/*!**************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/amphtml-context.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpModeContext = React.createContext({});

/***/ }),

/***/ "./node_modules/next-server/dist/lib/head-manager-context.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/head-manager-context.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next-server/dist/lib/head.js":
/*!***************************************************!*\
  !*** ./node_modules/next-server/dist/lib/head.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _set = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next-server/dist/lib/side-effect.js"));

var amphtml_context_1 = __webpack_require__(/*! ./amphtml-context */ "./node_modules/next-server/dist/lib/amphtml-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next-server/dist/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next-server/dist/lib/amp.js");

function defaultHead() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'next-head';
  var isAmp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var head = [react_1.default.createElement("meta", {
    key: "charSet",
    charSet: "utf-8",
    className: className
  })];

  if (!isAmp) {
    head.push(react_1.default.createElement("meta", {
      key: "viewport",
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1",
      className: className
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === "string" || typeof child === "number") {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1.default.Fragment) {
    return list.concat(react_1.default.Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ["name", "httpEquiv", "charSet", "viewport", "itemProp"];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new _set.default();
  var tags = new _set.default();
  var metaTypes = new _set.default();
  var metaCategories = {};
  return function (h) {
    if (h.key && typeof h.key !== 'number' && h.key.indexOf(".$") === 0) {
      if (keys.has(h.key)) return false;
      keys.add(h.key);
      return true;
    }

    switch (h.type) {
      case "title":
      case "base":
        if (tags.has(h.type)) return false;
        tags.add(h.type);
        break;

      case "meta":
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === "charSet" || metatype === "viewport") {
            if (metaTypes.has(metatype)) return false;
            metaTypes.add(metatype);
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new _set.default();
            if (categories.has(category)) return false;
            categories.add(category);
            metaCategories[metatype] = categories;
          }
        }

        break;
    }

    return true;
  };
}
/**
 *
 * @param headElement List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1.default.Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead('', props.isAmp)).filter(unique()).reverse().map(function (c, i) {
    var className = (c.props && c.props.className ? c.props.className + " " : "") + "next-head";
    var key = c.key || i;
    return react_1.default.cloneElement(c, {
      key: key,
      className: className
    });
  });
}

var Effect = side_effect_1.default();

function Head(_ref) {
  var children = _ref.children;
  return react_1.default.createElement(amphtml_context_1.AmpModeContext.Consumer, null, function (ampMode) {
    return react_1.default.createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1.default.createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        isAmp: amp_1.isAmp(ampMode)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports.default = Head;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/side-effect.js":
/*!**********************************************************!*\
  !*** ./node_modules/next-server/dist/lib/side-effect.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js"));

var _set = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = typeof window === 'undefined';

function withSideEffect() {
  var mountedInstances = new _set.default();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState((0, _toConsumableArray2.default)(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  var SideEffect =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(SideEffect, _react_1$Component);
    (0, _createClass2.default)(SideEffect, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function SideEffect(props) {
      var _this;

      (0, _classCallCheck2.default)(this, SideEffect);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SideEffect).call(this, props));

      if (isServer) {
        mountedInstances.add((0, _assertThisInitialized2.default)(_this));
        emitChange((0, _assertThisInitialized2.default)(_this));
      }

      return _this;
    }

    (0, _createClass2.default)(SideEffect, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances.delete(this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);
    return SideEffect;
  }(react_1.Component);

  return SideEffect;
}

exports.default = withSideEffect;

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fdion%2FSites%2Fdestudio%2Fpages%2Findex.jsx!./":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fdion%2FSites%2Fdestudio%2Fpages%2Findex.jsx ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.jsx */ "./pages/index.jsx")
      if(true) {
        module.hot.accept(/*! ./pages/index.jsx */ "./pages/index.jsx", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.jsx */ "./pages/index.jsx")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_1aef2d0bbc0d334d831c ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_1aef2d0bbc0d334d831c */ "dll-reference dll_1aef2d0bbc0d334d831c"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

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
/* harmony import */ var _utils_rafLoop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/rafLoop */ "./utils/rafLoop.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* harmony import */ var _utils_main_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/main.scss */ "./utils/main.scss");
/* harmony import */ var _utils_main_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_utils_main_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Header_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Header.jsx */ "./components/Header.jsx");
/* harmony import */ var _components_Video_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Video.jsx */ "./components/Video.jsx");
/* harmony import */ var _components_Products_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Products.jsx */ "./components/Products.jsx");
















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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      rafLoop: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "componentDidMount", function () {
      _this.setState({
        rafLoop: new _utils_rafLoop__WEBPACK_IMPORTED_MODULE_9__["RafLoop"]()
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["4253455463", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(8), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(3.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["fontSizer"])(98), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(4.75)]]]) + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["4253455463", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(8), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(3.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["fontSizer"])(98), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(4.75)]]])
      }, "De Studio"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["4253455463", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(8), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(3.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["fontSizer"])(98), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(4.75)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "description",
        content: "landingspage for destudio",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["4253455463", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(8), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(3.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["fontSizer"])(98), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(4.75)]]])
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Header_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
        rafLoop: _this.state.rafLoop
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Video_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["4253455463", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(8), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(3.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["fontSizer"])(98), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(4.75)]]])
      }, "We make relentlessly honest objects."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Products_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], {
        rafLoop: _this.state.rafLoop
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "4253455463",
        dynamic: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(8), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(4), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(3.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["fontSizer"])(98), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(4.75)]
      }, ".container.__jsx-style-dynamic-selector{padding-top:".concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(8), "vw;padding-bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), "vw;}h1.__jsx-style-dynamic-selector{font-family:'NBGrotesk';font-size:48px;line-height:1em;-webkit-letter-spacing:-.04em;-moz-letter-spacing:-.04em;-ms-letter-spacing:-.04em;letter-spacing:-.04em;padding:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(4), "vw ").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(2), "vw;padding-bottom:0;width:100%;}@media (min-width:900px){.container.__jsx-style-dynamic-selector{padding-top:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(3.5), "vw;padding-bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), "vw;}h1.__jsx-style-dynamic-selector{font-size:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["fontSizer"])(98), "vw;padding:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(.75), "vw ").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), "vw;padding-bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(4.75), "vw;width:75%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QzRCLEFBR29FLEFBS25CLEFBYXVCLEFBS0Ysd0JBakI5QixlQUNDLEVBa0IwRCxFQXhCNUIsQUFrQkksWUFYNUIsa0NBTjFCLEFBa0JJLHNCQU1rRCw4Q0FFcEMsR0FsQndELE9BbUJ0RSwrREFsQmlCLGlCQUVOLFdBQ2YiLCJmaWxlIjoiL1VzZXJzL2Rpb24vU2l0ZXMvZGVzdHVkaW8vcGFnZXMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgeyBSYWZMb29wIH0gZnJvbSAnLi4vdXRpbHMvcmFmTG9vcCdcblxuaW1wb3J0IHsgZ2V0Q29scywgZm9udFNpemVyIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5cbmltcG9ydCAnLi4vdXRpbHMvbWFpbi5zY3NzJ1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzeCdcbmltcG9ydCBWaWRlbyBmcm9tICcuLi9jb21wb25lbnRzL1ZpZGVvLmpzeCdcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzLmpzeCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgcmFmTG9vcDogZmFsc2VcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByYWZMb29wOiBuZXcgUmFmTG9vcCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRlIFN0dWRpbzwvdGl0bGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwibGFuZGluZ3NwYWdlIGZvciBkZXN0dWRpb1wiLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIHsuLi57XG4gICAgICAgICAgICAgICAgICAgIHJhZkxvb3A6IHRoaXMuc3RhdGUucmFmTG9vcFxuICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgPFZpZGVvIC8+XG4gICAgICAgICAgICAgICAgPGgxPldlIG1ha2UgcmVsZW50bGVzc2x5IGhvbmVzdCBvYmplY3RzLjwvaDE+XG5cbiAgICAgICAgICAgICAgICA8UHJvZHVjdHMgey4uLntcbiAgICAgICAgICAgICAgICAgICAgcmFmTG9vcDogdGhpcy5zdGF0ZS5yYWZMb29wXG4gICAgICAgICAgICAgICAgfX0gLz5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogJHtnZXRDb2xzKDgpfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206ICR7IGdldENvbHMoMSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOQkdyb3Rlc2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4OyAvLyBUT0RPOiByZXNwb25zaXZlIGZvbnQgc2l6ZSBtb2JpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4wNGVtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAkeyBnZXRDb2xzKDQpIH12dyAkeyBnZXRDb2xzKDIpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAke2dldENvbHMoMy41KX12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJHsgZ2V0Q29scygxKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7IGZvbnRTaXplcig5OCkgfXZ3O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJHsgZ2V0Q29scyguNzUpIH12dyAkeyBnZXRDb2xzKDEpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJHsgZ2V0Q29scyg0Ljc1KSB9dnc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il19 */\n/*@ sourceURL=/Users/dion/Sites/destudio/pages/index.jsx */")));
    });

    return _this;
  }

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);



/***/ }),

/***/ "./utils/rafLoop.js":
/*!**************************!*\
  !*** ./utils/rafLoop.js ***!
  \**************************/
/*! exports provided: RafLoop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RafLoop", function() { return RafLoop; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/is */ "./node_modules/@babel/runtime-corejs2/core-js/object/is.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_weak_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_weak_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_weak_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");






/** Creates a rafLoop to handle scroll animations */
var RafLoop =
/*#__PURE__*/
function () {
  /**
   * Create the RafLoop
   * @param  {} el - Element to check the Yoffset
   */
  function RafLoop() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, RafLoop);

    this.scroll = typeof el.pageYOffset === 'number' ? el.pageYOffset : el.scrollTop;
    this.lastScroll = 0;
    this.deltaY = 0;
    this.el = el;
    this.momentumY = 0;
    this.t = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()();
    this.startTime = this.t;
    this.functionMap = new _babel_runtime_corejs2_core_js_weak_map__WEBPACK_IMPORTED_MODULE_1___default.a();
    this.functionsToRun = [];
    this.isPaused = false;
    this.ticking = false;
    this.isRunning = false;
    this.setup(el);
  }
  /**
   * Set the eventlisteners
   * @param  {} el - Element to check the Yoffset
   */


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(RafLoop, [{
    key: "setup",
    value: function setup(el) {
      var _this = this;

      this.update = this.update.bind(this); // Update value onscroll

      el.addEventListener('scroll', function (e) {
        if (e.currentTarget !== el) return;
        _this.scroll = typeof e.target.scrollTop === 'number' ? e.target.scrollTop : window.pageYOffset;
      }, true);
    } // --- Events ---

    /**
     * Remove a function from the loop
     * @param  {function} fn
     */

  }, {
    key: "remove",
    value: function remove(fn) {
      var func = this.functionMap.get(fn);
      this.functionsToRun = this.functionsToRun.filter(function (fn) {
        return !_babel_runtime_corejs2_core_js_object_is__WEBPACK_IMPORTED_MODULE_0___default()(fn, func);
      });
      this.functionMap.delete(fn);
    }
    /**
     * Add a function to the loop
     * @param  {function} fn - function to be added
     * @param  {function} params - Parameters to be given when the functions runs
     */

  }, {
    key: "add",
    value: function add(fn) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      var func = function func(e) {
        return fn.apply(void 0, [e].concat(params));
      };

      this.functionMap.set(fn, func);
      this.functionsToRun.push(func);
      if (!this.isRunning) this.start();
    }
    /**
     * Add a function to the loop to be run once
     * @param  {function} fn - function to be added
     * @param  {function} params - Parameters to be given when the functions runs
     */

  }, {
    key: "addOnce",
    value: function addOnce(fn) {
      var _this2 = this;

      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }

      var func = function func(e) {
        fn.apply(void 0, [e].concat(params));

        _this2.remove(fn);
      };

      this.functionMap.set(fn, func);
      this.functionsToRun.push(func);
      if (!this.isRunning) this.start();
    } // --- Toggle the loop ---

    /**
     * Start the loop
     */

  }, {
    key: "start",
    value: function start() {
      this.isRunning = true;
      window.requestAnimationFrame(this.update);
    }
    /**
     * Pause the loop
     */

  }, {
    key: "pause",
    value: function pause() {
      this.isPaused = true;
    }
    /**
     * Resume the loop
     */

  }, {
    key: "resume",
    value: function resume() {
      this.isPaused = false;
      this.t = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()();
      this.startTime = this.t;
    }
    /**
     * Destroy the rafLoop
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.lastScroll = 0;
      this.deltaY = 0;
      this.momentumY = 0;
      this.functionsToRun = [];
    } //  --- Helpers ---

    /**
     * Set all loop values to 0
     */

  }, {
    key: "reset",
    value: function reset() {
      this.lastScroll = 0;
      this.deltaY = 0;
      this.momentumY = 0;
    }
    /**
     * Hard scroll to
     */

  }, {
    key: "snapTo",
    value: function snapTo() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.el.scrollTo(x, y);
      this.momentumY = y;
    }
    /**
     * Get the current arguments for the loop
     * @returns {object} args
     */

  }, {
    key: "getEvent",
    value: function getEvent() {
      if (this.ticking) this.deltaY = this.scroll - this.lastScroll;

      var now = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()();

      var deltaTime = now - this.t;
      var time = now - this.startTime;
      this.lastScroll = this.scroll;
      this.momentumY += (this.lastScroll - this.momentumY) * 0.15;
      this.t = now;
      return {
        scrollY: this.lastScroll,
        deltaY: this.deltaY,
        momentumY: this.momentumY,
        deltaTime: deltaTime,
        time: time
      };
    } // --- Loop ---

    /**
     * Default loop function
     */

  }, {
    key: "update",
    value: function update() {
      this.ticking = true;

      if (!this.isPaused) {
        var args = this.getEvent();

        for (var i = 0; i < this.functionsToRun.length; i++) {
          this.functionsToRun[i](args);
        }
      }

      this.ticking = false;
      if (this.functionsToRun.length === 0) this.isRunning = false;
      if (this.isRunning) window.requestAnimationFrame(this.update);
    }
  }]);

  return RafLoop;
}();

/***/ }),

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! exports provided: fontSizer, getCols, getImageFactor, clamp, map, refToArray, isMobile, setHtmlOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizer", function() { return fontSizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCols", function() { return getCols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageFactor", function() { return getImageFactor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refToArray", function() { return refToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHtmlOverflow", function() { return setHtmlOverflow; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function fontSizer(size) {
  var responsiveSize = size / 15;
  return responsiveSize;
}
function getCols(amount) {
  return amount / 29 * 100;
}
function getImageFactor(rectWidth, rectHeight, image) {
  var rectRatio = rectWidth / rectHeight;
  var imageRatio = image.naturalWidth / image.naturalHeight;
  var factorX = rectRatio > imageRatio ? 1 : 1 * rectRatio / imageRatio;
  var factorY = rectRatio > imageRatio ? 1 / rectRatio * imageRatio : 1;
  return {
    factorX: factorX,
    factorY: factorY
  };
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function map(from, to, s) {
  return to[0] + (s - from[0]) * (to[1] - to[0]) / (from[1] - from[0]);
}
function refToArray(el, array) {
  if (!el || !_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(array) || array.includes(el)) return;
  return array.push(el);
}
function isMobile() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}
function setHtmlOverflow() {
  var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'initial';
  if (!BIA_HTML) BIA_HTML = document.querySelector('html');

  if (isMobile()) {
    if (newState === 'initial') {
      if (!window.BIA_SCROLL_BLOCK) return;

      if (window.addEventListener) {
        window.removeEventListener('scroll', blockBodyScroll, false);
      }

      window.onmousewheel = document.onmousewheel = null;
      window.ontouchmove = null;
      window.onwheel = null;
      document.onkeydown = null;
      window.BIA_SCROLL_BLOCK = false;
    }

    if (newState === 'hidden') {
      if (window.BIA_SCROLL_BLOCK) return;

      if (window.removeEventListener) {
        window.addEventListener('scroll', blockBodyScroll, false);
      }

      window.onwheel = blockBodyScroll;
      window.ontouchmove = blockBodyScroll;
      window.onmousewheel = document.onmousewheel = blockBodyScroll;
      document.onkeydown = preventDefaultForScrollKeys;
      window.BIA_SCROLL_BLOCK = true;
    }
  }

  BIA_HTML.style.overflow = newState;
}

/***/ }),

/***/ 0:
/*!***********************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fdion%2FSites%2Fdestudio%2Fpages%2Findex.jsx ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fdion%2FSites%2Fdestudio%2Fpages%2Findex.jsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fdion%2FSites%2Fdestudio%2Fpages%2Findex.jsx!./");


/***/ }),

/***/ "dll-reference dll_1aef2d0bbc0d334d831c":
/*!*******************************************!*\
  !*** external "dll_1aef2d0bbc0d334d831c" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_1aef2d0bbc0d334d831c;

/***/ })

},[[0,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=index.js.map