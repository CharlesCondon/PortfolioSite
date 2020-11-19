/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

$(document).ready( function() {
  $("form[name='contactForm']").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      }
    },    submitHandler: function(form) {
      form.submit();
    }
  });
});
 