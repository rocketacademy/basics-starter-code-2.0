// Create a number generator.
var numberGenerator = function () {
  return Math.floor(Math.random() * 3) + 1;
};

// Assign scissors/paper/stone to the number generated.
var spsGenerator = function () {
  var randomNumber = numberGenerator();

  if (randomNumber == 1) {
    return "scissors";
  } else if (randomNumber == 2) {
    return "paper";
  } else return "stone";
};

// Create win count for both program and user
var userWinCount = 0;
var programWinCount = 0;
var drawCount = 0;

// Keep track of username
var userName = "";

// Keep track of mode selection
var mode = "";

// Playing instructions
var playingInstructionsTemplate = function () {
  var greetings = `Welcome ${userName}. Thanks for playing.<br> To begin, enter `;
  if (mode == "normal") {
    var instructions = `"scissors", or "paper", or "stone".`;
  }
  if (mode == "reversed") {
    var instructions = `"reversed scissors", or "reversed paper", or "reversed stone".`;
  }
  if (mode == "korean") {
    var instructions = `"scissors", or "paper", or "stone".`;
  }
  if (mode == "compvscomp") {
    var instructions = `"scissors", or "paper", or "stone".`;
  }
  return greetings + instructions;
};

var main = function (input) {
  // Username
  // If there is no username assigned.
  if (!userName) {
    // If there is no input.
    if (!input) {
      return `Please enter your username.`;
    }
    userName = input;

    return `Welcome ${userName}. Please type in your desired game mode.`;
  }

  // Mode selection
  // If there is no mode assigned.
  if (!mode) {
    // If there is no input.
    if (!input) {
      return `Please select a game mode among "normal", "reversed", "korean", and "compvscomp"`;
    }

    // Input validation
    if (
      input !== "normal" &&
      input !== "reversed" &&
      input !== "korean" &&
      input !== "compvscomp"
    ) {
      return `Please select a game mode among "normal", "reversed", "korean", and "compvscomp"`;
    }

    mode = input;
    var playingInstructions = playingInstructionsTemplate();
    return playingInstructions;
  }

  // Input validation
  if (
    input !== "scissors" &&
    input !== "paper" &&
    input !== "stone" &&
    input !== "reversed scissors" &&
    input !== "reversed paper" &&
    input !== "reversed stone"
  ) {
    var message = `
    ${userName}'s input is ${input}.<br>
    Please type only "scissors", "paper", or "stone" to play the game.<br><br>
    Alternatively, try your luck at reversed mode by adding the word "reversed" in front of your choice.<br><br>`;
  }

  // Generate program SPS
  var programSPS = spsGenerator();

  // Korean
  if (mode == "korean") {
    if (!attacker) {
      if (input == programSPS) {
        var message = `${userName} chose ${input}.<br>
      Program chose ${programSPS}.<br><br>
      It's a draw.<br><br>
      You can type "scissors" "paper" or "stone" to play another round!<br><br>`;
      }
    }
    if (input == programSPS) {
      var message = `${userName} chose ${input}.<br>
    Program chose ${programSPS}.<br><br>
    It's a draw.<br><br>
    You can type "scissors" "paper" or "stone" to play another round!<br><br>`;
    }
    if (
      (input == "scissors" && programSPS == "stone") ||
      (input == "stone" && programSPS == "paper") ||
      (input == "paper" && programSPS == "scissors")
    ) {
      var attacker = "program";
      var message = `${userName} chose ${input}.<br>
      Program chose ${programSPS}.<br><br>
      ${userName} is the defender.<br><br>
      You can type "scissors" "paper" or "stone" to play another round!<br><br>`;
    }
    if (
      (input == "scissors" && programSPS == "paper") ||
      (input == "stone" && programSPS == "scissors") ||
      (input == "paper" && programSPS == "stone")
    ) {
      var attacker = "user";
      var message = `${userName} chose ${input}.<br>
      Program chose ${programSPS}.<br><br>
      ${userName} is the attacker.<br><br>
      You can type "scissors" "paper" or "stone" to play another round!<br><br>`;
    }
  }

  // Win/lose/draw condition
  if (
    input == programSPS ||
    (input == "reversed scissors" && programSPS == "scissors") ||
    (input == "reversed paper" && programSPS == "paper") ||
    (input == "reversed stone" && programSPS == "stone")
  ) {
    drawCount += 1;
    totalGames += 1;
    message = `${userName} chose ${input}.<br>
    Program chose ${programSPS}.<br><br>
    It's a draw.<br><br>
    You can type "scissors" "paper" or "stone" to play another round!<br><br>`;
  }
  if (
    (input == "scissors" && programSPS == "stone") ||
    (input == "stone" && programSPS == "paper") ||
    (input == "paper" && programSPS == "scissors") ||
    (input == "reversed scissors" && programSPS == "paper") ||
    (input == "reversed paper" && programSPS == "stone") ||
    (input == "reversed stone" && programSPS == "scissors")
  ) {
    programWinCount += 1;
    totalGames += 1;
    message = `${userName} chose ${input}.<br>
    Program chose ${programSPS}.<br><br>
    You lose.<br><br>
    You can type "scissors" "paper" or "stone" to play another round!<br><br>`;
  }
  if (
    (input == "scissors" && programSPS == "paper") ||
    (input == "stone" && programSPS == "scissors") ||
    (input == "paper" && programSPS == "stone") ||
    (input == "reversed scissors" && programSPS == "stone") ||
    (input == "reversed paper" && programSPS == "scissors") ||
    (input == "reversed stone" && programSPS == "paper")
  ) {
    userWinCount += 1;
    totalGames += 1;
    message = `${userName} chose ${input}.<br>
    Program chose ${programSPS}.<br><br>
    You win.<br><br>
    You can type "scissors" "paper" or "stone" to play another round!<br><br>`;
  }

  // Calculate win-loss record
  var totalGames = userWinCount + programWinCount + drawCount;
  var userWinRate = (userWinCount / totalGames) * 100 + `%`;
  var programWinRate = (programWinCount / totalGames) * 100 + `%`;
  var drawRate = (drawCount / totalGames) * 100 + `%`;
  var winLossRecord = `
  ${userName}'s win-loss record: ${userWinCount}W${programWinCount}L${drawCount}D<br>
  ${userName}'s winning percentage: ${userWinRate}<br>
  ${userName}'s losing percentage: ${programWinRate}<br>
  ${userName}'s drawing percentage: ${drawRate}<br>`;
  var myOutputValue = message + winLossRecord;
  return myOutputValue;
};
