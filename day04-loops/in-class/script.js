/**
 * Base: Emoji Drawing Number of Characters
 */

var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var myOutputValue = '';
  var counter = 0;
  while (counter < Number(input)) {
    myOutputValue += '👍';
    counter += 1;
  }
  return myOutputValue;
};

/**
 * Base: Emoji Drawing Square
 */

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = '';
  // sideLength represents the length of each side of the square
  var sideLength = Number(input);
  var outerCounter = 0;
  while (outerCounter < sideLength) {
    var innerCounter = 0;
    while (innerCounter < sideLength) {
      // Add a 👍 to the current row
      myOutputValue += '👍';
      innerCounter += 1;
    }
    // Insert a line break to start a new row
    myOutputValue += '<br>';
    outerCounter += 1;
  }
  return myOutputValue;
};

/**
 * Comfortable: Emoji Drawing Triangle
 */

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var myOutputValue = '';
  // sideLength represents the length of each side of the square
  var sideLength = Number(input);
  var outerCounter = 0;
  while (outerCounter < sideLength) {
    var innerCounter = 0;
    // Change the inner loop to only run outerCounter number of times
    // This means that we only have as many 👍 on each line as the current row index.
    // To ensure we always print the last emoji on each row, change the inner loop
    // conditional to use <= instead of <.
    while (innerCounter <= outerCounter) {
      // Add a 👍 to the current row
      myOutputValue += '👍';
      innerCounter += 1;
    }
    // Insert a line break to start a new row
    myOutputValue += '<br>';
    outerCounter += 1;
  }
  return myOutputValue;
};

/**
 * More Comfortable: Emoji Drawing Outline Square
 */

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = '';
  // sideLength represents the length of each side of the square
  var sideLength = Number(input);
  var outerCounter = 0;
  while (outerCounter < sideLength) {
    var innerCounter = 0;
    while (innerCounter < sideLength) {
      // If current iteration represents a border element, draw ✊ instead.
      if (outerCounter == 0 || outerCounter == sideLength - 1
        || innerCounter == 0 || innerCounter == sideLength - 1) {
        myOutputValue += '✊';
      } else {
        // Add a 👍 to the current row
        myOutputValue += '👍';
      }

      innerCounter += 1;
    }
    // Insert a line break to start a new row
    myOutputValue += '<br>';
    outerCounter += 1;
  }
  return myOutputValue;
};

/**
 * More Comfortable: Emoji Drawing Center Square
 */

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = '';
  // sideLength represents the length of each side of the square
  var sideLength = Number(input);
  // Do not accept side lengths that are not odd, because
  // non-odd side lengths cannot have a centre character.
  if (sideLength % 2 != 1) {
    return 'Please enter an odd number for side length';
  }
  var outerCounter = 0;
  while (outerCounter < sideLength) {
    var innerCounter = 0;
    while (innerCounter < sideLength) {
      var halfSideLengthIndex = Math.floor(sideLength / 2);
      // If current iteration represents a border element, draw ✊ instead.
      if (outerCounter == 0 || outerCounter == sideLength - 1
        || innerCounter == 0 || innerCounter == sideLength - 1) {
        myOutputValue += '✊';
        // If current iteration represents the middle element, draw 😁.
      } else if (outerCounter === halfSideLengthIndex && innerCounter === halfSideLengthIndex) {
        myOutputValue += '😁';
        // Add a 👍 to the current row
      } else {
        myOutputValue += '👍';
      }
      innerCounter += 1;
    }
    // Insert a line break to start a new row
    myOutputValue += '<br>';
    outerCounter += 1;
  }
  return myOutputValue;
};

/**
 * Base: Multi-Dice Game
 */

// Declare game mode constant variables
// Constants variables are typically in SCREAM_CASE
var GAME_MODE_ENTER_NUM_DICE = 'ENTER_NUM_DICE';
var GAME_MODE_ENTER_GUESS = 'ENTER_GUESS';

// Initialise game mode to enter num dice mode
var gameMode = GAME_MODE_ENTER_NUM_DICE;

// Keep track of variables needed for a single round
var diceRolls = [];
var hasUserWon = false;
var numDice;

// Keep track of variables needed across multiple rounds
var numRoundsPlayed = 0;
var numWins = 0;

