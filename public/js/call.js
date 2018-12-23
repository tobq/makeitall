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
var problems = [];

for (var i = 20; i--;) {
  options[i] = Math.random().toString();
}

for (var _i = 20; _i--;) {
  problems[_i] = new _components_ProblemSelect__WEBPACK_IMPORTED_MODULE_1__["Problem"](Math.random().toString(), Math.random(), Math.random().toString(), Math.random().toString(), Math.random().toString());
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
new _components_ProblemSelect__WEBPACK_IMPORTED_MODULE_1__["default"]("Problem", problemSelect, problems).onchange(console.log);
new _components_Select__WEBPACK_IMPORTED_MODULE_0__["Select"]("Random", rawSelect, options, display).onchange(console.log);

/***/ }),

/***/ "./resources/js/components/ProblemSelect.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/ProblemSelect.jsx ***!
  \***************************************************/
/*! exports provided: default, Problem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProblemSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Problem", function() { return Problem; });
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select */ "./resources/js/components/Select.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var options = [];

for (var i = 20; i--;) {
  options[i] = Math.random().toString();
}

var display = function display(opt) {
  return opt;
};

var containsInsensitive = function containsInsensitive(string, query) {
  return contains(string.toLowerCase(), query.toLowerCase());
};

var contains = function contains(string, query) {
  return string.indexOf(query) !== -1;
};

function problemQuery(problem, query) {
  return containsInsensitive(problem.title, query) || containsInsensitive(problem.description, query);
}

function problemDisplay(problem) {
  return problem.title;
}

var ProblemSelect =
/*#__PURE__*/
function (_MultiSelect) {
  _inherits(ProblemSelect, _MultiSelect);

  function ProblemSelect(type, element, problems) {
    var _this;

    _classCallCheck(this, ProblemSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProblemSelect).call(this, type, element, problems, problemDisplay, problemQuery));
    var createCon = document.createElement("div");
    createCon.className = "select-create-con select-field-extension";
    var createButton = document.createElement("button");
    createButton.className = "select-create-problem";
    createButton.innerText = "Create new ".concat(type);
    createButton.addEventListener("click", function (event) {
      return _this.create();
    }); // opt.tabIndex = 0;

    _this._root.insertBefore(createCon, _this._multiCon);

    _this._createButton = createButton;
    var createRow = document.createElement("div");
    createRow.className = "select-row";
    createRow.appendChild(createButton);
    createCon.appendChild(createRow);
    _this._createCon = createCon;
    _this.newProblems = [];
    return _this;
  }

  _createClass(ProblemSelect, [{
    key: "create",
    value: function create() {
      var _this2 = this;

      if (this.newProblems.length > 0) {
        var lastProblem = this.newProblems[this.newProblems.length - 1];

        if (lastProblem.value === null) {
          lastProblem.focus();
          return;
        }
      }

      var createField = document.createElement("div");
      var newProblem = new NewProblem(createField);
      this.newProblems.push(newProblem);

      this._multiCon.appendChild(createField);

      newProblem.onremove(function (event) {
        _this2.newProblems = _this2.newProblems.filter(function (problem) {
          return problem !== newProblem;
        });
      });
      newProblem.focus();
      newProblem.onchange(function (value) {
        return _this2.changed(value);
      });
    }
  }]);

  return ProblemSelect;
}(_Select__WEBPACK_IMPORTED_MODULE_0__["MultiSelect"]);



