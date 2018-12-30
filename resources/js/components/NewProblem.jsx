import React, {Component} from "react";
import {FieldLabel} from "./FieldLabel/FieldLabel";
import MultiSelect from "./Select/MultiSelect";
import PropTypes from "prop-types";
import RequiredField, {RequiredTextarea} from "./RequiredField";
import Problem from "./Select/Problem";
import {QueryOption} from "./Select/SearchSelect";
import SpecialistSelect from "./SpecialistSelect";


export default class NewProblem extends Component {
    static propTypes = {
        onRemove: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            active: true,
            title: null,
            priority: null,
            description: null,

        };

        this.title = React.createRef();
        this.description = React.createRef();
        this.devices = React.createRef();
        this.software = React.createRef();
        this.specialist = React.createRef();
    }


    save() {
        if (this.validate()) {
            this.setState({
                active: false,
                title: this.title.current.value,
                description: this.description.current.value,
            });
        }
    }

    edit() {
        this.setState({active: true});
        console.log("EDIT");
    }

    validate() {
        const titleValid = this.title.current.validate();
        const descriptionValid = this.description.current.validate();
        return titleValid && descriptionValid;
    }

    render() {

        const removeButton = <button
            className="select-option-remove"
            onClick={event => this.props.onRemove()}
        />;
        return this.state.active ? <div className="select-new-problem-con">
                <div className="select-row">
                    <div className="select-option-content">
                        <div className="employee-id">New</div>
                        <div className="select-problem-editing-label">Editing problem...</div>
                    </div>
                    <button
                        className="select-problem-save"
                        onClick={event => this.save()}
                    />
                    {removeButton}
                </div>
                <div className="select-new-problem">
                    <RequiredField
                        label="Title"
                        placeholder="Problem Title"
                        ref={this.title}
                        value={this.state.title}
                    />
                    <RequiredTextarea
                        ref={this.description}
                        label="Description"
                        value={this.state.description}
                    />
                    <FieldLabel for={this.software}>Installed Software</FieldLabel>
                    <MultiSelect
                        ref={this.software}
                        type="Installed Software"
                        options={[1, 2, 3, 4, 5, 6].map(x => new QueryOption(x))}
                    />
                    <FieldLabel for={this.devices}>Affected Devices</FieldLabel>
                    <MultiSelect
                        ref={this.devices}
                        type="Device"
                        options={[1, 2, 3, 4, 5, 6].map(x => new QueryOption(x))}
                    />
                    <SpecialistSelect label={"Assign Specialists"}/>
                </div>
            </div>
            :
            <div className="select-row">
                {Problem.render("New", this.state.title, this.state.priority)}
                <button
                    className="select-problem-edit"
                    onClick={event => this.edit()}
                />
                {removeButton}
            </div>;

    }
}