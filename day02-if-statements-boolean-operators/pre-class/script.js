/* 
1. Write a program that takes in as input the number of expected guests for a party, 
and outputs the number of oranges required to make enough Orange Juice for all guests.

To begin, assume:

2. a) It takes 4 oranges to make a glass of orange juice. b) Each guest will drink 2 glasses of Orange Juice on average. 

3. Subsequently, edit the functions written such that it takes in both the number of guests 
as well as the number of glasses per guest as input, and produces the same output: oranges required.
*/

var orangeJuiceMain = function (numberOfGuests) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  // input the number of guests
  var orangesPerGlass = 4;
  var glassesPerGuest = 2;
  // Calculate the number of glasses for each guest
  var numOfGlasses = glassesPerGuest * numberOfGuests;
  // Calculate the number of oranges required for 1 glass of orange juice
  var numOfOranges = numOfGlasses * orangesPerGlass;

  var myOutputValue = `${numOfOranges} oranges are needed to make enough Orange Juice for all guests`;
  return myOutputValue;
};

// Write out another function with multiple input parameters

var orangeJuiceMain2 = function (numGuests, glassesPerGuest) {
  //  Calculate number of Oranges required per Glass
  var orangesPerGlass = 4;
  var numOfGlasses = glassesPerGuest * numGuests;
  var numOfOranges = numOfGlasses * orangesPerGlass;
  var myOutputValue = `${numOfOranges} oranges are required`;
  return myOutputValue;
};

/*
Estimate the price of painting the interior of your home.
The user will enter a dollar amount of paint per litre and the app will calculate how much it will cost.

To begin, assume that:
1) Each room in your 6-room house has the same area to be painted: 3m x 3m. 
2) Paint will cover 300 square meters per litre. 

You want to apply 2 coats of paint.
Edit the function(s) such that the number of rooms, and the number of coats to be painted are also variables that are taken in as input.


*/
var paintMain = function (paintPricePerLitre) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  // User will input how much paint per litre he needs for 6 room
  // Calculate area of each room
  // Calculate the Area to Paint In Total
  var numOfRooms = 6;
  var areaPerRoom = 3 * 3;
  var numCoatsPerArea = 2;
  var areaToPaint = areaPerRoom * numOfRooms * numCoatsPerArea;

  var areaPerLitre = 300;
  var paintLitreUsed = areaToPaint / areaPerLitre;
  var cost = paintLitreUsed * paintPricePerLitre;
  var myOutputValue = `The Paint Cost $${cost}`;
  return myOutputValue;
};

// Write multiple input parameters for Paint Function

var paintMain2 = function (paintPricePerLitre, numOfRooms, numCoatsPerArea) {
  var areaPerRoom = 3 * 3;
  var paintLitreUsed = areaPerRoom * numOfRooms * numCoatsPerArea;
  var areaPerLitre = 300;
  var paintLitreUsed = areaToPaint / areaPerLitre;
  var cost = paintLitreUsed * paintPricePerLitre;
  console.log(myOutPutValue);
  var myOutputValue = `The Paint Cost $${cost}`;
  return myOutputValue;
};

var rollDice = function (rigged = false) {
  // rigged dice to return 6 in debug mode
  if (rigged) {
    console.log("rigged dice, returning 6");
    return 6;
  }

  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var randomDiceMain = function () {
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
  var myOutputValue = "This isn't the secret phrase";
  // If input is the secret phrase, change the value of the Output.
  if (
    input == "Orange is the new black" ||
    input == "neat noodles" ||
    input == "awesome ayam" ||
    input == "delicious dumplings"
  ) {
    myOutputValue = "You wrote the secret phrase! You may enter.";
  } else if (input == "Orange is black" || input == "awesome") {
    myOutputValue += " but it is a close guess.";
  } else {
    myOutputValue += "And you shall not enter...";
  }
  return myOutputValue;
};

/* 
Let's implement the logical rules to our dice game. If the user enters the same number as the dice roll, they win.
*/

var diceGameMain = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();
  // Let the default myOutputValue be 'You lose!'
  var myOutputValue =
    "You just rolled a " + randomDiceNumber + "! Your guess was " + input + ".";
  // If the user inputs the same number as the random Dice Roll, return 'you Win!'

  // If the user rolled the same value OR the guess was off by 2, the user wins.
  var difference = input - randomDiceNumber;
  console.log("The difference in guess is " + difference);

  if (Math.abs(difference) <= 2 || Math.abs(difference) >= 2) {
    myOutputValue += ` You Win! Congrats...`;
  } else {
    myOutputValue += ` You Lose! Try again.`;
  }
  return myOutputValue;
};

/* 
Update our dice game logic such that the user wins if the dice roll is 2 times the guess, 
e.g. a guess of 1 and roll of 2, a guess of 2 and roll of 4, etc. 
To win this updated game for a 6-sided dice, the user should only guess numbers between 1 and 3, 
but the game does not restrict what the user can guess.
*/

var twiceGuessMain = function (guess) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  // Generate a random dice number
  var randomDiceNumber2 = rollDice();
  var twiceGuess = guess * 2;
  // Let the default myOutputValue be 'You just rolled a random number' Your guess was 'guess'.
  var myOutputValue = `You just rolled a ${randomDiceNumber2}. Your guess was ${guess}.`;
  // If the dice Roll is two times the guess, return value 'You win' else return the value 'You lose'.
  if (twiceGuess == randomDiceNumber2) {
    myOutputValue += `You win!`;
  } else {
    myOutputValue += `You lose!`;
  }
  return myOutputValue;
};
