$(document).ready(function () {
    // Burger

    $('.header__burger').on('click', function () {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.page').toggleClass('active');
    });

});