// Define random integer from 1 to 3
var randomNumber = function (max) {
  // Generate a decimal from 0 through max, inclusive of 0 and exclusive of max.
  var randomDecimal = Math.random() * max;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to max -1 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through max inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
// Randomly chooses scissors, paper or stone
var randomChoose = function () {
  var numberOptions = 3;
  var finalChoose = randomNumber(numberOptions);
  var computer = "good luck! ";
  console.log(computer + " random number = " + finalChoose);
  // if randomNumber is 1, return scissors
  if (finalChoose == 1) {
    return (computer = "scissors");
  }
  // if randomNumber is 2, return paper
  else if (finalChoose == 2) {
    return (computer = "paper");
  }
  // if randomNumber is 3, return stone
  else if (finalChoose == 3) {
    return (computer = "stone");
  }
};

var TotalRoll = 0;
var WinRoll = 0;
var WinRate = 0;

// main operation - regular rules
var RegularGame = function (input) {
  var myOutputValue = "best luck!";
  var computerFinal = randomChoose();
  console.log("computer chooses " + computerFinal);
  // when input is not valid, return please enter 'stone', 'scissors' or 'paper'.
  if (input != "stone" && input != "scissors" && input != "paper") {
    myOutputValue =
      "This is an invalid entry.<br> Please enter 'stone' 'scissors' or 'paper' to play.";
    console.log(input + " is an invalid entry. Try again!");
  }
  // when input matches randomChoose, return it's a draw
  else if (input == computerFinal) {
    TotalRoll = TotalRoll + 1;
    console.log(
      "Win roll number is: " + WinRoll + ". Total roll number is " + TotalRoll
    );
    WinRate = (WinRoll / TotalRoll) * 100;
    myOutputValue =
      "The computer chose " +
      computerFinal +
      ".<br>" +
      "You chose " +
      input +
      ".<br><br>" +
      "Oops, it is a draw! Your win rate is " +
      WinRate +
      "% of all games.<br><br> Now you can type 'scissors' 'paper' or 'stone' to play another round!";
    console.log("you and computer has the same guess!");
  }

  // when input = scissors, and randomChoose is paper, you win
  else if (input == "scissors" && computerFinal == "paper") {
    TotalRoll = TotalRoll + 1;
    WinRoll = WinRoll + 1;
    console.log(
      "Win roll number is: " + WinRoll + ". Total roll number is " + TotalRoll
    );
    WinRate = (WinRoll / TotalRoll) * 100;
    myOutputValue =
      "The computer chose " +
      computerFinal +
      ".<br>" +
      "You chose " +
      input +
      ".<br><br>" +
      "yeah, you win! Your win rate is " +
      WinRate +
      "% of all games.<br><br> Now you can type 'scissors' 'paper' or 'stone' to play another round!";
    console.log("scissors wins paper, you win!");
  }

  // when input = paper, and randomChoose is stone, you win
  else if (input == "paper" && computerFinal == "stone") {
    TotalRoll = TotalRoll + 1;
    WinRoll = WinRoll + 1;
    console.log(
      "Win roll number is: " + WinRoll + ". Total roll number is " + TotalRoll
    );
    WinRate = (WinRoll / TotalRoll) * 100;
    myOutputValue =
      "The computer chose " +
      computerFinal +
      ".<br>" +
      "You chose " +
      input +
      ".<br><br>" +
      "yeah, you win! Your win rate is " +
      WinRate +
      "% of all games.<br><br> Now you can type 'scissors' 'paper' or 'stone' to play another round!";
    console.log("paper wins stone, you win!");
  }

  // when input = stone, and randonChoose is scissors, you win
  else if (input == "stone" && computerFinal == "scissors") {
    TotalRoll = TotalRoll + 1;
    WinRoll = WinRoll + 1;
    console.log(
      "Win roll number is: " + WinRoll + ". Total roll number is " + TotalRoll
    );
    WinRate = (WinRoll / TotalRoll) * 100;
    myOutputValue =
      "The computer chose " +
      computerFinal +
      ".<br>" +
      "You chose " +
      input +
      ".<br><br>" +
      "yeah, you win! Your win rate is " +
      WinRate +
      "% of all games. <br><br> Now you can type 'scissors' 'paper' or 'stone' to play another round!";
    console.log("stone wins scissors, you win!");
  }
  // otherwise, you lose
  else {
    TotalRoll = TotalRoll + 1;
    console.log(
      "Win roll number is: " + WinRoll + ". Total roll number is " + TotalRoll
    );
    WinRate = (WinRoll / TotalRoll) * 100;
    myOutputValue =
      "The computer chose " +
      computerFinal +
      ".<br>" +
      "You chose " +
      input +
      ".<br><br>" +
      "Oh no, you lose! Your win rate is " +
      WinRate +
      "% of all games. <br><br> Now you can type 'scissors' 'paper' or 'stone' to play another round!";
    console.log("try again, good luck!");
  }
  return myOutputValue;
};

// main operation - reversed game
var reversedGame = function (input) {
  var myOutputValue = "best luck!";
  var computerFinal = randomChoose();
  console.log("reverse computer chooses " + computerFinal);
  // when input is not valid, return please enter 'stone', 'scissors' or 'paper'.
  if (input != "stone" && input != "scissors" && input != "paper") {
    myOutputValue =
      "This is an invalid entry.<br> Please enter 'stone' 'scissors' or 'paper' to play.";
    console.log(
      input + " is an invalid reverse entry. Try again reversed game!"
    );
  }
  // when input matches randomChoose, return it's a draw
  else if (input == computerFinal) {
    TotalRoll = TotalRoll + 1;
    console.log(
      "Win roll number is: " + WinRoll + ". Total roll number is " + TotalRoll
    );
    WinRate = (WinRoll / TotalRoll) * 100;
    myOutputValue =
      "The computer chose " +
      computerFinal +
      ".<br>" +
      "You chose " +
      input +
      ".<br>" +
      "Oops, it is a draw! Your win Rate is " +
      WinRate +
      "% of all games.<br><br> Now you can type 'scissors' 'paper' or 'stone' to play another round!";
    console.log("you and computer has the same guess!");
  }

  // when input = scissors, and randomChoose is stone, you win
  else if (input == "scissors" && computerFinal == "stone") {
    TotalRoll = TotalRoll + 1;
    WinRoll = WinRoll + 1;
    console.log(
      "Win roll number is: " + WinRoll + ". Total roll number is " + TotalRoll
    );
    WinRate = (WinRoll / TotalRoll) * 100;
    myOutputValue =
      "The computer chose " +
      computerFinal +
      ".<br>" +
      "You chose " +
      input +
      ".<br><br>" +
      "yeah, you win! Your win rate is " +
      WinRate +
      "% of all games.<br><br> Now you can type 'scissors' 'paper' or 'stone' to play another round!";
    console.log("reversed game: scissors wins stone, you win!");
  }

  // when input = paper, and randomChoose is scissors, you win
  else if (input == "paper" && computerFinal == "scissors") {
    TotalRoll = TotalRoll + 1;
    WinRoll = WinRoll + 1;
    console.log(
      "Win roll number is: " + WinRoll + ". Total roll number is " + TotalRoll
    );
    WinRate = (WinRoll / TotalRoll) * 100;
    myOutputValue =
      "The computer chose " +
      computerFinal +
      ".<br>" +
      "You chose " +
      input +
      ".<br><br>" +
      "yeah, you win! Your win rate is " +
      WinRate +
      "% of all games.<br><br> Now you can type 'scissors' 'paper' or 'stone' to play another round!";
    console.log("reversed game: paper wins scissors, you win!");
  }

  // when input = stone, and randonChoose is paper, you win
  else if (input == "stone" && computerFinal == "paper") {
    TotalRoll = TotalRoll + 1;
    WinRoll = WinRoll + 1;
    console.log(
      "Win roll number is: " + WinRoll + ". Total roll number is " + TotalRoll
    );
    WinRate = (WinRoll / TotalRoll) * 100;
    myOutputValue =
      "The computer chose " +
      computerFinal +
      ".<br>" +
      "You chose " +
      input +
      ".<br><br>" +
      "yeah, you win! Your win rate is" +
      WinRate +
      "% of all games.<br><br> Now you can type 'scissors' 'paper' or 'stone' to play another round!";
    console.log("reversed game: stone wins paper, you win!");
  }
  // otherwise, you lose
  else {
    TotalRoll = TotalRoll + 1;
    console.log(
      "Win roll number is: " + WinRoll + ". Total roll number is " + TotalRoll
    );
    WinRate = (WinRoll / TotalRoll) * 100;
    myOutputValue =
      "The computer chose " +
      computerFinal +
      ".<br>" +
      "You chose " +
      input +
      ".<br><br>" +
      "Oh no, you lose! Your win rate is " +
      WinRate +
      "% of all games.<br><br> Now you can type 'scissors' 'paper' or 'stone' to play another round!";
    console.log("try again, good luck!");
  }
  return myOutputValue;
};

// set the game mode
var currentGameMode = "waiting for user name";
var userName = "Hi";

var main = function (input) {
  var myOutputValue = " ";
  // mode 1: set the user name
  if (currentGameMode == "waiting for user name") {
    userName = input;
    currentGameMode = "choose regular or reverse";
    myOutputValue =
      "Hello, " +
      userName +
      "!<br> Enter 'regular' for regular game and 'reverse' for reversed game!";
  } else if (currentGameMode == "choose regular or reverse") {
    if (input == "regular") {
      currentGameMode = "regular game";
      myOutputValue =
        userName +
        ", you have chosen to play regular Scissors Paper Stone!<br> Now enter 'scissors' 'paper' 'stone' to start the game!<br> Good luck!";
    } else if (input == "reverse") {
      currentGameMode = "reversed game";
      myOutputValue =
        userName +
        ", you have chosen to play reversed Scissors Paper Stone!<br> Now enter 'scissors' 'paper' 'stone' to start the reversed game!<br> Good luck!";
    } else {
      myOutputValue =
        "Your input is invalid.<br> Please restart the game by refreshing the page.";
    }
  } else if (currentGameMode == "regular game") {
    // mode 2: regular game
    myOutputValue = RegularGame(input);
  }
  // mode 3: reversed game
  else if (currentGameMode == "reversed game") {
    myOutputValue = reversedGame(input);
  }
  return myOutputValue;
};
