import React, {Component} from "react";
import PropTypes from "prop-types";

// import "../css/FieldLabel.css"

export class FieldLabel extends Component {
    static propTypes = {
        children: PropTypes.string.isRequired,
        for: PropTypes.any.isRequired,
    };

    state = {};

    render() {
        return <div className="field-label" onClick={event => this.props.for.current.focus()}>
            {/*return <div className="field-label">*/}
            <label>{this.props.children}</label>
        </div>
    }
}


export class RequiredLabel extends FieldLabel {
    constructor(props) {
        super(props);
        this.state.active = false;
    }


    activate() {
        this.setState({active: true});
    }

    deactivate() {
        this.setState({active: false});
    }

    render() {
        let className = "required-field";
        if (this.state.active) className += " required-error";
        return <div className="field-label" onClick={event => this.props.for.current.focus()}>
            <label>{this.props.children}</label>
            <div className={className}>required</div>
        </div>
    }
}

