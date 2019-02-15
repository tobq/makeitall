$(document).ready(function() {
    fixedfix();
    $('.problembutton').click(function(e) {
        $(this).next('div.dropdown').slideToggle('slow');
    });
    $('.solve').click(function(e) {
        $(this).next().next().slideToggle('fast');
    });
    $('.edit').click(function(e) {
        $(this).next().next().slideToggle('fast');
    });
});

$(window).resize(function (){
    fixedfix();
});

function fixedfix(){
    var new_width = $('#body-content').width();
    $('#problemtitle').width(new_width);
}


/*
function solveform(formno){
    console.log('solved' +formno);
    var background = document.getElementById('solved'+formno);
    console.log(background.style.display);
    if(background.style.display == 'none') {
        background.style.display = 'block-inline';
        console.log('ok');
    }
    else {
        background.style.display = 'none'
        console.log('no');
    }
}
*/
