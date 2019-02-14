$(document).ready(function() {
    $('.problembutton').click(function(e) {
        $(this).next('div.dropdown').slideToggle('slow');
    });
});

