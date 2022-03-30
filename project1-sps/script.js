/* 
Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", 
the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
*/

// User input scissors, paper, or stone.
// Computer outputs scissors, paper, or stone at random.
// Assign scissors, paper, stone to a value respectively.
// Randomize the output given by the computer by creating a helper function with Math.random

var generateRandomInteger = function (max) {
  var randomInteger = Math.floor(Math.random() * max + 1);
  return randomInteger;
};

var generatePssRandom = function () {
  var numberOfSigns = 3;
  var randomSignByComputer = generateRandomInteger(numberOfSigns);
  console.log(`Computer generated sign is ${randomSignByComputer}`);
  if (randomSignByComputer == 1) {
    return `scissors`;
  }
  if (randomSignByComputer == 2) {
    return `paper`;
  }
  if (randomSignByComputer == 3) {
    return `stone`;
  }
};

var main = function (signByHuman, computerGeneratedPss) {
  // Predefine Function
  var signByHuman = signByHuman.toLowerCase();

  // User input Validation
  if (
    signByHuman != `scissors` &&
    signByHuman != `paper` &&
    signByHuman != `stone`
  ) {
    return `Please enter scissors, paper, or stone only.`;
  }
  // Computer generated Scissors Paper Stone
  var computerGeneratedPss = generatePssRandom();
  console.log(`Computer generated sign is ${computerGeneratedPss}`);
  var genericOutput = `You have chosen ${signByHuman}. Bot Lewis picked ${computerGeneratedPss}.`;

  // Human wins Bot Computer Scenario
  if (
    signByHuman == "scissors" &&
    computerGeneratedPss == "paper" &&
    signByHuman == "paper" &&
    computerGeneratedPss == "stone" &&
    signByHuman == "stone" &&
    computerGeneratedPss == "scissors"
  ) {
    genericOutput += ` You have won!`;
  }
  // Human Draws Against Bot Computer Scenario
  else if (signByHuman == computerGeneratedPss) {
    genericOutput += ` This match ends in a draw!`;
  }
  // Human Loses Against Bot Computer Default Output
  else {
    genericOutput += ` You have lost! Try again next time...`;
  }
  return genericOutput;
};
