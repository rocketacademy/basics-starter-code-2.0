var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.ceil(randomDecimal);
  console.log(randomInteger);
  return randomInteger;
};

var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.

  // Create two six-sided dices
  var diceOne = rollDice();
  var diceTwo = rollDice();
  var totalDiceNumber = diceOne + diceTwo;
  console.log(diceOne, diceTwo);
  var myOutputValue = `You lose! You guessed ${input} and you rolled ${diceOne} and ${diceTwo}`;

  // User wins if either one of the conditions are met:
  // users guess equal to output
  // output is 11

  if (totalDiceNumber == input || totalDiceNumber == 11) {
    myOutputValue = `You won! You guessed ${input} and you rolled ${diceOne} and ${diceTwo}`;
  }

  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.

  // If user inputs chicken rice, nasi lemak, porridge, Change the myOutputValue to Rice
  var myOutputValue = "I dont know!";
  if (input == "chicken rice" || input == "nasi lemak" || input == "porridge") {
    myOutputValue = "This is rice!";
  }
  // If user inputs hokkien mee, laksa, mee rebus, change the myOutputValue to Noodles
  if (input == "hokkien mee" || input == "laksa" || input == "mee rebus") {
    myOutputValue = "This is noodles!";
  }
  // If user inputs roti prata, bak kut teh, fried oyster,change the myOutputValue to Others
  if (
    input == "roti prata" ||
    input == "bak kut teh" ||
    input == "fried oyster"
  ) {
    myOutputValue = "Others!";
  }

  return myOutputValue;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.

  //Generate Random 4D numbers.
  var numberOne = Math.random() * 10000;
  console.log(numberOne);
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
