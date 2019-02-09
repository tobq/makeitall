import {Component, createRef} from "react";
import PropTypes from "prop-types";
import {RequiredLabel} from "./FieldLabel/FieldLabel";
import SearchSelect from "./Select/SearchSelect";
import React from "react";
import {QueryOption} from "./Select/SearchSelect";
import Specialist from "./Specialist";
import MultiSelect from "./Select/MultiSelect";

export default class SpecialistSelect extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        onchange: PropTypes.func,
        selected: PropTypes.arrayOf(PropTypes.instanceOf(SpecialistOption)),
    };

    constructor(props) {
        super(props);

        SpecialistOption.fetch()
            .then(options => this.setState({options: options}));
    }

    get value() {
        return this.ref.current.value;
    }

    state = {options: []};
    ref = createRef();
    label = createRef();

    validate() {
        if (this.ref.current.validate()) return true;
        else {
            this.label.current.activate();
            return false;
        }
    }

    render() {
        return <div className="employee-select">
            <RequiredLabel for={this.ref} ref={this.label}>{this.props.label}</RequiredLabel>
            <MultiSelect
                ref={this.ref}
                type="Specialist"
                options={this.state.options}
                selected={this.props.selected}
            />
        </div>

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