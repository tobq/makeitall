import ReactDOM from "react-dom";
import EmployeeSelect from "./components/EmployeeSelect";
import React from "react";

const cons = document.getElementsByClassName('multiselect-con');
console.log(cons, cons.length);

for(let i = 0; i<cons.length; i++){
    const con = cons[i];
    console.log("REEEEEEEEEE", con);
    ReactDOM.render(<EmployeeSelect label="Problem Solvers"/>, con)
}

