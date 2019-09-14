$(document).ready(function() {
  /* responsiveSlides plugin */
  $(function() {
    $(".rslides").responsiveSlides({
      nav: true,
      prevText: '<i class="left-icon icon"></i>',
      nextText: '<i class="right-icon icon"></i>',
      pause: true,
    });
  });

  /* MagnifPopup Plugin */
  $('.popup-with-zoom-anim').magnificPopup({
      type: 'inline',
      fixedContentPos: true,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in' // close btn
  });
});