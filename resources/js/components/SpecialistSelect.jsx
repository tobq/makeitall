import {Component, createRef} from "react";
import PropTypes from "prop-types";
import {RequiredLabel} from "./FieldLabel/FieldLabel";
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
        if (this.ref.current.validate()) {
            this.label.current.deactivate();
            return true;
        } else {
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
        const specialist = this._value;
        return QueryOption.prepareSearchString(`${specialist.id} ${specialist.fullName()}`);
    }

    render() {
        return <div className="select-option-content">
            <div className="tag-id">ID: {this._value.id}</div>
            <div className="select-content-title">{this._value.fullName()}</div>
            <div className="tag">Current Problems: {this._value.problem_count}</div>
        </div>
    }

    get value() {
        return this._value.id;
    }

    static async fetch() {
        const specialists = await Specialist.fetch();
        return specialists.map(specialist => new SpecialistOption(specialist));
    }
}