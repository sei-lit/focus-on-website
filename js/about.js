$(function($){
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        centerMode: true,
        centerPadding: '20%',
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slideToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });

    // $(document).on('click', '.ham_menu', function() {
    //     console.log("click");
    //     if($('.ham_menu').hasClass('active')) {
    //         $('.ham_menu').removeClass('active');
    //         $('.window-fixed').css('opacity', '0');
    //         $('.window-fixed').css('transform', 'translateX(100%)');
    //     } else {
    //         $('.ham_menu').addClass('active');
    //         $('.window-fixed').css('opacity', '1');
    //         $('.window-fixed').css('transform', 'translateX(0%)');
    //     }
    // });
});