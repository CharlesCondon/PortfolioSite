/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

$(document).ready(function() {
  $("#contactForm").validate({
    rules: {
      name: {
        required: true,
        lettersonly: true
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
