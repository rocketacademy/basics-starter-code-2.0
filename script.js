//Create functions for game modes
//Ask for player's name
//Greet player. Ask player to choose game mode
//Ask player to input choice
//Computer to choose
//Compare results and display results according to game mode.
var currentGameMode = "ask for username";
var winningTimes = 0;
var losingTimes = 0;
var gamesPlayed = 0;
var userName = "";
var myOutputValue = "";
//var winningPercentage = (winningTimes / gamesPlayed) * 100; WHY IS IT DISPLAYING NAN
//Start of normal game function
var playNormalGame = function (userName, guess) {
  if (
    guess != "scissors" ||
    guess != "paper" ||
    guess != "stone" ||
    guess != "reversed scissors" ||
    guess != "reversed paper" ||
    guess != "reversed stone"
  ) {
    var myOutputValue = "This is not a valid choice.";
  }
  //start of reversed game function
  var reversed = function () {
    var compChoice = Math.ceil(Math.random() * 3);
    if (compChoice == 1) {
      compChoice = "reversed scissors";
    }
    if (compChoice == 2) {
      compChoice = "reversed paper";
    }
    if (compChoice == 3) {
      compChoice = "reversed stone";
    }
    //compare player's guess to computer's guess and show results
    if (guess == compChoice) {
      console.log("guess is compchoice");
      console.log(compChoice);
      console.log(guess);
      message = `You chose ${guess}. <br>The computer chose ${compChoice}. <br>It's a draw. <br>You have played ${gamesPlayed} times, and you have won ${winningTimes} times and lost ${losingTimes} times.`;
    } else if (guess == "reversed scissors") {
      console.log(compChoice);
      console.log(guess);
      if (compChoice == "reversed stone") {
        winningTimes += 1;
        message = `You chose ${guess}. <br>The computer chose ${compChoice}. <br>You win! <br>You have played ${gamesPlayed} times, and you have won ${winningTimes} times and lost ${losingTimes} times.`;
      } else if (compChoice == "reversed paper") {
        losingTimes += 1;
        message = `You chose ${guess}??. <br>The computer chose ${compChoice}. <br>You lose. <br>You have played ${gamesPlayed} times, and you have won ${winningTimes} times and lost ${losingTimes} times.`;
      }
    } else if (guess == "reversed paper") {
      console.log(compChoice);
      console.log(guess);
      if (compChoice == "reversed stone") {
        losingTimes += 1;
        message = `You chose ${guess}??. <br>The computer chose ${compChoice}. <br>You lose. <br>You have played ${gamesPlayed} times, and you have won ${winningTimes} times and lost ${losingTimes} times.`;
      } else if (compChoice == "reversed scissors") {
        winningTimes += 1;
        message = `You chose ${guess}. <br>The computer chose ${compChoice}. <br>You win! <br>You have played ${gamesPlayed} times, and you have won ${winningTimes} times and lost ${losingTimes} times.`;
      }
    } else if (guess == "reversed stone") {
      console.log(compChoice);
      console.log(guess);
      if (compChoice == "reversed scissors") {
        losingTimes += 1;
        message = `You chose ${guess}. <br>The computer chose ${compChoice}. <br>You lose. <br>You have played ${gamesPlayed} times, and you have won ${winningTimes} times and lost ${losingTimes} times.`;
      } else if (compChoice == "reversed paper") {
        winningTimes += 1;
        message = `You chose ${guess}. <br>The computer chose ${compChoice}. <br>You win! <br>You have played ${gamesPlayed} times, and you have won ${winningTimes} times and lost ${losingTimes} times.`;
      }
    }
  };
  //end of reversed function
  if (guess.includes("reversed")) {
    console.log("do something special because text contains reversed");
    reversed();
  }

  gamesPlayed += 1;
  //let computer choose randomly
  var compChoice = Math.ceil(Math.random() * 3);
  if (compChoice == 1) {
    compChoice = "scissors";
  }
  if (compChoice == 2) {
    compChoice = "paper";
  }
  if (compChoice == 3) {
    compChoice = "stone";
  }
  //compare player's guess to computer's guess and show results
  if (guess == compChoice) {
    console.log("guess is " + compChoice);
    console.log(compChoice);
    console.log(guess);
    var message = `You chose ${guess}. <br>The computer chose ${compChoice}. <br>It's a draw.<br>You have played ${gamesPlayed} times, and you have won ${winningTimes} times and lost ${losingTimes} times.`;
  } else if (guess == "scissors") {
    console.log(compChoice);
    console.log(guess);
    if (compChoice == "stone") {
      losingTimes += 1;
      message = `You chose ${guess}. <br>The computer chose ${compChoice}. <br>You lose.<br>You have played ${gamesPlayed} times, and you have won ${winningTimes} times and lost ${losingTimes} times.`;
    } else if (compChoice == "paper") {
      winningTimes += 1;
      message = `You chose ${guess}. <br>The computer chose ${compChoice}. <br>You win!<br>You have played ${gamesPlayed} times, and you have won ${winningTimes} times and lost ${losingTimes} times.`;
    }
  } else if (guess == "paper") {
    console.log(compChoice);
    console.log(guess);
    if (compChoice == "stone") {
      winningTimes += 1;
      message = `You chose ${guess}:spiral_note_pad:. <br>The computer chose ${compChoice}. <br>You win!<br>You have played ${gamesPlayed} times, and you have won ${winningTimes} times and lost ${losingTimes} times.`;
    } else if (compChoice == "scissors") {
      losingTimes += 1;
      message = `You chose ${guess}:spiral_note_pad:. <br>The computer chose ${compChoice}. <br>You lose.<br>You have played ${gamesPlayed} times, and you have won ${winningTimes} times and lost ${losingTimes} times.`;
    }
  } else if (guess == "stone") {
    console.log(compChoice);
    console.log(guess);
    if (compChoice == "scissors") {
      winningTimes += 1;
      message = `You chose ${guess}. <br>The computer chose ${compChoice}. <br>You win!<br>You have played ${gamesPlayed} times, and you have won ${winningTimes} times and lost ${losingTimes} times.`;
    } else if (compChoice == "paper") {
      losingTimes += 1;
      message = `You chose ${guess}. <br>The computer chose ${compChoice}. <br>You lose. <br>You have played ${gamesPlayed} times, and you have won ${winningTimes} times and lost ${losingTimes} times.`;
    }
  }
  return message;
};
//End of normal game function
//Function to ask for username
var askName = function (input) {
  var askNameMessage = "Hi! What's your name?";
  return askNameMessage;
};
//END function to ask username.
var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "ask for username") {
    askName();
    // set the name
    userName = input;
    // now that we have the name, switch the mode
    currentGameMode = "play game";
    myOutputValue = `Hello ${userName}! <br>Please type "scissors", "paper" or "stone" (without quotation marks) to start! <br><br>Or, type "reversed scissors", "reversed paper" or "reversed stone" to play the reverse game!`;
  } else if (currentGameMode == "play game") {
    // refactored function that can be reused anywhere
    myOutputValue = playNormalGame(userName, input);
  }
  return myOutputValue;
};
