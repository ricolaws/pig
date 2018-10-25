// var game = {
//   currentPlayer: player1,
//   otherPlayer: player2,
//   resetGame: function() {
//     totalScore1 = 0;
//     totalScore2 = 0;
//   }
// };
//
// function switchPlayer() {
//   if (currentPlayer === player1) {
//     currentPlayer = player2
//     otherPlayer = player1
//   }
//   else {
//     currentPlayer = player1
//     otherPlayer = player2
//   }
// };

var player1 = {
  name: "Player 1",
  score: totalScore1,
  turn: true
};

var player2 = {
  name: "Player 2",
  score: totalScore2,
  turn: false
};

var turnScore1 = [];
var totalScore1 = [];
var turnScore2 = [];
var totalScore2 = [];
// var x = "";
function rndNumber() {
  return Math.floor(Math.random() * 6) + 1;
};

function add(a, b) {
    return a + b;
};

function roll1() {
  if (x === 1) {
    console.log("end turn");
    $("#d1").show();
    $("#roll1").addClass("btn-no-dice");
    $("#end1").addClass("btn-no-dice");
    $("#roll2").removeClass("btn-no-dice");
    $("#end2").removeClass("btn-no-dice");
    turnScore1 = [0];
  }
  else if (x === 2) {
    $("#d2").show();
    turnScore1.push(x);
  }
  else if (x === 3) {
    $("#d3").show();
    turnScore1.push(x);
  }
  else if (x === 4) {
    $("#d4").show();
    turnScore1.push(x);
  }
  else if (x === 5) {
    $("#d5").show();
    turnScore1.push(x);
  }
  else if (x === 6) {
    $("#d6").show();
    turnScore1.push(x);
  }
};

function roll2() {
  if (x === 1) {
    console.log("end turn");
    $("#d1").show();
    $("#roll2").addClass("btn-no-dice");
    $("#end2").addClass("btn-no-dice");
    $("#roll1").removeClass("btn-no-dice");
    $("#end1").removeClass("btn-no-dice");
    turnScore2 = [0];
  }
  else if (x === 2) {
    $("#d2").show();
    turnScore2.push(x);
  }
  else if (x === 3) {
    $("#d3").show();
    turnScore2.push(x);
  }
  else if (x === 4) {
    $("#d4").show();
    turnScore2.push(x);
  }
  else if (x === 5) {
    $("#d5").show();
    turnScore2.push(x);
  }
  else if (x === 6) {
    $("#d6").show();
    turnScore2.push(x);
  }
};

// User Interface
$(document).ready(function() {
  $("form#player1Roll").submit(function(event) {
    event.preventDefault();
    x = rndNumber();
    $("#d1").hide();
    $("#d2").hide();
    $("#d3").hide();
    $("#d4").hide();
    $("#d5").hide();
    $("#d6").hide();
    roll1();
    // $("#dice").text(x);
    $("#player1-score-keeper").text(turnScore1.reduce(add, 0));


    console.log(turnScore1.reduce(add, 0));
  });
  $("form#player1End").submit(function(event) {
    event.preventDefault();
    totalScore1.push(turnScore1.reduce(add, 0));
    var newScore = totalScore1.reduce(add, 0);
    $("#player1-total-score").text(totalScore1.reduce(add, 0));
    $("#roll1").addClass("btn-no-dice");
    $("#end1").addClass("btn-no-dice");
    $("#roll2").removeClass("btn-no-dice");
    $("#end2").removeClass("btn-no-dice");
    if (newScore > 50) {
      alert("PLAYER 1 WINS");
    }
    turnScore1 = [0];
  });
  $("form#player2Roll").submit(function(event) {
    event.preventDefault();
    x = rndNumber();
    $("#d1").hide();
    $("#d2").hide();
    $("#d3").hide();
    $("#d4").hide();
    $("#d5").hide();
    $("#d6").hide();
    roll2();
    // $("#dice").text(x);
    $("#player2-score-keeper").text(turnScore2.reduce(add, 0));


    console.log(turnScore2.reduce(add, 0));
  });
  $("form#player2End").submit(function(event) {
    event.preventDefault();
    totalScore2.push(turnScore2.reduce(add, 0));
    var newScore = totalScore2.reduce(add, 0);
    $("#player2-total-score").text(totalScore2.reduce(add, 0));
    $("#roll2").addClass("btn-no-dice");
    $("#end2").addClass("btn-no-dice");
    $("#roll1").removeClass("btn-no-dice");
    $("#end1").removeClass("btn-no-dice");
    if (newScore > 50) {
      console.log("win");
    }
    turnScore2 = [0];
  });
});
