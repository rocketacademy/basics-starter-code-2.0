/**
 * Follow Along (Intro to Scope)
 */

var introScopeMain = function (input) {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

/**
 * Base: App Setup (Program Lifecycle and State)
 */

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // randomInteger's a number from 0 - 5 ... add 1
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

/**
 * Base: Last Roll (Program Lifecycle and State)
 */

// Declare global variable for storing 'last rolls' outside the lastRollMain function
// Initialized to 0
var lastRoll = 0;

var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  var randomDiceNumber = rollDice();
  // initialise empty string for myOutputValue
  var myOutputValue = '';

  // if last roll exists (not 0), display it
  if (lastRoll !== 0) {
    myOutputValue += `Your last roll was ${lastRoll}. `
  }

  myOutputValue += `You just rolled a ${randomDiceNumber}. You guessed ${input}. `;

  if (randomDiceNumber == input) {
    myOutputValue += 'You win!';
  } else {
    myOutputValue += 'You lose!';
  }

  // store the most recent roll as the new lastRoll
  lastRoll = randomDiceNumber;

  return myOutputValue;
};

/**
 * Base: Win / Loss (Program Lifecycle and State)
 */

var numGames = 0;
var numWins = 0;

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var randomDiceNumber = rollDice();
  var myOutputValue = `You rolled ${randomDiceNumber} and guessed ${input}. `;

  numGames += 1;

  if (randomDiceNumber == input) {
    myOutputValue += 'You win!';
    numWins += 1;
  } else {
    myOutputValue += 'You lose!';
  }

  var percentageWins = (numWins / numGames) * 100;
  myOutputValue += ` Your win percentage is ${percentageWins}%.`;

  return myOutputValue;
};

/**
 * More Comfortable: Most Rolled (Program Lifecycle and State)
 */

// Initialising all of these may seem tedious now,
// but we will learning JavaScript objects and arrays
// later in the course which will make count tracking
// across various values and keys simpler.
var roll1Count = 0;
var roll2Count = 0;
var roll3Count = 0;
var roll4Count = 0;
var roll5Count = 0;
var roll6Count = 0;

// Solution using arrays:
// rollCounter[0] collects count for diceRolls of 1
// rollCounter[1] collects count for diceRolls of 2
// rollCounter[x-1] collects count for diceRolls of x
// var rollCounter = [0, 0, 0, 0, 0, 0];

// Solution using JavaScript objects:
// To access the value of roll1, you can use diceCounters["1"]. 
// To increment the value of roll1, you can do
// so similarly: diceCounters["1"] += 1
// var diceCounters = {
//   "1": 0,
//   "2": 0,
//   "3": 0,
//   "4": 0,
//   "5": 0,
//   "6": 0
// }

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var randomDiceNumber = rollDice();

  // An alternative to using this long if-elseif-else chain is
  // using switch-case. Switch-cases are out of the scope of the
  // Basics course. The solution using switch-case will be below.
  if (randomDiceNumber === 1) {
    roll1Count += 1;
  } else if (randomDiceNumber === 2) {
    roll2Count += 1;
  } else if (randomDiceNumber === 3) {
    roll3Count += 1;
  } else if (randomDiceNumber === 4) {
    roll4Count += 1;
  } else if (randomDiceNumber === 5) {
    roll5Count += 1;
  } else {
    roll6Count += 1;
  }

  // Switch-case solution:
  // switch (randomDiceNumber) {
  //   // randomDiceNumber is 1
  //   case 1:
  //     roll1Count += 1;
  //     break;
  //   // randomDiceNumber is 2
  //   case 2:
  //     roll2Count += 1;
  //     break;
  //   // randomDiceNumber is 3
  //   case 3:
  //     roll3Count += 1;
  //     break;
  //   // randomDiceNumber is 4
  //   case 4:
  //     roll4Count += 1;
  //     break;
  //   // randomDiceNumber is 5
  //   case 5:
  //     roll5Count += 1;
  //     break;
  //   // randomDiceNumber is 6
  //   // default behaves like 'else',
  //   // as in "all previous cases not met"
  //   default:
  //     roll6Count += 1;
  //     break;
  // }

  var rolledMost = 0;
  var maxNumOfRolls = Math.max(roll1Count, roll2Count, roll3Count, roll4Count, roll5Count, roll6Count);

  // Using arrays, this if-elseif-else chain will not be necessary:
  // you can get the index of the maxNumOfRolls, and increment the index
  // by 1 (array indices count from 0) to get the dice number rolled the
  // most times. Using JavaScript objects, you can convert all values
  // to an array using the Object.values() method. Then similar to the
  // array method, get the index of the maxNumOfRolls, increment the index
  // by 1 to get the dice number rolled the most times.
  if (maxNumOfRolls === roll1Count) {
    rolledMost = 1;
  } else if (maxNumOfRolls === roll2Count) {
    rolledMost = 2;
  } else if (maxNumOfRolls === roll3Count) {
    rolledMost = 3;
  } else if (maxNumOfRolls === roll4Count) {
    rolledMost = 4;
  } else if (maxNumOfRolls === roll5Count) {
    rolledMost = 5;
  } else {
    rolledMost = 6;
  }

  var myOutputValue = `You just rolled a ${randomDiceNumber}. ${rolledMost} is the number you roll the most (${maxNumOfRolls} time(s)). You guessed ${input}. `;

  if (randomDiceNumber == input) {
    myOutputValue += 'You win!';
  } else {
    myOutputValue += 'You lose!';
  }

  return myOutputValue;
};

/**
 * More Comfortable: Guessing (Program Lifecycle and State)
 */

var totalPointsEarned = 0;

var guessingMain = function (guess) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var randomDiceNumber = rollDice();
  var guessDifference = Math.abs(guess - randomDiceNumber);
  var currentRoundEarnedPoints = 0;

  if (guessDifference == 0) {
    currentRoundEarnedPoints += 2;
  } else if (guessDifference == 1) {
    currentRoundEarnedPoints += 1;
  }

  totalPointsEarned += currentRoundEarnedPoints;

  var myOutputValue = `You guessed ${randomDiceNumber} which is off the current dice number of ${randomDiceNumber} by ${guessDifference}. You win ${currentRoundEarnedPoints} point(s)! You have a total of ${totalPointsEarned} point(s).`;

  return myOutputValue;
};

/**
 * More Comfortable: Advanced Guessing (Program Lifecycle and State)
 */

var totalPointsEarnedAdvanced = 0;

var advancedGuessingMain = function (guess) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var randomDiceNumber = rollDice();
  var guessDifference = Math.abs(guess - randomDiceNumber);

  // Exact / Off-by-0: earn 5 points
  // Off-by-5: earn 0 points
  // The pattern is (totalWinnablePts - guessDifference)
  var totalWinnablePts = 5;
  var pointsWon = totalWinnablePts - guessDifference;

  totalPointsEarnedAdvanced += pointsWon;

  var myOutputValue = `You guessed ${guess} which is off the current dice number of ${randomDiceNumber} by ${guessDifference}. You win ${pointsWon} point(s)! You have a total of ${totalPointsEarnedAdvanced} point(s).`;

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
