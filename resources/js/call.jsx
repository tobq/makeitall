import ReactDOM from 'react-dom';
import React from "react";
import ProblemSelect from "./components/ProblemSelect";
import {RequiredLabel} from "./components/FieldLabel/FieldLabel";
import EmployeeSelect from "./components/EmployeeSelect";
import {RequiredTextarea} from "./components/RequiredField";
import ProblemTypeSelect from "./components/ProblemTypeSelect";

const content = document.getElementById("body-content");

const reasonRef = React.createRef(),
    notesRef = React.createRef(),
    problemsRef = React.createRef(),
    problemTypeRef = React.createRef(),
    employeeRef = React.createRef();

ReactDOM.render(<div>
    <div className="form-field">
        <EmployeeSelect
            label="Caller"
            type="Employee CALLERR"
            onchange={console.log}
            ref={employeeRef}
        />
    </div>

    <div className="form-field">
        <RequiredTextarea label="Call Reason" ref={reasonRef}/>
    </div>

    <div className="form-field">
        <RequiredTextarea label="Call Notes" ref={notesRef}/>
    </div>

    <div className="form-field">
        <ProblemSelect
            ref={problemsRef}
            label="Referenced problems"
            onchange={console.log}
        />
    </div>

    <div className="form-field">
        <ProblemTypeSelect
            ref={problemTypeRef}
            label="Referenced problems"
            onchange={console.log}
        />
    </div>

    <button id="report-call-button"
            onClick={onSubmit}>Report call
    </button>
</div>, content);

function onSubmit() {
    reasonRef.current.validate();
    notesRef.current.validate();
    problemsRef.current.validate();
    employeeRef.current.validate();
    console.log(reasonRef.current.value);
    console.log(notesRef.current.value);
    console.log(problemsRef.current.value);
    console.log(employeeRef.current.value);
}
