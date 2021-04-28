function backToTOP() {
    let button = $('.btn-scroll-back');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
            button.css('opacity', '1');
        } else {
            button.css('opacity', '0');
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    })
}
backToTOP();
