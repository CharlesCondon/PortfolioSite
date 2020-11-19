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
    highlight: function(element, errorClass) {
      $(element).fadeOut(function() {
        $(element).fadeIn();
      });
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});
