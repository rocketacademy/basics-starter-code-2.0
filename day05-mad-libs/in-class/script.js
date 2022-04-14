//declare a array
var adj = [];
var getRandomIndex = function () {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor(Math.random() * adj.length);
  return randomIndex;
};
// change game mode

// change game mode when user inputs "create"
// generate random integer which is index number
// use random index with adj array
// return mad lib
var mode = `instructions`;
var madLibsAdjectivesMain = function (input) {
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
  // game mode to give instructions
  if (input == `create`) {
    mode = `create`;
  }
  if (mode == `instructions`) {
    mode = `provide adj`;
    return `Provide adjectives.`;
  }
  //use push function to add user inputs into array
  if (mode == `provide adj`) {
    var newWords = input.split(" ");
    //console.log(newWords);
    var index = 0;
    while (index < newWords.length) {
      adj.push(newWords[index]);
      index += 1;
    }
    //console.log(adj);
    //adj.push(input.split(" "));
    return `Here are your adjectives ${adj}.Type "create" when you are done inputting.`;
  }

  //user types in create
  if (mode == `create`) {
    var randomIndexs = getRandomIndex();
    var randomAdj = adj[randomIndexs];
  }
  var madLib =
    '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
    randomAdj +
    " wife.";
  return madLib;
};

var madLibsInputCreateMain = function (input) {

};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
  var adj = [];
var adverb = [];
var getRandomIndexAdv = function () {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor(Math.random() * adverb.length);
  return randomIndex;
};
var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.

// change game mode

// change game mode when user inputs "create"
// generate random integer which is index number
// use random index with adj array
// return mad lib
var mode = `instructions`;
  //declare a array
  if (input == `create`) {
    mode = `create`;
  }
  if (mode == `instructions`) {
    mode = `provide adj`;
    return `Provide adjectives.`;
  }
  //use push function to add user inputs into array
  if (mode == `provide adj`) {
    var newWords = input.split(" ");
    //console.log(newWords);
    var index = 0;
    while (index < newWords.length) {
      adj.push(newWords[index]);
      index += 1;
    }
    //console.log(adj);
    //adj.push(input.split(" "));
    return `Here are your adjectives ${adj}.Type "create" when you are done inputting.`;
  }

  //user types in create
  if (mode == `create`) {
    var randomIndexs = getRandomIndex();
    var randomAdj = adj[randomIndexs];
  }
  var madLib =
    '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
    randomAdj +
    " wife.";
  return madLib;
};
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
