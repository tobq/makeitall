import React, {Component} from "react";
import {FieldLabel, RequiredLabel} from "./FieldLabel/FieldLabel";
import MultiSelect from "./Select/MultiSelect";
import PropTypes from "prop-types";
import {RequiredTextarea, RequiredInput} from "./RequiredField";
import Problem, {PriorityOption} from "./Problem";
import {QueryOption} from "./Select/SearchSelect";
import SpecialistSelect from "./SpecialistSelect";
import Select from "./Select/Select";
import ProblemTypeSelect from "./ProblemTypeSelect";


export default class NewProblem extends Component {
    static propTypes = {
        onRemove: PropTypes.func.isRequired
    };

    state = {
        active: true,
        title: null,
        description: null,
        software: null,
        devices: null,
        specialists: null,
        priority: null,
        unsaved: false,
    };

    title = React.createRef();
    problemType = React.createRef();
    description = React.createRef();
    devices = React.createRef();
    software = React.createRef();
    specialist = React.createRef();
    priority = React.createRef();
    hardSoftware = React.createRef();
    saveButton = React.createRef();


    save() {
        if (this.parse()) {
            this.setState({
                active: false,
                title: this.title.current.value,
                description: this.description.current.value,
                software: this.software.current.value,
                devices: this.devices.current.value,
                specialists: this.specialist.current.value,
                priority: this.priority.current.value,
                type: this.problemType.current.value
            });
        }
    }

    edit() {
        this.setState({active: true});
        console.log("EDIT");
    }

    parse() {
        const titleValid = this.title.current.validate();
        const descriptionValid = this.description.current.validate();
        const problemType = this.problemType.current.validate();
        const hardSoftwareValid = this.software.current.validate() || this.devices.current.validate();
        if (hardSoftwareValid) {
            this.software.current.resetValidate();
            this.devices.current.resetValidate();
            this.hardSoftware.current.deactivate()
        } else this.hardSoftware.current.activate();

        const specialistValid = this.specialist.current.validate();
        const priorityValid = this.priority.current.validate();

        return titleValid &&
            problemType &&
            descriptionValid &&
            hardSoftwareValid &&
            specialistValid &&
            priorityValid;
    }

    validate() {
        const unsaved = this.state.active;
        if (unsaved) {
            if (this.parse()) {
                this.saveButton.current.focus();
                this.setState({unsaved: true});
            }
        } else {
            this.setState({unsaved: false});
        }
        return !unsaved;
    }

    render() {
        const removeButton = <button
            className="select-option-remove"
            onClick={event => this.props.onRemove()}
        />;
        let className = "select-problem-save";
        if (this.state.unsaved) className += " required-error";
        return this.state.active ? <div className="select-new-problem-con">
                <div className="select-row">
                    <div className="select-option-content">
                        <div className="tag-id">New</div>
                        <div className="select-problem-editing-label">Editing problem...</div>
                    </div>
                    <button
                        className={className}
                        ref={this.saveButton}
                        onClick={event => this.save()}
                    />
                    {removeButton}
                </div>
                <div className="select-new-problem">
                    <div className="new-problem-field">
                        <RequiredInput
                            label="Title"
                            placeholder="Problem Title"
                            ref={this.title}
                            value={this.state.title}
                        />
                    </div>
                    <div className="new-problem-field">
                        <ProblemTypeSelect
                            value={this.state.type}
                            ref={this.problemType}
                            label="Referenced problems"
                            onchange={console.log}
                        />
                    </div>
                    <div className="new-problem-field">
                        <RequiredTextarea
                            ref={this.description}
                            label="Description"
                            value={this.state.description}
                        />
                    </div>
                    <div className="new-problem-field">
                        <RequiredLabel for={this.software} ref={this.hardSoftware}>
                            Installed Software / Affected Devices
                        </RequiredLabel>
                        <MultiSelect
                            ref={this.software}
                            type="Installed Software"
                            options={[1, 2, 3, 4, 5, 6].map(x => new QueryOption(x))}
                            selected={this.state.software}
                        />
                        <MultiSelect
                            ref={this.devices}
                            type="Device"
                            options={[1, 2, 3, 4, 5, 6].map(x => new QueryOption(x))}
                            selected={this.state.devices}
                        />
                    </div>
                    <div className="new-problem-field">
                        <SpecialistSelect
                            ref={this.specialist}
                            label={"Assign Specialists"}
                            selected={this.state.specialists}
                        />
                    </div>
                    <div className="new-problem-field">
                        <RequiredLabel for={this.priority}>Priority</RequiredLabel>
                        <Select type={"Priority"}
                                options={[1, 2, 3].map(x => new PriorityOption(x))}
                                ref={this.priority}
                                value={this.state.priority}
                        />
                    </div>
                </div>
            </div>
            :
            <div className="select-row">
                {Problem.render("New", this.state.title, this.state.priority.value)}
                <button
                    className="select-problem-edit"
                    onClick={event => this.edit()}
                />
                {removeButton}
            </div>;
    }

    get value() {
        return {
            title: this.state.title,
            description: this.state.description,
            software: this.state.software,
            devices: this.state.devices,
            specialists: this.state.specialists.map(specialist => specialist.value),
            priority: this.state.priority.value,
            type: this.state.type.value
        }
    }
}