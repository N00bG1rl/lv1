// magnigic-popup Plugin
$(document).ready(function() {
  $('.gallery').magnificPopup({
    type: 'image',
    gallery: {
      enabled:true,
      navigateByImgClick: true,
      tPrev: 'Previous (Left arrow key)',
      tNext: 'Next (Right arrow key)',
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
    },
  });
});

/* cubeportfolio Plugin */
(function($, window, document, undefined) {
  'use strict';

  // init cubeportfolio
  $('#js-grid-masonry').cubeportfolio({
      filters: '#js-filters-masonry, #js-filters-lightbox-gallery2',
      layoutMode: 'grid',
      defaultFilter: '*',
      animationType: 'quicksand',
      gapHorizontal: 20,
      gapVertical: 20,
      gridAdjustment: 'responsive',
      mediaQueries: [{
          width: 1500,
          cols: 5,
      }, {
          width: 1100,
          cols: 4,
      }, {
          width: 800,
          cols: 3,
      }, {
          width: 480,
          cols: 2,
          options: {
              caption: '',
              gapHorizontal: 10,
              gapVertical: 10,
          },   
      }, {
          width: 360,
          cols: 1
      }
    ],
      caption: 'overlayBottomAlong',
      displayType: 'bottomToTop',
      displayTypeSpeed: 100,

      // lightbox
      lightboxDelegate: '.cbp-lightbox',
      lightboxGallery: true,
      lightboxTitleSrc: 'data-title',
      lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} / {{total}}</div>',
  });
})(jQuery, window, document);