// define dice roll function
var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

// define sorting array in decreasing order (not done yet)
var sortArray = function (anArray) {
  var arraylength = anArray.length;
  var i = 0;
  while (i < arraylength - 1) {
    var j = 0;
    while (j < arraylength - 1) {
      if (anArray[j + 1] > anArray[j]) {
        var temp = anArray[j];
        anArray[j] = anArray[j + 1];
        anArray[j + 1] = temp;
      }
      j += 1;
    }
    i += 1;
  }
};

// define global variables
var playerMode = "player 1";
var subMode = "rolldice";
var playerOne = 0;
var playerTwo = 0;
var oneRoll = 0;
var twoRoll = 0;
var threeRoll = 0;
var fourRoll = 0;
var gameMode = "no input";
var playerOneScore = 0;
var playerTwoScore = 0;
var numberOfDice = 0;
var statusOfGame = "false";
var counter = 0;
var playerOneArray = [];
var playerTwoArray = [];

// main game operations
var main = function (input) {
  var myOutputValue = " ";
  // define basic variables
  // decide which game mode to go for
  if (gameMode == "no input") {
    if (input == "higher wins") {
      gameMode = "higher wins";
      myOutputValue =
        "You have chosen 'higher wins' game mode.<br><br> Players with higher number wins.<br><br> Click 'Submit' to start rolling dices for player 1.";
    } else if (input == "lower wins") {
      gameMode = "lower wins";
      myOutputValue =
        "You have chosen 'lower wins' game mode.<br><br> Players with lower number wins.<br><br> Click 'Submit' to start rolling dices for player 1.";
    } else if (input == "variable dice") {
      gameMode = "variable dice";
      myOutputValue =
        "you have chosen 'variable dice' game mode.<br><br> Players with higher number wins. <br><br> Please key in the number of dice per player. ";
    } else {
      myOutputValue =
        "Please enter one of the following game modes: 'higher wins', 'lower wins', 'variable dice'.";
    }
  }

  // higher wins game mode: only 2 players. player choose the order and higher number wins.
  else if (gameMode == "higher wins") {
    // player 1 decide the combined number
    if (playerMode === "player 1") {
      if (subMode === "rolldice") {
        oneRoll = rollDice();
        twoRoll = rollDice();

        myOutputValue =
          "Welcome Player 1. <br> You rolled " +
          oneRoll +
          " for Dice 1 and " +
          twoRoll +
          ' for Dice 2.<br> Choose the order of the dice by typing "dice 1 first" or "dice 2 first".';
        subMode = "diceorder";

        // player 1 chooses the dice order
      } else if (subMode === "diceorder") {
        if (input === "dice 1 first") {
          playerOne = oneRoll * 10 + twoRoll;
          myOutputValue =
            "Player 1, you chose Dice 1 first.<br> Your number is " +
            playerOne +
            ".<br> It is now Player 2's turn.";
        } else if (input === "dice 2 first") {
          playerOne = twoRoll * 10 + oneRoll;
          myOutputValue =
            "Player 1, you chose Dice 2 first.<br> Your number is " +
            playerOne +
            ".<br> It is now Player 2's turn.";
        }
        playerMode = "player 2";
        subMode = "rolldice";
      }
    }
    // player 2 decide the combined number
    else if (playerMode === "player 2") {
      if (subMode === "rolldice") {
        threeRoll = rollDice();
        fourRoll = rollDice();

        myOutputValue =
          "Welcome Player 2.<br> You rolled " +
          threeRoll +
          " for Dice 1 and " +
          fourRoll +
          ' for Dice 2.<br> Choose the order of the dice by typing "dice 1 first" or "dice 2 first".';
        subMode = "dice order";
      } else if (subMode === "dice order") {
        if (input === "dice 1 first") {
          playerTwo = threeRoll * 10 + fourRoll;
          myOutputValue =
            "Player 2, you chose Dice 1 first.<br> Your number is " +
            playerTwo +
            ".<br> Please enter 'compare' to see which player has a greater number.";
        } else if (input === "dice 2 first") {
          playerTwo = fourRoll * 10 + threeRoll;
          myOutputValue =
            "Player 2, you chose Dice 2 first.<br> Your number is " +
            playerTwo +
            ".<br> Please enter 'compare' to see which player has a greater number.";
        }
        playerMode = "comparenumber";
      }
    }

    // compare two combined number and output the winner
    if (playerOne !== 0 && playerTwo !== 0 && playerMode === "comparenumber") {
      playerOneScore += playerOne;
      playerTwoScore += playerTwo;
      if (playerOne === playerTwo) {
        myOutputValue = "Both players have the same number, so it is a draw!";
      } else if (playerOne > playerTwo) {
        myOutputValue =
          "Player 1's number is " +
          playerOne +
          ".<br> Player 2's number is " +
          playerTwo +
          ".<br> So Player 1 has a greater number. ";
      } else if (playerOne < playerTwo) {
        myOutputValue =
          "Player 1's number is " +
          playerOne +
          ".<br> Player 2's number is " +
          playerTwo +
          ".<br> So Player 2 has a greater number.";
      }

      if (playerOneScore >= playerTwoScore) {
        myOutputValue +=
          "<br><br> Leaderboard:<br> Player 1: " +
          playerOneScore +
          "<br> Player 2: " +
          playerTwoScore;
      } else if (playerOneScore < playerTwoScore) {
        myOutputValue +=
          "<br><br> Leaderboard: <br> Player 2: " +
          playerTwoScore +
          "<br> Player 1: " +
          playerOneScore;
      }
      myOutputValue +=
        "<br><br> Start a new round by clicking 'Submit' to roll dice.";
      playerMode = "player 1";
      subMode = "rolldice";
    }
  }
  // lower wins game mode: 2 players and player with lower number wins. Order will be automatically generated by computer.
  else if (gameMode == "lower wins") {
    if (playerMode === "player 1") {
      if (subMode === "rolldice") {
        oneRoll = rollDice();
        twoRoll = rollDice();
        myOutputValue =
          "Welcome Player 1. <br> You rolled " +
          oneRoll +
          " for Dice 1 and " +
          twoRoll +
          " for Dice 2.<br> Click 'Submit' to generate the lowest combination. ";
        subMode = "diceorder";

        // player 1 chooses the dice order
      } else if (subMode === "diceorder") {
        if (oneRoll <= twoRoll) {
          playerOne = oneRoll * 10 + twoRoll;
          myOutputValue =
            "Player 1, your number is " +
            playerOne +
            ".<br> It is now Player 2's turn.";
        } else if (oneRoll > twoRoll) {
          playerOne = twoRoll * 10 + oneRoll;
          myOutputValue =
            "Player 1, your number is " +
            playerOne +
            ".<br> It is now Player 2's turn.";
        }
        playerMode = "player 2";
        subMode = "rolldice";
      }
    }
    // player 2 decide the combined number
    else if (playerMode === "player 2") {
      if (subMode === "rolldice") {
        threeRoll = rollDice();
        fourRoll = rollDice();
        myOutputValue =
          "Welcome Player 2.<br> You rolled " +
          threeRoll +
          " for Dice 1 and " +
          fourRoll +
          " for Dice 2.<br> Click 'Submit' to generate the lowest combination.";
        subMode = "dice order";
      } else if (subMode === "dice order") {
        if (threeRoll <= fourRoll) {
          playerTwo = threeRoll * 10 + fourRoll;
          myOutputValue =
            "Player 2, Your number is " +
            playerTwo +
            ".<br> Please enter 'compare' to see which player has a greater number.";
        } else if (threeRoll > fourRoll) {
          playerTwo = fourRoll * 10 + threeRoll;
          myOutputValue =
            "Player 2, your number is " +
            playerTwo +
            ".<br> Please enter 'compare' to see which player has a greater number.";
        }
        playerMode = "comparenumber";
      }
    }

    // compare two combined number and output the winner
    if (playerOne !== 0 && playerTwo !== 0 && playerMode === "comparenumber") {
      playerOneScore += playerOne;
      playerTwoScore += playerTwo;
      if (playerOne === playerTwo) {
        myOutputValue = "Both players have the same number, so it is a draw!";
      } else if (playerOne > playerTwo) {
        myOutputValue =
          "Player 1's number is " +
          playerOne +
          ".<br> Player 2's number is " +
          playerTwo +
          ".<br> So Player 2 has a lower number.";
      } else if (playerOne < playerTwo) {
        myOutputValue =
          "Player 1's number is " +
          playerOne +
          ".<br> Player 2's number is " +
          playerTwo +
          ".<br> So Player 1 has a lower number.";
      }
      // record for leaderboard
      if (playerOneScore >= playerTwoScore) {
        myOutputValue +=
          "<br><br> Leadboard:<br> Player 1: " +
          playerOneScore +
          "<br> Player 2: " +
          playerTwoScore;
      } else if (playerOneScore < playerTwoScore) {
        myOutputValue +=
          "<br><br> Leaderboard: <br> Player 2: " +
          playerTwoScore +
          "<br> Player 1: " +
          playerOneScore;
      }
      myOutputValue +=
        "<br><br> Start a new round by clicking 'Submit' to roll dice.";
      playerMode = "player 1";
      subMode = "rolldice";
    }
  }
  // variable dice game mode: 2 players, player define number of dice per player, highest number wins.
  else if (gameMode == "variable dice") {
    if (statusOfGame == "false") {
      numberOfDice = input;
      myOutputValue =
        "You have set " +
        numberOfDice +
        " dice for each player.<br> Click 'Submit' to roll dice for player 1.";
      statusOfGame = "true";
    } else if (statusOfGame == "true") {
      // generate dice number for player 1
      if (playerMode == "player 1") {
        while (counter < numberOfDice) {
          oneRoll = rollDice();
          playerOneArray.push(oneRoll);

          counter += 1;
        }
        myOutputValue = "Player 1's dice numbers are: " + playerOneArray;
        playerMode = "player 2";
        counter = 0;
      } else if (playerMode == "player 2") {
        while (counter < numberOfDice) {
          twoRoll = rollDice();
          playerTwoArray.push(twoRoll);

          counter += 1;
        }
        myOutputValue =
          "Player 1's dice numbers are: " +
          playerOneArray +
          "<br> Player 2's dice numbers are: " +
          playerTwoArray;
      }
    }
  }

  // reset to restart and choose new game mode
  if (input === "reset") {
    gameMode = "no input";
    playerMode = "player 1";
    subMode = "rolldice";
    playerOneScore = 0;
    playerTwoScore = 0;
    myOutputValue =
      "You have reset the game.<br><br> Please enter one of the following game modes: 'higher wins', 'lower wins'. ";
  }
  return myOutputValue;
};
