var moveGenerated = "";
var Scissors = "Scissors";
var Paper = "Paper";
var Stone = "Stone";

var moveGenerator = function () {
  // produces a word between "banana", "chisel", and "faucet".
  var randomMove = Math.random() * 3;
  var randomMoveInteger = Math.floor(randomMove);
  var moveGeneratedInteger = randomMoveInteger + 1;
  console.log("Integer generated" + moveGeneratedInteger);

  // assign number to word
  if (moveGeneratedInteger == 1) {
    moveGenerated = "Scissors";
  }

  if (moveGeneratedInteger == 2) {
    moveGenerated = "Paper";
  }

  if (moveGeneratedInteger == 3) {
    moveGenerated = "Stone";
  }
  // print move generated
  console.log("your opponent will play: " + moveGenerated);
  return moveGenerated;
};

var main = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  console.log("you are going to play : " + input);

  var opponentMove = moveGenerator();
  console.log("The opponent is going to play : " + opponentMove);

  // set default to blank
  var myOutputValue = "";

  // if: input = opponentMove, then draw
  if (opponentMove == input) {
    console.log("OpponentMove : " + opponentMove);
    console.log("Your Move : " + input);
    myOutputValue =
      "You played " +
      input +
      ", and your opponent played " +
      opponentMove +
      ", so you draw!" +
      "<br><br>" +
      "Play again.";
  }
  // if: input != opponentMove then conditions

  // Lose Conditions
  if (
    (input == Scissors && moveGenerated == Stone) ||
    (input == Paper && moveGenerated == Scissors) ||
    (input == Stone && moveGenerated == Paper)
  ) {
    console.log("OpponentMove : " + opponentMove);
    console.log("Your Move : " + input);
    myOutputValue =
      "You played " +
      input +
      ", and your opponent played " +
      opponentMove +
      ", so you lose!" +
      "<br><br>" +
      "Try harder..";
  }

  // else if Win condiitons
  else if (input != moveGenerated) {
    console.log("OpponentMove : " + opponentMove);
    console.log("Your Move : " + input);
    myOutputValue =
      "You played " +
      input +
      ", and your opponent played " +
      opponentMove +
      ", so you win!";
  }

  return myOutputValue;
};
