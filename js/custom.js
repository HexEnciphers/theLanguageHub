$(window).scroll(function () {

    if ($(window).scrollTop() >= 50) {
        $('.navbar').addClass('fixed-header animated slideInDown bg-green shadow-sm');
        $('.bt-top').addClass('visible');
    } else {
        $('.navbar').removeClass('fixed-header animated slideInDown bg-green shadow-sm');
        $('.bt-top').removeClass('visible');
    }
});