//gets the offset position of the date and the top of the window
var dateFromTop = $("#subDate").offset().top;
//when the offset is greater than the window scroll above, it becomes sticky
$(window).scroll(function() {
  $("#subDate").toggleClass('sticky', $(window).scrollTop() > dateFromTop);
});
//when the position from the top of the window to where the user is currently
//is greater than the position of the element, the year changes
var fact1FromTop = $("#fact1").offset().top;
var fact1 = $("#fact1").position().top;
var top = $(window).scrollTop();

$(window).scroll(function() {
  if ($(window).scrollTop() > $("#fact2").position().top) {
    $("#subDate").text(1914);
  }

  else {
      $("#subDate").text(1912);
  }
});
