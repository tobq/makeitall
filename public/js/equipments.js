function openTab(evt, tabs) { //create function for tabs
    var i, tabcontent, tablinks;  //declare variables

    tabcontent = document.getElementsByClassName("tabcontent"); //search for all elements with class tab elements
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }


    tablinks = document.getElementsByClassName("tablinks"); // search for all elements with class tablinks
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabs).style.display = "block";
    evt.currentTarget.className += " active"; // show the current tab
}


function soft(){
    $.ajax({
        type: 'GET',
        url: '/employee/',
        data: $('#softform').serialize(),
        success: function (data, status) {
            console.log(data,status);
        }
    });
}

function hard(){
    $.ajax({
        type: 'GET',
        url: '/employee/hardform/',
        data: $('#hardform').serialize(),
        success: function (data, status) {
            console.log(data,status);
        }
    });


}