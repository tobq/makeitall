import React, {Component} from 'react';
import PropTypes from "prop-types";

// TODO: CSS ES6 IMPORT
// TODO: OVERFLOW DETECTION FLIP SELECT

export default class Select extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.instanceOf(SelectOption).isRequired).isRequired,
        onchange: PropTypes.func,
        value: PropTypes.instanceOf(SelectOption)
        // optionToString: PropTypes.func.isRequired,
    };
    state = {
        option: null,
        active: false
    };

    constructor(props) {
        super(props);
        this.state.option = props.value;
    }

    componentDidMount() {
        // if (this.props.value) this.select(this.props.value);

        this.refs.root.addEventListener("focusout", (event) => {
            if (!this.refs.root.contains(event.relatedTarget)) this.close();
        });
    }

    valid() {
        return this.state.option !== null && this.state.option !== undefined;
    }

    validate() {
        if (this.valid()) {
            this.refs.root.classList.remove("required-error");
            return true;
        } else {
            this.refs.root.classList.add("required-error");
            this.focus();
            return false;
        }
    }

    resetValidate() {
        this.refs.root.classList.remove("required-error");
    }

    toggle() {
        if (this.state.active) this.close();
        else this.open();
    }

    open() {
        console.log("OPEN", this.refs.root);
        // console.trace("OPEN");
        if (this.state.active) return false;
        // this.focus()
        this.setState({active: true}, then => {
            this.refs.options.scrollTop = 0;
        });
        return true;
    }

    close() {
        console.log("CLOSE", this.refs.root);
        // console.trace("CLOSE");
        this.setState({active: false});
    }

    changed(option) {
        if (typeof this.props.onchange === "function") this.props.onchange(option);
    }

    set value(option) {
        if (this.state.option !== option)
            this.setState({option: option}, event => this.changed(option));

        this.refs.toggle.focus();
        this.close();
    }

    focus() {
        this.refs.toggle.focus();
    }

    get value() {
        return this.state.option//.value;
    }

    toggleButton() {
        return <button className="select-toggle" ref="toggle" onClick={event => {
            this.toggle();
            event.preventDefault();
            return false;
        }}/>
    }

    options() {
        return this.props.options;
    }

    optionlist() {
        return this.state.active ?
            <div className="select-option-list" ref="options" tabIndex={-1}>
                {this.options().map(option =>
                    <button
                        tabIndex={this.state.active ? 0 : -1}
                        onClick={event => this.select(option)}
                        className={"select-option"}
                        key={option.getKey()}
                    >
                        {option.render()}
                    </button>)}
            </div>
            :
            null;
    }

    select(option) {
        this.value = option;
    }

    unselect() {
        this.value = null
    }

    render() {
        let className = "select-field";
        if (this.state.active) className += " active";

        return <div className="select-root">
            <div className={className} ref={"root"}>
                <div className="select-row" tabIndex={-1} onClick={event => this.toggle()}>
                    {this.valid() ?
                        this.state.option.render() :
                        <div className={"select-option-content"}>Select {this.props.type}</div>}
                    {this.toggleButton()}
                </div>
                {this.optionlist()}
            </div>
        </div>
    }
}

export class SelectOption {
    constructor(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    render() {
        return <div className="select-option-content">
            {this._value.toString()}
        </div>
    }

    getKey() {
        return this._value;
    }

    equals(option) {
        return option instanceof SelectOption && this.value === option.value;
    }
}
