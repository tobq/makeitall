import PostJSON from "./components/PostJSON";

const button = document.getElementById("body-content");
const loginID = document.getElementById("login-id");
const loginPassword = document.getElementById("login-password");

button.onsubmit = async function (event) {
    event.preventDefault();
    const response = await PostJSON("", {
        id: loginID.value,
        password: loginPassword.value
    });
    if (response.valid) window.location.href = "/";
    else console.log(response.error);
};
