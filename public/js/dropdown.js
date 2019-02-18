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

function solve(id) {
    $.ajax({
        type: "GET",
        url: '/solutions/'+id,
        data: $('#solutionsform'+id).serialize(),
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(data, status)
        {
            console.log(data, status);
        },

        error: function(data, status)
        {
            console.log(data, status);
        }
    });
    $.ajax({
        type: "PUT",
        url: '/solutions/'+id,
        data: $('#solutionsform'+id).serialize(),
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(data, status)
        {
            console.log(data, status);
        },
        error: function(data, status)
        {
            console.log(data, status);
        }
    });
}

function edit(id) {
    $.ajax({
        type: "PUT",
        url: '/problems/'+id,
        data: $('#editform'+id).serialize(),
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(data, status)
        {
            console.log(data, status);
        },
        error: function(data, status)
        {
            console.log(data, status);
        }
    });
}
