import ReactDOM from 'react-dom';
import React from "react";
import ProblemSelect from "./components/ProblemSelect";
import {RequiredLabel} from "./components/FieldLabel/FieldLabel";
import EmployeeSelect from "./components/EmployeeSelect";

const content = document.getElementById("body-content");

const reasonRef = React.createRef(),
    notesRef = React.createRef();

ReactDOM.render(<div>
    <EmployeeSelect
        label="Caller"
        type="Employee CALLERR"
        onchange={console.log}
    />

    <RequiredLabel for={reasonRef}>Call Reason</RequiredLabel>
    <textarea id="call-reason-field" ref={reasonRef}/>

    <RequiredLabel for={notesRef}>Call Notes</RequiredLabel>
    <textarea id="notes-field" ref={notesRef}/>

    <ProblemSelect
        type="Problem"
        label="Referenced problems"
        onchange={console.log}
    />

</div>, content);