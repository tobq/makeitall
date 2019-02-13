import ReactDOM from 'react-dom';
import React from "react";
import ProblemSelect from "./components/ProblemSelect";
import {RequiredLabel} from "./components/FieldLabel/FieldLabel";
import EmployeeSelect from "./components/EmployeeSelect";

const content = document.getElementById("body-content");

const reasonRef = React.createRef(),
    notesRef = React.createRef(),
    problemsRef = React.createRef();

ReactDOM.render(<div>
    <div className="form-field">
        <EmployeeSelect
            label="Caller"
            type="Employee CALLERR"
            onchange={console.log}
        />
    </div>

    <div className="form-field">
        <RequiredLabel for={reasonRef}>Call Reason</RequiredLabel>
        <textarea id="call-reason-field" ref={reasonRef}/>
    </div>

    <div className="form-field">
        <RequiredLabel for={notesRef}>Call Notes</RequiredLabel>
        <textarea id="notes-field" ref={notesRef}/>
    </div>

    <div className="form-field">
        <ProblemSelect
            ref={problemsRef}
            type="Problem"
            label="Referenced problems"
            onchange={console.log}
        />
    </div>

    <button id="report-call-button">Report call</button>
</div>, content);