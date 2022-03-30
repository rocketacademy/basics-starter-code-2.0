var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

/*
Hawker food is a convenient and affordable food option in Singapore. 
To help educate non-Singaporeans about hawker food, create an app that takes a hawker dish name as input, 
and tells users whether the dish has a "rice", "noodle", or "other" base. 
Some sample dishes are: "chicken rice", "roti prata", "nasi lemak", "hokkien mee", "bak kut teh", and "laksa".
For example, if a user enters "laksa", the program should output "noodle". 
If a user enters "roti prata", the program could output "other".
Please use the || operator.

*/

// User input hawker dishes
// Matching the category of hawker dishes
// Return the output of category to hawker dishes

var hawkerFoodCategorisationMain = function (input) {
  // Input Validation
  // Predefine function .toLowerCase
  var lowerCaseInput = input.toLowerCase();
  var myOutputValue = "";
  if (
    lowerCaseInput != "chicken rice" &&
    lowerCaseInput != "roti prata" &&
    lowerCaseInput != "nasi lemak" &&
    lowerCaseInput != "hokkien mee" &&
    lowerCaseInput != "bak kut teh" &&
    lowerCaseInput != "laksa"
  ) {
    myOutputValue =
      "Please only input some signature dishes like Chicken Rice, Roti Prata, Nasi Lemak, Hokkien Mee, Bak Kut Teh, or Laksa";
    return myOutputValue;
  }
  // User lowerCaseInput hawker dishes
  if (lowerCaseInput == "chicken rice" || lowerCaseInput == "nasi lemak") {
    myOutputValue = "rice";
  } else if (lowerCaseInput == "laksa" || lowerCaseInput == "hokkien mee") {
    myOutputValue = "noodle";
  } else {
    myOutputValue = "others";
  }
  return myOutputValue;

  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
};

/* 4D is a popular betting game in Singapore run by Singapore Pools. Rocket Academy does not endorse gambling.
Create a version of 4D where the player wins if their guess matches any of the 4 digits. The player will input a single digit, and the computer generates 4 random digits between 0 and 9. If the player-inputted digit matches any of the randomly-generated digits, the player wins.
In addition to the win/loss result, output the player guess and all randomly-generated digits so the player can see how close they were.
*/
var fourDSingleDigitMain = function (input) {
  //User Input Validation - single digit number
  var myOutputValue;
  if (input < 0 || input > 9) {
    myOutputValue = "Please enter a single digit number between 0 and 9";
    return myOutputValue;
  }
  //generate 4 random digits
  var digit1 = Math.floor(Math.random() * 9 + 1);
  var digit2 = Math.floor(Math.random() * 9 + 1);
  var digit3 = Math.floor(Math.random() * 9 + 1);
  var digit4 = Math.floor(Math.random() * 9 + 1);

  //conditions
  if (
    input == digit1 ||
    input == digit2 ||
    input == digit3 ||
    input == digit4
  ) {
    myOutputValue = `Congratulation you won - you guessed ${input} and you got ${digit1}${digit2}${digit3}${digit4}`;
  } else {
    myOutputValue = `Try Again next time :( - you guessed ${input} and you got ${digit1}${digit2}${digit3}${digit4}`;
  }

  return myOutputValue;
};

/* 
The uncle at your favourite hawker stall has decided to challenge himself and serve a random hawker dish to each customer. 
The dishes in his repertoire are: "chicken rice", "roti prata", "nasi lemak", "hokkien mee", "bak kut teh", and "laksa". 
Customers that correctly guess Uncle's dish receive a free meal.
Create an app that uses random numbers to help Uncle decide which dish to cook. 
The customer can only input dish names. If the customer correctly guesses Uncle's dish, let her know that she gets a free meal!
*/

// Use max function to generate random hawker dish based off numbers
// Assign a value to each food dishes (e.g 1, 2, 3)
// Use Math.random to randomize the food dishes
// Customer to input dish names

function generateRandomInteger(max) {
  var randomInteger = Math.floor(Math.random() * max + 1);
  return randomInteger;
}

function generateRandomDishes() {
  var myOutputValue = `There is an error in processing your request.`;
  var numberOfDishes = 6;
  var randomDishNum = generateRandomInteger(numberOfDishes);
  if (randomDishNum == 1) {
    myOutputValue = `chicken rice`;
  }
  if (randomDishNum == 2) {
    myOutputValue = `roti prata`;
  }
  if (randomDishNum == 3) {
    myOutputValue = `nasi lemak`;
  }
  if (randomDishNum == 4) {
    myOutputValue = `hokkien mee`;
  }
  if (randomDishNum == 5) {
    myOutputValue = `bak kut teh`;
  }
  if (randomDishNum == 6) {
    myOutputValue = `laksa`;
  }
  return myOutputValue;
}

var hawkerFoodRandomnessMain = function (hawkerDishUserInput) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var randomHawkerDish = generateRandomDishes();
  console.log(`Food Item is ` + randomHawkerDish);
  var myOutputValue = `You guessed ${hawkerDishUserInput}. The correct dish is ${randomHawkerDish}.`;
  if (hawkerDishUserInput == randomHawkerDish) {
    myOutputValue += `You have earned yourself a free meal!`;
  } else {
    myOutputValue += `Try again next time...`;
  }
  return myOutputValue;
};

/*Create a version of 4D where the player wins if they guess within 1000 (above or below) of the winning 4-digit number. 
Consider using comparison operators such as less than (<) and greater than (>).*/

var generateRandom4dNumber = function () {
  var random4dNumber = Math.floor(Math.random() * 10000);
  console.log("The random 4D number is " + random4dNumber);
  return random4dNumber;
};

var calculateIfGuessInWinningRange = function (guess, winningNum, range) {
  if (guess < winningNum - range || guess > winningNum + range) {
    return false;
  }
  return true;
};

var fourDWinningRangeMain = function (user4DGuess) {
  //User Input validation
  if (isNaN(user4DGuess) || user4DGuess < 0 || user4DGuess > 9999) {
    return `${user4DGuess} is not valid! Please input a number between 0 through 9999`;
  }

  var winningNum = generateRandom4dNumber();
  var winningRange = 1000;
  var ifGuessInWinningRange = calculateIfGuessInWinningRange(
    user4DGuess,
    winningNum,
    winningRange
  );
  var myOutputValue = `Your guess: ${user4DGuess}. Winning range: ${
    winningNum - winningRange
  } to ${winningNum + winningRange}.`;

  if (ifGuessInWinningRange) {
    myOutputValue += `You win!`;
  } else {
    myOutputValue += `You lose.`;
  }
  return myOutputValue;
};

/* 
Uncle has decided to serve an omakase option, and output a menu based on customer input.

Customers can input either "rice" or "noodle", and Uncle will choose either 2 random rice or 2 random noodle dishes for them. 

Assume Uncle's rice dishes are "chicken rice", "nasi lemak", and "bak kut teh", and Uncle's noodle dishes are "hokkien mee", "laksa", and "beef hor fun".

Roti prata is neither rice nor noodle, but Uncle can randomly choose to include it as one of the two dishes if he feels like it.

Uncle charges more for omakase and uses premium descriptions for his dishes. Feel free to get creative. 

To create a new line in the output box you can use the string '<br>', which generates a new line in HTML output.

Output at the end if sambal is included. Not all dishes come with sambal, for example roti prata and bak kut teh don't come with sambal.
*/

// User can either input rice or noodle and be presented with either 2 rice dishes or 2 noodle dishes

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
