$(document).ready(function () {
    $(".nav-item>a").on({
        mouseover: function () {
            $(this).addClass('btn-primary text-white');
            
        },
        mouseleave: function () {
            $(this).removeClass('btn-primary text-white');
        }               
    });    
});