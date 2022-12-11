$(document).ready(function () {
    // Burger

    $('.header__burger').on('click', function () {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.page').toggleClass('active');
    });

    /* --------   Smooth scroll    ---------  */

    $('nav a').on("click", function (event) {
        $('nav a').removeClass('active');
        $(this).addClass('active');
    });

    $('#yes').on('click', function () {
        $('#yes').prop('checked', true);
        $('#no').prop('checked', false);
    });

    $('#no').on('click', function () {
        $('#no').prop('checked', true);
        $('#yes').prop('checked', false);
    });



});