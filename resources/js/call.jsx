import ReactDOM from 'react-dom';
import React from "react";
import ProblemSelect from "./components/ProblemSelect";
import EmployeeSelect from "./components/EmployeeSelect";
import {RequiredTextarea} from "./components/RequiredField";
import PostJSON from "./components/PostJSON";
import {FieldLabel} from "./components/FieldLabel/FieldLabel";
import ProblemCard from "./components/ProblemCard";
import Problem from "./components/Problem";

const content = document.getElementById("form");
const suggestionList = document.getElementById("suggestions-list");

const reasonRef = React.createRef(),
    notesRef = React.createRef(),
    problemsRef = React.createRef(),
    employeeRef = React.createRef();

ReactDOM.render(<div id="form-content">
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
        <FieldLabel for={notesRef}>Call Notes</FieldLabel>
        <textarea ref={notesRef}/>
    </div>

    <div className="form-field">
        <ProblemSelect
            ref={problemsRef}
            label="Referenced problems"
            onChanged={suggest}
        />
    </div>
    <div id="report-call-button-con">
        <button id="report-call-button" onClick={onSubmit}>Save call</button>
    </div>
</div>, content);

async function onSubmit() {
    const reasonValid = reasonRef.current.validate();
    const problemsValid = problemsRef.current.validate();
    const employeeValid = employeeRef.current.validate();
    if (!reasonValid ||
        !problemsValid ||
        !employeeValid) return;

    const call_id = await createCall(
        employeeRef.current.value,
        reasonRef.current.value,
        notesRef.current.value,
        problemsRef.current.value
    );

    window.location.href = `/calls/${call_id}`;
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

async function suggest() {
    console.log("SUGGESTING");
    const created = problemsRef.current.value.created;
    const cards = []
    for (let newProblem of created) {
        const response = await fetch(`/problems/type/${newProblem.type}`);
        const problems = await response.json();
        for (let problem of problems)
            cards.push(<ProblemCard problem={Problem.fromRow(problem)}/>)
    }
    ReactDOM.render(cards, suggestionList);
}

//TODO: FiLTER SPECIALISTS TO THOSE FOR TYPE;

//TODO: LOADING SCREEN;