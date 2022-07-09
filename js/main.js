$(function(){
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000,
        autoplaySpeed: 2000,
        dots: true
    })
});

function menu() {
    let menuDisplay = document.getElementById('menu');
    if (menuDisplay.style.display == 'none') {
        menuDisplay.style.display = 'block';
    } else {
        menuDisplay.style.display = 'none';
    }
}
