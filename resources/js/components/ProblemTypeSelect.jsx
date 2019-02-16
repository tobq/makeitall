import React from "react";
import {RequiredLabel} from "./FieldLabel/FieldLabel";
import Select from "./Select/Select";
import {ProblemTypeOption} from "./ProblemType";
import PropTypes from "prop-types";


export default class ProblemTypeSelect extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.instanceOf(ProblemTypeOption),
        onchange: PropTypes.func,
    };

    ref = React.createRef();
    label = React.createRef();
    state = {
        options: []
    };

    constructor(props) {
        super(props);

        ProblemTypeOption.fetch()
            .then(options => this.setState({options: options}));
    }

    validate() {
        if (this.ref.current.validate()) {
            this.label.current.deactivate();
            return true;
        } else {
            this.label.current.activate();
            return false;
        }
    }

    render() {
        return <div>
            <RequiredLabel ref={this.label} for={this.ref}>Problem Type</RequiredLabel>
            <Select
                ref={this.ref}
                type={"Problem Type"}
                options={this.state.options}
            />
        </div>
    }
}