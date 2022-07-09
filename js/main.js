$(function(){
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000,
        autoplaySpeed: 2000,
        dots: true
    });

    $('.nav__button').on('click', function() {
        $('.header__menu-burger').addClass('active');
    });
    $('.menu-close').on('click', function() {
        $('.header__menu-burger').removeClass('active');
    });
});

