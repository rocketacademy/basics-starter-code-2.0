var rollDice = function () {
  var diceNumber = Math.ceil(Math.random() * 6);
  return diceNumber;
};

var lucky11Main = function (guess) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  //Create a dice game that allows a user input a guess number and roll 2 dice when the Submit button is clicked. The user wins if:
  //One of the dice roll matches their guess, or
  //If the total dice roll is 11.
  //Otherwise the user loses.
  var diceRoll1 = rollDice();
  var diceRoll2 = rollDice();
  var totalDiceNumber = diceRoll1 + diceRoll2;
  if (guess == diceRoll1 || guess == diceRoll2) {
    var results = `You guessed ${guess}. Dice roll 1 is ${diceRoll1} and dice roll 2 is ${diceRoll2}. Total dice roll is ${totalDiceNumber}. You win!`;
  } else {
    results = `You guessed ${guess}. Dice roll 1 is ${diceRoll1} and dice roll 2 is ${diceRoll2}. Total dice roll is ${totalDiceNumber}. You lose!`;
  }
  return results;
};

var hawkerFoodCategorisationMain = function (dishName) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  //Hawker food is a convenient and affordable food option in Singapore. To help educate non-Singaporeans about hawker food, create an app that takes a hawker dish name as input, and tells users whether the dish has a "rice", "noodle", or "other" base. Some sample dishes are: "chicken rice", "roti prata", "nasi lemak", "hokkien mee", "bak kut teh", and "laksa".
  //For example, if a user enters "laksa", the program should output "noodle". If a user enters "roti prata", the program could output "other".
  //Please use the || operator.
  if (dishName == "chicken rice" || dishName == "nasi lemak") {
    var baseFood = "rice";
  } else if (dishName == "hokkien mee" || dishName == "laksa") {
    baseFood = "noodles";
  } else if (dishName == "roti prata" || dishName == "bak kut teh") {
    baseFood = "others";
  } else {
    baseFood = "Please check what you've typed.";
  }
  return baseFood;
};

var fourDSingleDigitMain = function (guess) {
  //Create a version of 4D where the player wins if their guess matches any of the 4 digits. The player will input a single digit, and the computer generates 4 random digits between 0 and 9. If the player-inputted digit matches any of the randomly-generated digits, the player wins.
  //In addition to the win/loss result, output the player guess and all randomly-generated digits so the player can see how close they were.
  var fourD1 = Math.ceil(Math.random() * 9).toString();
  var fourD2 = Math.ceil(Math.random() * 9).toString();
  var fourD3 = Math.ceil(Math.random() * 9).toString();
  var fourD4 = Math.ceil(Math.random() * 9).toString();
  var combinedNumbers = fourD1 + fourD2 + fourD3 + fourD4;
  if (
    guess == fourD1 ||
    guess == fourD2 ||
    guess == fourD3 ||
    guess == fourD4
  ) {
    var results = `You guessed ${guess}. The numbers are ${combinedNumbers}. You win!`;
  } else {
    var results = `You guessed ${guess}. The numbers are ${combinedNumbers}. You lose!`;
  }
  return results;
};

var hawkerFoodRandomnessMain = function (customerGuess) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  //The uncle at your favourite hawker stall has decided to challenge himself and serve a random hawker dish to each customer. The dishes in his repertoire are: "chicken rice", "roti prata", "nasi lemak", "hokkien mee", "bak kut teh", and "laksa". Customers that correctly guess Uncle's dish receive a free meal.
  //Create an app that uses random numbers to help Uncle decide which dish to cook. The customer can only input dish names. If the customer correctly guesses Uncle's dish, let her know that she gets a free meal!
  var foodNumber = rollDice();
  if (foodNumber == 1) {
    var uncleCook = "chicken rice";
  } else if (foodNumber == 2) {
    uncleCook = "roti prata";
  } else if (foodNumber == 3) {
    uncleCook = "nasi lemak";
  } else if (foodNumber == 4) {
    uncleCook = "hokkien mee";
  } else if (foodNumber == 5) {
    uncleCook = "bak kut teh";
  } else if (foodNumber == 6) {
    uncleCook = "laksa";
  }

  if (customerGuess == uncleCook) {
    var results = `Uncle cooked ${uncleCook}. You guessed Uncles's dish correctly! You get a free meal! Congratulations!`;
  } else if (customerGuess != uncleCook) {
    results = `Uncle cooked ${uncleCook}. You didn't guesse Uncles's dish correctly. Please pay for the meal.`;
  }
  return results;
};

var fourDWinningRangeMain = function (guess) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  //Create a version of 4D where the player wins if they guess within 1000 (above or below) of the winning 4-digit number. Consider using comparison operators such as less than (<) and greater than (>).
  var fourD1 = Math.ceil(Math.random() * 9).toString();
  var fourD2 = Math.ceil(Math.random() * 9).toString();
  var fourD3 = Math.ceil(Math.random() * 9).toString();
  var fourD4 = Math.ceil(Math.random() * 9).toString();
  var combinedNumbers = Number(fourD1 + fourD2 + fourD3 + fourD4);
  if (combinedNumbers - 1000 < guess && guess < combinedNumbers + 1000) {
    var results = `You guessed ${guess}. The numbers are ${combinedNumbers}. You win!`;
  } else {
    results = `You guessed ${guess}. The numbers are ${combinedNumbers}. You lose!`;
  }
  return results;
};

var rollNumber = function () {
  var numberRolled = Math.ceil(Math.random() * 4);
  return numberRolled;
};

var hawkerFoodOmakaseMain = function (custChoice) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  //Uncle has decided to serve an omakase option, and output a menu based on customer input.
  //Customers can input either "rice" or "noodle", and Uncle will choose either 2 random rice or 2 random noodle dishes for them. Assume Uncle's rice dishes are "chicken rice", "nasi lemak", and "bak kut teh", and Uncle's noodle dishes are "hokkien mee", "laksa", and "beef hor fun".
  //Roti prata is neither rice nor noodle, but Uncle can randomly choose to include it as one of the two dishes if he feels like it.
  //Uncle charges more for omakase and uses premium descriptions for his dishes. Feel free to get creative. To create a new line in the output box you can use the string '<br>', which generates a new line in HTML output.
  //Output at the end if sambal is included. Not all dishes come with sambal, for example roti prata and bak kut teh don't come with sambal.
  var menuNumber1 = Math.ceil(Math.random() * 4);
  var menuNumber2 = Math.ceil(Math.random() * 4);
  if (custChoice == "rice") {
    var 1 = "chicken rice";
    var 2 == 


    }
  }

  var myOutputValue = "hello world";
  return myOutputValue;
};
