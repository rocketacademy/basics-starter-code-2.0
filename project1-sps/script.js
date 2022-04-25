var main = function (input) {
  // Generate random outcome with only 3 outcome, either 1,2 or 3.
  var rollsps = function () {
    var randomDecimal = Math.random() * 3;
    var randomInt = Math.ceil(randomDecimal);
    // Assign outcome with scissors,paper,stone
    if (randomInt === 1) {
      return "Scissors";
    }
    if (randomInt === 2) {
      return "Paper";
    }
    if (randomInt === 3) {
      return "Stone";
    }
    // I just randomly use stone as default
    return "stone";
  };
  //Assign outcome result from rollsps function to a variable name comp

  var comp = rollsps();

  if (input === "Scissors" && comp === "Paper") {
    return "You Win!";
  }
  if (input === "Paper" && comp === "Stone") {
    return "You Win!";
  }
  if (input === "Stone" && comp === "Scissors") {
    return "You Win!";
  }
  if (input === comp) {
    return "Draw!";
  }

  return "You lose!";
};
