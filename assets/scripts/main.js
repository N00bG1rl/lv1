//MOBILE NAV
// Mobile nav slider open/close
function openNav() {
  document.getElementById('mobile-nav').style.width = '100%';
}
function closeNav() {
  document.getElementById('mobile-nav').style.width = '0';
}

/* Index toggle content */
function toggleContent() {
  var mainContent = document.getElementById('main-content');
  var rotate = document.getElementById('rightArrow');
  let txtRotate = document.getElementById('txt-rotate');

  mainContent.classList.toggle('open');
  rotate.classList.toggle('imgRotate');
  txtRotate.classList.toggle('txtNone');
}

/* function toggleMobilenav() {
  var mobileNav = document.getElementById('open');
  mobileNav.addClass('over');
} */

/* var body = document.body,
    overlay = document.querySelector('.overlay'),
    overlayBtts = document.querySelectorAll('div[class$="overlay"]');

[].forEach.call(overlayBtts, function(btt) {

  btt.addEventListener('click', function() { 

     
     var overlayOpen = this.className === 'open-overlay';

     
     overlay.setAttribute('aria-hidden', !overlayOpen);
     body.classList.toggle('noscroll', overlayOpen);

     
     overlay.scrollTop = 0;

  }, false);

}); */

/* let overlayShown = false;
let scrollPosition = 0;

document.querySelector('.open-overlay').addEventListener('click', function() {
  if (overlayShown) {
		showOverlay();
  } else {
    removeOverlay();
  }
  overlayShown = !overlayShown;
});

function showOverlay() {
    scrollPosition = window.pageYOffset;
  	const mainEl = document.querySelector('.main-content');
    mainEl.style.top = -scrollPosition + 'px';
  	document.body.classList.add('show-overlay');
}

function removeOverlay() {
		document.body.classList.remove('show-overlay');
  	window.scrollTo(0, scrollPosition);
    const mainEl = document.querySelector('.main-content');
    mainEl.style.top = 0;
} */

$(function() {
  /*This is where we specify what button is being clicked to open the 
  overlay, change at will.*/
  $('#open-icon').click(function() {    
  /*This is where we specify what part of the page is gonna disable the 
  scroll, in this case the body.*/
      $('html')
        .css('overflow', 'hidden');
  });
});
  
  /*Now we re-enable the scroll*/
$(function() {
  /*This is where we specify the the part of the overlay that is being 
  clicked to close it, in this case, the body and the .close, change at will.*/
  $('.close-icon').click(function() {
  /* This is where we specify the part of the page we are re-enabling 
  the scroll, in this case the body. */
      $('html')
          .css('overflow-y', 'visible');
     });
});