var orangeJuiceMain = function (numGuests, glassPerGuest) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var orangesNeeded = numGuests * glassPerGuest * 4;
  return `The number of oranges required are ${orangesNeeded}.`;
};

var paintMain = function (numRooms, numCoats, pricePerLitre) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var areaPainted = 3 * 3 * numRooms * numCoats;
  var paintUsed = areaPainted / 300;
  var totalPrice = paintUsed * pricePerLitre;
  return `It will cost $${totalPrice}.`;
};

var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;
  console.log(diceNumber);
  if (diceNumber == input) {
    return `Congratulations! You won!`;
  } else {
    return `You lost :)`;
  }
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;
  console.log(diceNumber);
  if (diceNumber == input * 2) {
    return `Congratulations! You won!`;
  } else {
    return `You lost :)`;
  }
};
