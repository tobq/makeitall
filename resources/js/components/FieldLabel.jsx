import React, {Component} from "react";
import PropTypes from "prop-types";

export class FieldLabel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="field-label">
            <label>{this.props.name}</label>
        </div>
    }
}

FieldLabel.propTypes = {
    name: PropTypes.string.isRequired,
};

export class RequiredLabel extends FieldLabel {
    render() {
        return <div className="field-label">
            <label>{this.props.name}</label>
            <div className="required-field">required</div>
        </div>
    }
}

