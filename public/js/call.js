/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/call.js":
/*!******************************!*\
  !*** ./resources/js/call.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Select */ "./resources/js/components/Select.jsx");
/* harmony import */ var _components_ProblemSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProblemSelect */ "./resources/js/components/ProblemSelect.jsx");


var options = [];

for (var i = 20; i--;) {
  options[i] = Math.random().toString();
}

var display = function display(opt) {
  return opt;
};

var query = function query(opt, _query) {
  return opt.toLowerCase().indexOf(_query.toLowerCase()) !== -1;
};

var employeeSelect = document.getElementById("employee-select");
var reasonSelect = document.getElementById("reason-select");
var problemSelect = document.getElementById("problem-select");
var rawSelect = document.getElementById("raw-select");
new _components_Select__WEBPACK_IMPORTED_MODULE_0__["SearchSelect"]("Employee", employeeSelect, options, display, query).onchange(console.log);
new _components_Select__WEBPACK_IMPORTED_MODULE_0__["Select"]("Call Reason", reasonSelect, ["Checking Up", "Bored", "Other"], display).onchange(console.log);
new _components_ProblemSelect__WEBPACK_IMPORTED_MODULE_1__["default"]("Problem", problemSelect, options, display, query).onchange(console.log);
new _components_Select__WEBPACK_IMPORTED_MODULE_0__["Select"]("Random", rawSelect, options, display).onchange(console.log);

/***/ }),

/***/ "./resources/js/components/ProblemSelect.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/ProblemSelect.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Toby\\Documents\\makeitall\\resources\\js\\components\\ProblemSelect.jsx: Unexpected token, expected \"{\" (197:0)\n\n\u001b[0m \u001b[90m 195 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mProblemDetails\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 196 | \u001b[39m    constructor(urgency)\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 197 | \u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    at Parser.raise (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:4051:15)\n    at Parser.unexpected (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:5382:16)\n    at Parser.expect (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:5370:28)\n    at Parser.parseBlock (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8048:10)\n    at Parser.parseFunctionBody (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7157:24)\n    at Parser.parseFunctionBodyAndFinish (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7139:10)\n    at Parser.parseMethod (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7077:10)\n    at Parser.pushClassMethod (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8481:30)\n    at Parser.parseClassMemberWithIsStatic (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8406:12)\n    at Parser.parseClassMember (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8348:10)\n    at C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8302:16\n    at Parser.withTopicForbiddingContext (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7429:14)\n    at Parser.parseClassBody (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8277:10)\n    at Parser.parseClass (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8248:10)\n    at Parser.parseStatementContent (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7533:21)\n    at Parser.parseStatement (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7505:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8073:23)\n    at Parser.parseBlockBody (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8060:10)\n    at Parser.parseTopLevel (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7470:10)\n    at Parser.parse (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8915:17)\n    at parse (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:10946:38)\n    at parser (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:170:34)\n    at normalizeFile (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:138:11)\n    at runSync (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\core\\lib\\transformation\\index.js:44:43)\n    at runAsync (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\core\\lib\\transformation\\index.js:35:14)\n    at process.nextTick (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\core\\lib\\transform.js:34:34)\n    at process._tickCallback (internal/process/next_tick.js:112:11)");

/***/ }),

/***/ "./resources/js/components/Select.jsx":
/*!********************************************!*\
  !*** ./resources/js/components/Select.jsx ***!
  \********************************************/
