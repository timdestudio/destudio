module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* harmony import */ var _Image_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Image.jsx */ "./components/Image.jsx");












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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5)]]]) + " " + "header"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        target: "_blank",
        rel: "noopener",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5)]]])
      }, "Shop"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5)]]])
      }, "About")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5)]]]) + " " + "logo"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 72 72",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5)]]])
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M16,55.16a2.17,2.17,0,0,0-3.06,0l-1.5,1.56,5,5,1.5-1.5a2.17,2.17,0,0,0,0-3.06Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M17.89,24.14a2.17,2.17,0,0,0,0-3.06L16,19.16a2.17,2.17,0,0,0-3.06,0l-1.5,1.5,5,5Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M52.81,25.22a2.17,2.17,0,0,0,0-3.06l-1.92-1.92a2.17,2.17,0,0,0-3.06,0l-1.5,1.5,5,5Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M50.89,56.24a2.17,2.17,0,0,0-3.06,0l-1.5,1.5,5,5,1.5-1.5a2.17,2.17,0,0,0,0-3.06Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M38.75,0l2.48,2.48-.78.84L37.1,0H0V72H37l-2.53-2.5-1.92,1.92-.84-.84,4.74-4.74.84.84-1.92,2L38.75,72H72V0ZM52,14.36,58.69,21l-.78.9L51.19,15.2Zm-5,5a3.33,3.33,0,0,1,4.74,0l1.92,1.92a3.33,3.33,0,0,1,0,4.74l-2.4,2.4L44.65,21.8Zm-8.22,8.16,4.26,4.32a2.16,2.16,0,1,0,3.06-3.06L41.83,24.5l.84-.84L47.05,28a3.35,3.35,0,0,1-4.74,4.74L38,28.4ZM27.61,2.66l1.08-1.08a2.64,2.64,0,0,1,3-.48l-.54,1.08a1.36,1.36,0,0,0-1.62.24L28.45,3.5a1.43,1.43,0,0,0,.06,2c.54.54,1.14.42,1.8.06.48-.3,1-.66,1.56-1,1.08-.72,2.22-1.2,3.48.06a2.59,2.59,0,0,1,.06,3.72L34.33,9.44a2.64,2.64,0,0,1-3,.48l.54-1.08a1.36,1.36,0,0,0,1.62-.24l1-1.08a1.49,1.49,0,0,0,0-2c-.54-.54-1.14-.42-1.8-.06-.48.3-1,.66-1.56,1-1.08.72-2.22,1.2-3.48-.06A2.64,2.64,0,0,1,27.61,2.66ZM21,9.38l.84.84L18,14.12l2.1,2.1,3.9-3.9.84.84-3.9,3.9,2.1,2,3.9-3.9.84.84-4.8,4.8-6.66-6.72Zm-8.94,8.88a3.33,3.33,0,0,1,4.74,0l2,2a3.33,3.33,0,0,1,0,4.74l-2.4,2.4L9.67,20.66ZM18.79,61l-2.4,2.4L9.67,56.72l2.4-2.4a3.33,3.33,0,0,1,4.74,0l2,2A3.33,3.33,0,0,1,18.79,61Zm4.14-4.2-6.66-6.66L21,45.44l.84.84L18,50.18l2.1,2.1,3.9-3.9.84.84-3.9,3.9,2.1,2,3.9-3.9.84.84ZM35.41,44.36l-1.08,1.08a2.64,2.64,0,0,1-3,.48l.54-1.08a1.36,1.36,0,0,0,1.62-.24l1-1.08a1.49,1.49,0,0,0,0-2c-.54-.54-1.14-.42-1.8-.06-.48.3-1,.66-1.56,1-1.08.72-2.22,1.2-3.48-.06a2.64,2.64,0,0,1-.06-3.72l1.08-1.08a2.64,2.64,0,0,1,3-.48l-.54,1.08a1.36,1.36,0,0,0-1.62.24L28.45,39.5a1.43,1.43,0,0,0,.06,2c.54.54,1.14.42,1.8.06.48-.3,1-.66,1.56-1,1.08-.72,2.22-1.2,3.48.06A2.59,2.59,0,0,1,35.41,44.36Zm-.84-10.8-1.92,1.92-.84-.84,4.74-4.74.84.84-2,1.92,5.82,5.82-.78.9Zm12.3,35.16a3.34,3.34,0,0,1-4.56,0L38,64.4l.84-.84,4.26,4.32a2.16,2.16,0,1,0,3.06-3.06L41.83,60.5l.84-.84L47.05,64A3.33,3.33,0,0,1,46.87,68.72Zm6.84-6.66-2.4,2.4L44.65,57.8l2.4-2.4a3.33,3.33,0,0,1,4.74,0l1.92,1.92A3.33,3.33,0,0,1,53.71,62.06Zm4.2-4.14L51.19,51.2l.84-.84L58.69,57Zm5-5a3.33,3.33,0,0,1-4.74,0L56.29,51A3.35,3.35,0,0,1,61,46.22L63,48.14A3.33,3.33,0,0,1,63,52.88Zm0-36a3.33,3.33,0,0,1-4.74,0L56.29,15A3.35,3.35,0,0,1,61,10.22L63,12.14A3.33,3.33,0,0,1,63,16.88Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M62.05,12.92,60.13,11a2.17,2.17,0,0,0-3.24,2.88l.18.18L59,16a2.17,2.17,0,0,0,3.24-2.88Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5)]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        style: {
          fill: '#191919'
        },
        d: "M62.05,48.92,60.13,47a2.17,2.17,0,0,0-3.24,2.88l.18.18L59,52a2.17,2.17,0,1,0,3.24-2.88Z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3250136302", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5)]]])
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3250136302",
        dynamic: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5)]
      }, ".header.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:".concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), "vw;z-index:3;}a.__jsx-style-dynamic-selector{font-size:14px;font-weight:600;margin-right:1.75em;}a.__jsx-style-dynamic-selector:last-of-type{margin-right:2em;}.logo.__jsx-style-dynamic-selector{position:relative;width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), "vw;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(3.75), "vw;background:white;}@media (min-width:900px){.header.__jsx-style-dynamic-selector{padding:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), "vw;}a.__jsx-style-dynamic-selector{font-size:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), "vw;margin-right:2em;}a.__jsx-style-dynamic-selector:last-of-type{margin-right:3em;}.logo.__jsx-style-dynamic-selector{width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5), "vw;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.5), "vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvSGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QzRCLEFBR3dDLEFBY0EsQUFNRSxBQUlDLEFBU3lCLEFBSUUsQUFLeEIsQUFJb0IsZUE3Q25DLEFBY1UsRUFNcEIsQUFzQkksQ0FsQnFDLEdBdkI5QixPQUVNLEdBWU8sTUErQnNCLEVBYjFDLEVBSXFCLFVBckJ6QixJQVMwQyxHQWF0QyxpQkFTQSxrQkFwQmlCLFNBdkJRLFFBd0I3Qix5RkF2QnVCLDZGQUNSLFdBRTRCLHVDQUM3QixVQUNkIiwiZmlsZSI6Ii9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IGdldENvbHMsIGZvbnRTaXplciwgY2xhbXAgfSBmcm9tICcuLi91dGlscy91dGlscydcblxuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanN4J1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgICB0cmlnZ2VyWSA9IC0xXG4gICAgdHJpZ2dlcnBvaW50ID0gMTUwXG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUgPSBwcmV2UHJvcHMgPT4ge1xuICAgICAgICBpZiggIXRoaXMucHJvcHMucmFmTG9vcCB8fCB0aGlzLnByb3BzLnJhZkxvb3AgPT09IHByZXZQcm9wcy5yYWZMb29wICkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5wcm9wcy5yYWZMb29wLmFkZCh0aGlzLm9uU2Nyb2xsKVxuICAgIH1cblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCIgcmVmPXsgZWwgPT4gdGhpcy5tZW51ID0gZWwgfT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5TaG9wPC9hPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgICAgIDxhPkFib3V0PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDcyIDcyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9e3tmaWxsOiAnIzE5MTkxOSd9fSBkPVwiTTE2LDU1LjE2YTIuMTcsMi4xNywwLDAsMC0zLjA2LDBsLTEuNSwxLjU2LDUsNSwxLjUtMS41YTIuMTcsMi4xNywwLDAsMCwwLTMuMDZaXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPXt7ZmlsbDogJyMxOTE5MTknfX0gZD1cIk0xNy44OSwyNC4xNGEyLjE3LDIuMTcsMCwwLDAsMC0zLjA2TDE2LDE5LjE2YTIuMTcsMi4xNywwLDAsMC0zLjA2LDBsLTEuNSwxLjUsNSw1WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17e2ZpbGw6ICcjMTkxOTE5J319IGQ9XCJNNTIuODEsMjUuMjJhMi4xNywyLjE3LDAsMCwwLDAtMy4wNmwtMS45Mi0xLjkyYTIuMTcsMi4xNywwLDAsMC0zLjA2LDBsLTEuNSwxLjUsNSw1WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17e2ZpbGw6ICcjMTkxOTE5J319IGQ9XCJNNTAuODksNTYuMjRhMi4xNywyLjE3LDAsMCwwLTMuMDYsMGwtMS41LDEuNSw1LDUsMS41LTEuNWEyLjE3LDIuMTcsMCwwLDAsMC0zLjA2WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17e2ZpbGw6ICcjMTkxOTE5J319IGQ9XCJNMzguNzUsMGwyLjQ4LDIuNDgtLjc4Ljg0TDM3LjEsMEgwVjcySDM3bC0yLjUzLTIuNS0xLjkyLDEuOTItLjg0LS44NCw0Ljc0LTQuNzQuODQuODQtMS45MiwyTDM4Ljc1LDcySDcyVjBaTTUyLDE0LjM2LDU4LjY5LDIxbC0uNzguOUw1MS4xOSwxNS4yWm0tNSw1YTMuMzMsMy4zMywwLDAsMSw0Ljc0LDBsMS45MiwxLjkyYTMuMzMsMy4zMywwLDAsMSwwLDQuNzRsLTIuNCwyLjRMNDQuNjUsMjEuOFptLTguMjIsOC4xNiw0LjI2LDQuMzJhMi4xNiwyLjE2LDAsMSwwLDMuMDYtMy4wNkw0MS44MywyNC41bC44NC0uODRMNDcuMDUsMjhhMy4zNSwzLjM1LDAsMCwxLTQuNzQsNC43NEwzOCwyOC40Wk0yNy42MSwyLjY2bDEuMDgtMS4wOGEyLjY0LDIuNjQsMCwwLDEsMy0uNDhsLS41NCwxLjA4YTEuMzYsMS4zNiwwLDAsMC0xLjYyLjI0TDI4LjQ1LDMuNWExLjQzLDEuNDMsMCwwLDAsLjA2LDJjLjU0LjU0LDEuMTQuNDIsMS44LjA2LjQ4LS4zLDEtLjY2LDEuNTYtMSwxLjA4LS43MiwyLjIyLTEuMiwzLjQ4LjA2YTIuNTksMi41OSwwLDAsMSwuMDYsMy43MkwzNC4zMyw5LjQ0YTIuNjQsMi42NCwwLDAsMS0zLC40OGwuNTQtMS4wOGExLjM2LDEuMzYsMCwwLDAsMS42Mi0uMjRsMS0xLjA4YTEuNDksMS40OSwwLDAsMCwwLTJjLS41NC0uNTQtMS4xNC0uNDItMS44LS4wNi0uNDguMy0xLC42Ni0xLjU2LDEtMS4wOC43Mi0yLjIyLDEuMi0zLjQ4LS4wNkEyLjY0LDIuNjQsMCwwLDEsMjcuNjEsMi42NlpNMjEsOS4zOGwuODQuODRMMTgsMTQuMTJsMi4xLDIuMSwzLjktMy45Ljg0Ljg0LTMuOSwzLjksMi4xLDIsMy45LTMuOS44NC44NC00LjgsNC44LTYuNjYtNi43MlptLTguOTQsOC44OGEzLjMzLDMuMzMsMCwwLDEsNC43NCwwbDIsMmEzLjMzLDMuMzMsMCwwLDEsMCw0Ljc0bC0yLjQsMi40TDkuNjcsMjAuNjZaTTE4Ljc5LDYxbC0yLjQsMi40TDkuNjcsNTYuNzJsMi40LTIuNGEzLjMzLDMuMzMsMCwwLDEsNC43NCwwbDIsMkEzLjMzLDMuMzMsMCwwLDEsMTguNzksNjFabTQuMTQtNC4yLTYuNjYtNi42NkwyMSw0NS40NGwuODQuODRMMTgsNTAuMThsMi4xLDIuMSwzLjktMy45Ljg0Ljg0LTMuOSwzLjksMi4xLDIsMy45LTMuOS44NC44NFpNMzUuNDEsNDQuMzZsLTEuMDgsMS4wOGEyLjY0LDIuNjQsMCwwLDEtMywuNDhsLjU0LTEuMDhhMS4zNiwxLjM2LDAsMCwwLDEuNjItLjI0bDEtMS4wOGExLjQ5LDEuNDksMCwwLDAsMC0yYy0uNTQtLjU0LTEuMTQtLjQyLTEuOC0uMDYtLjQ4LjMtMSwuNjYtMS41NiwxLTEuMDguNzItMi4yMiwxLjItMy40OC0uMDZhMi42NCwyLjY0LDAsMCwxLS4wNi0zLjcybDEuMDgtMS4wOGEyLjY0LDIuNjQsMCwwLDEsMy0uNDhsLS41NCwxLjA4YTEuMzYsMS4zNiwwLDAsMC0xLjYyLjI0TDI4LjQ1LDM5LjVhMS40MywxLjQzLDAsMCwwLC4wNiwyYy41NC41NCwxLjE0LjQyLDEuOC4wNi40OC0uMywxLS42NiwxLjU2LTEsMS4wOC0uNzIsMi4yMi0xLjIsMy40OC4wNkEyLjU5LDIuNTksMCwwLDEsMzUuNDEsNDQuMzZabS0uODQtMTAuOC0xLjkyLDEuOTItLjg0LS44NCw0Ljc0LTQuNzQuODQuODQtMiwxLjkyLDUuODIsNS44Mi0uNzguOVptMTIuMywzNS4xNmEzLjM0LDMuMzQsMCwwLDEtNC41NiwwTDM4LDY0LjRsLjg0LS44NCw0LjI2LDQuMzJhMi4xNiwyLjE2LDAsMSwwLDMuMDYtMy4wNkw0MS44Myw2MC41bC44NC0uODRMNDcuMDUsNjRBMy4zMywzLjMzLDAsMCwxLDQ2Ljg3LDY4LjcyWm02Ljg0LTYuNjYtMi40LDIuNEw0NC42NSw1Ny44bDIuNC0yLjRhMy4zMywzLjMzLDAsMCwxLDQuNzQsMGwxLjkyLDEuOTJBMy4zMywzLjMzLDAsMCwxLDUzLjcxLDYyLjA2Wm00LjItNC4xNEw1MS4xOSw1MS4ybC44NC0uODRMNTguNjksNTdabTUtNWEzLjMzLDMuMzMsMCwwLDEtNC43NCwwTDU2LjI5LDUxQTMuMzUsMy4zNSwwLDAsMSw2MSw0Ni4yMkw2Myw0OC4xNEEzLjMzLDMuMzMsMCwwLDEsNjMsNTIuODhabTAtMzZhMy4zMywzLjMzLDAsMCwxLTQuNzQsMEw1Ni4yOSwxNUEzLjM1LDMuMzUsMCwwLDEsNjEsMTAuMjJMNjMsMTIuMTRBMy4zMywzLjMzLDAsMCwxLDYzLDE2Ljg4WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17e2ZpbGw6ICcjMTkxOTE5J319IGQ9XCJNNjIuMDUsMTIuOTIsNjAuMTMsMTFhMi4xNywyLjE3LDAsMCwwLTMuMjQsMi44OGwuMTguMThMNTksMTZhMi4xNywyLjE3LDAsMCwwLDMuMjQtMi44OFpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9e3tmaWxsOiAnIzE5MTkxOSd9fSBkPVwiTTYyLjA1LDQ4LjkyLDYwLjEzLDQ3YTIuMTcsMi4xNywwLDAsMC0zLjI0LDIuODhsLjE4LjE4TDU5LDUyYTIuMTcsMi4xNywwLDEsMCwzLjI0LTIuODhaXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICR7IGdldENvbHMoMikgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4OyAvLyBUT0RPOiByZXNwb25zaXZlIGZvbnQgc2l6ZSBtb2JpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNzVlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGE6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoMy43NSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkeyBnZXRDb2xzKDMuNzUpIH12dztcblxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAkeyBnZXRDb2xzKDEpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke2ZvbnRTaXplcigxNil9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBhOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scygxLjUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7IGdldENvbHMoMS41KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIG9uU2Nyb2xsID0gKGFyZ3MpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLm1lbnUpIHJldHVyblxuXG4gICAgICAgIGlmICh0aGlzLnRyaWdnZXJZID09PSAtMSkgdGhpcy50cmlnZ2VyWSA9IGFyZ3Muc2Nyb2xsWSArIHRoaXMudHJpZ2dlcnBvaW50XG4gICAgICAgIGxldCBkaWZmWSA9IDBcblxuICAgICAgICBpZiAoYXJncy5zY3JvbGxZID49IHRoaXMudHJpZ2dlclkpIHtcbiAgICAgICAgICAgIGRpZmZZID0gY2xhbXAoYXJncy5zY3JvbGxZIC0gdGhpcy50cmlnZ2VyWSwgMCwgMTUwKVxuXG4gICAgICAgICAgICBpZiAoZGlmZlkgPT09IDE1MCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlclkgPSBhcmdzLnNjcm9sbFkgLSBkaWZmWVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFyZ3MuZGVsdGFZIDwgMCAmJiBkaWZmWSA9PT0gMClcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclkgPSBhcmdzLnNjcm9sbFkgKyB0aGlzLnRyaWdnZXJwb2ludFxuXG4gICAgICAgIHRoaXMubWVudS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwgLSR7ZGlmZll9cHgsIDApYFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */\n/*@ sourceURL=/Users/dion/Sites/destudio/components/Header.jsx */")));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onScroll", function (args) {
      if (!_this.menu) return;
      if (_this.triggerY === -1) _this.triggerY = args.scrollY + _this.triggerpoint;
      var diffY = 0;

      if (args.scrollY >= _this.triggerY) {
        diffY = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["clamp"])(args.scrollY - _this.triggerY, 0, 150);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var delay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! delay */ "delay");
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
        image: '/static/images/tray-render.png',
        title: 'Tray',
        price: '100.00'
      }, {
        image: '/static/images/tea-light.png',
        title: 'Task Light',
        price: '600.00'
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
      }, ".container.__jsx-style-dynamic-selector{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;padding:".concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2), "vw;}.sticky-text.__jsx-style-dynamic-selector{font-size:16px;line-height:1.3em;-webkit-letter-spacing:-.01em;-moz-letter-spacing:-.01em;-ms-letter-spacing:-.01em;letter-spacing:-.01em;width:90%;margin-bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4.85), "vw;opacity:").concat(_this.state.position === 'bottom' ? 0 : 1, ";-webkit-transition:opacity .45s ease;transition:opacity .45s ease;}.sticky-text.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{display:block;margin-top:.8em;}@media (min-width:900px){.container.__jsx-style-dynamic-selector{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), "vw;padding-bottom:0;}.sticky-text.__jsx-style-dynamic-selector{position:absolute;top:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), "vw;left:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), "vw;font-size:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(20), "vw;line-height:1.3em;-webkit-letter-spacing:-.01em;-moz-letter-spacing:-.01em;-ms-letter-spacing:-.01em;letter-spacing:-.01em;width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(7), "vw;margin-bottom:0;}.sticky-text.fixed.__jsx-style-dynamic-selector{position:fixed;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvUHJvZHVjdHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtENEIsQUFHMkMsQUFXSCxBQVlELEFBTVcsQUFPSCxBQWFILGNBekJILENBWkUsQUFzQ2xCLEdBakRhLEFBb0MwQixZQVozQyxHQVowQixvQkF5QmtCLG9DQUVLLEdBdEN2QixTQTZCcUIsNkJBVXJCLFFBMUJaLEVBaUJXLFFBaEJ3QixBQTBCbkIsU0FUMUIsYUE3QlcsV0FDQyxZQUUyQixBQVdGLHFDQUNSLEVBWGpDLHFCQW9DNkMscUNBQ3JCLE1BekJ4QixVQTBCSSIsImZpbGUiOiIvVXNlcnMvZGlvbi9TaXRlcy9kZXN0dWRpby9jb21wb25lbnRzL1Byb2R1Y3RzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBkZWxheSBmcm9tICdkZWxheSdcblxuaW1wb3J0IHsgZm9udFNpemVyLCBnZXRDb2xzLCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJ1xuXG5jbGFzcyBQcm9kdWN0cyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2luaXRpYWwnXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlID0gcHJldlByb3BzID0+IHtcbiAgICAgICAgaWYoICF0aGlzLnByb3BzLnJhZkxvb3AgfHwgdGhpcy5wcm9wcy5yYWZMb29wID09PSBwcmV2UHJvcHMucmFmTG9vcCApIHJldHVyblxuXG4gICAgICAgIHRoaXMucHJvcHMucmFmTG9vcC5hZGQodGhpcy5vblNjcm9sbClcbiAgICB9XG5cbiAgICByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltYWdlOiAnL3N0YXRpYy9pbWFnZXMvdHJheS1yZW5kZXIucG5nJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1RyYXknLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnMTAwLjAwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWFnZTogJy9zdGF0aWMvaW1hZ2VzL3RlYS1saWdodC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGFzayBMaWdodCcsXG4gICAgICAgICAgICAgICAgcHJpY2U6ICc2MDAuMDAnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltYWdlOiAnL3N0YXRpYy9pbWFnZXMvdGVhLWxpZ2h0LnBuZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQdXp6bGUgVGVhIExpZ2h0JyxcbiAgICAgICAgICAgICAgICBwcmljZTogJzEyMC4wMCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiByZWY9eyBlbCA9PiB0aGlzLnN0aWNreVdyYXBwZXIgPSBlbCB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc3RpY2t5LXRleHQgJHsgdGhpcy5zdGF0ZS5wb3NpdGlvbiAhPT0gJ2luaXRpYWwnID8gJ2ZpeGVkJyA6ICcnIH1gfSByZWY9eyBlbCA9PiB0aGlzLnN0aWNreUVsID0gZWwgfT5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBPdXIgb2JqZWN0cyBhcmUgY29tcGxldGVseSBzdHJpcHBlZCBkb3duLCB0aGV5IGhhdmUgbm90aGluZyB0byBoaWRlLiBHb29kIGxvb2tpbmcgYW5kIGdvb2QgZm9yIHRoZSB3b3JsZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PGEgaHJlZj1cIlwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+4oaSIE1vcmUgYWJvdXQgdGhlIHN0dWRpbzwvYT48L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c1wiPlxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVyUHJvZHVjdHMocHJvZHVjdHMpIH0gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVySW5zdGFncmFtUG9zdCgpIH0gXG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAkeyBnZXRDb2xzKDIpIH12dztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5zdGlja3ktdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7IC8vIFRPRE86IHJlc3BvbnNpdmUgZm9udCBzaXplIG1vYmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uMDFlbTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IGdldENvbHMoNC44NSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAkeyB0aGlzLnN0YXRlLnBvc2l0aW9uID09PSAnYm90dG9tJyA/IDAgOiAxIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC40NXMgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5zdGlja3ktdGV4dCBzdHJvbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuOGVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICR7IGdldENvbHMoMSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RpY2t5LXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6ICR7Z2V0Q29scygxKX12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAkeyBnZXRDb2xzKDEpIH12dztcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7IGZvbnRTaXplcigyMCkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4wMWVtO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkeyBnZXRDb2xzKDcpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RpY2t5LXRleHQuZml4ZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVuZGVyUHJvZHVjdHMgPSBwcm9kdWN0cyA9PiB7XG4gICAgICAgIHJldHVybiBwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmRcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIiBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlLWhvdmVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnsgcHJvZHVjdC50aXRsZSB9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICBFVVIgeyBwcm9kdWN0LnByaWNlIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBnZXRDb2xzKDIuNSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgZ2V0Q29scyg2KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7IGdldENvbHMoMjYqMS4yKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWltYWdlOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y3RjdGNztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7IHByb2R1Y3QuaW1hZ2UgfScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjM1cyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1pbWFnZS1ob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2hvdmVyLXBsYWNlaG9sZGVyLmpwZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43NXMgY3ViaWMtYmV6aWVyKC4xOSwgMSwgLjIyLCAxKSwgb3BhY2l0eSAuMzVzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtaW1hZ2U6aG92ZXI6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1pbWFnZTpob3ZlciAucHJvZHVjdC1pbWFnZS1ob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7IC8vIFRPRE86IHJlc3BvbnNpdmUgZm9udCBzaXplIG1vYmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQzZW07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNWVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXB0aW9uIHN0cm9uZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoMTMpIH12dztcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgZ2V0Q29scygxLjI1KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZDpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBnZXRDb2xzKC4zKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7IGdldENvbHMoMTMqMS4yKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7IGZvbnRTaXplcigxNikgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zN2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxLjc1ZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXJJbnN0YWdyYW1Qb3N0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWdyYW0tcG9zdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdGFncmFtLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdGFncmFtLWltYWdlLW1hc2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdGFncmFtLWltYWdlLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5TdGF5IHBvc3RlZDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICBGb2xsb3cgdXMgb24gaW5zdGFncmFtXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YWdyYW0tcG9zdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaW5zdGFncmFtLWltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkeyBnZXRDb2xzKDEzKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7IGdldENvbHMoMTMgKiAxLjI1KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaW5zdGFncmFtLWltYWdlLW1hc2sge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YWdyYW0taW1hZ2UtaW5uZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvaW5zdGFncmFtLmpwZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY2FwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7IC8vIFRPRE86IHJlc3BvbnNpdmUgZm9udCBzaXplIG1vYmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDNlbTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxLjVlbSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scygxMykgfXZ3O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmNhcHRpb24gc3Ryb25nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RhZ3JhbS1wb3N0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAkeyBnZXRDb2xzKC44NSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICR7IGdldENvbHMoMSkgfXZ3O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoNCkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJHsgdGhpcy5zdGF0ZS5wb3NpdGlvbiAhPT0gJ2JvdHRvbScgPyAndHJhbnNsYXRlWCgtMTAwJSknIDogJ25vbmUnIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogJHsgdGhpcy5zdGF0ZS5wb3NpdGlvbiAhPT0gJ2JvdHRvbScgPyAwOiAxIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjk1cyBjdWJpYy1iZXppZXIoLjE5LCAxLCAuMjIsIDEpLCBvcGFjaXR5IC40NXMgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RhZ3JhbS1pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoNCkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHsgZ2V0Q29scyg0ICogMS4yNSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zdGFncmFtLWltYWdlLW1hc2sge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJHsgdGhpcy5zdGF0ZS5wb3NpdGlvbiAhPT0gJ2JvdHRvbScgPyAndHJhbnNsYXRlWCgtMTAwJSknIDogJ25vbmUnIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuMTVzIGN1YmljLWJlemllciguMTksIDEsIC4yMiwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnN0YWdyYW0taW1hZ2UtaW5uZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJHsgdGhpcy5zdGF0ZS5wb3NpdGlvbiAhPT0gJ2JvdHRvbScgPyAndHJhbnNsYXRlWCg4MCUpJyA6ICdub25lJyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuOTVzIGN1YmljLWJlemllciguMTksIDEsIC4yMiwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7IGZvbnRTaXplcigxNikgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM3ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxLjc1ZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkeyBnZXRDb2xzKDQpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgb25TY3JvbGwgPSBhcmdzID0+IHtcbiAgICAgICAgaWYoICF0aGlzLnN0aWNreUVsIHx8ICF0aGlzLnN0aWNreVdyYXBwZXIgKSByZXR1cm5cblxuICAgICAgICBpZiggIXRoaXMuYm91bmRzIHx8IHRoaXMuYm91bmRzLndpbmRvd1dpZHRoICE9PSB3aW5kb3cuaW5uZXJXaWR0aCApIHtcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXJCb3VuZHMgPSB0aGlzLnN0aWNreVdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIHRoaXMuYm91bmRzID0ge1xuICAgICAgICAgICAgICAgIHRvcDogd3JhcHBlckJvdW5kcy50b3AgKyBhcmdzLnNjcm9sbFksXG4gICAgICAgICAgICAgICAgYm90dG9tOiB3cmFwcGVyQm91bmRzLmJvdHRvbSArIGFyZ3Muc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB3aW5kb3dXaWR0aDogd2luZG93LmlubmVyV2lkdGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHt0b3AgPSAwLCBib3R0b20gPSAwfSA9IHRoaXMuYm91bmRzXG5cbiAgICAgICAgbGV0IHBvc2l0aW9uID0gJ2luaXRpYWwnXG5cbiAgICAgICAgaWYoIGFyZ3Muc2Nyb2xsWSA+IHRvcCAmJiBhcmdzLnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQgPCBib3R0b20pIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gJ2ZpeGVkJ1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3Muc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodCA+PSBib3R0b20pIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gJ2JvdHRvbSdcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCBwb3NpdGlvbiA9PT0gdGhpcy5zdGF0ZS5wb3NpdGlvbiApIHJldHVyblxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cyJdfQ== */\n/*@ sourceURL=/Users/dion/Sites/destudio/components/Products.jsx */")));
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
        }, ".product-card.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;margin-bottom:".concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(2.5), "vw;}.product-card.__jsx-style-dynamic-selector:last-of-type{margin-bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(6), "vw;}.product-image.__jsx-style-dynamic-selector{position:relative;overflow:hidden;width:100%;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(26 * 1.2), "vw;}.product-image.__jsx-style-dynamic-selector:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:#F7F7F7;background-image:url('").concat(product.image, "');background-position:center;background-repeat:no-repeat;background-size:contain;-webkit-transition:opacity .35s ease;transition:opacity .35s ease;}.product-image-hover.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;background-image:url('/static/images/hover-placeholder.jpg');background-position:center;background-repeat:no-repeat;background-size:cover;opacity:0;-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-transition:-webkit-transform .75s cubic-bezier(.19,1,.22,1),opacity .35s ease;-webkit-transition:transform .75s cubic-bezier(.19,1,.22,1),opacity .35s ease;transition:transform .75s cubic-bezier(.19,1,.22,1),opacity .35s ease;}@media (hover:hover){.product-image.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector:before{opacity:0;}.product-image.__jsx-style-dynamic-selector:hover .product-image-hover.__jsx-style-dynamic-selector{-webkit-transform:none;-ms-transform:none;transform:none;opacity:1;}}.caption.__jsx-style-dynamic-selector{font-size:14px;line-height:1.43em;margin:1.5em 0;}.caption.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{display:block;}@media (min-width:900px){.product-card.__jsx-style-dynamic-selector{width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), "vw;margin-bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1.25), "vw;}.product-card.__jsx-style-dynamic-selector:last-of-type{margin-bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(.3), "vw;}.product-image.__jsx-style-dynamic-selector{height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13 * 1.2), "vw;}.caption.__jsx-style-dynamic-selector{font-size:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), "vw;line-height:1.37em;margin:1.75em 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvUHJvZHVjdHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBIZ0MsQUFHMEMsQUFTZ0MsQUFJM0IsQUFRUCxBQW1CTyxBQXFCSixBQUlLLEFBTUosQUFPRCxBQUsyQixBQU1RLEFBSVAsQUFJRyxVQW5DN0MsQ0F2Q2tCLEdBd0R0QixDQVB1QixHQTFESCxBQTJCVixNQUNDLEtBbEJELEVBb0JLLEdBNUJBLEFBMERJLENBakRSLEVBNEQwQyxDQVNqRCxHQUl1QixDQXZFWixBQWtCQyxHQW5DaEIsQUFPMEMsQUF5RXRDLElBZkosSUEvQ2dCLENBbUJGLEdBbUJJLEdBa0NNLElBbkR5QyxDQW5CMUMsRUFxQ25CLE9BbEVzQixFQW9HdEIsTUFmQSxDQXBFSixDQWF5RCx5Q0FtQjFCLFlBbEJBLGVBN0JoQixBQWdEaUIsV0E5Q2lCLENBNEJqQixnQkFtQk4sWUFsQkUsVUFvQmQsTUFoRGQsSUFpRDBCLElBbkJPLGtFQUNqQyxRQW1COEUsME9BQzlFIiwiZmlsZSI6Ii9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvUHJvZHVjdHMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGRlbGF5IGZyb20gJ2RlbGF5J1xuXG5pbXBvcnQgeyBmb250U2l6ZXIsIGdldENvbHMsIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5cbmNsYXNzIFByb2R1Y3RzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnaW5pdGlhbCdcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUgPSBwcmV2UHJvcHMgPT4ge1xuICAgICAgICBpZiggIXRoaXMucHJvcHMucmFmTG9vcCB8fCB0aGlzLnByb3BzLnJhZkxvb3AgPT09IHByZXZQcm9wcy5yYWZMb29wICkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5wcm9wcy5yYWZMb29wLmFkZCh0aGlzLm9uU2Nyb2xsKVxuICAgIH1cblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcvc3RhdGljL2ltYWdlcy90cmF5LXJlbmRlci5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVHJheScsXG4gICAgICAgICAgICAgICAgcHJpY2U6ICcxMDAuMDAnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltYWdlOiAnL3N0YXRpYy9pbWFnZXMvdGVhLWxpZ2h0LnBuZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUYXNrIExpZ2h0JyxcbiAgICAgICAgICAgICAgICBwcmljZTogJzYwMC4wMCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcvc3RhdGljL2ltYWdlcy90ZWEtbGlnaHQucG5nJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1B1enpsZSBUZWEgTGlnaHQnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnMTIwLjAwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHJlZj17IGVsID0+IHRoaXMuc3RpY2t5V3JhcHBlciA9IGVsIH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzdGlja3ktdGV4dCAkeyB0aGlzLnN0YXRlLnBvc2l0aW9uICE9PSAnaW5pdGlhbCcgPyAnZml4ZWQnIDogJycgfWB9IHJlZj17IGVsID0+IHRoaXMuc3RpY2t5RWwgPSBlbCB9PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE91ciBvYmplY3RzIGFyZSBjb21wbGV0ZWx5IHN0cmlwcGVkIGRvd24sIHRoZXkgaGF2ZSBub3RoaW5nIHRvIGhpZGUuIEdvb2QgbG9va2luZyBhbmQgZ29vZCBmb3IgdGhlIHdvcmxkLlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48YSBocmVmPVwiXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj7ihpIgTW9yZSBhYm91dCB0aGUgc3R1ZGlvPC9hPjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJQcm9kdWN0cyhwcm9kdWN0cykgfSBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJJbnN0YWdyYW1Qb3N0KCkgfSBcblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICR7IGdldENvbHMoMikgfXZ3O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnN0aWNreS10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgLy8gVE9ETzogcmVzcG9uc2l2ZSBmb250IHNpemUgbW9iaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4wMWVtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgZ2V0Q29scyg0Ljg1KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICR7IHRoaXMuc3RhdGUucG9zaXRpb24gPT09ICdib3R0b20nID8gMCA6IDEgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjQ1cyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnN0aWNreS10ZXh0IHN0cm9uZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC44ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJHsgZ2V0Q29scygxKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGlja3ktdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogJHtnZXRDb2xzKDEpfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICR7IGdldENvbHMoMSkgfXZ3O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHsgZm9udFNpemVyKDIwKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAxZW07XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoNykgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGlja3ktdGV4dC5maXhlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZW5kZXJQcm9kdWN0cyA9IHByb2R1Y3RzID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocHJvZHVjdCwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZFwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2UtaG92ZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+eyBwcm9kdWN0LnRpdGxlIH08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVVUiB7IHByb2R1Y3QucHJpY2UgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IGdldENvbHMoMi41KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQ6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBnZXRDb2xzKDYpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHsgZ2V0Q29scygyNioxLjIpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtaW1hZ2U6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjdGN0Y3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHsgcHJvZHVjdC5pbWFnZSB9Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMzVzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWltYWdlLWhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvaG92ZXItcGxhY2Vob2xkZXIuanBnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjc1cyBjdWJpYy1iZXppZXIoLjE5LCAxLCAuMjIsIDEpLCBvcGFjaXR5IC4zNXMgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1pbWFnZTpob3ZlcjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWltYWdlOmhvdmVyIC5wcm9kdWN0LWltYWdlLWhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgLy8gVE9ETzogcmVzcG9uc2l2ZSBmb250IHNpemUgbW9iaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDNlbTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS41ZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcHRpb24gc3Ryb25nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scygxMykgfXZ3O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBnZXRDb2xzKDEuMjUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IGdldENvbHMoLjMpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHsgZ2V0Q29scygxMyoxLjIpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHsgZm9udFNpemVyKDE2KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM3ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNzVlbSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlckluc3RhZ3JhbVBvc3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhZ3JhbS1wb3N0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWdyYW0taW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWdyYW0taW1hZ2UtbWFza1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWdyYW0taW1hZ2UtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlN0YXkgcG9zdGVkPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIEZvbGxvdyB1cyBvbiBpbnN0YWdyYW1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmluc3RhZ3JhbS1wb3N0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YWdyYW0taW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoMTMpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHsgZ2V0Q29scygxMyAqIDEuMjUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YWdyYW0taW1hZ2UtbWFzayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmluc3RhZ3JhbS1pbWFnZS1pbm5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9pbnN0YWdyYW0uanBnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jYXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgLy8gVE9ETzogcmVzcG9uc2l2ZSBmb250IHNpemUgbW9iaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40M2VtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNWVtIDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkeyBnZXRDb2xzKDEzKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY2FwdGlvbiBzdHJvbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zdGFncmFtLXBvc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206ICR7IGdldENvbHMoLjg1KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJHsgZ2V0Q29scygxKSB9dnc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scyg0KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAkeyB0aGlzLnN0YXRlLnBvc2l0aW9uICE9PSAnYm90dG9tJyA/ICd0cmFuc2xhdGVYKC0xMDAlKScgOiAnbm9uZScgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAkeyB0aGlzLnN0YXRlLnBvc2l0aW9uICE9PSAnYm90dG9tJyA/IDA6IDEgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuOTVzIGN1YmljLWJlemllciguMTksIDEsIC4yMiwgMSksIG9wYWNpdHkgLjQ1cyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zdGFncmFtLWltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scyg0KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkeyBnZXRDb2xzKDQgKiAxLjI1KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnN0YWdyYW0taW1hZ2UtbWFzayB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAkeyB0aGlzLnN0YXRlLnBvc2l0aW9uICE9PSAnYm90dG9tJyA/ICd0cmFuc2xhdGVYKC0xMDAlKScgOiAnbm9uZScgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4xNXMgY3ViaWMtYmV6aWVyKC4xOSwgMSwgLjIyLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RhZ3JhbS1pbWFnZS1pbm5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAkeyB0aGlzLnN0YXRlLnBvc2l0aW9uICE9PSAnYm90dG9tJyA/ICd0cmFuc2xhdGVYKDgwJSknIDogJ25vbmUnIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC45NXMgY3ViaWMtYmV6aWVyKC4xOSwgMSwgLjIyLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHsgZm9udFNpemVyKDE2KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzdlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNzVlbSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoNCkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBvblNjcm9sbCA9IGFyZ3MgPT4ge1xuICAgICAgICBpZiggIXRoaXMuc3RpY2t5RWwgfHwgIXRoaXMuc3RpY2t5V3JhcHBlciApIHJldHVyblxuXG4gICAgICAgIGlmKCAhdGhpcy5ib3VuZHMgfHwgdGhpcy5ib3VuZHMud2luZG93V2lkdGggIT09IHdpbmRvdy5pbm5lcldpZHRoICkge1xuICAgICAgICAgICAgY29uc3Qgd3JhcHBlckJvdW5kcyA9IHRoaXMuc3RpY2t5V3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgdGhpcy5ib3VuZHMgPSB7XG4gICAgICAgICAgICAgICAgdG9wOiB3cmFwcGVyQm91bmRzLnRvcCArIGFyZ3Muc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICBib3R0b206IHdyYXBwZXJCb3VuZHMuYm90dG9tICsgYXJncy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qge3RvcCA9IDAsIGJvdHRvbSA9IDB9ID0gdGhpcy5ib3VuZHNcblxuICAgICAgICBsZXQgcG9zaXRpb24gPSAnaW5pdGlhbCdcblxuICAgICAgICBpZiggYXJncy5zY3JvbGxZID4gdG9wICYmIGFyZ3Muc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodCA8IGJvdHRvbSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAnZml4ZWQnXG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0ID49IGJvdHRvbSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAnYm90dG9tJ1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHBvc2l0aW9uID09PSB0aGlzLnN0YXRlLnBvc2l0aW9uICkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzIl19 */\n/*@ sourceURL=/Users/dion/Sites/destudio/components/Products.jsx */")));
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
      }, ".instagram-post.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;width:100%;}.instagram-image.__jsx-style-dynamic-selector{width:".concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), "vw;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13 * 1.25), "vw;}.instagram-image-mask.__jsx-style-dynamic-selector{position:relative;width:100%;height:100%;overflow:hidden;}.instagram-image-inner.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;width:100%;height:100%;background-image:url('/static/images/instagram.jpg');background-size:cover;background-repeat:no-repeat;}.caption.__jsx-style-dynamic-selector{font-size:14px;line-height:1.43em;margin:1.5em 0;width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(13), "vw;}.caption.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{display:block;}@media (min-width:900px){.instagram-post.__jsx-style-dynamic-selector{position:absolute;bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(.85), "vw;left:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(1), "vw;width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), "vw;-webkit-transform:").concat(_this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', ";-ms-transform:").concat(_this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', ";transform:").concat(_this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', ";opacity:").concat(_this.state.position !== 'bottom' ? 0 : 1, ";-webkit-transition:-webkit-transform .95s cubic-bezier(.19,1,.22,1),opacity .45s ease;-webkit-transition:transform .95s cubic-bezier(.19,1,.22,1),opacity .45s ease;transition:transform .95s cubic-bezier(.19,1,.22,1),opacity .45s ease;}.instagram-image.__jsx-style-dynamic-selector{width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), "vw;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4 * 1.25), "vw;}.instagram-image-mask.__jsx-style-dynamic-selector{-webkit-transform:").concat(_this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', ";-ms-transform:").concat(_this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', ";transform:").concat(_this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none', ";-webkit-transition:-webkit-transform 1.15s cubic-bezier(.19,1,.22,1);-webkit-transition:transform 1.15s cubic-bezier(.19,1,.22,1);transition:transform 1.15s cubic-bezier(.19,1,.22,1);}.instagram-image-inner.__jsx-style-dynamic-selector{-webkit-transform:").concat(_this.state.position !== 'bottom' ? 'translateX(80%)' : 'none', ";-ms-transform:").concat(_this.state.position !== 'bottom' ? 'translateX(80%)' : 'none', ";transform:").concat(_this.state.position !== 'bottom' ? 'translateX(80%)' : 'none', ";-webkit-transition:-webkit-transform .95s cubic-bezier(.19,1,.22,1);-webkit-transition:transform .95s cubic-bezier(.19,1,.22,1);transition:transform .95s cubic-bezier(.19,1,.22,1);}.caption.__jsx-style-dynamic-selector{font-size:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["fontSizer"])(16), "vw;line-height:1.37em;margin:1.75em 0;margin-bottom:0;width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["getCols"])(4), "vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvUHJvZHVjdHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdQNEIsQUFHc0MsQUFRd0IsQUFLbkIsQUFRQSxBQWFILEFBU0QsQUFLUSxBQWFtQixBQUtHLEFBS0EsQUFLRSxjQWhDbEQsQ0FUdUIsR0FyQlIsQUFRTCxBQTJCb0MsTUExQm5DLEtBUkssRUFVRCxHQVlJLEdBNUJ1QixBQXFESSxJQTdDMUIsQ0FTSixBQW1EVyxPQXRDYyxLQVhnQixFQXNCYixDQWhDNUMsSUE2RHdCLGFBOUVFLENBUzFCLEFBcURJLEVBaUJvQixTQXhDeEIsTUFZNkMsQ0E2QkMsY0FwRHBCLHNCQUNNLEFBd0JlLEVBNEIzQyxDQWY0RCxBQUtELG9CQXRFdEMsS0E2QnpCLGdHQTNCZSxLQW1EOEIsTUFsRDdDLCtCQW9Ea0YsaUJBZ0I5RSxHQUxBLHNOQVZBIiwiZmlsZSI6Ii9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvUHJvZHVjdHMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGRlbGF5IGZyb20gJ2RlbGF5J1xuXG5pbXBvcnQgeyBmb250U2l6ZXIsIGdldENvbHMsIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5cbmNsYXNzIFByb2R1Y3RzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnaW5pdGlhbCdcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUgPSBwcmV2UHJvcHMgPT4ge1xuICAgICAgICBpZiggIXRoaXMucHJvcHMucmFmTG9vcCB8fCB0aGlzLnByb3BzLnJhZkxvb3AgPT09IHByZXZQcm9wcy5yYWZMb29wICkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5wcm9wcy5yYWZMb29wLmFkZCh0aGlzLm9uU2Nyb2xsKVxuICAgIH1cblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcvc3RhdGljL2ltYWdlcy90cmF5LXJlbmRlci5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVHJheScsXG4gICAgICAgICAgICAgICAgcHJpY2U6ICcxMDAuMDAnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltYWdlOiAnL3N0YXRpYy9pbWFnZXMvdGVhLWxpZ2h0LnBuZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUYXNrIExpZ2h0JyxcbiAgICAgICAgICAgICAgICBwcmljZTogJzYwMC4wMCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcvc3RhdGljL2ltYWdlcy90ZWEtbGlnaHQucG5nJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1B1enpsZSBUZWEgTGlnaHQnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnMTIwLjAwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHJlZj17IGVsID0+IHRoaXMuc3RpY2t5V3JhcHBlciA9IGVsIH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzdGlja3ktdGV4dCAkeyB0aGlzLnN0YXRlLnBvc2l0aW9uICE9PSAnaW5pdGlhbCcgPyAnZml4ZWQnIDogJycgfWB9IHJlZj17IGVsID0+IHRoaXMuc3RpY2t5RWwgPSBlbCB9PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE91ciBvYmplY3RzIGFyZSBjb21wbGV0ZWx5IHN0cmlwcGVkIGRvd24sIHRoZXkgaGF2ZSBub3RoaW5nIHRvIGhpZGUuIEdvb2QgbG9va2luZyBhbmQgZ29vZCBmb3IgdGhlIHdvcmxkLlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48YSBocmVmPVwiXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj7ihpIgTW9yZSBhYm91dCB0aGUgc3R1ZGlvPC9hPjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJQcm9kdWN0cyhwcm9kdWN0cykgfSBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJJbnN0YWdyYW1Qb3N0KCkgfSBcblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICR7IGdldENvbHMoMikgfXZ3O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnN0aWNreS10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgLy8gVE9ETzogcmVzcG9uc2l2ZSBmb250IHNpemUgbW9iaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4wMWVtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgZ2V0Q29scyg0Ljg1KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICR7IHRoaXMuc3RhdGUucG9zaXRpb24gPT09ICdib3R0b20nID8gMCA6IDEgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjQ1cyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnN0aWNreS10ZXh0IHN0cm9uZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC44ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJHsgZ2V0Q29scygxKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGlja3ktdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogJHtnZXRDb2xzKDEpfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICR7IGdldENvbHMoMSkgfXZ3O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHsgZm9udFNpemVyKDIwKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAxZW07XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoNykgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGlja3ktdGV4dC5maXhlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZW5kZXJQcm9kdWN0cyA9IHByb2R1Y3RzID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocHJvZHVjdCwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZFwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2UtaG92ZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+eyBwcm9kdWN0LnRpdGxlIH08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVVUiB7IHByb2R1Y3QucHJpY2UgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IGdldENvbHMoMi41KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQ6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBnZXRDb2xzKDYpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHsgZ2V0Q29scygyNioxLjIpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtaW1hZ2U6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjdGN0Y3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHsgcHJvZHVjdC5pbWFnZSB9Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMzVzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWltYWdlLWhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvaG92ZXItcGxhY2Vob2xkZXIuanBnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjc1cyBjdWJpYy1iZXppZXIoLjE5LCAxLCAuMjIsIDEpLCBvcGFjaXR5IC4zNXMgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1pbWFnZTpob3ZlcjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWltYWdlOmhvdmVyIC5wcm9kdWN0LWltYWdlLWhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgLy8gVE9ETzogcmVzcG9uc2l2ZSBmb250IHNpemUgbW9iaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDNlbTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS41ZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcHRpb24gc3Ryb25nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scygxMykgfXZ3O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBnZXRDb2xzKDEuMjUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IGdldENvbHMoLjMpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHsgZ2V0Q29scygxMyoxLjIpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHsgZm9udFNpemVyKDE2KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM3ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNzVlbSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlckluc3RhZ3JhbVBvc3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhZ3JhbS1wb3N0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWdyYW0taW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWdyYW0taW1hZ2UtbWFza1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWdyYW0taW1hZ2UtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlN0YXkgcG9zdGVkPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIEZvbGxvdyB1cyBvbiBpbnN0YWdyYW1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmluc3RhZ3JhbS1wb3N0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YWdyYW0taW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoMTMpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHsgZ2V0Q29scygxMyAqIDEuMjUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YWdyYW0taW1hZ2UtbWFzayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmluc3RhZ3JhbS1pbWFnZS1pbm5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9pbnN0YWdyYW0uanBnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jYXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgLy8gVE9ETzogcmVzcG9uc2l2ZSBmb250IHNpemUgbW9iaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40M2VtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNWVtIDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkeyBnZXRDb2xzKDEzKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY2FwdGlvbiBzdHJvbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zdGFncmFtLXBvc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206ICR7IGdldENvbHMoLjg1KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJHsgZ2V0Q29scygxKSB9dnc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scyg0KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAkeyB0aGlzLnN0YXRlLnBvc2l0aW9uICE9PSAnYm90dG9tJyA/ICd0cmFuc2xhdGVYKC0xMDAlKScgOiAnbm9uZScgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAkeyB0aGlzLnN0YXRlLnBvc2l0aW9uICE9PSAnYm90dG9tJyA/IDA6IDEgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuOTVzIGN1YmljLWJlemllciguMTksIDEsIC4yMiwgMSksIG9wYWNpdHkgLjQ1cyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zdGFncmFtLWltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scyg0KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkeyBnZXRDb2xzKDQgKiAxLjI1KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnN0YWdyYW0taW1hZ2UtbWFzayB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAkeyB0aGlzLnN0YXRlLnBvc2l0aW9uICE9PSAnYm90dG9tJyA/ICd0cmFuc2xhdGVYKC0xMDAlKScgOiAnbm9uZScgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4xNXMgY3ViaWMtYmV6aWVyKC4xOSwgMSwgLjIyLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RhZ3JhbS1pbWFnZS1pbm5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAkeyB0aGlzLnN0YXRlLnBvc2l0aW9uICE9PSAnYm90dG9tJyA/ICd0cmFuc2xhdGVYKDgwJSknIDogJ25vbmUnIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC45NXMgY3ViaWMtYmV6aWVyKC4xOSwgMSwgLjIyLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHsgZm9udFNpemVyKDE2KSB9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzdlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNzVlbSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoNCkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBvblNjcm9sbCA9IGFyZ3MgPT4ge1xuICAgICAgICBpZiggIXRoaXMuc3RpY2t5RWwgfHwgIXRoaXMuc3RpY2t5V3JhcHBlciApIHJldHVyblxuXG4gICAgICAgIGlmKCAhdGhpcy5ib3VuZHMgfHwgdGhpcy5ib3VuZHMud2luZG93V2lkdGggIT09IHdpbmRvdy5pbm5lcldpZHRoICkge1xuICAgICAgICAgICAgY29uc3Qgd3JhcHBlckJvdW5kcyA9IHRoaXMuc3RpY2t5V3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgdGhpcy5ib3VuZHMgPSB7XG4gICAgICAgICAgICAgICAgdG9wOiB3cmFwcGVyQm91bmRzLnRvcCArIGFyZ3Muc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICBib3R0b206IHdyYXBwZXJCb3VuZHMuYm90dG9tICsgYXJncy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qge3RvcCA9IDAsIGJvdHRvbSA9IDB9ID0gdGhpcy5ib3VuZHNcblxuICAgICAgICBsZXQgcG9zaXRpb24gPSAnaW5pdGlhbCdcblxuICAgICAgICBpZiggYXJncy5zY3JvbGxZID4gdG9wICYmIGFyZ3Muc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodCA8IGJvdHRvbSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAnZml4ZWQnXG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0ID49IGJvdHRvbSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAnYm90dG9tJ1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHBvc2l0aW9uID09PSB0aGlzLnN0YXRlLnBvc2l0aW9uICkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzIl19 */\n/*@ sourceURL=/Users/dion/Sites/destudio/components/Products.jsx */")));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["2766411905", [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(37.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(27), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(26), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1)]]]) + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2766411905",
        dynamic: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(25), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(37.5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(27), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(26), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1)]
      }, ".container.__jsx-style-dynamic-selector{position:relative;width:".concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(25), "vw;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(37.5), "vw;overflow:hidden;background:#F7F7F7;margin-left:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(2), "vw;background-image:url('/static/images/video-placeholder.png');background-size:cover;background-position:center;background-repeat:no-repeat;}video.__jsx-style-dynamic-selector{position:absolute;top:50%;left:0;-webkit-transform:translate(-25%,-50%);-ms-transform:translate(-25%,-50%);transform:translate(-25%,-50%);width:150%;height:auto;}@media (min-width:900px){.container.__jsx-style-dynamic-selector{width:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(27), "vw;height:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(26), "vw;margin-left:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getCols"])(1), "vw;}.video.__jsx-style-dynamic-selector{width:100%;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL2NvbXBvbmVudHMvVmlkZW8uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVc0QixBQUcyQyxBQWVBLEFBWXVCLEFBTzFCLFdBQ2tCLE9BbENJLEFBZTdCLFFBQ0QsT0FFeUIsSUFTVSxrQkExQkosb0JBNEJTLGtCQTNCL0IsY0FpQ2hCLEVBL0JtQixTQTBCbkIsVUF6QjJDLFVBZWhDLFdBQ0MsWUFDaEIsVUFmaUUsNkRBQ3ZDLHNCQUNLLDJCQUNDLDRCQUNoQyIsImZpbGUiOiIvVXNlcnMvZGlvbi9TaXRlcy9kZXN0dWRpby9jb21wb25lbnRzL1ZpZGVvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvbnRTaXplciwgZ2V0Q29scywgfSBmcm9tICcuLi91dGlscy91dGlscydcblxuY2xhc3MgVmlkZW8gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgICByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHsvKiA8dmlkZW8gY2xhc3NOYW1lPVwidmlkZW9cIiBhdXRvUGxheSBsb29wIG11dGVkIHBsYXlzSW5saW5lPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17YC9zdGF0aWMvdmlkZW9zL2xhbmRpbmctdmlkZW8ubXA0YH0gdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgIDwvdmlkZW8+ICovfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHsgZ2V0Q29scygyNSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkeyBnZXRDb2xzKDM3LjUpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGN0Y3Rjc7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogJHsgZ2V0Q29scygyKSB9dnc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvdmlkZW8tcGxhY2Vob2xkZXIucG5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1JSwgLTUwJSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IGdldENvbHMoMjcpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7IGdldENvbHMoMjYpIH12dztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkeyBnZXRDb2xzKDEpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW8iXX0= */\n/*@ sourceURL=/Users/dion/Sites/destudio/components/Video.jsx */")));
    });

    return _this;
  }

  return Video;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/is.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/is.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/is */ "core-js/library/fn/object/is");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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

