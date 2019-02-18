import ReactDOM from 'react-dom';
import React from "react";
import ProblemSelect from "./components/ProblemSelect";
import EmployeeSelect from "./components/EmployeeSelect";
import {RequiredTextarea} from "./components/RequiredField";
import PostJSON from "./components/PostJSON";

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
    <div id="report-call-button-con">
        <button id="report-call-button" onClick={onSubmit}>Save call</button>
    </div>
</div>, content);

function onSubmit() {
    const reasonValid = reasonRef.current.validate();
    const notesValid = notesRef.current.validate();
    const problemsValid = problemsRef.current.validate();
    const employeeValid = employeeRef.current.validate();
    if (!reasonValid ||
        !notesValid ||
        !problemsValid ||
        !employeeValid) return;

    createCall(
        employeeRef.current.value.value,
        reasonRef.current.value,
        notesRef.current.value,
        problemsRef.current.value
    ).then(call_id => window.href = `/calls/${call_id}`);
}

async function createCall(caller_id, reason, notes, problems) {
    const response = await PostJSON("/calls", {
        operator_id: 2,// (ALICE) //TODO: GET JANA's LOGIN STUFF TO FILL OPERATOR ID
        caller_id: caller_id,
        reason: reason,
        notes: notes
    });
    const call_id = response.id;

    for (let problem_id of problems.selected)
        await assignCallProblem(call_id, problem_id);

    for (let newProblem of problems.created)
        await assignCallProblem(call_id, await createProblem(newProblem));

    return call_id;
}

function assignCallProblem(call_id, problem_id) {
    return fetch(`/calls/${call_id}/assign/${problem_id}`);
}

async function createProblem(problem) {
    const response = await PostJSON("/problems", {
        title: problem.title,
        description: problem.description,
        priority: problem.priority,
        type: problem.type
    });
    const problem_id = response.id;
    for (let specialist_id of problem.specialists)
        fetch(`/problems/${problem_id}/assign/${specialist_id}`);

    return problem_id;
}