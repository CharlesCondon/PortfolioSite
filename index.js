// prints "hi" in the browser's dev tools console
console.log("Welcome to my page!");

// functions to make interactive flame
// (does not work if homepage is left and then returned 
// to unless user refreshes page)
$(document).ready(function() {
  $(".burn").hover(
    function() {
      $(this).removeClass("burn");
      $(this).css("opacity", "1");
    },
    function() {
      $(this).addClass("burn");
    }
  );
});
