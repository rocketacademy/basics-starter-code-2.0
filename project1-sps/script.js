/* What is the input going to be?

User input either scissors paper or stone

// What should the output be?
user win or lose compared to computer selection
// How will the computer's option be randomly generated?

// How many different cases are there?
User input > computer random generate > check if the input matches or win or lose 
> return message to user win or lose or tie
*/

//

// initial bankRoll state
var roundsWon = 0;

// Global Variables Rock, Paper, Scissors
var stone = 1;
var paper = 2;
var scissors = 3;

var generatingComputerChoice = function () {
  var computerChoiceInt = Math.floor(Math.random() * 3) + 1;
  return computerChoiceInt;
};

var convertRandomGenerateToString = function (randomGenerate) {
  if (randomGenerate === 1) {
    return "stone";
  } else if (randomGenerate === 2) {
    return "paper";
  } else return "scissors";
};

var main = function (input) {
  //console.log(input);
  if (input !== "scissors" && input !== "paper" && input !== "stone") {
    let errorMsg = "Hi, you have not input either scissors, paper or stone.";
    return errorMsg;
  }

  var inputString = input;
  if (input === "scissors") input = scissors;
  else if (input === "paper") input = paper;
  else input = stone;

  var randomGenerate = generatingComputerChoice();
  var randomGenerateString = convertRandomGenerateToString(randomGenerate);
  if (input === randomGenerate) {
    return "Its a draw!";
  } else if (
    (input === stone && randomGenerate === scissors) ||
    (input === paper && randomGenerate === stone) ||
    (input === scissors && randomGenerate === paper)
  ) {
    roundsWon = roundsWon + 1;
    let winMsg =
      "You won!, You selected " +
      inputString +
      " and your opponent selected " +
      randomGenerateString +
      ". Current rounds won: " +
      roundsWon;
    return winMsg;
  }
  var lossMsg =
    "You lose!, You selected " +
    inputString +
    " and your opponent selected " +
    randomGenerateString +
    ". Current rounds won: " +
    roundsWon;
  return lossMsg;
};
