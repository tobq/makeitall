import PropTypes from "prop-types";
import Employee from "./Employee";
import {QueryOption} from "./Select/SearchSelect";
import SearchSelect from "./Select/SearchSelect";
import {RequiredLabel} from "./FieldLabel/FieldLabel";
import React from "react";
import MultiSelect from "./Select/MultiSelect";
import {EmployeeOption} from "./EmployeeSelect";

export default class EmployeeMultiSelect extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        onchange: PropTypes.func,
    };

    constructor(props) {
        super(props);

        EmployeeOption.fetch()
            .then(options => this.setState({options: options}));
    }

    state = {options: []};
    ref = React.createRef();
    label = React.createRef();

    validate(){
        const valid = this.ref.current.validate();
        if (valid) this.label.current.deactivate();
        else this.label.current.activate();
        return valid;
    }

    get value (){
        return this.ref.current.value.value;
    }

    render() {
        return this.state.options ? <div className="employee-select">
            <RequiredLabel ref={this.label} for={this.ref}>{this.props.label}</RequiredLabel>
            <MultiSelect
                ref={this.ref}
                type="Employee"
                options={this.state.options}
                onchange={console.log}
            />
        </div> : null

    }
}

