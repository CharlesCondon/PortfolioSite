// functions to validate contact form
// due to transition JavaScript this program
// only works if contact page is refreshed
$(document).ready(function() {
  $("#contactForm").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true
      }
    },
    submitHandler: function(form) {
      form.submit();
    },
    highlight: function(element) {
      $(element)
        .closest(".req")
        .addClass("inputError");
    },
    unhighlight: function(element) {
      $(element)
        .closest(".req")
        .removeClass("inputError");
    }
  });
});
