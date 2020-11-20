$(document).ready(function() {
  $(".burn").hover(function() {
    $(this).removeClass("burn");
    $(this).css("opacity", "1");
  }, function(){
    $(this).addClass("burn");
  });
});
