var introScopeMain = function (input) {
  // global scope
  var globalVariable = 0;

  // also global scope
  var scopeIntroMain = function (input) {
    // function scope
    console.log(`globalVariable has a value of ${globalVariable}`);
    // we can manipulate the value of a global varaible
    // without having to re-declare using the var keyword:
    globalVariable += 1;
    console.log(`globalVariable now has a value of ${globalVariable}`);
    var myOutputValue;
    if (globalVariable % 2 == 0) {
      // block scope
      // we can access both myOutputValue and globalVariable within block scope
      myOutputValue = `Global variable is even, with a value of ${globalVariable}`;
    } else {
      myOutputValue = `Global variable is odd, with a value of ${globalVariable}`;
    }
    return myOutputValue;
  };
};

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();
  console.log("Rolled dice number : " + randomDiceNumber);
  var myOutputValue = "you rolled a " + randomDiceNumber + ", you lose";

  if (randomDiceNumber == input) {
    myOutputValue = "you rolled a " + randomDiceNumber + ", you win!";
  }

  return myOutputValue;
};

var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.

  // roll a dice
  var randomDiceNumber = rollDice();
  console.log("Rolled dice number : " + input);
  var myOutputValue =
    "You guessed a " +
    input +
    ", but you rolled a " +
    randomDiceNumber +
    ", so you lose";

  if (randomDiceNumber == input) {
    myOutputValue =
      "You guessed a " +
      input +
      ", but you rolled a " +
      randomDiceNumber +
      ", so you win!";
  }

  return myOutputValue;
};

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 5;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;
  console.log("dice number : " + diceNumber);
  return diceNumber;
};

// create variable to store count for wins
var numberOfWins = 0;
// create variable to store count for loss
var numberOfLosses = 0;
// calculate percentage
var winPercentage = function () {
  var myOutputValue =
    (numberOfWins / (numberOfWins + numberOfLosses)) * 100 + "%";
  return myOutputValue;
};

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.

  // roll a dice
  var randomDiceNumber = rollDice();
  console.log("Rolled dice number : " + randomDiceNumber);

  var myOutputValue = "";

  if (randomDiceNumber == input) {
    // add 1 for every new win
    numberOfWins = numberOfWins + 1;
    console.log("Number of wins :" + numberOfWins);
    myOutputValue =
      " Your win percentage is : " +
      winPercentage() +
      ". You guessed a " +
      input +
      ", but you rolled a " +
      randomDiceNumber +
      ", so you win!";
  }

  if (randomDiceNumber != input) {
    // add 1 for every new loss
    numberOfLosses = numberOfLosses + 1;
    console.log("Number of losses :" + numberOfLosses);

    myOutputValue =
      " Your win percentage is : " +
      winPercentage() +
      ". You guessed a " +
      input +
      ", but you rolled a " +
      randomDiceNumber +
      ", so you lose";
  }

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
