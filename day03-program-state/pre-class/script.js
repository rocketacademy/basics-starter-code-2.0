var introScopeMain = function (input) {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

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
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();

  var myOutputValue = 'you lose';

  if (randomDiceNumber == input) {
    myOutputValue = 'you win';
  }

  return myOutputValue;
};

// Declare global variable for storing 'last rolls' outside the lastRollMain function
var lastRoll = 0;

var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  var randomDiceNumber = rollDice();

  var myOutputValue = `Your last roll was ${lastRoll}. You just rolled a ${randomDiceNumber}. You guessed ${input}. `;

  if (randomDiceNumber == input) {
    myOutputValue += 'You win!';
  } else {
    myOutputValue += 'You lose!';
  }

  // store the most recent roll as the new lastRoll
  lastRoll = randomDiceNumber;

  return myOutputValue;
};

var numGames = 0;
var numWins = 0;

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var randomDiceNumber = rollDice();
  var myOutputValue = '';

  numGames += 1;

  if (randomDiceNumber == input) {
    myOutputValue = 'You win!';
    numWins += 1;
  } else {
    myOutputValue = 'You lose!';
  }

  var percentageWins = (numWins / numGames) * 100;
  myOutputValue += ` Your win percentage is ${percentageWins}%`;

  return myOutputValue;
};

var rollCounter = [0, 0, 0, 0, 0, 0];
// rollCounter[0] collects count for diceRolls of 1
// rollCounter[1] collects count for diceRolls of 2
// rollCounter[x-1] collects count for diceRolls of x

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var randomDiceNumber = rollDice();
  var rollCounterIndex = randomDiceNumber - 1;
  rollCounter[rollCounterIndex] += 1;

  var maxNumOfRolls = max(rollCounter);
  var indexOfMax = rollCounter.indexOf(maxNumOfRolls);
  var rolledMost = indexOfMax + 1;

  var myOutputValue = `You just rolled a ${randomDiceNumber}. ${rolledMost} is the number you roll the most. You guessed ${input}. `;

  if (randomDiceNumber == input) {
    myOutputValue += 'You win!';
  } else {
    myOutputValue += 'You lose!';
  }

  return myOutputValue;
};

var guessingMain = function (guess) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var randomDiceNumber = rollDice();
  var guessDifference = Math.abs(guess - randomDiceNumber);
  var points = 0;

  if (guessDifference == 0) {
    points += 2;
  } else if (guessDifference == 1) {
    points += 1;
  }
  var myOutputValue = `You guessed ${randomDiceNumber} which is off from rolled dice number ${randomDiceNumber} by ${guessDifference}. You win ${points} points!`;

  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var randomDiceNumber = rollDice();
  var guessDifference = Math.abs(guess - randomDiceNumber);

  // finding a pattern between guess difference and their points
  var totalWinnablePts = 5;
  var pointsWon = totalWinnablePts - guessDifference;

  var myOutputValue = `You guessed ${randomDiceNumber} which is off from rolled dice number ${randomDiceNumber} by ${guessDifference}. You win ${pointsWon} points!`;

  return myOutputValue;
};

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

/**
 * Red Mode (Program State for Game Modes)
 */

var mode = 'green';

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  if (input == 'greenmode') {
    mode = 'green';
  } else if (input == 'bluemode') {
    mode = 'blue';
  } else if (input == 'redmode') {
    mode = 'red';
  }

  var myOutputValue =
    'A fool sees not the same tree that a wise man sees. -William Blake';

  if (mode == 'blue') {
    myOutputValue =
      'The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau';
  }
  if (mode == 'red') {
    myOutputValue = 'A drop of ink may make a million think. –Lord Byron';
  }

  return myOutputValue;
};
