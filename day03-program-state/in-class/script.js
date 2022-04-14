var userWins = 0;
// Random generator function

var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var generateRandomInt = function () {
    var randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
  };
  var randomInt = generateRandomInt();
  var randomObject = ``;
  console.log(randomInt);
  if (randomInt == 0) {
    randomObject = `banana`;
  }
  if (randomInt == 1) {
    randomObject = `chisel`;
  }
  if (randomInt == 2) {
    randomObject = `faucet`;
  }
  var myOutputValue = "";
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  if (input == randomObject) {
    userWins = userWins + 1;
    myOutputValue = `Word Generated: ${randomObject}. You have guessed ${input}. You've guessed ${userWins} times out of 2.`;
  } else {
    myOutputValue = `Word Generated: ${randomObject}. You have guessed ${input}. You've guessed ${userWins} times out of 2.`;
  }
  if (userWins == 2) {
    myOutputValue = `Congrats you win!`;
  }
  return myOutputValue;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
