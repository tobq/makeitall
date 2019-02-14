import PropTypes from "prop-types";
import Employee from "./Employee";
import {QueryOption} from "./Select/SearchSelect";
import SearchSelect from "./Select/SearchSelect";
import {RequiredLabel} from "./FieldLabel/FieldLabel";
import React from "react";

export default class EmployeeSelect extends React.Component {
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

    render() {
        return this.state.options ? <div className="employee-select">
            <RequiredLabel ref={this.label} for={this.ref}>{this.props.label}</RequiredLabel>
            <SearchSelect
                ref={this.ref}
                type="Employee"
                options={this.state.options}
                onchange={console.log}
            />
        </div> : null

    }
}

export class EmployeeOption extends QueryOption {
    constructor(value) {
        if (!(value instanceof Employee)) throw value + " not an instance of Employee";
        super(value);
    }

    toSearchString() {
        const employee = this.value;
        return QueryOption.prepareSearchString(`${employee.id} ${employee.fullName()}`);
    }

    render() {
        return <div className="select-option-content">
            <div className="employee-id">ID: {this.value.id}</div>
            <div className="employee-full-name">{this.value.fullName()}</div>
            <div className="tag">{this.value.department_name}</div>
        </div>
    }

    getKey() {
        return this._value.id;
    }

    static async fetch() {
        const employees = await Employee.fetch();
        return employees.map(employee => new EmployeeOption(employee));
    }
}