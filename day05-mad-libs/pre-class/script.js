var rollDice = function () {
  var diceNumber = Math.ceil(Math.random() * 6);
  return diceNumber;
};

var guesses = [];

var followArraysMain = function (input) {
  // Attempt the Follow Along exercise from the Arrays module below with followArraysMain as the main function.
  guesses.push(input);

  // Generate a random dice number.
  var randomDiceNumber = rollDice();
  console.log(randomDiceNumber);

  // Initialise output to communicate loss.
  // Output the record of all guesses regardless of loss or win.
  var myOutputValue = "You lose. Your guesses: " + guesses;

  // If the guess matches the dice roll, change output to communicate win.
  if (randomDiceNumber == input) {
    myOutputValue = "You win. Your guesses: " + guesses;
  }
  // Return output value.
  return myOutputValue;
};

var followArraysLoopsMain = function (input) {
  // Attempt the Follow Along exercise from the Looping Over An Array module below with followArraysLoopsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
