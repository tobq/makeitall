import React, {Component} from 'react';
import PropTypes from "prop-types";
import SelectOption from "./SelectOption";
import EmployeeOption from "./EmployeeOption";

export default class Select extends Component {
    constructor(props) {//type, element, options, render) {
        super(props);
        console.log(props)
        this.state = {
            value: null,
            active: false
        };
    }

    componentDidMount() {
        this.refs.root.addEventListener("focusout", (event) => {
            if (!this.refs.root.contains(event.relatedTarget)) this.close();
        });
    }

    valid() {
        return this.state.value !== null;
    }

    toggle() {
        if (this.state.active) this.close();
        else this.open();
    }

    open() {
        console.log("OPEN", this.refs.root);
        // console.trace("OPEN");
        if (this.state.active) return false;
        this.refs.options.scrollTop = 0;
        this.setState({active: true});
        return true;
    }

    close() {
        console.log("CLOSE", this.refs.root);
        // console.trace("CLOSE");
        this.setState({active: false});
    }

    set value(selectOption) {
        if (this.state.value !== selectOption) {
            this.setState({value: selectOption}, event => {
                if (typeof this.props.onchange === "function") this.props.onchange(selectOption);
            });
        }
        this.refs.toggle.focus();
        this.close();
    }

    get value() {
        return this.state.value.value;
    }

    toggleButton() {
        return <button className="select-toggle" ref="toggle" onClick={event => this.toggle()}/>
    }

    optionlist(options) {
        return <div className="select-option-list" ref="options" tabIndex={-1}>
            {options.map(option =>
                <div
                    ref="options"
                    tabIndex={this.state.active ? 0 : -1}
                    onClick={event => this.value = option}
                    className={"select-option"}
                >
                    {option}
                </div>)}
        </div>;
    }

    render() {
        return <div className="select-root">
            <div className={"select-field" + (this.state.active ? " active" : "")} ref={"root"}>
                <div className="select-row" tabIndex={-1}>
                    {this.valid() ? this.state.value :
                        <div className={"select-option-content"}>Select {this.props.type}</div>}
                    {this.toggleButton()}
                </div>
                {this.optionlist(this.props.options)}
            </div>
        </div>
    }
}

Select.propTypes = {
    type: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf([SelectOption, EmployeeOption]).isRequired
        })).isRequired,
    onchanged: PropTypes.func,
    // optionToString: PropTypes.func.isRequired,
};
//
// export class MultiSelect extends SearchSelect {
//     constructor(type, element, options, render, query) {
//         super(type, element, options, render, query);
//         this.value = [];
//         const multiCon = document.createElement("div");
//         multiCon.className = "select-field-extension";
//         this._multiCon = multiCon;
//         this._root.insertBefore(multiCon, this._selectElement);
//         this._input.placeholder += " to add";
//     }
//
//     select(option) {
//         this.value.push(option);
//         const classList = this._optionElements.get(option).classList;
//         classList.add("select-option-selected");
//         const optRow = document.createElement("div");
//         optRow.className = "select-row";
//         const optRemove = document.createElement("button");
//         const optTitle = document.createElement("div");
//         optTitle.className = "select-option-title";
//         optTitle.innerHTML = this._display(option);
//
//         optRemove.className = "select-option-remove";
//         optRemove.innerText = "close";
//         optRemove.addEventListener("click", event => {
//             this.value = this.value.filter(op => op !== option);
//             this.changed(option);
//
//             classList.remove("select-option-selected");
//             optRow.remove();
//         });
//         optRow.appendChild(optTitle);
//         optRow.appendChild(optRemove);
//         this._multiCon.appendChild(optRow);
//
//         this.changed(option);
//         this.close();
//     }
// }