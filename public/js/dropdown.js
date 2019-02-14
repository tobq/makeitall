function changedrop(dropdown) {
    var x = document.getElementById(dropdown);
    x.style.display = "none";
}

$(document).ready(function() {
    $('.problembutton').click(function(e) {
        console.log("ok");
        $(this).next('div.dropdown').slideToggle('slow');
    });
});

