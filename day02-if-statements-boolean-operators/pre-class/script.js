var orangeJuiceMain = function (guestsInput) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  // determine how many oranges make a glass of juice
  var orangesPerGlass = 4;

  // determine glasses per guest
  var glassesPerGuest = 2;

  // output of how many oranges are needed for the party
  var orangesRequired = guestsInput * glassesPerGuest * orangesPerGlass;

  var myOutputValue = `${orangesRequired} oranges are needed`;
  return myOutputValue;
};

var paintMain = function (costPerLitre) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.

  // user inputs variable for dollar per litre of paint

  // calculate Area to paint
  // determine rooms per house
  var numRooms = 6;
  // determine area in metres per room
  var roomAreaInMetres = 3 * 3;
  // determine how many coats (repeats) of paint
  var coatsPaint = 2;
  // determine area to paint
  var areaToPaint = numRooms * roomAreaInMetres * coatsPaint;

  //Calculate Cost
  // determine paint square meters per litre
  var areaPerLitre = 300;

  // output to calculate total cost of painting
  var litresNeeded = areaToPaint / areaPerLitre;

  var cost = costPerLitre * litresNeeded;
  var myOutputValue = `Cost of Paint: ${cost}`;
  return myOutputValue;
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
  var myOutputValue = "hello world";
  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
