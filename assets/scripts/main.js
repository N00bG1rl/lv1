//MOBILE NAV
// Mobile nav slider open/close
function openNav() {
  document.getElementById('mobile-nav').style.width = '100%';
}
function closeNav() {
  document.getElementById('mobile-nav').style.width = '0';
}

// CONTACT FORM
// Auto expand #contact form textarea
function adjust_textarea(h) {
  h.style.height = "80px";
  h.style.height = (h.scrollHeight)+"px";
}

function toggleContent() {
  var mainContent = document.getElementById('main-content');
  var rotate = document.getElementById('rightArrow');
  let txtRotate = document.getElementById('txt-rotate');

  mainContent.classList.toggle('open');
  rotate.classList.toggle('imgRotate');
  txtRotate.classList.toggle('txtNone');
}

/* function openContent() {
  document.getElementById('main').style.height = '250px';
  document.getElementById('handle-wrapper').style.display = 'none';
}
function closeContent() {
  document.getElementById('main').style.display = 'none';
  document.getElementById('handle-wrapper').style.display = 'block';
} */