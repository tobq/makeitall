import {MultiSelect} from "./Select";

const options = [];
for (let i = 20; i--;) options[i] = Math.random().toString();
const display = opt => opt;
const query = (opt, query) => opt.toLowerCase().indexOf(query.toLowerCase()) !== -1;


export default class ProblemSelect extends MultiSelect {
    constructor(type, element, options, display, query) {
        super(type, element, options, display, query);
        const createCon = document.createElement("div");
        createCon.className = "select-create-con select-field-extension";

        const createButton = document.createElement("button");
        createButton.className = "select-create-problem";
        createButton.innerText = `Create new ${type}`;
        createButton.addEventListener("click", event => this.create());
        // opt.tabIndex = 0;
        this._root.insertBefore(createCon, this._multiCon);
        this._createButton = createButton;

        const createRow = document.createElement("div");
        createRow.className = "select-row";
        createRow.appendChild(createButton);
        createCon.appendChild(createRow);

        this._createCon = createCon;
        this.newProblems = [];
    }

    create() {
        if (this.newProblems.length > 0 &&
            this.newProblems[this.newProblems.length - 1].value === null) return;

        const createField = document.createElement("div");
        let newProblem = new NewProblem(createField);
        this.newProblems.push(newProblem);
        this._createCon.appendChild(createField);
        newProblem.focus();

        newProblem.onchange(value => this.changed(value));
    }
}

class NewProblem {
    constructor(root) {
        root.className = "select-create-field active";
        const createToggle = document.createElement("button");

        createToggle.className = "select-option-remove select-create-edit";
        const createRemove = document.createElement("button");

        createRemove.className = "select-option-remove";
        createRemove.innerText = "close";


        const problemRow = document.createElement("div");
        problemRow.className = "select-problem-row";
        const deviceSelect = document.createElement("div");
        const softwareSelect = document.createElement("div");
        const problemNewTag = document.createElement("div");
        problemNewTag.className = "select-problem-id";
        problemNewTag.innerText = "new";


        const descriptionElement = document.createElement("textarea");

        this._deviceSelect = new MultiSelect("Affected Device", deviceSelect, options, display, query);
        this._softwareSelect = new MultiSelect("Affected Software", softwareSelect, options, display, query);
        //TODO: FETCH OPTIONS. CREATE DISPLAY, QUERY,
        const createFieldContent = document.createElement("div");
        createFieldContent.className = "select-create-field-content";

        const titleInput = document.createElement("input");
        titleInput.className = "select-problem-title";
        titleInput.placeholder = "Problem Title (required)";
        titleInput.addEventListener("change", event => {
        });
        this._titleInput = titleInput;

        const deviceLabel = document.createElement("label");
        deviceLabel.innerText = "Devices";
        deviceLabel.for = deviceSelect;
        const softwareLabel = document.createElement("label");
        softwareLabel.innerText = "Installed Software";
        softwareLabel.for = softwareSelect;
        const descriptionLabel = document.createElement("label");
        descriptionLabel.innerText = "Description";
        descriptionLabel.classList.add("required-field");
        descriptionLabel.for = descriptionElement;
        this._descriptionLabel = descriptionLabel;
        this._descriptionElement = descriptionElement;


        createRemove.addEventListener("click", event => this.removed());

        createToggle.addEventListener("click", event => this.toggle());

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

    toggle() {
        if (this._root.classList.contains("active")) this.close();
        else this.open();
    }

    open() {
        this._titleInput.disabled = false;
        this._root.classList.add("active");
    }

    getTitle() {
        return this._titleInput.value;
    }

    getDescription() {
        return this._descriptionElement.value;
    }

    validate() {
        let allPassed = true;
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

    close() {
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

    onchange(callback) {
        this._onchanged = callback;
    }

    set value(value) {
        this._value = value;
        if (typeof this._onchanged === "function") this._onchanged(value);
    }

    get value() {
        return this._value;
    }

    onremove(callback) {
        this._onremove = callback;
    }

    removed() {
        if (typeof this._onremove === "function") this._onremove();
        this.value = null;
        this._root.remove();
    }

    focus() {
        this._titleInput.focus();
    }
}

class ProblemDetails {
    constructor(urgency)
}