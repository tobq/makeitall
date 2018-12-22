import {SearchSelect, Select} from "./Select";
import ProblemSelect from "./ProblemSelect";

const options = [];
for (let i = 20; i--;) options[i] = Math.random().toString();
const display = opt => opt;
const query = (opt, query) => opt.toLowerCase().indexOf(query.toLowerCase()) !== -1;

const employeeSelect = document.getElementById("employee-select");
const reasonSelect = document.getElementById("reason-select");
const problemSelect = document.getElementById("problem-select");
const rawSelect = document.getElementById("raw-select");

new SearchSelect("Employee", employeeSelect, options, display, query).onchange(console.log);
new Select("Call Reason", reasonSelect, ["Checking Up", "Bored", "Other"], display).onchange(console.log);
new ProblemSelect("Problem", problemSelect, options, display, query).onchange(console.log);
new Select("Random", rawSelect, options, display).onchange(console.log);


// let employee = new Select("employees");
// console.log(employee);
// console.log(employees);