/*! exports provided: Select, SearchSelect, MultiSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSelect", function() { return SearchSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelect", function() { return MultiSelect; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OPEN_ICON = "keyboard_arrow_down";
var CLOSE_ICON = "close"; //TODO: NO MATCHING RESULTS

var Select =
/*#__PURE__*/
function () {
  function Select(type, element, options, display) {
    var _this = this;

    _classCallCheck(this, Select);

    var that = this;

    if (element instanceof Element) {
      element.innerHTML = null;
    } else throw "Invalid element provided to constructor";

    element.classList.add("select-root");
    this._root = element;
    this._options = options;
    this._display = display;
    var optionsCon = document.createElement("div");
    optionsCon.className = "select-options";
    var optionElements = new Map();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var option = _step.value;
        var optionElement = document.createElement("div");
        optionElement.innerText = display(option);
        optionElement.addEventListener("click", this.select.bind(this, option));
        optionsCon.appendChild(optionElement);
        optionElements.set(option, optionElement);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this._optionElements = optionElements;
    this._optionsCon = optionsCon;
    var toggleButton = document.createElement("button");
    toggleButton.className = "select-button";
    toggleButton.innerText = OPEN_ICON;
    this._toggleButton = toggleButton;
    var optionRow = document.createElement("div");
    optionRow.className = "select-row";
    var selectedTitle = document.createElement("div");
    selectedTitle.innerText = "Select ".concat(type);
    selectedTitle.className = "select-option-title";
    this._selectedTitle = selectedTitle;
    this._optionRow = optionRow;
    var selectElement = document.createElement("div");
    selectElement.className = "select";
    this._selectElement = selectElement;
    toggleButton.addEventListener("click", function (event) {
      return _this.toggle();
    });
    selectedTitle.addEventListener("click", function (event) {
      return _this.toggle();
    });
    selectElement.addEventListener('focusout', function (event) {
      console.log(this, event.relatedTarget, this.contains(event.relatedTarget));
      if (!this.contains(event.relatedTarget)) that.close();
    });
    optionRow.appendChild(selectedTitle);
    optionRow.appendChild(toggleButton);
    selectElement.appendChild(optionRow);
    selectElement.appendChild(optionsCon);
    element.appendChild(selectElement); // selectElement.tabIndex =

    optionsCon.tabIndex = optionRow.tabIndex = -1;
    toggleButton.tabIndex = 0;
    this.value = null;
  }

  _createClass(Select, [{
    key: "toggle",
    value: function toggle() {
      if (this.isActive()) this.close();else this.open();
    }
  }, {
    key: "open",
    value: function open() {
      console.trace("OPEN");
      if (this.isActive()) return;

      this._selectElement.classList.add("active");

      this._optionsCon.tabIndex = 0;
      this._optionsCon.scrollTop = 0;
      this._toggleButton.innerText = CLOSE_ICON;
    }
  }, {
    key: "close",
    value: function close() {
      console.trace("CLOSE");

      this._selectElement.blur();

      this._optionsCon.tabIndex = -1;

      this._selectElement.classList.remove("active");

      this._toggleButton.innerText = OPEN_ICON;
    }
  }, {
    key: "changed",
    value: function changed(_changed) {
      if (typeof this._onchange === "function") this._onchange(_changed);
    }
  }, {
    key: "select",
    value: function select(element) {
      this.value = element;
      this._selectedTitle.innerText = this._display(element);
      this.changed(element);
      this.close();
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this._selectElement.classList.contains("active");
    }
  }, {
    key: "onchange",
    value: function onchange(callback) {
      this._onchange = callback;
    }
  }]);

  return Select;
}();
var SearchSelect =
/*#__PURE__*/
function (_Select) {
  _inherits(SearchSelect, _Select);

  function SearchSelect(type, element, options, display, query) {
    var _this2;

    _classCallCheck(this, SearchSelect);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(SearchSelect).call(this, type, element, options, display));
    _this2._query = query;
    var input = document.createElement("input");
    input.className = "select-search";
    input.placeholder = "Search for ".concat(type);
    var searchRow = document.createElement("div");
    searchRow.className = "select-row";
    _this2._searchRow = searchRow;
    input.addEventListener("focus", function (event) {
      return _this2.open();
    });
    input.addEventListener("keyup", function (event) {
      return _this2.filter();
    });
    input.tabIndex = -1;
    _this2._input = input;
    searchRow.appendChild(input);
    searchRow.appendChild(_this2._toggleButton);

    _this2._selectElement.insertBefore(searchRow, _this2._optionsCon);

    _this2._optionRow.style.display = "none";
    return _this2;
  }

  _createClass(SearchSelect, [{
    key: "filter",
    value: function filter() {
      var searchString = this._input.value.toLowerCase();

      this._optionsCon.innerHTML = null;

      for (var i = this._options.length; i--;) {
        var option = this._options[i];

        var matched = this._query(option, searchString);

        if (matched) this._optionsCon.appendChild(this._optionElements.get(option));
      }
    }
  }, {
    key: "select",
    value: function select(element) {
      _get(_getPrototypeOf(SearchSelect.prototype), "select", this).call(this, element);

      this._optionRow.appendChild(this._toggleButton);

      this._optionRow.style.display = null;
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(SearchSelect.prototype), "close", this).call(this);

      this._input.value = null;
      this._input.tabIndex = -1;
    }
  }, {
    key: "open",
    value: function open() {
      if (this.isActive()) return;

      this._input.focus();

      this.filter();
      this._input.tabIndex = 0;

      _get(_getPrototypeOf(SearchSelect.prototype), "open", this).call(this);
    }
  }]);

  return SearchSelect;
}(Select);
var MultiSelect =
/*#__PURE__*/
function (_SearchSelect) {
  _inherits(MultiSelect, _SearchSelect);

  function MultiSelect(type, element, options, display, query) {
    var _this3;

    _classCallCheck(this, MultiSelect);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(MultiSelect).call(this, type, element, options, display, query));
    _this3.value = [];
    var multiCon = document.createElement("div");
    multiCon.className = "select-field-extension";
    _this3._multiCon = multiCon;

    _this3._root.insertBefore(multiCon, _this3._selectElement);

    _this3._input.placeholder += " to add";
    return _this3;
  }

  _createClass(MultiSelect, [{
    key: "select",
    value: function select(option) {
      var _this4 = this;

      this.value.push(option);

      var classList = this._optionElements.get(option).classList;

      classList.add("select-option-selected");
      var optRow = document.createElement("div");
      optRow.className = "select-row";

      this._multiCon.appendChild(optRow);

      var optRemove = document.createElement("button");
      var optTitle = document.createElement("div");
      optTitle.className = "select-option-title";
      optTitle.innerText = this._display(option);
      optRemove.className = "select-option-remove";
      optRemove.innerText = "close";
      optRemove.addEventListener("click", function (event) {
        _this4.value = _this4.value.filter(function (op) {
          return op !== option;
        });

        _this4.changed(option);

        classList.remove("select-option-selected");
        optRow.remove();
      });
      optRow.appendChild(optTitle);
      optRow.appendChild(optRemove);
      this.changed(option);
      this.close();
    }
  }]);

  return MultiSelect;
}(SearchSelect);

/***/ }),

/***/ 1:
/*!************************************!*\
  !*** multi ./resources/js/call.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Toby\Documents\makeitall\resources\js\call.js */"./resources/js/call.js");


/***/ })

/******/ });