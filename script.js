/*
var convertKmToMiles = function (distanceInKm) {
  console.log("running km to miles function");
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var main = function (input) {
  var myOutputValue = convertKmToMiles(input);
  return myOutputValue;
};
*/

/* Easier Dice Game 

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var main = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();
  // Let the default myOutputValue be 'You lose!'
  var myOutputValue =
    "You just rolled a " + randomDiceNumber + "! Your guess was " + input + ".";
  // If the user inputs the same number as the random Dice Roll, return 'you Win!'

  // If the user rolled the same value OR the guess was off by 2, the user wins.
  var difference = randomDiceNumber - input;
  console.log("The difference in guess is " + difference);

  if (Math.abs(difference) <= 2) {
    myOutputValue += ` You Win! Congrats...`;
  } else {
    myOutputValue += ` You Lose! Try again.`;
  }
  return myOutputValue;
};

*/

/* Even Easier Dice Game */

// The user can guess by putting in one of two values: "odd" or "even". They win if the dice roll is odd or even.

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var main = function (input) {
  var randomDiceNumber = rollDice();
  var myOutputValue = `You rolled ${randomDiceNumber}. Your guess was ${input}.`;
  // If the dice roll is even, and the input is even, user wins.
  // If the dice roll is odd, and the output is odd, user wins.
  // If the dice roll is neither even or odd, user loses.
  if (
    (input % 2 == 0 && randomDiceNumber % 2 == 0) ||
    (input % 2 == 1 && randomDiceNumber % 2 == 1)
  ) {
    myOutputValue += `You Win! Congrats!`;
  } else if (input == "palatable papaya") {
    myOutputValue = `You entered my favorite food. You still win nevertheless! Congrats!`;
  } else {
    myOutputValue += `You Lose! Try again.`;
  }

  return myOutputValue;
};

// If the input is not "even" or "odd", ask the user to input only even and odd numbers
// If the dice roll is an even number and the guess is an even number, user wins.
// If the dice roll is an odd number and the guess is an odd number, user wins.
