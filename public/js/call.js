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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Select__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var options = [];
for (var i = 20; i--;) {
    options[i] = Math.random().toString();
}var display = function display(opt) {
    return opt;
};
var query = function query(opt, _query) {
    return opt.toLowerCase().indexOf(_query.toLowerCase()) !== -1;
};

var ProblemSelect = function (_MultiSelect) {
    _inherits(ProblemSelect, _MultiSelect);

    function ProblemSelect(type, element, options, display, query) {
        _classCallCheck(this, ProblemSelect);

        var _this = _possibleConstructorReturn(this, (ProblemSelect.__proto__ || Object.getPrototypeOf(ProblemSelect)).call(this, type, element, options, display, query));

        var createCon = document.createElement("div");
        createCon.className = "select-create-con select-field-extension";

        var createButton = document.createElement("button");
        createButton.className = "select-create-problem";
        createButton.innerText = "Create new " + type;
        createButton.addEventListener("click", function (event) {
            return _this.create();
        });
        // opt.tabIndex = 0;
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

            if (this.newProblems.length > 0 && this.newProblems[this.newProblems.length - 1].value === null) return;

            var createField = document.createElement("div");
            var newProblem = new NewProblem(createField);
            this.newProblems.push(newProblem);
            this._createCon.appendChild(createField);
            newProblem.focus();

            newProblem.onchange(function (value) {
                return _this2.changed(value);
            });
        }
    }]);

    return ProblemSelect;
}(__WEBPACK_IMPORTED_MODULE_0__Select__["a" /* MultiSelect */]);

/* harmony default export */ __webpack_exports__["a"] = (ProblemSelect);

var NewProblem = function () {
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

        this._deviceSelect = new __WEBPACK_IMPORTED_MODULE_0__Select__["a" /* MultiSelect */]("Affected Device", deviceSelect, options, display, query);
        this._softwareSelect = new __WEBPACK_IMPORTED_MODULE_0__Select__["a" /* MultiSelect */]("Installed Software", softwareSelect, options, display, query);
        //TODO: FETCH OPTIONS. CREATE DISPLAY, QUERY,
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
            if (this.getTitle().length > 0) {
                this._titleInput.classList.remove("required-error");
            } else {
                this._titleInput.classList.add("required-error");
                this._titleInput.focus();
                allPassed = false;
            }
            if (this.getDescription().length > 0) {
                this._descriptionLabel.classList.remove("required-error");
                this._descriptionElement.classList.remove("required-error");
            } else {
                this._descriptionLabel.classList.add("required-error");
                this._descriptionElement.classList.add("required-error");
                this._descriptionElement.focus();
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

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Select__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProblemSelect__ = __webpack_require__(14);



var options = [];
for (var i = 20; i--;) {
  options[i] = Math.random().toString();
}var display = function display(opt) {
  return opt;
};
var query = function query(opt, _query) {
  return opt.toLowerCase().indexOf(_query.toLowerCase()) !== -1;
};

var employeeSelect = document.getElementById("employee-select");
var reasonSelect = document.getElementById("reason-select");
var problemSelect = document.getElementById("problem-select");
var rawSelect = document.getElementById("raw-select");

new __WEBPACK_IMPORTED_MODULE_0__Select__["b" /* SearchSelect */]("Employee", employeeSelect, options, display, query).onchange(console.log);
new __WEBPACK_IMPORTED_MODULE_0__Select__["c" /* Select */]("Call Reason", reasonSelect, ["Checking Up", "Bored", "Other"], display).onchange(console.log);
new __WEBPACK_IMPORTED_MODULE_1__ProblemSelect__["a" /* default */]("Problem", problemSelect, options, display, query).onchange(console.log);
new __WEBPACK_IMPORTED_MODULE_0__Select__["c" /* Select */]("Random", rawSelect, options, display).onchange(console.log);

// let employee = new Select("employees");
// console.log(employee);
// console.log(employees);

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiSelect; });
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OPEN_ICON = "keyboard_arrow_down";
var CLOSE_ICON = "close";

//TODO: NO MATCHING RESULTS

var Select = function () {
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
                // opt.tabIndex = 0;
                optionsCon.appendChild(optionElement);
                optionElements.set(option, optionElement);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
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
        selectedTitle.innerText = "Select " + type;
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
        element.appendChild(selectElement);

        selectElement.tabIndex = optionsCon.tabIndex = -1;
        toggleButton.tabIndex = 0;
        this.value = null;
    }

    _createClass(Select, [{
        key: "toggle",
        value: function toggle() {
            console.trace(this.isActive());
            if (this.isActive()) this.close();else this.open();
        }
    }, {
        key: "open",
        value: function open() {
            if (this.isActive()) return;
            this._root.focus();
            this._selectElement.classList.add("active");
            this._optionsCon.tabIndex = 0;
            this._optionsCon.scrollTop = 0;
            this._toggleButton.innerText = CLOSE_ICON;
        }
    }, {
        key: "close",
        value: function close() {
            this._selectElement.blur();
            this._optionsCon.tabIndex = 1;
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




var SearchSelect = function (_Select) {
    _inherits(SearchSelect, _Select);

    function SearchSelect(type, element, options, display, query) {
        _classCallCheck(this, SearchSelect);

        var _this2 = _possibleConstructorReturn(this, (SearchSelect.__proto__ || Object.getPrototypeOf(SearchSelect)).call(this, type, element, options, display));

        _this2._query = query;
        var input = document.createElement("input");
        input.className = "select-search";
        input.placeholder = "Search for " + type;

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
            _get(SearchSelect.prototype.__proto__ || Object.getPrototypeOf(SearchSelect.prototype), "select", this).call(this, element);
            this._optionRow.appendChild(this._toggleButton);
            this._optionRow.style.display = null;
        }
    }, {
        key: "close",
        value: function close() {
            _get(SearchSelect.prototype.__proto__ || Object.getPrototypeOf(SearchSelect.prototype), "close", this).call(this);
            this._input.value = null;
            this._input.tabIndex = -1;
        }
    }, {
        key: "open",
        value: function open() {
            console.trace("OPEN");
            if (this.isActive()) return;
            this._input.focus();
            this.filter();
            this._input.tabIndex = 0;
            _get(SearchSelect.prototype.__proto__ || Object.getPrototypeOf(SearchSelect.prototype), "open", this).call(this);
        }
    }]);

    return SearchSelect;
}(Select);

var MultiSelect = function (_SearchSelect) {
    _inherits(MultiSelect, _SearchSelect);

    function MultiSelect(type, element, options, display, query) {
        _classCallCheck(this, MultiSelect);

        var _this3 = _possibleConstructorReturn(this, (MultiSelect.__proto__ || Object.getPrototypeOf(MultiSelect)).call(this, type, element, options, display, query));

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

/***/ })

/******/ });