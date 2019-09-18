// Auto expand #contact form textarea
function adjust_textarea(h) {
  h.style.height = "80px";
  h.style.height = (h.scrollHeight)+"px";
}

// Contact form validation
$(function () {
  $('.contact-form form .submit').on('click', function() {
    
    $('.contact-form form .form-control').removeClass("errorForm");
    $('.msg_sucess,.msg_error').css("display","");

    var error = false,
        name = $('.contact-form form input[type="text"]');

    if (name.val() === "" || name.val() === " ") {
      error = true;
      $(name).addClass("errorForm");
    }

    var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
    email = $('.contact form input[type="email"]');

    if (email.val() === "" || email.val() === " ") {
      $(email).addClass("errorForm");
      error = true;
    } else if (!email_compare.test(email.val())) {
      $(email).addClass("errorForm");
      error = true;
    }

    var msg = $('.contact-form form textarea');

    if (msg.val() === "" || msg.val() === " ") {
      error = true;
      $(msg).addClass("errorForm");
    }

    if (error === true) {
      return false;
    }

    var data_string = $('.contact-form form').serialize();

    $.ajax({
      type: "POST",
      url: $('.contact-form form').attr('action'),
      data: data_string,

      sucess: function (message) {
        if (message === 'SENDING') {
          $('.msg_sucess').fadeIn('slow');
        } else {
          $('.msg_error').fadeIn('slow');
        }
      }
    });
    return false;
  });
});