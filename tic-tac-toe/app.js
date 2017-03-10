
var turn = 0;
var user = "X";
var compCount = 0;
var userCount = 0;
var comp = "O";
var $1 = $("#_1");
var $2 = $("#_2");
var $3 = $("#_3");
var $4 = $("#_4");
var $5 = $("#_5");
var $6 = $("#_6");
var $7 = $("#_7");
var $8 = $("#_8");
var $9 = $("#_9");
var numbers = [$1, $2, $3, $4, $5, $6, $7, $8, $9];
var status = "play";
var pickStatus = 0;
//for picking X or O
$("#exSelect").hide();
$("#ohSelect").hide();
$("#container").hide()

  $("#ex").on("click", function() {
    if (pickStatus === 0) {
      $("#ex").hide();
      $("#exSelect").show();
      user = "X";
      comp = "O";
      $("#select").css("visibility", "hidden");
      pickStatus = 1;
      $("#container").fadeIn("slow");
    }
  });


  $("#oh").on("click", function() {
    if (pickStatus === 0) {
      $("#oh").hide();
      $("#ohSelect").show();
      user = "O";
      comp = "X"
      $("#select").css("visibility", "hidden");
      pickStatus = 1;
      $("#container").fadeIn("slow");
    }
  });


//COMPUTER click function
function compTurn(tile) {
    tile.text(comp).addClass("taken");
    empty();
}
//function to determine winn of comp
function compWin() {
  window.setTimeout(function() {
    determinWin(comp, "YOU LOSE");
  }, 1000);
}
//function to determine winn of user
function userWin() {
  window.setTimeout(function() {
    determinWin(user, "YOU WIN");
  }, 1000);
}
//USER click function
  $(".boxes").on("click", function() {
    //for when the user clicks
    if ( $(this).hasClass("taken") == false && (compCount == userCount) ) {
      $(this).text(user).addClass("taken");
      userCount++;
      empty();
    }

    /**function to pick where the computer will play**/
    window.setTimeout(function() {
      compPlay();
    }, 1000);

    userWin();
    //function to determin which squares have not been used
    empty();
    //function to determine winn of user

  });//end of boxes on click function

/*********THIS IS THE FUNCTION TO ADD DIFFERENT VARIABLES TO**********/
function compPlay() {
  if (compCount == 0) {
    one();
  }
  else if (compCount >= 1) {
    two();
  }

}//end of PLAY function

