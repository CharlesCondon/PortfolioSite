/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

$(function() {
  $("input[class=req]").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      }
    },
    highlight: function(input, errorClass) {
      $(input).fadeOut(function() {
        $(input).fadeIn();
      });
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});
