var orangeJuiceMain = function (numGuest) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var orangePerGlass = 4;
  var glassesperGuest = 2;
  var numGlasses = numGuest * glassesperGuest;
  var numOranges = numGlasses * orangePerGlass;
  var myOutputValue = `${numOranges} oranges are needed`;
  return myOutputValue;
};

var orangeJuiceAdvanced = function (numGuest, glassesperGuest) {
  var orangePerGlass = 4;
  var numGlasses = numGuest * glassesperGuest;
  var numOranges = numGlasses * orangePerGlass;
  var myOutputValue = `${numOranges} oranges are needed`;
  return myOutputValue;
};

var paintMain = function (pricePerLitre) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var numRooms = 6;
  var areaPerRoom = 3 * 3;
  var numCoatsPerArea = 2;
  var areaToPaint = areaPerRoom * numRooms * numCoatsPerArea;

  var areaPerLitre = 300;
  var litreUsed = areaToPaint / areaPerLitre;
  var cost = litreUsed * pricePerLitre;
  var myOutputValue = `Paint cost: $${cost}`;
  return myOutputValue;
};

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

var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  // Generate a random dice number
  var randomDiceNumber = rollDice();
  // Personalise the output
  var myOutputValue = "You just rolled a " + randomDiceNumber + "!";
  // Return and print output.
  return myOutputValue;
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  // Set a default value for myOutputValue
  var myOutputValue = "the door shall not open.";
  // If input is our secret phrase, change the value of myOutputValue
  if (input == "palatable papaya") {
    myOutputValue = "you wrote the secret phrase!";
  } else if (input == "not so palatable papaya") {
    myOutputValue += " but you are nearly there.";
  } else {
    myOutputValue += " nope, this is far from the right phrase.";
  }

  // return myOutputValue as output
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