// Return a number from 1-6
var rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  if (gameMode == GAME_MODE_ENTER_NUM_DICE) {
    numDice = Number(input);
    gameMode = GAME_MODE_ENTER_GUESS;
    return `You have chosen to roll ${numDice} dice. Please enter a single guess for all of these dice.`;
  }
  // The following code assumes ENTER_GUESS game mode
  // because we return at the end of the previous if statement
  var userGuess = Number(input);
  // Initialise diceRolls array to store dice rolls for this round
  diceRolls = [];
  // Initialise hasUserWon to false for this round
  hasUserWon = false;
  // Increment number of games the user has played for win loss record
  numRoundsPlayed += 1;
  // Roll numDice number of dice
  var counter = 0;
  while (counter < numDice) {
    var diceRoll = rollDice();
    // Store the current dice roll in diceRolls to show the user later
    diceRolls.push(diceRoll);
    // If dice roll matches user guess, store that user has won
    if (diceRoll == userGuess) {
      hasUserWon = true;
    }
    counter += 1;
  }

  // Increment win counter if user has won
  if (hasUserWon) {
    numWins += 1;
  }

  // After the round is over, reset mode to enter num dice so user can play again.
  gameMode = GAME_MODE_ENTER_NUM_DICE;

  // Save generic output for both win and loss conditions to avoid repeating code.
  var numLosses = numRoundsPlayed - numWins;
  var genericOutputPrefix = `You guessed ${userGuess} and the computer rolled ${diceRolls}.`;
  var genericOutputSuffix = `
    Your win-loss record is ${numWins}-${numLosses}. <br/><br/>
    Please enter a number of dice to roll to start again.
  `;
  // If user has won, output win message.
  if (hasUserWon) {
    return `${genericOutputPrefix} You win! ${genericOutputSuffix}`;
  }
  // If user has not won, output lose message.
  return `${genericOutputPrefix} You lose. ${genericOutputSuffix}`;
};

/**
 * More Comfortable: Multi-Round Multi-Dice Game
 */

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  if (gameMode == GAME_MODE_ENTER_NUM_DICE) {
    numDice = Number(input);
    gameMode = GAME_MODE_ENTER_GUESS;
    return `You have chosen to roll ${numDice} dice. Please enter a single guess for all of these dice.`;
  }
  // The following code assumes ENTER_GUESS game mode
  // because we return at the end of the previous if statement
  var userGuess = Number(input);

  // Store all dice rolls for each round so user can see how they won or lost.
  var diceRollsForEachRound = [];

  // Play numRounds rounds with a fixed number of dice and a fixed user guess
  var roundCounter = 0;
  var numRounds = 4;
  while (roundCounter < numRounds) {
    // Initialise diceRolls array to store dice rolls for this round
    diceRolls = [];
    // Initialise hasUserWon to false for this round
    hasUserWon = false;
    // Increment number of rounds the user has played for win loss record
    numRoundsPlayed += 1;

    // Roll numDice number of dice
    var diceCounter = 0;
    while (diceCounter < numDice) {
      var diceRoll = rollDice();
      // Store the current dice roll in diceRolls to show the user later
      diceRolls.push(diceRoll);
      // If dice roll matches user guess, store that user has won.
      if (diceRoll == userGuess) {
        hasUserWon = true;
      }
      diceCounter += 1;
    }

    // Push the populated dice rolls array into the dice rolls for each round array
    diceRollsForEachRound.push(diceRolls);
    // Increment win counter if user has won
    if (hasUserWon) {
      numWins += 1;
    }
    roundCounter += 1;
  }

  // After numRounds, reset mode to enter num dice so user can play again.
  gameMode = GAME_MODE_ENTER_NUM_DICE;

  // Output result and win-loss record.
  var numLosses = numRoundsPlayed - numWins;
  // .join converts an array to a string where each element is separated by the param to .join.
  return `
    You guessed ${userGuess} and the computer rolled ${diceRollsForEachRound.join(' | ')}. <br/><br/>
    Your win-loss record is ${numWins}-${numLosses}. <br/><br/>
    Please enter a number of dice to roll to start again.
  `;
};

/**
 * More Comfortable: Two Player Multi-Round Multi-Dice Game
 */

// Start with Player 1
var currPlayer = 1;
var player1NumRoundsPlayed = 0;
var player1NumWins = 0;
var player2NumRoundsPlayed = 0;
var player2NumWins = 0;

