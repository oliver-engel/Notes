$(document).ready(function () {

    $('.fadeHover').hover(

    function () {
        $('.fadeHover').stop().fadeTo(0.3, 0.3);
        $(this).stop().fadeTo(0.3, 1);
    },
    function () {
        $('.fadeHover').stop().fadeTo(0.3, 1);
    });
});
