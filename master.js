// functions to create smooth webpage transitions
// (due to nature of this function, some effects and 
// javascript functions may not work on other pages unless
// they are manually refreshed)
$(document).ready(function() {
  $("nav a").on("click", function(event) {
    event.preventDefault();

    const href = $(this).attr("href");

    window.history.pushState(null, null, href);

    $.ajax({
      url: href,
      success: function(data) {
        $("main").fadeOut(400, function() {
          const newPage = $(data)
            .filter("main")
            .html();

          $("main").html(newPage);

          $("main").fadeIn(400);
          
          /*
          if (window.location.pathname == '/art.html') {
            setTimeout("location.reload(true);", 250);
          }*/
        });
      }
    });
  });
});
