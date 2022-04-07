//var main = function (input) {
//var pi = 3.14;
//var radius = 4;
//var area = pi * radius * radius;
//var myOutputValue = "Hello " + input + ", you look pretty today!";
//var myOutputValue = 100 / 10;
//var distanceInKm = input;
//var distanceInMiles = distanceInKm * 0.62;
//var myOutputValue =
//"Hi! " + input + " kilometers is equal to " + distanceInMiles + " miles";
//var myOutputValue = `Hi! ${input} kilometer is equal to ${distanceInMiles} miles.`;
//return myOutputValue;
//};

//var convertKmToMiles = function (distanceInKm) {
//var distanceInMiles = distanceInKm * 0.62;
//return distanceInMiles;
//};

//var main = function (input) {
//var myOutputValue = convertKmToMiles(input);
//return myOutputValue;
//};

//var fahrenheitToCelsiusMain = function (temp) {
// Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
// var celsius = ((temp - 32) * 5) / 9;
// var outputMsg = "The temperature in celsius ${celsius}C";
// return outputMsg;
//};

// var main = function (input) {
//   // Set a default value for myOutputValue
//   var myOutputValue = "Invalid Password, Please input the secret key";
//   // If input is our secret phrase, change the value of myOutputValue
//   if (input == "happy") {
//     myOutputValue = "you wrote the secret phrase!";
//   }
//   // return myOutputValue as output
//   return myOutputValue;
// };

// var rollDice = function () {
//   // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
//   var randomDecimal = Math.random() * 6;
//   // Remove the decimal with the floor operation.
//   // This will be an integer from 0 to 5 inclusive.
//   var randomInteger = Math.floor(randomDecimal);
//   // Add 1 to get valid dice rolls of 1 through 6 inclusive.
//   var diceNumber = randomInteger + 1;
//   return diceNumber;
// };

// var main = function (input); {
// var myOutputValue = diceNumber;
// return diceNumber;
// };

// var main = function (input) {
//   // Set a default value for myOutputValue
//   var myOutputValue = "OK";
//   // If input is any of them
//   var playerChoice = input;
//   if (input == "scissor" || input == "paper" || input == "stone") {
//     myOutputValue = "You win";
//   } else {
//     myOutputValue = "Try again";
//   }
//   // return myOutputValue as output
//   return myOutputValue;
// };

// var main = function () {
//   //generate a random number from 1 to 3
//   var randomType = Math.random() * 3;
//   var randomNumber = Math / floor(randomType);
//   var computerMove = randomNumber + 1;
//   return computerMove;
// };

//Default output
var myOutputValue = `Hello World`;
//get auto generated Computer move
var main = function (player) {
  // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 3.
  var randomNum = Math.random() * 3;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 3 inclusive.
  var randomRound = Math.floor(randomNum);
  // Add 1 to get valid result of 1 through 3 inclusive.
  var comMove = randomRound + 1;
  if (comMove == 1) {
    comMove = `Scissor`;
  } else if (comMove == 2) {
    comMove = `Paper`;
  } else {
    comMove = `Stone`;
  }

  //Logic on Cases
  if (comMove === player) {
    myOutputValue = `You choose ${player} ! AI choose ${comMove} ! It is a draw! `;
  } else if (
    (player === `Scissor` && comMove === `Paper`) ||
    (player === `Paper` && comMove === `Stone`) ||
    (player === `Stone` && comMove === `Scissor`)
  ) {
    myOutputValue = `You choose ${player} ! AI choose ${comMove} ! You Win! `;
  } else {
    myOutputValue = `You choose ${player} ! AI choose ${comMove} ! You Lose! `;
  }
  return myOutputValue;
};

// var main = function (input) {
//   // Generate a random move
//   var randomComMove = computerMove();
//   //give them a name
//   var labels = {
//     1: "scissor",
//     2: "paper",
//     3: "stone"
//   };

//testing cases ,
// 1 > 2 Win
// 1 < 3 Lose

// 2 >3 Win
// 2 <1 Lose

// 3 > 1 Win
// 3 <2 Lost
