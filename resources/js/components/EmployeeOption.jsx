import SelectOption from "./SelectOption";
import React from "react";
import PropTypes from "prop-types";
import Employee from "./Employee";

export default class EmployeeOption extends SelectOption {
    static propTypes = {
        ...SelectOption.propTypes,
        value: PropTypes.instanceOf(Employee).isRequired
    };

    constructor(props) {
        super(props);

    }

    render() {
        return <div className="select-option-content">
            <div className="employee-id">{this.props.value.id}</div>
            <div style={{
                flexGrow: 1
            }}>{this.props.value.toString()}</div>
        </div>
    }
}