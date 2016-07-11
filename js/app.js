$(document).ready(function () {
    $('.ryu').mouseenter(function () {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    });
    $('.ryu').mouseleave(function () {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    });
    $('.ryu').mousedown(function () {
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').show();
        //play hadouken sound yeeeeep
        //show hadouken and animate it to the right of the screen
    });
    $('.ryu').mouseup(function () {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
        //ry goes back to his ready position
    });
});
