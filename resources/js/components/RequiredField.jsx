import {Component} from "react";
import PropTypes from "prop-types";
import React from "react";
import {RequiredLabel} from "./FieldLabel/FieldLabel";

export default class RequiredField extends Component {
    state = {
        valid: true
    };

    input = React.createRef();

    validate() {
        const valid = this.input.current.value.length !== 0;
        this.validated(valid);
        return valid;
    }

    validated(valid) {
        if (valid) this.refs.label.deactivate();
        else {
            this.refs.label.activate();
            this.input.current.focus();
        }

        this.setState({valid: valid});
    }

    get value() {
        return this.input.current.value;
    }
}

export class RequiredInput extends RequiredField {
    static propTypes = {
        label: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        value: PropTypes.string
    };

    render() {
        let className = "select-input";
        if (!this.state.valid) className += " required-input-error";
        return <div>
            <RequiredLabel ref="label" for={this.input}>{this.props.label}</RequiredLabel>
            <input
                placeholder={this.props.placeholder}
                ref={this.input}
                defaultValue={this.props.value}
                className={className}/>
        </div>
    }
}

export class RequiredTextarea extends RequiredInput {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.string
    };

    render() {
        return <div>
            <RequiredLabel ref="label" for={this.input}>{this.props.label}</RequiredLabel>
            <textarea
                ref={this.input}
                defaultValue={this.props.value}
                className={this.state.valid ? null : "required-input-error"}/>
        </div>
    }
}