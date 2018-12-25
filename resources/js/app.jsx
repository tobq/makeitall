import React from "react";
import ReactDOM from "react-dom";
import UserMenu from "./components/UserMenu"

const umenu = document.getElementById("user-menu");
const unoti = document.getElementById("user-noti");

ReactDOM.render(<UserMenu/>, umenu)

document.addEventListener("click", function (event) {
    unoti.classList.toggle("active");
});
