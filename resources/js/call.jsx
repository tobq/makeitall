import ReactDOM from 'react-dom';
import React from "react";
// import ProblemSelect, {Problem} from "./components/ProblemSelect";
import {FieldLabel, RequiredLabel} from "./components/FieldLabel";
import Select from "./components/Select";
import SearchSelect from "./components/SearchSelect";
import MultiSelect from "./components/MultiSelect";
import EmployeeOption from "./components/EmployeeOption";
import Employee from "./components/Employee";
import SelectOption from "./components/SelectOption";

const employeeOptions = [];
const problems = [];
for (let i = 20; i--;) {
    const employee = new Employee(
        Math.random(),
        Math.random() > 0.5 ? "Mr" : "Ms",
        Math.random().toString().slice(2, 5),
        Math.random().toString().slice(2, 5)
    );
    employeeOptions[i] = <EmployeeOption value={employee}/>;
}
// console.log(employeeOptions)
// for (let i = 20; i--;) problems[i] = new Problem(
//     Math.random().toString(),
//     Math.random(),
//     Math.random().toString(),
//     Math.random().toString(),
//     Math.random().toString()
// );

const display = opt => opt;
const employeQuery = (opt, query) => {
    const employee = opt.props.value;
    const serialised = employee.id + employee.toString().toLowerCase();
    const searchString = query.toLowerCase();
    for (let word of searchString.split(" "))
        if (serialised.indexOf(word) === -1) return false;

    return true;
};
const content = document.getElementById("body-content");

ReactDOM.render(<div>
    <RequiredLabel name="Caller"/>
    <SearchSelect
        type="Employee"
        options={employeeOptions}
        query={employeQuery}
    />

    {/*<RequiredLabel name="Call Reason"/>*/}
    {/*<Select*/}
    {/*type="Call Reason"*/}
    {/*options={["Bored", "Checking up", "Other", "WOW"]}*/}
    {/*optionToString={display}*/}
    {/*/>*/}

    <RequiredLabel name="Call Notes"/>
    <textarea id="notes-field">
        On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode
    </textarea>

    <FieldLabel name={"Testing"}/>
    <Select
        type="Random"
        options={employeeOptions}
    />

    {/*<FieldLabel name={"Multi"}/>*/}
    {/*<MultiSelect*/}
    {/*type="Random"*/}
    {/*options={employeeOptions}*/}
    {/*optionToString={display}*/}
    {/*/>*/}
    {/*<label htmlFor="notes-field">Call Notes</label>*/}
    {/*<label htmlFor="problem-select">Referenced problems</label>*/}
    {/*<div id="problem-select"></div>*/}

    {/*<label htmlFor="raw-select">Test</label>*/}
    {/*<div id="raw-select"></div>*/}
    {/*<div style="height: 400px; background: green;"></div>*/}
</div>, content);
// ReactDOM.render(, reasonSelect);
//
// ReactDOM.render(, employeeSelect);

// new SearchSelect("Employee", employeeSelect, options, render, query).onchange(console.log);
// new Select("Call Reason", reasonSelect, ["Checking Up", "Bored", "Other"], render).onchange(console.log);
// new ProblemSelect("Problem", problemSelect, problems).onchange(console.log);
// new Select("Random", rawSelect, options, render).onchange(console.log);