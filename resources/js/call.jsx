import ReactDOM from 'react-dom';
import React from "react";
import ProblemSelect from "./components/ProblemSelect";
import {RequiredLabel} from "./components/FieldLabel/FieldLabel";
import EmployeeSelect, {EmployeeOption} from "./components/EmployeeSelect";
import {SpecialistOption} from "./components/SpecialistSelect";

Promise.all([
    EmployeeOption.fetch(),
    SpecialistOption.fetch()
]).then(options => {
    console.log(options);
    render(...options)
});

const content = document.getElementById("body-content");

function render(employeeOptions, specialistOptions) {
    const callerRef = React.createRef(),
        reasonRef = React.createRef(),
        notesRef = React.createRef(),
        problemsRef = React.createRef();

    ReactDOM.render(<div>
        <EmployeeSelect
            label="Caller"
            type="Employee CALLERR"
            options={employeeOptions}
            onchange={console.log}
        />

        <RequiredLabel for={reasonRef}>Call Reason</RequiredLabel>
        <textarea id="call-reason-field" ref={reasonRef}/>

        <RequiredLabel for={notesRef}>Call Notes</RequiredLabel>
        <textarea id="notes-field" ref={notesRef}>
        On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode
    </textarea>

        <ProblemSelect
            type="Problem"
            label="Referenced problems"
            options={employeeOptions}
            onchange={console.log}
        />

    </div>, content);
}

// ReactDOM.render(, reasonSelect);
//
// ReactDOM.render(, employeeSelect);

// new SearchSelect("Employee", employeeSelect, children, render, query).onchange(console.log);
// new Select("Call Reason", reasonSelect, ["Checking Up", "Bored", "Other"], render).onchange(console.log);
// new ProblemSelect("NewProblem", problemSelect, problems).onchange(console.log);
// new Select("Random", rawSelect, children, render).onchange(console.log);