var _react = __webpack_require__(/*! react */ "react");

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
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
      }, ".container.__jsx-style-dynamic-selector{padding-top:".concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(8), "vw;padding-bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), "vw;}h1.__jsx-style-dynamic-selector{font-family:'NBGrotesk';font-size:48px;line-height:1em;-webkit-letter-spacing:-.04em;-moz-letter-spacing:-.04em;-ms-letter-spacing:-.04em;letter-spacing:-.04em;padding:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(4), "vw ").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(2), "vw;padding-bottom:0;width:100%;}@media (min-width:900px){.container.__jsx-style-dynamic-selector{padding-top:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(3.5), "vw;padding-bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), "vw;}h1.__jsx-style-dynamic-selector{font-size:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["fontSizer"])(98), "vw;padding:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(.75), "vw ").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(1), "vw;padding-bottom:").concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getCols"])(4.75), "vw;width:75%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW9uL1NpdGVzL2Rlc3R1ZGlvL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QzRCLEFBR29FLEFBS25CLEFBYXVCLEFBS0Ysd0JBakI5QixlQUNDLEVBa0IwRCxFQXhCNUIsQUFrQkksWUFYNUIsa0NBTjFCLEFBa0JJLHNCQU1rRCw4Q0FFcEMsR0FsQndELE9BbUJ0RSwrREFsQmlCLGlCQUVOLFdBQ2YiLCJmaWxlIjoiL1VzZXJzL2Rpb24vU2l0ZXMvZGVzdHVkaW8vcGFnZXMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgeyBSYWZMb29wIH0gZnJvbSAnLi4vdXRpbHMvcmFmTG9vcCdcblxuaW1wb3J0IHsgZ2V0Q29scywgZm9udFNpemVyIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5cbmltcG9ydCAnLi4vdXRpbHMvbWFpbi5zY3NzJ1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzeCdcbmltcG9ydCBWaWRlbyBmcm9tICcuLi9jb21wb25lbnRzL1ZpZGVvLmpzeCdcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzLmpzeCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgcmFmTG9vcDogZmFsc2VcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByYWZMb29wOiBuZXcgUmFmTG9vcCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRlIFN0dWRpbzwvdGl0bGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwibGFuZGluZ3NwYWdlIGZvciBkZXN0dWRpb1wiLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxIZWFkZXIgey4uLntcbiAgICAgICAgICAgICAgICAgICAgcmFmTG9vcDogdGhpcy5zdGF0ZS5yYWZMb29wXG4gICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICA8VmlkZW8gLz5cbiAgICAgICAgICAgICAgICA8aDE+V2UgbWFrZSByZWxlbnRsZXNzbHkgaG9uZXN0IG9iamVjdHMuPC9oMT5cblxuICAgICAgICAgICAgICAgIDxQcm9kdWN0cyB7Li4ue1xuICAgICAgICAgICAgICAgICAgICByYWZMb29wOiB0aGlzLnN0YXRlLnJhZkxvb3BcbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAke2dldENvbHMoOCl9dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJHsgZ2V0Q29scygxKSB9dnc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ05CR3JvdGVzayc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7IC8vIFRPRE86IHJlc3BvbnNpdmUgZm9udCBzaXplIG1vYmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjA0ZW07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICR7IGdldENvbHMoNCkgfXZ3ICR7IGdldENvbHMoMikgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6ICR7Z2V0Q29scygzLjUpfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkeyBnZXRDb2xzKDEpIH12dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHsgZm9udFNpemVyKDk4KSB9dnc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAkeyBnZXRDb2xzKC43NSkgfXZ3ICR7IGdldENvbHMoMSkgfXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkeyBnZXRDb2xzKDQuNzUpIH12dztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iXX0= */\n/*@ sourceURL=/Users/dion/Sites/destudio/pages/index.jsx */")));
    });

    return _this;
  }

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);



/***/ }),

/***/ "./utils/main.scss":
/*!*************************!*\
  !*** ./utils/main.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
  var responsiveSize = size / 14;
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

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dion/Sites/destudio/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/is":
/*!***********************************************!*\
  !*** external "core-js/library/fn/object/is" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/is");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "delay":
/*!************************!*\
  !*** external "delay" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("delay");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map