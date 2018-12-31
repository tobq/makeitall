import React, {Component} from 'react';
import PropTypes from "prop-types";

// TODO: CSS ES6 IMPORT
// TODO: OVERFLOW DETECTION FLIP SELECT

export default class Select extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.instanceOf(SelectOption)).isRequired,
        onchange: PropTypes.func,
        // optionToString: PropTypes.func.isRequired,
    };
    state = {
        option: null,
        active: false
    };

    componentDidMount() {
        this.refs.root.addEventListener("focusout", (event) => {
            if (!this.refs.root.contains(event.relatedTarget)) this.close();
        });
    }

    valid() {
        return this.state.option !== null;
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
        return this.state.option.value;
    }

    toggleButton() {
        return <button className="select-toggle" ref="toggle" onClick={event => this.toggle()}/>
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
}