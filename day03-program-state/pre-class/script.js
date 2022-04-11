// Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
var globalVariable = 0;
var introScopeMain = function (input) {
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

var appSetupMain = function (input) {
  var randomDiceNumber = rollDice();

  var myOutputValue = "you lose";

  if (randomDiceNumber == input) {
    myOutputValue = "you win";
  }
  return myOutputValue;
};

// Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.

var lastRollMain = function (input) {
  //

  var myOutputValue = "hello world";
  return myOutputValue;
};

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
// define base dice roll function
var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

// define basic variables
var numberONE = 0;
var numberTWO = 0;
var numberTHREE = 0;
var numberFOUR = 0;
var numberFIVE = 0;
var numberSIX = 0;

var TOTAL_ROLL_NUMBER = 0;
var myOutputValue = "hello world";

var mostRolledMain = function (input) {
  var rolledNumber = rollDice();
  // if this is the first roll, return rolled dice number & record the number rolled
  if (TOTAL_ROLL_NUMBER == 0) {
    myOutputValue =
      "This is your first roll. You rolled " + rolledNumber + ". ";
    console.log("you rolled number " + rolledNumber);
  }
  // if this is not the first roll, return rolled dice number
  else {
    myOutputValue = "You rolled " + rolledNumber + ". ";
  }

  // record a log for each number

  if (rolledNumber == 1) {
    numberONE = numberONE + 1;
  }
  if (rolledNumber == 2) {
    numberTWO = numberTWO += 1;
  }
  if (rolledNumber == 3) {
    numberTHREE = numberTHREE + 1;
  }
  if (rolledNumber == 4) {
    numberFOUR = numberFOUR + 1;
  }
  if (rolledNumber == 5) {
    numberFIVE = numberFIVE + 1;
  }
  if (rolledNumber == 6) {
    numberSIX = numberSIX + 1;
  }
  console.log(
    "Number One = " +
      numberONE +
      "." +
      " NUMBER TWO = " +
      numberTWO +
      "." +
      " Number Three = " +
      numberTHREE +
      "." +
      " Number Four = " +
      numberFOUR +
      "." +
      " Number Five = " +
      numberFIVE +
      "." +
      " Number Six = " +
      numberSIX +
      "."
  );

  // compare the number of each number has rolled and return the most rolled.
  if (
    numberONE > numberTWO &&
    numberONE > numberTHREE &&
    numberONE > numberFOUR &&
    numberONE > numberFIVE &&
    numberONE > numberSIX
  ) {
    myOutputValue += "The number you roll the most is 1. ";
  } else if (
    numberTWO > numberONE &&
    numberTWO > numberTHREE &&
    numberTWO > numberFOUR &&
    numberTWO > numberFIVE &&
    numberTWO > numberSIX
  ) {
    myOutputValue += "The number you roll the most is 2. ";
  } else if (
    numberTHREE > numberONE &&
    numberTHREE > numberTWO &&
    numberTHREE > numberFOUR &&
    numberTHREE > numberFIVE &&
    numberTHREE > numberSIX
  ) {
    myOutputValue += "The number you roll the most is 3. ";
  } else if (
    numberFOUR > numberONE &&
    numberFOUR > numberTWO &&
    numberFOUR > numberTHREE &&
    numberFOUR > numberFIVE &&
    numberFOUR > numberSIX
  ) {
    myOutputValue += "The number you roll the most is 4. ";
  } else if (
    numberFIVE > numberONE &&
    numberFIVE > numberTWO &&
    numberFIVE > numberTHREE &&
    numberFIVE > numberFOUR &&
    numberFIVE > numberSIX
  ) {
    myOutputValue += "The number you roll the most is 5. ";
  } else if (
    numberSIX > numberONE &&
    numberSIX > numberTWO &&
    numberSIX > numberTHREE &&
    numberSIX > numberFOUR &&
    numberSIX > numberFIVE
  ) {
    myOutputValue += "The number you roll the most is 6. ";
  } else {
    myOutputValue += "you do not have a most rolled number yet. ";
  }

  // if input matches dice number, return you win
  if (input == rolledNumber) {
    myOutputValue += "you guessed " + input + ". You win!";
  }
  // if input doesn't match dice number, return you lose
  else {
    myOutputValue += "you guessed " + input + ". You lose!";
  }
  TOTAL_ROLL_NUMBER = TOTAL_ROLL_NUMBER + 1;
  console.log("total roll number is " + TOTAL_ROLL_NUMBER);
  return myOutputValue;
};

// Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.

var guessingMain = function (input) {
  // define basic variables
  var diceRolled = rollDice();
  var myOutputValue = "The number you rolled is " + diceRolled + ".";
  var minRange = diceRolled - 1;
  var maxRange = diceRolled + 1;
  console.log(
    myOutputValue + " Guessing range is from " + maxRange + " to " + minRange
  );
  // if input matches n+1 or n-1, return you win 1 point.
  if (input == minRange || input == maxRange) {
    myOutputValue += " your guess is " + input + ". you win 1 point!";
  }
  // if input matches n, return you win 2 points.
  else if (input == diceRolled) {
    myOutputValue += " your guess is " + input + ". you win 2 points!";
  } else {
    myOutputValue += " your guess is not within the range, you lose!";
  }
  return myOutputValue;
};

// Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.

var advancedGuessingMain = function (input) {
  // define a variable for range
  var diceRolled = rollDice();
  var myOutputValue = "The number you rolled is " + diceRolled + ".";
  var minWinOne = diceRolled - 4;
  var maxWinOne = diceRolled + 4;
  var minWinTwo = diceRolled - 3;
  var maxWinTwo = diceRolled + 3;
  var minWinThree = diceRolled - 2;
  var maxWinThree = diceRolled + 2;
  var minWinFour = diceRolled - 1;
  var maxWinFour = diceRolled + 1;

  console.log(
    myOutputValue +
      "your guess is " +
      input +
      ". The widest guessing range is from " +
      minWinOne +
      " to " +
      maxWinOne
  );
  // if input matches n+1 or n-1, return you win 1 point.
  if (input == minWinOne || input == maxWinOne) {
    myOutputValue += "your guess is " + input + ". you win 1 point!";
  }
  // if input matches n, return you win 2 points.
  else if (input == minWinTwo || input == maxWinTwo) {
    myOutputValue += " your guess is " + input + ". you win 2 points!";
  } else if (input == minWinThree || input == maxWinThree) {
    myOutputValue += " your guess is " + input + " . you win 3 points!";
  } else if (input == minWinFour || input == maxWinFour) {
    myOutputValue += " your guess is " + input + " . you win 4 points!";
  } else if (input == diceRolled) {
    myOutputValue += " your guess is " + input + " . you win 5 points!";
  } else {
    myOutputValue += " your guess is not within the range, you lose!";
  }
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
