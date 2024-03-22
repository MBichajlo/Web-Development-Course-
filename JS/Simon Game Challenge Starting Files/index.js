var sequence = [];
var playerSequence = [];

var gameIsOn = false;
var currentLevel = 0;
var j = 0;

$(document).keydown(function (event) {
  if (event.key === "a") {
    gameIsOn = true;
    createSequence(20);
    nextLevel();
  }
});

$(".btn").on("click", function (event) {
  if (gameIsOn) {
    playerSequence.push($(event.target).attr("id"));
    if (j === currentLevel - 1 && playerSequence[j] === sequence[j]) {
      playElement($(event.target).attr("id"));
      nextLevel();
      return;
    }
    if (playerSequence[j] === sequence[j]) {
      playElement($(event.target).attr("id"));
      j++;
      return;
    } else {
      gameOver();
      reset();

      return;
    }
  }
});

function playElement(name) {
  audio = new Audio("./sounds/" + name + ".mp3");

  audio.play();
  $("#" + name).addClass("pressed");
  setTimeout(function () {
    $("#" + name).removeClass("pressed");
  }, 200);
}
function reset() {
  sequence = [];
  playerSequence = [];
  currentLevel = 0;
  gameIsOn = false;
  $("#level-title").text("Press A Key to Start");
}

function nextLevel() {
  currentLevel++;
  $("#level-title").text("Level " + currentLevel);
  playerSequence = [];
  j = 0;
  setTimeout(function () {
    playElement(sequence[currentLevel - 1]);
  }, 1000);
}

function createSequence(n) {
  var rng = 0;
  for (var i = 0; i < n; i++) {
    rng = Math.floor(Math.random() * 4 + 1);
    switch (rng) {
      case 1:
        sequence.push("green");
        break;
      case 2:
        sequence.push("red");
        break;
      case 3:
        sequence.push("yellow");
        break;
      case 4:
        sequence.push("blue");
        break;
      default:
        sequence.push("error");
        break;
    }
  }
}

function gameOver() {
  audio = new Audio("./sounds/wrong.mp3");
  $(".btn").addClass("game-over");
  setTimeout(function () {
    $(".btn").removeClass("game-over");
  }, 300);
}
