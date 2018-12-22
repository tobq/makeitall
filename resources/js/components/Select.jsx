const OPEN_ICON = "keyboard_arrow_down";
const CLOSE_ICON = "close";

//TODO: NO MATCHING RESULTS

export class Select {
    constructor(type, element, options, display) {
        const that = this;
        if (element instanceof Element) {
            element.innerHTML = null;
        } else throw "Invalid element provided to constructor";

        element.classList.add("select-root");

        this._root = element;
        this._options = options;
        this._display = display;
        const optionsCon = document.createElement("div");

        optionsCon.className = "select-options";
        const optionElements = new Map();
        for (let option of options) {
            const optionElement = document.createElement("div");
            optionElement.innerText = display(option);
            optionElement.addEventListener("click", this.select.bind(this, option));
            optionsCon.appendChild(optionElement);
            optionElements.set(option, optionElement);
        }

        this._optionElements = optionElements;

        this._optionsCon = optionsCon;
        const toggleButton = document.createElement("button");

        toggleButton.className = "select-button";
        toggleButton.innerText = OPEN_ICON;
        this._toggleButton = toggleButton;
        const optionRow = document.createElement("div");

        optionRow.className = "select-row";
        const selectedTitle = document.createElement("div");
        selectedTitle.innerText = `Select ${type}`;
        selectedTitle.className = "select-option-title";
        this._selectedTitle = selectedTitle;
        this._optionRow = optionRow;

        const selectElement = document.createElement("div");
        selectElement.className = "select";
        this._selectElement = selectElement;

        toggleButton.addEventListener("click", event => this.toggle());
        selectedTitle.addEventListener("click", event => this.toggle());
        selectElement.addEventListener('focusout', function (event) {
            console.log(this, event.relatedTarget, this.contains(event.relatedTarget));
            if (!this.contains(event.relatedTarget)) that.close();
        });

        optionRow.appendChild(selectedTitle);
        optionRow.appendChild(toggleButton);
        selectElement.appendChild(optionRow);
        selectElement.appendChild(optionsCon);
        element.appendChild(selectElement);

        // selectElement.tabIndex =
        optionsCon.tabIndex = optionRow.tabIndex = -1;
        toggleButton.tabIndex = 0;
        this.value = null;
    }

    toggle() {
        if (this.isActive()) this.close();
        else this.open();
    }

    open() {
        console.trace("OPEN");
        if (this.isActive()) return;
        this._selectElement.classList.add("active");
        this._optionsCon.tabIndex = 0;
        this._optionsCon.scrollTop = 0;
        this._toggleButton.innerText = CLOSE_ICON;
    }

    close() {
        console.trace("CLOSE");
        this._selectElement.blur();
        this._optionsCon.tabIndex = -1;
        this._selectElement.classList.remove("active");
        this._toggleButton.innerText = OPEN_ICON;
    }

    changed(changed) {
        if (typeof this._onchange === "function") this._onchange(changed);
    }

    select(element) {
        this.value = element;
        this._selectedTitle.innerText = this._display(element);
        this.changed(element);
        this.close();
    }

    isActive() {
        return this._selectElement.classList.contains("active");
    }

    onchange(callback) {
        this._onchange = callback;
    }
}


export class SearchSelect extends Select {
    constructor(type, element, options, display, query) {
        super(type, element, options, display);
        this._query = query;
        const input = document.createElement("input");
        input.className = "select-search";
        input.placeholder = `Search for ${type}`;

        const searchRow = document.createElement("div");
        searchRow.className = "select-row";
        this._searchRow = searchRow;

        input.addEventListener("focus", event => this.open());
        input.addEventListener("keyup", event => this.filter());
        input.tabIndex = -1;

        this._input = input;
        searchRow.appendChild(input);
        searchRow.appendChild(this._toggleButton);

        this._selectElement.insertBefore(searchRow, this._optionsCon);

        this._optionRow.style.display = "none";
    }

    filter() {
        const searchString = this._input.value.toLowerCase();

        this._optionsCon.innerHTML = null;

        for (let i = this._options.length; i--;) {
            const option = this._options[i];
            const matched = this._query(option, searchString);
            if (matched) this._optionsCon.appendChild(this._optionElements.get(option))
        }
    }

    select(element) {
        super.select(element);
        this._optionRow.appendChild(this._toggleButton);
        this._optionRow.style.display = null;
    }

    close() {
        super.close();
        this._input.value = null;
        this._input.tabIndex = -1;
    }

    open() {
        if (this.isActive()) return;
        this._input.focus();
        this.filter();
        this._input.tabIndex = 0;
        super.open();
    }
}

export class MultiSelect extends SearchSelect {
    constructor(type, element, options, display, query) {
        super(type, element, options, display, query);
        this.value = [];
        const multiCon = document.createElement("div");
        multiCon.className = "select-field-extension";
        this._multiCon = multiCon;
        this._root.insertBefore(multiCon, this._selectElement);
        this._input.placeholder += " to add";
    }

    select(option) {
        this.value.push(option);
        const classList = this._optionElements.get(option).classList;
        classList.add("select-option-selected");
        const optRow = document.createElement("div");
        optRow.className = "select-row";
        this._multiCon.appendChild(optRow);
        const optRemove = document.createElement("button");
        const optTitle = document.createElement("div");
        optTitle.className = "select-option-title";
        optTitle.innerText = this._display(option);

        optRemove.className = "select-option-remove";
        optRemove.innerText = "close";
        optRemove.addEventListener("click", event => {
            this.value = this.value.filter(op => op !== option);
            this.changed(option);

            classList.remove("select-option-selected");
            optRow.remove();
        });
        optRow.appendChild(optTitle);
        optRow.appendChild(optRemove);

        this.changed(option);
        this.close();
    }
}