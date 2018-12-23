import {SearchSelect, Select} from "./components/Select";
import ProblemSelect, {Problem} from "./components/ProblemSelect";

const options = [];
const problems = [];
for (let i = 20; i--;) options[i] = Math.random().toString();
for (let i = 20; i--;) problems[i] = new Problem(
    Math.random().toString(),
    Math.random(),
    Math.random().toString(),
    Math.random().toString(),
    Math.random().toString()
);

const display = opt => opt;
const query = (opt, query) => opt.toLowerCase().indexOf(query.toLowerCase()) !== -1;

const employeeSelect = document.getElementById("employee-select");
const reasonSelect = document.getElementById("reason-select");
const problemSelect = document.getElementById("problem-select");
const rawSelect = document.getElementById("raw-select");

new SearchSelect("Employee", employeeSelect, options, display, query).onchange(console.log);
new Select("Call Reason", reasonSelect, ["Checking Up", "Bored", "Other"], display).onchange(console.log);
new ProblemSelect("Problem", problemSelect, problems).onchange(console.log);
new Select("Random", rawSelect, options, display).onchange(console.log);