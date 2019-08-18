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
  var main = document.getElementById('main');
  main.classList.toggle('open');
}

/* function openContent() {
  document.getElementById('main').style.height = '250px';
  document.getElementById('handle-wrapper').style.display = 'none';
}
function closeContent() {
  document.getElementById('main').style.display = 'none';
  document.getElementById('handle-wrapper').style.display = 'block';
} */