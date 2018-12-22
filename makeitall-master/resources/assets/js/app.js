const dp = document.getElementById("user-display-picture");
const umenu = document.getElementById("user-menu");

dp.addEventListener("click", function (event) {
    umenu.classList.toggle("open");
    event.stopPropagation();
});

document.addEventListener("click", function () {
    umenu.classList.remove("open");
})