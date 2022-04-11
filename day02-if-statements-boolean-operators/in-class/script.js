var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 9;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var lucky11Main = function (input) {
  //
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  // take input as dish name
  var myOutputValue = "other";
  // if input is "chicken rice" or "nasi lemak", return rice;
  if (input == "chicken rice" || input == "nasi lemak") {
    console.log("test 1");
    myOutputValue = "rice";
  }
  // if input is "hokkien mee" or "laksa", return noodle;
  else if (input == "hokkien mee" || input == "laksa") {
    console.log("test 2");
    myOutputValue = "noodle";
  }
  // if input is "roti prata" or "bak kut teh", return other;
  else {
    console.log("test 3");
    myOutputValue = "other";
  }
  return myOutputValue;
};

var fourDSingleDigitMain = function (input) {
  // computer generate 4 random digits
  var digitOne = rollDice();
  var digitTwo = rollDice();
  var digitThree = rollDice();
  var digitFour = rollDice();
  var myOutputValue = "hello world";
  console.log(
    "four digits = " +
      digitOne +
      " and " +
      digitTwo +
      " and " +
      digitThree +
      " and " +
      digitFour
  );
  // if input matches any of the 4 digits, return you win + your guess + 4 digits
  if (
    input == digitOne ||
    input == digitTwo ||
    input == digitThree ||
    input == digitFour
  ) {
    myOutputValue =
      "you win! " +
      "your input is " +
      input +
      " and the four digits are " +
      digitOne +
      digitTwo +
      digitThree +
      digitFour;
    console.log("you win");
  }
  // else return you lose + your guess + 4 digits.
  else {
    myOutputValue =
      "you lose! " +
      "your input is " +
      input +
      " and the four digits are " +
      digitOne +
      digitTwo +
      digitThree +
      digitFour;
    console.log("you lose");
  }
  return myOutputValue;
};

var HawkerUncle = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var hawkerFoodRandomnessMain = function (input) {
  // decide uncle's dish
  var uncleDish = HawkerUncle();
  var myGuess = 0;
  var myOutputValue = "good luck!";
  console.log(uncleDish + " and " + myGuess);
  if (input == "chicken rice") {
    myGuess = 1;
    console.log("chicken rice");
  } else if (input == "roti prata") {
    myGuess = 2;
    console.log("roti prata");
  } else if (input == "nasi lemak") {
    myGuess = 3;
    console.log("nasi lemak");
  } else if (input == "hokkien mee") {
    myGuess = 4;
    console.log("hokkien mee");
  } else if (input == "bak kut teh") {
    myGuess = 5;
    console.log("bak kut teh");
  } else if (input == "laksa") {
    myGuess = 6;
    console.log("laksa");
  }

  // if input matches Hawker Uncle, return you've guessed the right dish and you will get a free meal
  if (myGuess == uncleDish) {
    myOutputValue = "you have guessed the dish and you will get a free meal!";
    console.log("yeah, free meal!");
  } else {
    myOutputValue =
      "you did not guess the dish and will have to pay for your meal!";
    console.log("try harder next time!");
  }
  // else return your order has been taken and you need to pay
  return myOutputValue;
};

var WinningDigit = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 10;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger;

  return diceNumber;
};

var fourDWinningRangeMain = function (input) {
  // generate 4 random digits
  var firstDigit = rollDice();
  var strOne = firstDigit.toString();
  var secondDigit = WinningDigit();
  var strTwo = secondDigit.toString();
  var thirdDigit = WinningDigit();
  var strThree = thirdDigit.toString();
  var fourthDigit = WinningDigit();
  var strFour = fourthDigit.toString();
  var myOutputValue = "good luck!";
  console.log(strOne + strTwo + strThree + strFour + " and " + myOutputValue);
  // define min & max within 1000 of the winning 4-digit number
  var WinningNumber = strOne + strTwo + strThree + strFour;
  var WinNumber = parseInt(WinningNumber, 10);
  var minWin = WinNumber - 1000;
  var maxWin = WinNumber + 1000;
  console.log(
    WinningNumber + " min guess = " + minWin + " and max guess = " + maxWin
  );
  // if input is >min AND <max, return you win the price
  if (input <= maxWin && input >= minWin) {
    myOutputValue = "yeah, you have won the price!";
    console.log("yeah so lucky!");
  }
  // else return you lose your money
  else {
    myOutputValue = "oh no, you have lost your money!";
    console.log("try harder!");
  }
  return myOutputValue;
};

// Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
var randomDish = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 3;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
var hawkerFoodOmakaseMain = function (input) {
  // define each dish;
  var myOutputValue = "welcome to uncle omekase menu! ";
  console.log(myOutputValue);
  // if input = rice, return two random rice dishes;
  if (input == "rice") {
    var riceOne = randomDish();
    var riceTwo = randomDish();
    console.log(riceOne + " and " + riceTwo);
    if ((riceOne == riceTwo) == 1) {
      myOutputValue += "chicken rice " + "and" + " roti prata. ";
      console.log("test 0");
    }
    if ((riceOne == riceTwo) == 2) {
      myOutputValue +=
        "nasi lemak " + "and" + " roti prata. " + "Sambal is included.";
      console.log("test 00");
    }
    if ((riceOne == riceTwo) == 3) {
      myOutputValue += "bak kut teh " + "and" + " roti prata. ";
      console.log("test 000");
    }
    if (riceOne == 1 && riceTwo == 2) {
      myOutputValue +=
        "chicken rice " + "and" + " nasi lemak. " + "Sambal is included.";
      console.log("test 1");
    }
    if (riceOne == 1 && riceTwo == 3) {
      myOutputValue += "chicken rice " + "and" + " bak kut teh. ";
      console.log("test 2");
    }
    if (riceOne == 2 && riceTwo == 3) {
      myOutputValue +=
        "nasi lemak " + "and" + " bak kut teh. " + "Sambal is included.";
      console.log("test 3");
    }
    if (riceOne == 2 && riceTwo == 1) {
      myOutputValue +=
        "nasi lemak " + "and" + " chicken rice. " + "Sambal is included.";
      console.log("test 4");
    }
    if (riceOne == 3 && riceTwo == 1) {
      myOutputValue += "bak kut teh " + "and" + " chicken rice. ";
      console.log("test 5");
    }
    if (riceOne == 3 && riceTwo == 2) {
      myOutputValue +=
        "bak kut teh " + "and" + " nasi lemak. " + "Sambal is included.";
      console.log("test 6");
    }
  }
  // else if input = noodle. return two random noodle dishes;
  else if (input == "noodle") {
    var NoodleOne = randomDish();
    var NoodleTwo = randomDish();
    console.log(NoodleOne + " and " + NoodleTwo);
    if ((NoodleOne == NoodleTwo) == 1) {
      myOutputValue += "hokkien mee " + "and" + " roti prata. ";
      console.log("test same noodle 1");
    }
    if ((NoodleOne == NoodleTwo) == 2) {
      myOutputValue += "laksa " + "and" + " roti prata. ";
      console.log("test same noodle 2");
    }
    if ((NoodleOne == NoodleTwo) == 3) {
      myOutputValue += "beef hor fun " + "and" + " roti prata. ";
      console.log("test same noodle 3");
    }
    if (NoodleOne == 1 && NoodleTwo == 2) {
      myOutputValue +=
        "hokkien mee " + "and" + " laksa. " + "Sambal is included.";
      console.log("test 7");
    }
    if (NoodleOne == 1 && NoodleTwo == 3) {
      myOutputValue += "hokkien mee " + "and" + " beef hor fun. ";
      console.log("test 8");
    }
    if (NoodleOne == 2 && NoodleTwo == 3) {
      myOutputValue +=
        "laksa " + "and" + " beef hor fun. " + "Sambal is included.";
      console.log("test 9");
    }
    if (NoodleOne == 2 && NoodleTwo == 1) {
      myOutputValue +=
        "laksa " + "and" + " hokkien mee. " + "Sambal is included.";
      console.log("test 10");
    }
    if (NoodleOne == 3 && NoodleTwo == 1) {
      myOutputValue += "beef hor fun " + "and" + " hokkien mee. ";
      console.log("test 11");
    }
    if (NoodleOne == 3 && NoodleTwo == 2) {
      myOutputValue +=
        "beef hor fun " + "and" + " laksa. " + "Sambal is included.";
      console.log("test 12");
    }
  } else {
    myOutputValue += " please enter either rice or noodle!";
  }
  // Optional: <br> to create a line of description for uncle's omakase;

  return myOutputValue;
};
