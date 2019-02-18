$(document).ready(function() {
    $('.problembutton').click(function(e) {
        $(this).next('div.dropdown').slideToggle('slow');
    });
});

function solveform(){
    $background = document.getElementById('greyback');
    if($background.style.display != '') {
        $background.style.display = '';
    }
    else {
        $background.style.display = 'none'
    }
}