//function for first move
function one() {
  if ($5.text() !== user && $5.hasClass("taken") === false && compCount < userCount) {
    compTurn($5);
    compCount++;
    compWin();
  }
  else if  ($5.text() === user && $1.hasClass("taken") === false && compCount < userCount) {
    compTurn($1);
    compCount++;
    compWin();
  }
}
//function for second move
function two() {
  //OFFENSIVE strategies; these are situations where you can win, so it doesn't matter the user's position
  if ($1.text() == comp && $3.text() == comp && $2.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($2);
    compCount++;
    compWin();
  }
  else if ($3.text() == comp && $7.text() == comp && $5.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($5);
    compCount++;
    compWin();
  }
  else if ($3.text() == comp && $2.text() == comp && $1.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($1);
    compCount++;
    compWin();
  }
  else if ($3.text() == comp && $6.text() == comp && $9.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($9);
    compCount++;
    compWin();
  }
  else if ($3.text() == comp && $9.text() == comp && $6.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($6);
    compCount++;
    compWin();
  }
  else if ($4.text() == comp && $7.text() == comp && $1.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($1);
    compCount++;
    compWin();
  }
  else if ($4.text() == comp && $7.text() == comp && $1.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($1);
    compCount++;
    compWin();
  }
  else if ($4.text() == comp && $5.text() == comp && $6.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($6);
    compCount++;
    compWin();
  }
  else if ($5.text() == comp && $2.text() == comp && $8.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($8);
    compCount++;
    compWin();
  }
  else if ($5.text() == comp && $7.text() == comp && $8.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($8);
    compCount++;
    compWin();
  }
  else if ($5.text() == comp && $6.text() == comp && $4.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($4);
    compCount++;
    compWin();
  }
  else if ($5.text() == comp && $8.text() == comp && $2.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($2);
    compCount++;
    compWin();
  }
  else if ($5.text() == comp && $9.text() == comp && $1.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($1);
    compCount++;
    compWin();
  }
  else if ($6.text() == comp && $9.text() == comp && $3.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($3);
    compCount++;
  }
  else if ($8.text() == comp && $9.text() == comp && $7.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($7);
    compCount++;
    compWin();
  }
  //DEFENSIVE strategies, these are situations where you need to stop the user from winning
  else if ($1.text() == user && $2.text() == user && $3.hasClass("taken") === false && compCount < userCount && status === 1) {
    compTurn($3);
    compCount++;
    compWin();
  }
  else if ($1.text() == user && $7.text() == user && $4.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($4);
    compCount++;
    compWin();
  }
  else if ($1.text() == user && $4.text() == user && $7.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($7);
    compCount++;
    compWin();
  }
  else if ($1.text() == user && $3.text() == user && $2.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($2);
    compCount++;
    compWin();
  }
  else if ($3.text() == user && $7.text() == user && $5.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($5);
    compCount++;
    compWin();
  }
  else if ($3.text() == user && $2.text() == user && $1.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($1);
    compCount++;
    compWin();
  }
  else if ($3.text() == user && $6.text() == user && $9.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($9);
    compCount++;
    compWin();
  }
  else if ($3.text() == user && $9.text() == user && $6.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($6);
    compCount++;
    compWin();
  }
  else if ($4.text() == user && $7.text() == user && $1.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($1);
    compCount++;
    compWin();
  }
  else if ($4.text() == user && $7.text() == user && $1.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($1);
    compCount++;
    compWin();
  }
  else if ($4.text() == user && $5.text() == user && $6.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($6);
    compCount++;
    compWin();
  }
  else if ($5.text() == user && $2.text() == user && $8.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($8);
    compCount++;
    compWin();
  }
  else if ($5.text() == user && $7.text() == user && $8.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($3);
    compCount++;
    compWin();
  }
  else if ($5.text() == user && $6.text() == user && $4.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($4);
    compCount++;
    compWin();
  }
  else if ($5.text() == user && $8.text() == user && $2.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($2);
    compCount++;
    compWin();
  }
  else if ($5.text() == user && $9.text() == user && $1.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($1);
    compCount++;
    compWin();
  }
  else if ($6.text() == user && $9.text() == user && $3.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($3);
    compCount++;
  }
  else if ($7.text() == user && $8.text() == user && $9.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($9);
    compCount++;
    compWin();
  }
  else if ($8.text() == user && $9.text() == user && $7.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($7);
    compCount++;
    compWin();
  }

  //offensive part 2: if both corners are taken, go in one of the middle squares
  else if ($1.text() == user && $9.text() == user && $2.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($2);
    compCount++;
    compWin();
  }
  else if ($1.text() == user && $9.text() == user && $4.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($4);
    compCount++;
    compWin();
  }
  else if ($1.text() == user && $9.text() == user && $6.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($6);
    compCount++;
    compWin();
  }
  else if ($1.text() == user && $9.text() == user && $8.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($8);
    compCount++;
    compWin();
  }
  //*other corners*
  else if ($3.text() == user && $7.text() == user && $2.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($2);
    compCount++;
    compWin();
  }
  else if ($3.text() == user && $7.text() == user && $4.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($4);
    compCount++;
    compWin();
  }
  else if ($3.text() == user && $7.text() == user && $6.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($6);
    compCount++;
    compWin();
  }
  else if ($3.text() == user && $7.text() == user && $8.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($8);
    compCount++;
    compWin();
  }
  else if ($1.text() == user && $9.text() == user && $5.hasClass("taken") === false && compCount < userCount && status === "play") {
    compTurn($5);
    compCount++;
    compWin();
  }
  //"other": when you are neither in the position where you need to stop the user or win
  else if (status === "play"){
    var rand = Math.floor(Math.random() * emptyNumbers.length);
    compTurn(emptyNumbers[rand]);
    compCount++;
    compWin();
  }
}
var emptyNumbers;
//function for creating array of numbers that has not been used
function empty() {
  nums = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i].hasClass("taken") == false) {
      nums.push(numbers[i]);
    }
    emptyNumbers = nums;
  }
}
/*********FUNCTIONS FOR SHOWING PLAY AGAIN WINDOW****************/
$("#playAgainTie").hide();

function determinWin(player, message) {
  //across
  if ($1.text() === player && $2.text() === player && $3.text() === player && status === "play") {
    alert(message);
    status = "quit";
  }
  if ($4.text() === player && $5.text() === player && $6.text() === player && status === "play") {
    alert(message);
    status = "quit";
  }
  if ($7.text() === player && $8.text()=== player && $9.text() === player && status === "play") {
    alert(message);
    status = "quit";
  }
  //up/down
  if ($1.text() === player && $4.text() === player && $7.text() === player && status === "play") {
    alert(message);
    status = "quit";
  }
  if ($2.text() === player && $5.text() === player && $8.text() === player && status === "play" ) {
    alert(message);
    status = "quit";
  }
  if ($3.text() === player && $6.text() === player && $9.text() === player && status === "play") {
    alert(message);
    status = "quit";
  }
  //diagonal
  if ($1.text() === player && $5.text() === player && $9.text() === player && status === "play") {
    alert(message);
    status = "quit";
  }
  if ($3.text() === player && $5.text() === player && $7.text() === player && status === "play") {
    alert(message);
    status = "quit";
  }
  //TIE
  if (emptyNumbers.length === 0 && status !== "quit") {
    status = "quit";
    $("#playAgainTie").show();
  }
}

$('#tieButton').click(function() {
    location.reload();
});
//function to clear out cells
/*
function clearCells() {
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].html = " ";
  }
}
*/
