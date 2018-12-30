import {Component, createRef} from "react";
import PropTypes from "prop-types";
import {RequiredLabel} from "./FieldLabel/FieldLabel";
import SearchSelect from "./Select/SearchSelect";
import React from "react";
import {QueryOption} from "./Select/SearchSelect";
import Specialist from "./Specialist";

export default class SpecialistSelect extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        onchange: PropTypes.func,
    };

    constructor(props) {
        super(props);

        SpecialistOption.fetch()
            .then(options => this.setState({options: options}));
    }

    state = {options: []};
    ref = createRef();

    render() {
        return this.state.options ? <div className="employee-select">
            <RequiredLabel for={this.ref}>{this.props.label}</RequiredLabel>
            <SearchSelect
                ref={this.ref}
                type="Specialist"
                options={this.state.options}
                onchange={console.log}
            />
        </div> : null

    }
}


export class SpecialistOption extends QueryOption {
    constructor(value) {
        if (!(value instanceof Specialist)) throw value + " not an instance of Specialist";
        super(value);
    }

    toSearchString() {
        const specialist = this.value;
        return this.prepareSearchString(`${specialist.id} ${specialist.fullName()}`);
    }

    render() {
        return <div className="select-option-content">
            <div className="employee-id">ID: {this.value.id}</div>
            <div className="employee-full-name">{this.value.fullName()}</div>
            <div className="tag">Current Problems: {this.value.problem_count}</div>
        </div>
    }

    static async fetch() {
        const specialists = await Specialist.fetch();
        return specialists.map(specialist => new SpecialistOption(specialist));
    }
}