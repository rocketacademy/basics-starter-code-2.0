// Requirements //
// 1) There are only 2 players and the players will take turn
// 2) What a player click the submit button, the game rolls 2 dice and show the dice rolls, for example 1 or 9
//3)the player then click on the dice they want to form the number that they want, if they want 91, they would chose dice 2 first.

// Problem breakdown and planning //
// ver 1. rolls 2 dice and turns the output for player 1. The player chooses the dice and then get the correct return output
// ver 2. refactored to include player 2
//  -global variables for currentPlayer; allPlayerScore
//  -refactor outputMessages to interact with each player, 1 and 2
//  -write logic for player 1 to go first then player 2, and finally point towards comparing score
// ver 3. implement comparing the dice scores and declare the winner
// ver 4. reset the game so that the players can play continually without refreshing the browser page

var GAME_STATE_DICE_ROLL = "GAME_STATE_DICE_ROLL";
var GAME_STATE_CHOOSE_DIE_ORDER = "GAME_STATE_CHOOSE_DIE_ORDER";
var GAME_STATE_COMPARE_SCORES = "GAME_STATE_COMPARE_SCORES";
var gameState = GAME_STATE_DICE_ROLL;
var scores = {
  1: 0,
  2: 0
};

var currentPlayer = 1;
var currentPlayerRolls = [];
var allPlayersScore = [];

//Helper Function
var rollDice = function () {
  console.log("Control Flow: start of rollDice");
  // Random Decimal between 0 and 6
  var randomDecimal = Math.random() * 6;
  //random integer from 1 to 6
  var randomInteger = Math.floor(randomDecimal) + 1;

  console.log("rollDice output, randomInteger: ", randomInteger);
  return randomInteger;
};

var rollDiceForPlayer = function () {
  //Clear current player rolls array
  currentPlayerRolls = [];
  console.log("CF : start of rollDiceForPlayer()");
  var counter = 0;
  while (counter < 2) {
    currentPlayerRolls.push(rollDice());
    counter = counter + 1;
  }
  console.log("rollDiceForPlayer changes, playerRolls: ", currentPlayerRolls);
  return (
    "Welcome my friend, Player" +
    currentPlayer +
    "<br><br>You rolled:<br>Dice 1: " +
    currentPlayerRolls[0] +
    " | Dice 2: " +
    currentPlayerRolls[1] +
    ".<br><br>Now, please input either '1' or '2' to choose the corresponding dice to be used as the first digit of your final value."
  );
};

var getPlayerScore = function (playerInput) {
  var playerScore;

  //input validation
  if (playerInput != 1 && playerInput != 2) {
    console.log("CF: input validation, invalid input... NOT 1 and NOT 2");
    return (
      "Error!, Please only input '1' or '2' to choose which dice to use as the first digit.<br><br>Your dice rolls are:<br>Dice 1: " +
      currentPlayerRolls[0] +
      " | Dice 2: " +
      currentPlayerRolls[1] +
      "."
    );
  }

  // input == 1
  if (playerInput == 1) {
    playerScore = Number(
      String(currentPlayerRolls[0]) + String(currentPlayerRolls[1])
    );
  }
  //input == 2
  if (playerInput == 2) {
    playerScore = Number(
      String(currentPlayerRolls[1]) + String(currentPlayerRolls[0])
    );
  }
  //Store player score in array
  allPlayersScore.push(playerScore);

  return "Player " + currentPlayer + ", your chose value is: " + playerScore;
};

// MAIN FUNCTION
var main = function (input) {
  var outputMessage = "";

  if (gameState === GAME_STATE_DICE_ROLL) {
    console.log("Control Flow: gameState = GAME_STATE_DICE_ROLL");

    // Display rice rolled as output message
    outputMessage = rollDiceForPlayer();

    // Change the game state
    gameState = GAME_STATE_CHOOSE_DIE_ORDER;

    return outputMessage;
  }
  if (gameState === GAME_STATE_CHOOSE_DIE_ORDER) {
    console.log("CF: gameState == GAME_STATE_CHOOSE_DIE_ORDER");
    //Call playerScore function
    outputMessage = getPlayerScore(input);

    if (currentPlayer == 1) {
      console.log("CF: end of player 1's turn, now player 2's turn");
      currentPlayer = 2;
      gameState = GAME_STATE_DICE_ROLL;
      return outputMessage + "<br><br>It is now player 2's turn!";
    }
    if (currentPlayer == 2) {
      console.log(
        "CF: end of player 2's turn, click on submit to calculate score"
      );
      gameState = GAME_STATE_COMPARE_SCORES;
      return outputMessage + "<br><br>Press Submit to calculate score!";
    }
  }
  if (gameState === GAME_STATE_COMPARE_SCORES) {
    console.log("CF: gameState == GAME_STATE_COMPARE_SCORES");
    outputMessage =
      "Player 1 score: " +
      allPlayersScore[0] +
      "<br>Player 2 score: " +
      allPlayersScore[1];
    // Player 1 wins
    if (allPlayersScore[0] > allPlayersScore[1]) {
      scores[1] += 1;
      outputMessage =
        outputMessage +
        "<br><br>Player 1 wins! <br><br>Player 1 wins " +
        scores[1] +
        "<br>Player 2 wins " +
        scores[2];
    }
    // Player 2 wins
    if (allPlayersScore[1] > allPlayersScore[0]) {
      scores[2] += 1;
      outputMessage =
        outputMessage +
        "<br><br>Player 2 wins! <br><br>Player 1 wins " +
        scores[1] +
        "<br>Player 2 wins " +
        scores[2];
    }
    // Tie
    if (allPlayersScore[1] === allPlayersScore[0]) {
      outputMessage =
        outputMessage +
        "<br><br>Player 1 wins! <br><br>Player 1 wins " +
        scores[1] +
        "<br>Player 2 wins " +
        scores[2];
    }
    gameState = GAME_STATE_DICE_ROLL;
    currentPlayer = 1;
    currentPlayerRolls = [];
    allPlayersScore = [];
    return outputMessage;
  }
};
