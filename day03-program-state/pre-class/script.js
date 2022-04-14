var introScopeMain = function (input) {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var rollDice = function () {
    // produces a decimal between 0 and 6
    var randomDecimal = Math.random() * 6;

    // take off the decimal
    var randomInteger = Math.floor(randomDecimal);

    // it's a number from 0 - 5 ... add 1
    var diceNumber = randomInteger + 1;

    return diceNumber;
  };
  var randomDiceNumber = rollDice();

  var myOutputValue = "you lose";

  if (randomDiceNumber == input) {
    myOutputValue = "you win";
  }
  return myOutputValue;
};

var prevRoll = 0;
var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.

  var rollDice = function () {
    // produces a decimal between 0 and 6
    var randomDecimal = Math.random() * 6;
    // take off the decimal
    var randomInteger = Math.floor(randomDecimal);
    // it's a number from 0 - 5 ... add 1
    var diceNumber = randomInteger + 1;
    return diceNumber;
  };

  var randomDiceNumber = rollDice();
  console.log(randomDiceNumber);

  var myOutputValue = ``;

  if (prevRoll == 0) {
    myOutputValue = `This is the first roll.`;
  } else if (randomDiceNumber == input) {
    myOutputValue = `Your previous roll is ${prevRoll}. You guessed ${input}, you win!`;
  } else {
    myOutputValue = `Your previous roll is ${prevRoll}. You guessed ${input} but the roll was a ${randomDiceNumber}. You lose.`;
  }
  prevRoll = randomDiceNumber;
  return myOutputValue;
};

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
