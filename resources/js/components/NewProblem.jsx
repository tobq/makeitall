import React, {Component} from "react";
import {FieldLabel, RequiredLabel} from "./FieldLabel/FieldLabel";
import MultiSelect from "./Select/MultiSelect";
import PropTypes from "prop-types";
import {RequiredTextarea, RequiredInput} from "./RequiredField";
import Problem from "./Problem";
import {QueryOption} from "./Select/SearchSelect";
import SpecialistSelect from "./SpecialistSelect";
import Select, {SelectOption} from "./Select/Select";


export default class NewProblem extends Component {
    static propTypes = {
        onRemove: PropTypes.func.isRequired
    };

    state = {
        active: true,
        title: null,
        priority: null,
        description: null,

    };

    title = React.createRef();
    description = React.createRef();
    devices = React.createRef();
    software = React.createRef();
    specialist = React.createRef();
    priority = React.createRef();


    save() {
        if (this.validate()) {
            this.setState({
                active: false,
                title: this.title.current.value,
                description: this.description.current.value,
                priority: this.priority.current.value
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
        const softwareValid = this.software.current.validate() || this.devices.current.validate();
        if (softwareValid) {
            this.software.current.resetValidate();
            this.devices.current.resetValidate();
        }
        const specialistValid = this.specialist.current.validate();
        const priorityValid = this.priority.current.validate();

        return titleValid && descriptionValid && softwareValid && specialistValid && priorityValid;
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
                    <RequiredInput
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
                    <SpecialistSelect ref={this.specialist} label={"Assign Specialists"}/>
                    {/*<PrioritySelect/>*/}
                    <RequiredLabel for={this.priority}>Priority</RequiredLabel>
                    <Select type={"Priority"} options={["Normal", "Urgent", "Emergency"].map(x => new SelectOption(x))}
                            ref={this.priority}/>
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

class PrioritySelect extends Component {
    value = 0;

    state = {display: this.value};

    display(priority) {
        this.setState({display: priority})
    }

    select(priority) {
        console.log("VALUE:  " + priority);
        this.value = priority;
    }

    reset() {
        this.display(this.value);
    }

    render() {
        const options = [];
        const currentDisplay = this.state.display;
        for (let i = 0; i < 5; i++) {
            let className = "select-priority-option";
            if (i < currentDisplay) className += " active";
            options[i] = <button
                className={className}
                onMouseEnter={this.display.bind(this, i + 1)}
                onFocus={this.display.bind(this, i + 1)}
                onClick={this.select.bind(this, i + 1)}
            />;
        }

        return <div
            className="select-priority"
            onMouseLeave={event => this.reset()}>
            Normal {options} Emergency
        </div>
    }
}