const dp = document.getElementById("user-display-picture");
const umenu = document.getElementById("user-menu");
const unoti = document.getElementById("user-noti");

function opendp() {
    // console.trace("OPEN");
    umenu.classList.add("active");
    umenu.focus();
}

function closedp() {
    // console.trace("CLOSE");
    umenu.classList.remove("active");
    document.activeElement.blur();
}

function isActive() {
    return umenu.classList.contains("active");
}

umenu.addEventListener("focusout", function (event) {
    if (!this.contains(event.relatedTarget)) closedp();
});

dp.addEventListener("click", function (event) {
    if (isActive()) closedp();
    else opendp();
});

document.addEventListener("click", function (event) {
    unoti.classList.toggle("active");
});