var NewProblem =
/*#__PURE__*/
function () {
  function NewProblem(root) {
    var _this3 = this;

    _classCallCheck(this, NewProblem);

    root.className = "select-create-field active";
    var createToggle = document.createElement("button");
    createToggle.className = "select-option-remove select-create-edit";
    var createRemove = document.createElement("button");
    createRemove.className = "select-option-remove";
    createRemove.innerText = "close";
    var problemRow = document.createElement("div");
    problemRow.className = "select-problem-row";
    var deviceSelect = document.createElement("div");
    var softwareSelect = document.createElement("div");
    var problemNewTag = document.createElement("div");
    problemNewTag.className = "select-problem-id";
    problemNewTag.innerText = "new";
    var descriptionElement = document.createElement("textarea");
    this._deviceSelect = new _Select__WEBPACK_IMPORTED_MODULE_0__["MultiSelect"]("Affected Device", deviceSelect, options, display, containsInsensitive);
    this._softwareSelect = new _Select__WEBPACK_IMPORTED_MODULE_0__["MultiSelect"]("Affected Software", softwareSelect, options, display, containsInsensitive); //TODO: FETCH OPTIONS. CREATE DISPLAY, QUERY,

    var createFieldContent = document.createElement("div");
    createFieldContent.className = "select-create-field-content";
    var titleInput = document.createElement("input");
    titleInput.className = "select-problem-title";
    titleInput.placeholder = "Problem Title (required)";
    titleInput.addEventListener("change", function (event) {});
    this._titleInput = titleInput;
    var deviceLabel = document.createElement("label");
    deviceLabel.innerText = "Devices";
    deviceLabel.for = deviceSelect;
    var softwareLabel = document.createElement("label");
    softwareLabel.innerText = "Installed Software";
    softwareLabel.for = softwareSelect;
    var descriptionLabel = document.createElement("label");
    descriptionLabel.innerText = "Description";
    descriptionLabel.classList.add("required-field");
    descriptionLabel.for = descriptionElement;
    this._descriptionLabel = descriptionLabel;
    this._descriptionElement = descriptionElement;
    createRemove.addEventListener("click", function (event) {
      return _this3.removed();
    });
    createToggle.addEventListener("click", function (event) {
      return _this3.toggle();
    });
    root.appendChild(problemRow);
    problemRow.appendChild(problemNewTag);
    problemRow.appendChild(titleInput);
    problemRow.appendChild(createToggle);
    problemRow.appendChild(createRemove);
    createFieldContent.appendChild(deviceLabel);
    createFieldContent.appendChild(deviceSelect);
    createFieldContent.appendChild(softwareLabel);
    createFieldContent.appendChild(softwareSelect);
    createFieldContent.appendChild(descriptionLabel);
    createFieldContent.appendChild(descriptionElement);
    root.appendChild(createFieldContent);
    this._root = root;
    this._value = null;
  }

  _createClass(NewProblem, [{
    key: "toggle",
    value: function toggle() {
      if (this._root.classList.contains("active")) this.close();else this.open();
    }
  }, {
    key: "open",
    value: function open() {
      this._titleInput.disabled = false;

      this._root.classList.add("active");
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this._titleInput.value;
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      return this._descriptionElement.value;
    }
  }, {
    key: "validate",
    value: function validate() {
      var allPassed = true;

      if (this.getDescription().length > 0) {
        this._descriptionLabel.classList.remove("required-error");

        this._descriptionElement.classList.remove("required-error");
      } else {
        this._descriptionLabel.classList.add("required-error");

        this._descriptionElement.classList.add("required-error");

        this._descriptionElement.focus();

        allPassed = false;
      }

      if (this.getTitle().length > 0) {
        this._titleInput.classList.remove("required-error");
      } else {
        this._titleInput.classList.add("required-error");

        this._titleInput.focus();

        allPassed = false;
      }

      return allPassed;
    }
  }, {
    key: "close",
    value: function close() {
      if (this.validate()) {
        this._titleInput.classList.remove("required-error");

        this._titleInput.disabled = true;

        this._root.classList.remove("active");

        this.value = {
          title: this.getTitle(),
          description: this.getDescription()
        };
      }
    }
  }, {
    key: "onchange",
    value: function onchange(callback) {
      this._onchanged = callback;
    }
  }, {
    key: "onremove",
    value: function onremove(callback) {
      this._onremove = callback;
    }
  }, {
    key: "removed",
    value: function removed() {
      if (typeof this._onremove === "function") this._onremove();
      this.value = null;

      this._root.remove();
    }
  }, {
    key: "focus",
    value: function focus() {
      this._titleInput.focus();
    }
  }, {
    key: "value",
    set: function set(value) {
      this._value = value;
      if (typeof this._onchanged === "function") this._onchanged(value);
    },
    get: function get() {
      return this._value;
    }
  }]);

  return NewProblem;
}();

var Problem = function Problem(title, urgency, devices, software, description) {
  _classCallCheck(this, Problem);

  this.title = title;
  this.urgency = urgency;
  this.devices = devices;
  this.software = software;
  this.description = description;
};

/***/ }),

/***/ "./resources/js/components/Select.jsx":
/*!********************************************!*\
  !*** ./resources/js/components/Select.jsx ***!
  \********************************************/
/*! exports provided: Select, SearchSelect, MultiSelect */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Toby\\Documents\\makeitall\\resources\\js\\components\\Select.jsx: Unexpected token (57:15)\n\n\u001b[0m \u001b[90m 55 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 56 | \u001b[39m    render() {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 57 | \u001b[39m        \u001b[36mreturn\u001b[39m \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"select-root\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m               \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 58 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"select\"\u001b[39m ref\u001b[33m=\u001b[39m{\u001b[32m\"root\"\u001b[39m}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 59 | \u001b[39m                \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"select-row\"\u001b[39m tabIndex\u001b[33m=\u001b[39m{\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 60 | \u001b[39m                    \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"select-option-title\"\u001b[39m onClick\u001b[33m=\u001b[39m{event \u001b[33m=>\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoggle()}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Parser.raise (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:4051:15)\n    at Parser.unexpected (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:5382:16)\n    at Parser.parseExprAtom (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:6541:20)\n    at Parser.parseExprSubscripts (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:6104:21)\n    at Parser.parseMaybeUnary (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:6083:21)\n    at Parser.parseExprOps (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:5968:21)\n    at Parser.parseMaybeConditional (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:5940:21)\n    at Parser.parseMaybeAssign (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:5887:21)\n    at Parser.parseExpression (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:5840:21)\n    at Parser.parseReturnStatement (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7863:28)\n    at Parser.parseStatementContent (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7539:21)\n    at Parser.parseStatement (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7505:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8073:23)\n    at Parser.parseBlockBody (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8060:10)\n    at Parser.parseBlock (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8049:10)\n    at Parser.parseFunctionBody (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7157:24)\n    at Parser.parseFunctionBodyAndFinish (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7139:10)\n    at Parser.parseMethod (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7077:10)\n    at Parser.pushClassMethod (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8481:30)\n    at Parser.parseClassMemberWithIsStatic (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8406:12)\n    at Parser.parseClassMember (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8348:10)\n    at C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8302:16\n    at Parser.withTopicForbiddingContext (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7429:14)\n    at Parser.parseClassBody (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8277:10)\n    at Parser.parseClass (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8248:10)\n    at Parser.parseStatementContent (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7533:21)\n    at Parser.parseStatement (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7505:17)\n    at Parser.parseExportDeclaration (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8638:17)\n    at Parser.parseExport (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8585:31)\n    at Parser.parseStatementContent (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7592:27)\n    at Parser.parseStatement (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7505:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8073:23)\n    at Parser.parseBlockBody (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8060:10)\n    at Parser.parseTopLevel (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:7470:10)\n    at Parser.parse (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:8915:17)\n    at parse (C:\\Users\\Toby\\Documents\\makeitall\\node_modules\\@babel\\parser\\lib\\index.js:10946:38)");

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