var incrementNumRoundsPlayed = function () {
  if (currPlayer == 1) {
    player1NumRoundsPlayed += 1;
  } else {
    player2NumRoundsPlayed += 1;
  }
};

var incrementNumWins = function () {
  if (currPlayer == 1) {
    player1NumWins += 1;
  } else {
    player2NumWins += 1;
  }
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  if (gameMode == GAME_MODE_ENTER_NUM_DICE) {
    numDice = Number(input);
    gameMode = GAME_MODE_ENTER_GUESS;
    return `Player ${currPlayer}: You have chosen to roll ${numDice} dice. Please enter a single guess for all of these dice.`;
  }
  // The following code assumes ENTER_GUESS game mode
  // because we return at the end of the previous if statement
  var userGuess = Number(input);

  // Store all dice rolls for each round so user can see how they won or lost.
  var diceRollsForEachRound = [];

  // Play numRounds rounds with a fixed number of dice and a fixed user guess
  var roundCounter = 0;
  var numRounds = 4;
  while (roundCounter < numRounds) {
    // Initialise diceRolls array to store dice rolls for this round
    diceRolls = [];
    // Initialise hasUserWon to false for this round
    hasUserWon = false;
    // Increment number of rounds the user has played for win loss record
    incrementNumRoundsPlayed();

    // Roll numDice number of dice
    var diceCounter = 0;
    while (diceCounter < numDice) {
      var diceRoll = rollDice();
      // Store the current dice roll in diceRolls to show the user later
      diceRolls.push(diceRoll);
      // If dice roll matches user guess, store that user has won.
      if (diceRoll == userGuess) {
        hasUserWon = true;
      }
      diceCounter += 1;
    }

    // Push the populated dice rolls array into the dice rolls for each round array
    diceRollsForEachRound.push(diceRolls);
    // Increment win counter if user has won
    if (hasUserWon) {
      incrementNumWins();
    }
    roundCounter += 1;
  }

  // After numRounds, reset mode to enter num dice so user can play again.
  gameMode = GAME_MODE_ENTER_NUM_DICE;

  // Output result and win-loss record.
  var player1NumLosses = player1NumRoundsPlayed - player1NumWins;
  var player2NumLosses = player2NumRoundsPlayed - player2NumWins;
  // If currPlayer is 1, nextPlayer is 2. If currPlayer is 2, nextPlayer is 1.
  var nextPlayer = (currPlayer % 2) + 1;
  // .join converts an array to a string where each element is separated by the param to .join.
  var outputValue = `
    Player ${currPlayer}: You guessed ${userGuess} and the computer rolled ${diceRollsForEachRound.join(' | ')}. <br/><br/>
    Player 1 win-loss record is ${player1NumWins}-${player1NumLosses}. <br/><br/>
    Player 2 win-loss record is ${player2NumWins}-${player2NumLosses}. <br/><br/>
    Player ${nextPlayer}: Please enter a number of dice to roll for your turn.
  `;

  // Update currPlayer to nextPlayer before next turn
  currPlayer = nextPlayer;

  return outputValue;
};

/**
 * More Comfortable: Multi-Player Multi-Round Multi-Dice Game
 */

// Introduce new game mode, choose num players
var GAME_MODE_ENTER_NUM_PLAYERS = 'ENTER_NUM_PLAYERS';
// Name the game mode variable multiPlayerGameMode to deconflict with gameMode variable above
var multiPlayerGameMode = GAME_MODE_ENTER_NUM_PLAYERS;
// Introduce new global that stores number of players playing
var numPlayers;
// Keep track of all players' win-loss records in arrays
var numRoundsPlayedByEachPlayer = [];
var numWinsOfEachPlayer = [];

// Give this function a different name from 2-player multi-dice game to deconflict
var incrementNumRoundsPlayedByCurrPlayer = function () {
  var currPlayerIndex = currPlayer - 1;
  numRoundsPlayedByEachPlayer[currPlayerIndex] += 1;
};

// Give this function a different name from 2-player multi-dice game to deconflict
var incrementNumWinsOfCurrPlayer = function () {
  var currPlayerIndex = currPlayer - 1;
  numWinsOfEachPlayer[currPlayerIndex] += 1;
};

