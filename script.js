/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

$(function() {
  $("form[id=contactForm]").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
    },
    submitHandler: function(form) {
      form.submit();
    },
    highlight: function(input[class=req], errorClass) {
      $(element).fadeOut(function() {
        $(element).fadeIn();
      });
    },
  });
});
