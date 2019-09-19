// MOBILE NAV
// Mobile nav slider open/close
function openNav() {
  document.getElementById('mobile-nav').style.width = '100%';
}
function closeNav() {
  document.getElementById('mobile-nav').style.width = '0';
}

/* Un-enable scroll for toggle nav */
$(function() {
  $('#open-icon').click(function() {
    $('html')
      .css('overflow', 'hidden');
  });
});

/* Re-enable the scroll */
$(function() {
  $('.close-icon').click(function() {
    $('html')
      .css('overflow-y', 'visible');
  });
});

// INDEX TOGGLE
/* Index toggle main content */
function toggleContent() {
  var mainContent = document.getElementById('main-content');
  var rotate = document.getElementById('rightArrow');
  let txtRotate = document.getElementById('txt-rotate');

  mainContent.classList.toggle('open');
  rotate.classList.toggle('imgRotate');
  txtRotate.classList.toggle('txtNone');
}