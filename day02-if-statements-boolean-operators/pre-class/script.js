var orangeJuiceMain = function (guestnumber) {
  // calculate the total number of glasses
  var glassnumber = guestnumber * 2;
  var totalGlass = guestnumber * glassnumber;
  // calculate the total number of organges
  var totalOrange = totalGlass * 4;
  return totalOrange;
};

var paintMain = function (unitPrice) {
  // calculate the amount of areas to be painted and amount of litre required
  var paintArea = 6 * 3 * 3 * 2;
  var litrePaint = paintArea / 300;
  var cost = litrePaint * unitPrice;
  var myOutputValue = `Paint cost: $${cost}`;
  return myOutputValue;
};

var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var randomDiceMain = function (input) {
  var randomDiceNumber = rollDice();
  var myOutputValue = "You just rolled a " + randomDiceNumber + "!";

  return myOutputValue;
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceGameMain = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();

  // Default output value is 'you lose'.
  var myOutputValue = "you lose";

  // If input matches randomDiceNumber, update output.
  if (input == randomDiceNumber) {
    myOutputValue = "you win";
  }

  // Return output.
  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();

  // Default output value is 'you lose'.
  var myOutputValue = "you lose";

  // If input matches randomDiceNumber, update output.
  if (input == randomDiceNumber / 2) {
    myOutputValue = "you win";
  }

  return myOutputValue;
};
