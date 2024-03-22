var sequence = [];
var gameIsOn = false;
currentLevel = 1;

$(document).keydown(function (event) {
  if (event.key === "a") {
    gameIsOn = true;
    createSequence(20);
    nextLevel();
  }
});

$(".btn").on("click", function (event) {
  playElement($(event.target).attr("id"));
});

function playElement(name) {
  audio = new Audio("./sounds/" + name + ".mp3");

  audio.play();
  $("#" + name).addClass("pressed");
  setTimeout(function () {
    $("#" + name).removeClass("pressed");
  }, 200);
}

function nextLevel() {
  $("#level-title").text("Level " + currentLevel);

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
