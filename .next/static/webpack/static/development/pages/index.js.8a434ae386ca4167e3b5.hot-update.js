webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "./node_modules/core-js/library/fn/date/now.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/core-js/library/fn/date/now.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/library/fn/date/now.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.date.now */ "./node_modules/core-js/library/modules/es6.date.now.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Date.now;


/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
false,

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

/***/ })

})
//# sourceMappingURL=index.js.8a434ae386ca4167e3b5.hot-update.js.map