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
          // windowのサイズが600px以上
          $('.footer-img').attr('src', '/images/footer.png');
      }
});