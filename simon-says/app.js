//to return a random number one thru four
var rand;
var compPattern = [];
var userPattern = [];
var sequence;
var $green = $("#green");
var $red = $("#red");
var $yellow = $("#yellow");
var $blue = $("#blue");

var $greenB = $("#greenBold");
var $redB = $("#redBold");
var $yellowB = $("#yellowBold");
var $blueB = $("#blueBold");

var seq = 0;
var click = 0;
var round = 1;
var strict = false;

var greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

$("#restart").hide();
$("#message").hide();
$("#restart").on("click", function() {
  startAgain();
});
$("#strict").on("click", function() {
  if (strict === true) {
    strict = false;
  }
  else if (strict === false) {
    strict = true;
  }
});
function wrongMove() {
  if (strict === true) {
    startAgain();
  }
  else if (strict === false) {
    playSeq();
  }
}

function startAgain() {
  setTimeout(function() {
    compPattern = [];
    round = 0;
    compTurn();
  }, 1000);
}


//to get the comp to light up a random number
function compTurn() {
      rand = Math.floor((Math.random() * 4) + 1);
      $("#roundNum").text(round);
      if (rand === 1) {
        compPattern.push($green);
        seq++;

      }
      else if (rand === 2) {
        compPattern.push($red);
        seq++;
      }
      else if (rand === 3) {
        compPattern.push($yellow);
        seq++
      }
      else if (rand === 4) {
        compPattern.push($blue);
        seq++;
      }
      click = 0;

      offset = 0;


      playSeq();


}//compTurn end

function setColor(x) {
  x.addClass("bolder");
  x.delay(700).queue(function() {
    $(this).removeClass("bolder").dequeue();
  });
}
var t = 0;


function playSeq() {
  compPattern.forEach(function(el) {

      //each element goes at the same time, to prevent this, each element is offset accordingly
      setTimeout(function(){
        setColor(el);
        if (el === $green) {
          greenSound.play();
          t++;
        }
        else if (el === $red) {
          redSound.play();
          t++;
        }
        else if (el === $yellow) {
          yellowSound.play();
          t++;
        }
        else if (el === $blue) {
          blueSound.play();
          t++;
        }
        if (t === compPattern.length) {

        }

      }, 1000 + offset);
      offset += 1000;

  });

  offset = 0;

}

$("#start").on("click", function() {
  $(this).hide();
  $("#restart").show();
  compTurn();

});

    $(".sq").on("click",function() {


      $(this).addClass("bolder");
      $(this).delay(300).queue(function() {
        $(this).removeClass("bolder").dequeue();
      });
        if ($(this).context.id === "green") {
          userPattern.push($green);
          if (compPattern[click] === $green) {
            greenSound.play();
            click++;
          } else {
            $("#message").fadeIn("slow");
            $("#message").delay(500).fadeOut("slow");
            playSeq();
          }
        }
        else if ($(this).context.id === "red") {
          userPattern.push($red);
          if (compPattern[click] === $red) {
            redSound.play();
            click++;
          } else {
            $("#message").fadeIn("slow");
            $("#message").delay(500).fadeOut("slow");
            playSeq();
          }
        }
        else if ($(this).context.id === "yellow") {
          userPattern.push($yellow);
          if (compPattern[click] === $yellow) {
            yellowSound.play();
            click++;
          } else {
            $("#message").fadeIn("slow");
            $("#message").delay(500).fadeOut("slow");
            playSeq();
          }
        }
        else if ($(this).context.id === "blue") {
          userPattern.push($blue);
          if (compPattern[click] === $blue) {
            blueSound.play();
            click++;
          } else {
            $("#message").fadeIn("slow");
            $("#message").delay(500).fadeOut("slow");
            playSeq();
          }
        }
        if (click === compPattern.length) {
          round++;
          compTurn();
        }

  });//squares click end



/****************************************************/