// Output current player's result and all players' win-loss records.
var generateOutputMessage = function (userGuess, diceRollsForCurrRound, nextPlayer) {
  var playerWinLossRecordsOutput = '';
  var playerCounter = 0;
  while (playerCounter < numPlayers) {
    // Create a string with all players' win loss record
    var playerNum = playerCounter + 1;
    var playerNumWins = numWinsOfEachPlayer[playerCounter];
    var playerNumLosses = numRoundsPlayedByEachPlayer[playerCounter] - playerNumWins;
    // Add the current player's win-loss record to the output string
    playerWinLossRecordsOutput += `Player ${playerNum} win-loss record is ${playerNumWins}-${playerNumLosses}. <br/><br/>`;
    // Move on to next player
    playerCounter += 1;
  }
  // .join converts an array to a string where each element is separated by the param to .join.
  return `
    Player ${currPlayer}: You guessed ${userGuess} and the computer rolled ${diceRollsForCurrRound.join(' | ')}. <br/><br/>
    ${playerWinLossRecordsOutput}
    Player ${nextPlayer}: Please enter a number of dice to roll for your turn.
  `;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  
  // This game mode only appears once at the beginning of the game.
  if (multiPlayerGameMode == GAME_MODE_ENTER_NUM_PLAYERS) {
    // Save input as numPlayers
    numPlayers = Number(input);
    // Initialise numRoundsPlayerByEachPlayer to empty array of length numPlayers with values of 0
    numRoundsPlayedByEachPlayer = Array(numPlayers).fill(0);
    // Initialise numWinsOfEachPlayer to empty array of length numPlayers with values of 0
    numWinsOfEachPlayer = Array(numPlayers).fill(0);
    // Change game mode to enter num dice
    multiPlayerGameMode = GAME_MODE_ENTER_NUM_DICE;
    return `
      You have chosen to play with ${numPlayers} players. <br/><br/>
      Player ${currPlayer}: Please enter the number of dice you want to roll.
    `;
  }

  if (multiPlayerGameMode == GAME_MODE_ENTER_NUM_DICE) {
    // Save input as numDice
    numDice = Number(input);
    // Change game mode to enter guess
    multiPlayerGameMode = GAME_MODE_ENTER_GUESS;
    return `Player ${currPlayer}: You have chosen to roll ${numDice} dice. Please enter a single guess for all of these dice.`;
  }

  // The following code assumes ENTER_GUESS game mode
  // because we return at the end of the previous if statement
  var userGuess = Number(input);

  // Store all dice rolls for each round so user can see how they won or lost.
  var diceRollsForEachRound = [];

  // Play numRounds rounds with a fixed number of dice and a fixed user guess
  var roundCounter = 0;
  var numRounds = 4;
  while (roundCounter < numRounds) {
    // Initialise diceRolls array to store dice rolls for this round
    diceRolls = [];
    // Initialise hasUserWon to false for this round
    hasUserWon = false;
    // Increment number of rounds the user has played for win loss record
    incrementNumRoundsPlayedByCurrPlayer();

    // Roll numDice number of dice
    var diceCounter = 0;
    while (diceCounter < numDice) {
      var diceRoll = rollDice();
      // Store the current dice roll in diceRolls to show the user later
      diceRolls.push(diceRoll);
      // If dice roll matches user guess, store that user has won.
      if (diceRoll == userGuess) {
        hasUserWon = true;
      }
      diceCounter += 1;
    }

    // Push the populated dice rolls array into the dice rolls for each round array
    diceRollsForEachRound.push(diceRolls);
    // Increment win counter if user has won
    if (hasUserWon) {
      incrementNumWinsOfCurrPlayer();
    }
    roundCounter += 1;
  }

  // After numRounds, reset mode to enter num dice for next player's turn
  multiPlayerGameMode = GAME_MODE_ENTER_NUM_DICE;
  // Next player is the current player + 1, or 1 if current player is the last player.
  var nextPlayer = (currPlayer % numPlayers) + 1;
  // Generate output message based on current game state
  var outputMessage = generateOutputMessage(userGuess, diceRollsForEachRound, nextPlayer);
  // Update currPlayer to nextPlayer before next turn
  currPlayer = nextPlayer;
  // Display output message to players
  return outputMessage;
};