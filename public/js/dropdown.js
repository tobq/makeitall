$(document).ready(function() {
    $('.problembutton').click(function(e) {
        $(this).next('div.dropdown').slideToggle('slow');
    });
    $('.solve').click(function(e) {
        $(this).next().next().slideToggle('fast');
    });
    $('.edit').click(function(e) {
        $(this).next().next().slideToggle('fast');
    });
    $('.associatedcalls').click(function(e) {
        $(this).next().slideToggle('fast');
    });
});

$(window).on("load resize",function(e){
    var new_width = $('#body-content').width();
    $('#problemtitle').width(new_width);
});
