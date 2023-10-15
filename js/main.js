$(document).on('click', '.ham_menu', function() {
    console.log("click");
    if($('.ham_menu').hasClass('active')) {
        $('.ham_menu').removeClass('active');
        $('.window-fixed').css('opacity', '0');
        $('.window-fixed').css('transform', 'translateX(100%)');
    } else {
        $('.ham_menu').addClass('active');
        $('.window-fixed').css('opacity', '1');
        $('.window-fixed').css('transform', 'translateX(0%)');
    }

    $('nav a[href^="#"]').click(function () {
        var adjust = 0;
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - adjust;
        $('body,html').animate({
          scrollTop: position
        }, speed, 'swing');
        return false;
      });
});

$(window).on("load", function(){
  if (window.matchMedia("(max-width: 600px)").matches) {
      $('.footer-img').attr('src', '/images/footer_sp.png');
  }else{
      // windowのサイズが1024px以上
      $('.footer-img').attr('src', '/images/footer.png');
  }
});

$(window).resize(function(){
    if (window.matchMedia("(max-width: 600px)").matches) {
        $('.footer-img').attr('src', '/images/footer_sp.png');
    }else{
        // windowのサイズが1024px以上
        $('.footer-img').attr('src', '/images/footer.png');
    }
});
    