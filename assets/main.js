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
  h.style.height = "45px";
  h.style.height = (h.scrollHeight)+"px";
}