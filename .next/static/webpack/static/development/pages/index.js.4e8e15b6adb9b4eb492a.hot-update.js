webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.4e8e15b6adb9b4eb492a.hot-update.js.map