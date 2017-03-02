var dateFromTop = $("#date").offset().top;

//to get date to stick after scrolling past the header
$(window).scroll(function() {
  //added 5 because when date becomes "fixed", it is ignored by other elements
  $("#dateSection").toggleClass('stick', $(window).scrollTop() +2>  dateFromTop);
  $(".facts").toggleClass('factMargin', $(window).scrollTop() +2> dateFromTop);
  //$("#left").toggleClass('stop', $("#date").offset().top > $("#fact9Para").position().top);
});

$(window).scroll(function() {
  var timelinePos = $(window).scrollTop();
  var fact2 = $(".fact2").position().top;
  var fact3 = $(".fact3").position().top;
  var fact4 = $(".fact4").position().top;
  var fact5 = $(".fact5").position().top;
  var fact6 = $(".fact6").position().top;
  var fact7 = $(".fact7").position().top;
  var fact8 = $(".fact8").position().top;
  var fact9 = $(".fact9").position().top;

  if (timelinePos > fact2 - 50 && timelinePos < fact3) {
    $("#date").text("1927");
  }
  else if (timelinePos > fact3 && timelinePos < fact4) {
    $("#date").text(1934);
  }
  else if (timelinePos > fact4 && timelinePos < fact5) {
    $("#date").text(1938);
  }
  else if (timelinePos > fact5 && timelinePos < fact6) {
    $("#date").text(1939);
  }
  else if (timelinePos > fact6 && timelinePos < fact7) {
    $("#date").text(1946);
  }
  else if (timelinePos > fact7 && timelinePos < fact8) {
    $("#date").text(1950);
  }
  else if (timelinePos > fact8 && timelinePos < fact9) {
    $("#date").text(1952);
  }
  else if (timelinePos > fact9) {
    $("#date").text(1954);
  }
  else {
    $("#date").text(1912);
  }
})
