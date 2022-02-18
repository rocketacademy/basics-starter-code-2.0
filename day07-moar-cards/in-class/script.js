/**
 * Card Generation and Shuffling helper functions from Basics Course Website
 */
var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  // Loop over the suits array
  for (var suitIndex = 0; suitIndex < suits.length; suitIndex += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[suitIndex];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = 'ace';
      } else if (cardName == 11) {
        cardName = 'jack';
      } else if (cardName == 12) {
        cardName = 'queen';
      } else if (cardName == 13) {
        cardName = 'king';
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
      };

      // Add the new card to the deck
      cardDeck.push(card); 
    }   
  }

  // Return the completed card deck
  return cardDeck;
};

// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  for (var currentIndex = 0; currentIndex < cardDeck.length; currentIndex = currentIndex + 1) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;    
  }
  // Return the shuffled deck
  return cardDeck;
};

/**
 * Base: Moar Cards Display Single Card
 */

var moarCardsSingleCardMain = function (input) {
  // Complete the Base: Moar Cards Display Single Card exercise below with moarCardsSingleCardMain as the main function.
  var deck = makeDeck();
  var shuffledDeck = shuffleCards(deck);
  var drawnCard = shuffledDeck.pop();
  return `You have drawn ${drawnCard.name} of ${drawnCard.suit}.`;
};

/**
 * Base: Moar Cards Low Card
 */

// Generate a shuffled card deck when the page loads
var shuffledCardDeck = shuffleCards(makeDeck());

var moarCardsLowCardMain = function (input) {
  // Complete the Base: Moar Cards Low Card exercise below with moarCardsLowCardMain as the main function.
  // Draw 2 cards from the top of the deck
  var computerCard = shuffledCardDeck.pop();
  var playerCard = shuffledCardDeck.pop();

  // Construct an output string to communicate which cards were drawn
  var genericOutput = `Computer had ${computerCard.name} of ${computerCard.suit}. Player had ${playerCard.name} of ${playerCard.suit}.`;

  // Compare computer and player cards by rank attribute
  // If computer card rank is LESS than player card rank, computer wins
  if (computerCard.rank < playerCard.rank) {
    // Add conditional-dependent text to the output string
    return `${genericOutput} Computer wins.`;
  }
  // Else if computer card rank is GREATER than player card rank, player wins
  if (computerCard.rank > playerCard.rank) {
    return `${genericOutput} Player wins!`;
  }
  // Otherwise (i.e. ranks are equal), it's a tie
  return `${genericOutput} It's a tie.`;
};

/**
 * Base: Moar Cards Low Card with Queen Winner
 */

var isCardQueen = function (card) {
  return card.rank == 12;
};

var moarCardsLowCardQueenWinnerMain = function (input) {
  // Complete the Base: Moar Cards Low Card with Queen Winner exercise below with moarCardsLowCardQueenWinnerMain as the main function.

  // Draw 2 cards from the top of the deck
  var computerCard = shuffledCardDeck.pop();
  var playerCard = shuffledCardDeck.pop();

  // Construct an output string to communicate which cards were drawn
  var genericOutput = `Computer had ${computerCard.name} of ${computerCard.suit}. Player had ${playerCard.name} of ${playerCard.suit}.`;

  // Compare computer and player cards by rank attribute
  // If computer card rank is LESS than player card rank and player card is not queen,
  // OR computer card is queen, computer wins
  if ((computerCard.rank < playerCard.rank && !isCardQueen(playerCard))
    || isCardQueen(computerCard)) {
    // Add conditional-dependent text to the output string
    return `${genericOutput} Computer wins.`;
  }
  // Else if computer card rank is GREATER than player card rank,
  // OR player card is queen, player wins
  if (computerCard.rank > playerCard.rank
    || isCardQueen(playerCard)) {
    return `${genericOutput} Player wins!`;
  }
  // Otherwise (i.e. ranks are equal), it's a tie
  return `${genericOutput} It's a tie.`;
};

/**
 * Base: Moar Cards Low Card Hands
 */

// Return a string of ranks and suits of cards in the input cards array
var printCards = function (cards) {
  var returnString = '';
  // Iterate until cards.length - 1 so we can avoid the extra comma at the end of return string
  for (var i = 0; i < cards.length - 1; i += 1) {
    var currCard = cards[i];
    returnString += `${currCard.name} of ${currCard.suit}, `;
  }
  var lastCard = cards[cards.length - 1];
  returnString += `${lastCard.name} of ${lastCard.suit}`;
  return returnString;
};

var getIsCardQueen = function (card) {
  return card.rank == 12;
};

var getIsQueenInHand = function (hand) {
  for (var i = 0; i < hand.length; i += 1) {
    var currCard = hand[i];
    if (currCard.rank == 12) {
      return true;
    }
  }
  return false;
};

var moarCardsLowCardHandsMain = function (input) {
  // Complete the Base: Moar Cards Low Card Hands exercise below with moarCardsLowCardHandsMain as the main function.

  // If input is empty, prompt user to enter a number of cards to draw
  if (input == '') {
    return 'Please enter a number of cards to draw.';
  }

  // Draw 1 card for the computer
  var computerCard = shuffledCardDeck.pop();

  // Draw numCardToDraw cards for the player, but only store the card with lowest rank.
  var numCardsToDraw = Number(input);
  // Initialise lowest player card rank to 1 above highest possible rank, so that
  // the first card the player draws will replace this lowest rank.
  var lowestPlayerCardRank = 14;
  var playerCards = [];
  for (var i = 0; i < numCardsToDraw; i += 1) {
    var currPlayerCard = shuffledCardDeck.pop();
    // Add the current card to the player's hand to display later
    playerCards.push(currPlayerCard);
    // If the current card is the lowest of the player's cards so far, mark it as the lowest card.
    if (currPlayerCard.rank < lowestPlayerCardRank) {
      lowestPlayerCardRank = currPlayerCard.rank;
      var lowestPlayerCard = currPlayerCard;
    }
  }

  // Construct an output string to communicate which cards were drawn
  // Print all the cards the player drew, not just the lowest one.
  var genericOutput = `
    Computer had ${computerCard.name} of ${computerCard.suit}. <br/><br/>
    Player drew ${printCards(playerCards)}. <br/><br/>
    Player's lowest card was ${lowestPlayerCard.name} of ${lowestPlayerCard.suit}.
  `;

  // Determine if 1 player has queen and the other doesn't
  var computerHasQueen = getIsCardQueen(computerCard);
  var playerHasQueen = getIsQueenInHand(playerCards);

  // Add to output if 1 player has queen and the other doesn't
  if (computerHasQueen && !playerHasQueen) {
    genericOutput += '<br/><br/> Computer has queen and Player does not.';
  } else if (playerHasQueen && !computerHasQueen) {
    genericOutput += '<br/><br/> Player has queen and Computer does not.';
  } else if (playerHasQueen && computerHasQueen) {
    genericOutput += '<br/><br/> Both Player and Computer have queen.';
  }

  // Compare computer and player cards by rank attribute
  // If computer card rank is EQUAL to lowest player card rank,
  // OR both computer and player have queen, it's a tie
  if (computerCard.rank == lowestPlayerCard.rank || (computerHasQueen && playerHasQueen)) {
    return `${genericOutput} <br/><br/> It's a tie.`;
  }
  // If computer card rank is LESS than player card rank and player's hand does not have queen,
  // OR computer card is queen, computer wins
  if ((computerCard.rank < lowestPlayerCard.rank && !playerHasQueen) || computerHasQueen) {
    // Add conditional-dependent text to the output string
    return `${genericOutput} <br/><br/> Computer wins.`;
  }
  // Else if computer card rank is GREATER than player card rank,
  // OR player's hand has queen, player wins
  if (computerCard.rank > lowestPlayerCard.rank || playerHasQueen) {
    return `${genericOutput} <br/><br/> Player wins!`;
  }
  // If none of the above cases are true, we've reached an unexpected outcome
  return `${genericOutput} <br/><br/> Unexpected outcome.`;
};

/**
 * Base: Moar Cards Low Card Suit Output
 */

// Convert the word representation of a suit into the suit's emoji
var convertSuitWordToEmoji = function (suitWord) {
  if (suitWord == 'spades') {
    return '♠️';
  }
  if (suitWord == 'hearts') {
    return '♥️';
  }
  if (suitWord == 'clubs') {
    return '♣️';
  }
  if (suitWord == 'diamonds') {
    return '♦️';
  }
  // If we reach here, we entered an invalid suit
  return 'Invalid Suit!';
};

var getCardStringRepresentation = function (card) {
  return `${card.name} of ${convertSuitWordToEmoji(card.suit)}`;
};

var printCardswithEmojiSuits = function (cards) {
  var returnString = '';
  // Iterate until cards.length - 1 so we can avoid the extra comma at the end of return string
  for (var i = 0; i < cards.length - 1; i += 1) {
    var currCard = cards[i];
    returnString += `${getCardStringRepresentation(currCard)}, `;
  }
  var lastCard = cards[cards.length - 1];
  returnString += getCardStringRepresentation(lastCard);
  return returnString;
};

var moarCardsLowCardSuitMain = function (input) {
  // Complete the Base: Moar Cards Low Card Suit Output exercise below with moarCardsLowCardSuitMain as the main function.

  // If input is empty, prompt user to enter a number of cards to draw
  if (input == '') {
    return 'Please enter a number of cards to draw.';
  }

  // Draw 1 card for the computer
  var computerCard = shuffledCardDeck.pop();

  // Draw numCardToDraw cards for the player, but only store the card with lowest rank.
  var numCardsToDraw = Number(input);
  // Initialise lowest player card rank to 1 above highest possible rank, so that
  // the first card the player draws will replace this lowest rank.
  var lowestPlayerCardRank = 14;
  var playerCards = [];
  for (var i = 0; i < numCardsToDraw; i += 1) {
    var currPlayerCard = shuffledCardDeck.pop();
    // Add the current card to the player's hand to display later
    playerCards.push(currPlayerCard);
    // If the current card is the lowest of the player's cards so far, mark it as the lowest card.
    if (currPlayerCard.rank < lowestPlayerCardRank) {
      lowestPlayerCardRank = currPlayerCard.rank;
      var lowestPlayerCard = currPlayerCard;
    }
  }

  // Construct an output string to communicate which cards were drawn
  // Print all the cards the player drew, not just the lowest one.
  var genericOutput = `
    Computer had ${getCardStringRepresentation(computerCard)}. <br/><br/>
    Player drew ${printCardswithEmojiSuits(playerCards)}. <br/><br/>
    Player's lowest card was ${getCardStringRepresentation(lowestPlayerCard)}.
  `;

  // Determine if 1 player has queen and the other doesn't
  var computerHasQueen = getIsCardQueen(computerCard);
  var playerHasQueen = getIsQueenInHand(playerCards);

  // Add to output if 1 player has queen and the other doesn't
  if (computerHasQueen && !playerHasQueen) {
    genericOutput += '<br/><br/> Computer has queen and Player does not.';
  } else if (playerHasQueen && !computerHasQueen) {
    genericOutput += '<br/><br/> Player has queen and Computer does not.';
  } else if (playerHasQueen && computerHasQueen) {
    genericOutput += '<br/><br/> Both Player and Computer have queen.';
  }

  // Compare computer and player cards by rank attribute
  // If computer card rank is EQUAL to lowest player card rank,
  // OR both computer and player have queen, it's a tie
  if (computerCard.rank == lowestPlayerCard.rank || (computerHasQueen && playerHasQueen)) {
    return `${genericOutput} <br/><br/> It's a tie.`;
  }
  // If computer card rank is LESS than player card rank and player's hand does not have queen,
  // OR computer card is queen, computer wins
  if ((computerCard.rank < lowestPlayerCard.rank && !playerHasQueen) || computerHasQueen) {
    // Add conditional-dependent text to the output string
    return `${genericOutput} <br/><br/> Computer wins.`;
  }
  // Else if computer card rank is GREATER than player card rank,
  // OR player's hand has queen, player wins
  if (computerCard.rank > lowestPlayerCard.rank || playerHasQueen) {
    return `${genericOutput} <br/><br/> Player wins!`;
  }
  // If none of the above cases are true, we've reached an unexpected outcome
  return `${genericOutput} <br/><br/> Unexpected outcome.`;
};

/**
 * More Comfortable: Moar Cards Low Card with Wild Card
 */

// Check whether 2 card objects are the same card
var checkAreCardsEqual = function (card1, card2) {
  return card1.rank == card2.rank && card1.suit == card2.suit;
};

// Return random element from input array
var pickRandomCard = function (deck) {
  return deck[Math.floor(Math.random() * deck.length)];
};

// Pick random wild card to win
var wildCard = pickRandomCard(shuffledCardDeck);

var moarCardsLowCardWildCardMain = function (input) {
  // If input is empty, prompt user to enter a number of cards to draw
  if (input == '') {
    return 'Please enter a number of cards to draw.';
  }

  // Draw 1 card for the computer
  var computerCard = shuffledCardDeck.pop();
  if (checkAreCardsEqual(computerCard, wildCard)) {
    return `Computer drew Wild Card ${getCardStringRepresentation(computerCard)} and wins.`;
  }

  // Draw numCardToDraw cards for the player, but only store the card with lowest rank.
  var numCardsToDraw = Number(input);
  // Initialise lowest player card rank to 1 above highest possible rank, so that
  // the first card the player draws will replace this lowest rank.
  var lowestPlayerCardRank = 14;
  var playerCards = [];
  for (var i = 0; i < numCardsToDraw; i += 1) {
    var currPlayerCard = shuffledCardDeck.pop();
    if (checkAreCardsEqual(currPlayerCard, wildCard)) {
      return `Player drew Wild Card ${getCardStringRepresentation(currPlayerCard)} and wins.`;
    }
    // Add the current card to the player's hand to display later
    playerCards.push(currPlayerCard);
    // If the current card is the lowest of the player's cards so far, mark it as the lowest card.
    if (currPlayerCard.rank < lowestPlayerCardRank) {
      lowestPlayerCardRank = currPlayerCard.rank;
      var lowestPlayerCard = currPlayerCard;
    }
  }

  // Construct an output string to communicate which cards were drawn
  // Print all the cards the player drew, not just the lowest one.
  var genericOutput = `
    Computer had ${getCardStringRepresentation(computerCard)}. <br/><br/>
    Player drew ${printCardswithEmojiSuits(playerCards)}. <br/><br/>
    Player's lowest card was ${getCardStringRepresentation(lowestPlayerCard)}.
  `;

  // Determine if 1 player has queen and the other doesn't
  var computerHasQueen = getIsCardQueen(computerCard);
  var playerHasQueen = getIsQueenInHand(playerCards);

  // Add to output if 1 player has queen and the other doesn't
  if (computerHasQueen && !playerHasQueen) {
    genericOutput += '<br/><br/> Computer has queen and Player does not.';
  } else if (playerHasQueen && !computerHasQueen) {
    genericOutput += '<br/><br/> Player has queen and Computer does not.';
  } else if (playerHasQueen && computerHasQueen) {
    genericOutput += '<br/><br/> Both Player and Computer have queen.';
  }

  // Compare computer and player cards by rank attribute
  // If computer card rank is EQUAL to lowest player card rank,
  // OR both computer and player have queen, it's a tie
  if (computerCard.rank == lowestPlayerCard.rank || (computerHasQueen && playerHasQueen)) {
    return `${genericOutput} <br/><br/> It's a tie.`;
  }
  // If computer card rank is LESS than player card rank and player's hand does not have queen,
  // OR computer card is queen, computer wins
  if ((computerCard.rank < lowestPlayerCard.rank && !playerHasQueen) || computerHasQueen) {
    // Add conditional-dependent text to the output string
    return `${genericOutput} <br/><br/> Computer wins.`;
  }
  // Else if computer card rank is GREATER than player card rank,
  // OR player's hand has queen, player wins
  if (computerCard.rank > lowestPlayerCard.rank || playerHasQueen) {
    return `${genericOutput} <br/><br/> Player wins!`;
  }
  // If none of the above cases are true, we've reached an unexpected outcome
  return `${genericOutput} <br/><br/> Unexpected outcome.`;
};

/**
 * More Comfortable: Moar Cards Low Card with Player-Chosen Wild Card
 */

var wildCardName;
var wildCardSuit;

// Check whether 2 card objects are the same card
var checkIsCardWildCard = function (card) {
  return card.name == wildCardName && card.suit == wildCardSuit;
};

var moarCardsLowCardWildPlayerMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Player-Chosen Wild Card exercise below with moarCardsLowCardWildPlayerMain as the main function.
  if (!wildCardName) {
    if (input == '') {
      return 'Please enter the lowercase name of a card to be the Wild Card, e.g. ace, 2, 10, or queen.';
    }
    wildCardName = input;
    return `You have chosen ${wildCardName} as the Wild Card name. Please enter a suit (spades/hearts/clubs/diamonds) as the Wild Card suit.`;
  }

  if (!wildCardSuit) {
    if (input == '') {
      return 'Please enter the lowercase suit of a card to be the Wild Card, e.g. spades, hearts, clubs, or diamonds.';
    }
    wildCardSuit = input;
    return `You have chosen ${wildCardName} of ${wildCardSuit} as the Wild Card. Please enter a number of cards to draw.`;
  }

  // If input is empty, prompt user to enter a number of cards to draw
  if (input == '') {
    return 'Please enter a number of cards to draw.';
  }

  // Draw 1 card for the computer
  var computerCard = shuffledCardDeck.pop();
  if (checkIsCardWildCard(computerCard)) {
    return `Computer drew Wild Card ${getCardStringRepresentation(computerCard)} and wins.`;
  }

  // Draw numCardToDraw cards for the player, but only store the card with lowest rank.
  var numCardsToDraw = Number(input);
  // Initialise lowest player card rank to 1 above highest possible rank, so that
  // the first card the player draws will replace this lowest rank.
  var lowestPlayerCardRank = 14;
  var playerCards = [];
  for (var i = 0; i < numCardsToDraw; i += 1) {
    var currPlayerCard = shuffledCardDeck.pop();
    if (checkIsCardWildCard(currPlayerCard)) {
      return `Player drew Wild Card ${getCardStringRepresentation(currPlayerCard)} and wins.`;
    }
    // Add the current card to the player's hand to display later
    playerCards.push(currPlayerCard);
    // If the current card is the lowest of the player's cards so far, mark it as the lowest card.
    if (currPlayerCard.rank < lowestPlayerCardRank) {
      lowestPlayerCardRank = currPlayerCard.rank;
      var lowestPlayerCard = currPlayerCard;
    }
  }

  // Construct an output string to communicate which cards were drawn
  // Print all the cards the player drew, not just the lowest one.
  var genericOutput = `
    Computer had ${getCardStringRepresentation(computerCard)}. <br/><br/>
    Player drew ${printCardswithEmojiSuits(playerCards)}. <br/><br/>
    Player's lowest card was ${getCardStringRepresentation(lowestPlayerCard)}.
  `;

  // Determine if 1 player has queen and the other doesn't
  var computerHasQueen = getIsCardQueen(computerCard);
  var playerHasQueen = getIsQueenInHand(playerCards);

  // Add to output if 1 player has queen and the other doesn't
  if (computerHasQueen && !playerHasQueen) {
    genericOutput += '<br/><br/> Computer has queen and Player does not.';
  } else if (playerHasQueen && !computerHasQueen) {
    genericOutput += '<br/><br/> Player has queen and Computer does not.';
  } else if (playerHasQueen && computerHasQueen) {
    genericOutput += '<br/><br/> Both Player and Computer have queen.';
  }

  // Compare computer and player cards by rank attribute
  // If computer card rank is EQUAL to lowest player card rank,
  // OR both computer and player have queen, it's a tie
  if (computerCard.rank == lowestPlayerCard.rank || (computerHasQueen && playerHasQueen)) {
    return `${genericOutput} <br/><br/> It's a tie.`;
  }
  // If computer card rank is LESS than player card rank and player's hand does not have queen,
  // OR computer card is queen, computer wins
  if ((computerCard.rank < lowestPlayerCard.rank && !playerHasQueen) || computerHasQueen) {
    // Add conditional-dependent text to the output string
    return `${genericOutput} <br/><br/> Computer wins.`;
  }
  // Else if computer card rank is GREATER than player card rank,
  // OR player's hand has queen, player wins
  if (computerCard.rank > lowestPlayerCard.rank || playerHasQueen) {
    return `${genericOutput} <br/><br/> Player wins!`;
  }
  // If none of the above cases are true, we've reached an unexpected outcome
  return `${genericOutput} <br/><br/> Unexpected outcome.`;
};

/**
 * More Comfortable: Moar Cards Low Card with Bets
 */

// Player starts with 100 points
var mode = 'wager points';
var playerPoints = 100;
var pointsToWager;

// winningPlayer can be either 'p' or 'c'
var updatePlayerPoints = function (winningPlayer) {
  // Add wagered points if player wins
  if (winningPlayer == 'p') {
    playerPoints += pointsToWager;
    return;
  }
  // Subtract wagered points if computer wins
  playerPoints -= pointsToWager;
};

// Create standard output instructions for next round's point wager
var generateWagerPointsMessage = function () {
  return `Player currently has ${playerPoints} points. Please choose number of points to wager for next round.`;
};

var moarCardsLowCardBetsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Bets exercise below with moarCardsLowCardBetsMain as the main function.
  if (!wildCardName) {
    if (input == '') {
      return 'Please enter the lowercase name of a card to be the Wild Card, e.g. ace, 2, 10, or queen.';
    }
    wildCardName = input;
    return `You have chosen ${wildCardName} as the Wild Card name. Please enter a suit (spades/hearts/clubs/diamonds) as the Wild Card suit.`;
  }

  if (!wildCardSuit) {
    if (input == '') {
      return 'Please enter the lowercase suit of a card to be the Wild Card, e.g. spades, hearts, clubs, or diamonds.';
    }
    wildCardSuit = input;
    return `You have chosen ${wildCardName} of ${wildCardSuit} as the Wild Card. You have ${playerPoints} points. Please enter a number of points to wager.`;
  }

  if (mode == 'wager points') {
    pointsToWager = Number(input);
    if (input == '' || Number.isNaN(pointsToWager)) {
      return `Please enter a number of points to wager. You currently have ${playerPoints} points.`;
    }
    mode = 'play game';
    return `You have wagered ${pointsToWager} points. Please enter a number of cards to draw.`;
  }

  // If input is empty, prompt user to enter a number of cards to draw
  if (input == '') {
    return 'Please enter a number of cards to draw.';
  }

  // Draw 1 card for the computer
  var computerCard = shuffledCardDeck.pop();
  if (checkIsCardWildCard(computerCard)) {
    // Update player's points based on wagered amount
    updatePlayerPoints('c');
    // Reset game after computer wins to allow point wager
    mode = 'wager points';
    return `Computer drew Wild Card ${getCardStringRepresentation(computerCard)} and wins. ${generateWagerPointsMessage()}`;
  }

  // Draw numCardToDraw cards for the player, but only store the card with lowest rank.
  var numCardsToDraw = Number(input);
  // Initialise lowest player card rank to 1 above highest possible rank, so that
  // the first card the player draws will replace this lowest rank.
  var lowestPlayerCardRank = 14;
  var playerCards = [];
  for (var i = 0; i < numCardsToDraw; i += 1) {
    var currPlayerCard = shuffledCardDeck.pop();
    if (checkIsCardWildCard(currPlayerCard)) {
      // Update player's points based on wagered amount
      updatePlayerPoints('p');
      // Reset game after player wins to allow point wager
      mode = 'wager points';
      return `Player drew Wild Card ${getCardStringRepresentation(currPlayerCard)} and wins. ${generateWagerPointsMessage()}`;
    }
    // Add the current card to the player's hand to display later
    playerCards.push(currPlayerCard);
    // If the current card is the lowest of the player's cards so far, mark it as the lowest card.
    if (currPlayerCard.rank < lowestPlayerCardRank) {
      lowestPlayerCardRank = currPlayerCard.rank;
      var lowestPlayerCard = currPlayerCard;
    }
  }

  // Construct an output string to communicate which cards were drawn
  // Print all the cards the player drew, not just the lowest one.
  var genericOutput = `
    Computer had ${getCardStringRepresentation(computerCard)}. <br/><br/>
    Player drew ${printCardswithEmojiSuits(playerCards)}. <br/><br/>
    Player's lowest card was ${getCardStringRepresentation(lowestPlayerCard)}.
  `;

  // Determine if 1 player has queen and the other doesn't
  var computerHasQueen = getIsCardQueen(computerCard);
  var playerHasQueen = getIsQueenInHand(playerCards);

  // Add to output if 1 player has queen and the other doesn't
  if (computerHasQueen && !playerHasQueen) {
    genericOutput += '<br/><br/> Computer has queen and Player does not.';
  } else if (playerHasQueen && !computerHasQueen) {
    genericOutput += '<br/><br/> Player has queen and Computer does not.';
  } else if (playerHasQueen && computerHasQueen) {
    genericOutput += '<br/><br/> Both Player and Computer have queen.';
  }

  // Reset mode before next round so that player can wager points again.
  mode = 'wager points';

  // Compare computer and player cards by rank attribute
  // If computer card rank is EQUAL to lowest player card rank,
  // OR both computer and player have queen, it's a tie
  if (computerCard.rank == lowestPlayerCard.rank || (computerHasQueen && playerHasQueen)) {
    return `${genericOutput} <br/><br/> It's a tie. ${generateWagerPointsMessage()}`;
  }
  // If computer card rank is LESS than player card rank and player's hand does not have queen,
  // OR computer card is queen, computer wins
  if ((computerCard.rank < lowestPlayerCard.rank && !playerHasQueen) || computerHasQueen) {
    // Update player's points based on wagered amount
    updatePlayerPoints('c');
    // Add conditional-dependent text to the output string
    return `${genericOutput} <br/><br/> Computer wins. ${generateWagerPointsMessage()}`;
  }
  // Else if computer card rank is GREATER than player card rank,
  // OR player's hand has queen, player wins
  if (computerCard.rank > lowestPlayerCard.rank || playerHasQueen) {
    // Update player's points based on wagered amount
    updatePlayerPoints('p');
    return `${genericOutput} <br/><br/> Player wins! ${generateWagerPointsMessage()}`;
  }
  // If none of the above cases are true, we've reached an unexpected outcome
  return `${genericOutput} <br/><br/> Unexpected outcome. ${generateWagerPointsMessage()}`;
};

var moarCardsLowCard2PMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode exercise below with moarCardsLowCard2PMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var moarCardsLowCard2PairsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode with Pairs exercise below with moarCardsLowCard2PairsMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

/**
 * Base: Chat Bot Single Chat Bot Answer Set
 */

var chatBotSingleMain = function (input) {
  // Complete the Base: Chat Bot Single Chat Bot Answer Set below with chatBotSingleMain as the main function.
  var question = 'Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)';
  // If user input is empty, the bot asks the question.
  if (input == '') {
    return question;
  }

  // Store valid user answers and the bot's responses to those answers.
  var answersAndResponses = {
    yes: 'Wow! Me too! I\'ve been working on the Blackjack project. Makes my day!',
    no: 'Oh ok, just normally happy ;)',
    maybe: 'It seems thinking about coding also brings happiness!',
  };

  // If the user's answer is valid, respond with the response to that answer.
  if (answersAndResponses[input]) {
    return answersAndResponses[input];
  }
  // If the user's answer is invalid, ask user to enter a valid answer.
  return `Please enter a valid answer. ${question}`;
};

/**
 * Base: Chat Bot Multiple Chat Bot Answer Sets
 */

// Initialise the current answer set to be the first one.
var currAnswerSetNum = 0;

var chatBotMultipleMain = function (input) {
  // Complete the Base: Chat Bot Multiple Chat Bot Answer Sets below with chatBotMultipleMain as the main function.
  var questionAndAnswerSets = [
    {
      question: 'Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)',
      answers: {
        yes: 'Wow! Me too! I\'ve been working on the Blackjack project. Makes my day!',
        no: 'Oh ok, just normally happy ;)',
        maybe: 'It seems the very thought of coding makes people happy!',
      },
    },
    {
      question: 'Do you enjoy coding most during the day, night, or both? (day/night/both)',
      answers: {
        day: 'Ah yes, when the sun is high in the sky, I can feel its energy too.',
        night: 'Under the calm and gentle moon, I also find my focus.',
        both: "Indeed, I could code 24/7 if I didn't have to sleep!",
      },
    },
  ];
  // Create a temporary variable to access the current answer set concisely.
  var currAnswerSet = questionAndAnswerSets[currAnswerSetNum];

  // If user input is empty, the bot asks the question.
  if (input == '') {
    return currAnswerSet.question;
  }

  // If the user's answer is valid, update currentAnswerSetNum to prep the next question, and
  // respond with the response to that answer.
  if (currAnswerSet.answers[input]) {
    // The following algorithm will always generate the next valid index in questionAndAnswerSets
    var nextAnswerSetNum = (currAnswerSetNum + 1) % questionAndAnswerSets.length;
    var nextAnswerSet = questionAndAnswerSets[nextAnswerSetNum];
    currAnswerSetNum = nextAnswerSetNum;
    return `
      ${currAnswerSet.answers[input]} <br/><br/>
      ${nextAnswerSet.question}
    `;
  }
  // If the user's answer is invalid, ask user to enter a valid answer.
  return `Please enter a valid answer. ${currAnswerSet.question}`;
};

/**
 * Base: Chat Bot Stores User's Name
 */

// Store user name as global that can be reused across conversation.
var userName;

var chatBotUsernameMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Name below with chatBotUsernameMain as the main function.
  var questionAndAnswerSets = [
    {
      question: 'Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)',
      answers: {
        yes: 'Wow! Me too! I\'ve been working on the Blackjack project. Makes my day!',
        no: 'Oh ok, just normally happy ;)',
        maybe: 'It seems the very thought of coding makes people happy!',
      },
    },
    {
      question: 'Do you enjoy coding most during the day, night, or both? (day/night/both)',
      answers: {
        day: 'Ah yes, when the sun is high in the sky, I can feel its energy too.',
        night: 'Under the calm and gentle moon, I also find my focus.',
        both: "Indeed, I could code 24/7 if I didn't have to sleep!",
      },
    },
  ];
  // Create a temporary variable to access the current answer set concisely.
  var currAnswerSet = questionAndAnswerSets[currAnswerSetNum];

  // Logic to ask for and store user name.
  if (!userName) {
    if (input == '') {
      return 'Hey! I\'m Robocop. What\'s your name?';
    }
    userName = input;
    return `
      ${userName}! What a cool name. <br/><br/>
      Hey ${userName}, ${currAnswerSet.question}  
    `;
  }

  // If user input is empty, the bot asks the question.
  if (input == '') {
    return `${userName}! ${currAnswerSet.question}`;
  }

  // If the user's answer is valid, update currentAnswerSetNum to prep the next question, and
  // respond with the response to that answer.
  if (currAnswerSet.answers[input]) {
    // The following algorithm will always generate the next valid index in questionAndAnswerSets
    var nextAnswerSetNum = (currAnswerSetNum + 1) % questionAndAnswerSets.length;
    var nextAnswerSet = questionAndAnswerSets[nextAnswerSetNum];
    currAnswerSetNum = nextAnswerSetNum;
    return `
      ${currAnswerSet.answers[input]} <br/><br/>
      ${userName}! ${nextAnswerSet.question}
    `;
  }
  // If the user's answer is invalid, ask user to enter a valid answer.
  return `Please enter a valid answer, ${userName}. ${currAnswerSet.question}`;
};

/**
 * Base: Chat Bot Stores User's Age
 */

// Store user age as global that can be reused across conversation.
var userAge;

var chatBotAgeMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Age below with chatBotAgeMain as the main function.
  var questionAndAnswerSets = [
    {
      question: 'Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)',
      answers: {
        yes: 'Wow! Me too! I\'ve been working on the Blackjack project. Makes my day!',
        no: 'Oh ok, just normally happy ;)',
        maybe: 'It seems the very thought of coding makes people happy!',
      },
    },
    {
      question: 'Do you enjoy coding most during the day, night, or both? (day/night/both)',
      answers: {
        day: 'Ah yes, when the sun is high in the sky, I can feel its energy too.',
        night: 'Under the calm and gentle moon, I also find my focus.',
        both: "Indeed, I could code 24/7 if I didn't have to sleep!",
      },
    },
  ];
  // Create a temporary variable to access the current answer set concisely.
  var currAnswerSet = questionAndAnswerSets[currAnswerSetNum];

  // Logic to ask for and store user name.
  if (!userName) {
    if (input == '') {
      return 'Hey! I\'m Robocop. What\'s your name?';
    }
    userName = input;
    return `${userName}! What a cool name. How old are you?`;
  }

  if (!userAge) {
    // If user doesn't input anything, repeat the question
    if (input == '') {
      return `${userName}! What a cool name. How old are you?`;
    }
    userAge = Number(input);
    if (Number.isNaN(userAge)) {
      return 'Is that a valid age? How old are you?';
    }
    if (userAge < 20) {
      return `What a spritely age, ${userName}! ${currAnswerSet.question}`;
    }
    if (userAge < 60) {
      return `You're in your prime, ${userName}! ${currAnswerSet.question}`;
    }
    return `What a wise age, ${userName}! ${currAnswerSet.question}`;
  }

  // If user input is empty, the bot asks the question.
  if (input == '') {
    return `${userName}! ${currAnswerSet.question}`;
  }

  // If the user's answer is valid, update currentAnswerSetNum to prep the next question, and
  // respond with the response to that answer.
  if (currAnswerSet.answers[input]) {
    // The following algorithm will always generate the next valid index in questionAndAnswerSets
    var nextAnswerSetNum = (currAnswerSetNum + 1) % questionAndAnswerSets.length;
    var nextAnswerSet = questionAndAnswerSets[nextAnswerSetNum];
    currAnswerSetNum = nextAnswerSetNum;
    return `
      ${currAnswerSet.answers[input]} <br/><br/>
      ${userName}! ${nextAnswerSet.question}
    `;
  }
  // If the user's answer is invalid, ask user to enter a valid answer.
  return `Please enter a valid answer, ${userName}. ${currAnswerSet.question}`;
};

/**
 * More Comfortable: Chat Bot Named Answer Sets
 */

// Set the first question to "has been coding"
var currAnswerSetId = 'hasBeenCoding';

var chatBotNamedMain = function (input) {
  // Complete the More Comfortable: Chat Bot Named Answer Sets below with chatBotNamedMain as the main function.
  var questionAndAnswerSets = {
    hasBeenCoding: {
      question:
      'Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)',
      answers: {
        yes: 'Wow! Me too! I\'ve been working on the Blackjack project. Makes my day!',
        no: 'Oh ok, just normally happy ;)',
        maybe: 'It seems the very thought of coding makes people happy!',
      },
      nextQuestionId: 'timeOfDay',
    },
    timeOfDay: {
      question:
      'Do you enjoy coding most during the day, night, or both? (day/night/both)',
      answers: {
        day: 'Ah yes, when the sun is high in the sky, I can feel its energy too.',
        night: 'Under the calm and gentle moon, I also find my focus.',
        both: "Indeed, I could code 24/7 if I didn't have to sleep!",
      },
      nextQuestionId: 'weather',
    },
    weather: {
      question:
      'Are you most productive when it\'s sunny or raining? (sun/rain)',
      answers: {
        sun: 'The sun warms my heart and powers me to code.',
        rain: 'The rain washes away my distractions and allows me to focus.',
      },
      nextQuestionId: 'hasBeenCoding',
    },
  };

  // Create a temporary variable to access the current answer set concisely.
  var currAnswerSet = questionAndAnswerSets[currAnswerSetId];

  // Logic to ask for and store user name.
  if (!userName) {
    if (input == '') {
      return 'Hey! I\'m Robocop. What\'s your name?';
    }
    userName = input;
    return `${userName}! What a cool name. How old are you?`;
  }

  if (!userAge) {
    // If user doesn't input anything, repeat the question
    if (input == '') {
      return `${userName}! What a cool name. How old are you?`;
    }
    userAge = Number(input);
    if (Number.isNaN(userAge)) {
      return 'Is that a valid age? How old are you?';
    }
    if (userAge < 20) {
      return `What a spritely age, ${userName}! ${currAnswerSet.question}`;
    }
    if (userAge < 60) {
      return `You're in your prime, ${userName}! ${currAnswerSet.question}`;
    }
    return `What a wise age, ${userName}! ${currAnswerSet.question}`;
  }

  // If user input is empty, the bot asks the question.
  if (input == '') {
    return `${userName}! ${currAnswerSet.question}`;
  }

  // If the user's answer is valid, update currentAnswerSetId to prep the next question, and
  // respond with the response to that answer.
  if (currAnswerSet.answers[input]) {
    // Retrieve the next answer set ID from the current answer set
    var nextAnswerSetId = currAnswerSet.nextQuestionId;
    var nextAnswerSet = questionAndAnswerSets[nextAnswerSetId];
    currAnswerSetId = nextAnswerSetId;
    return `
      ${currAnswerSet.answers[input]} <br/><br/>
      ${userName}! ${nextAnswerSet.question}
    `;
  }
  // If the user's answer is invalid, ask user to enter a valid answer.
  return `Please enter a valid answer, ${userName}. ${currAnswerSet.question}`;
};

/**
 * More Comfortable: Dynamic Chat Bot
 */

var chatBotDynamicMain = function (input) {
  // Complete the More Comfortable: Dynamic Chat Bot below with chatBotDynamicMain as the main function.
  var questionAndAnswerSets = {
    hasBeenCoding: {
      question: 'Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)',
      answers: {
        yes: {
          response: 'Wow! Me too! I\'ve been working on the Blackjack project. Makes my day!',
          nextQuestionId: 'timeOfDay',
        },
        no: {
          response: 'Oh ok, just normally happy ;)',
          nextQuestionId: 'happiness',
        },
      },
    },
    timeOfDay: {
      question: 'Do you enjoy coding most during the day, night, or both? (day/night/both)',
      answers: {
        day: 'Ah yes, when the sun is high in the sky, I can feel its energy too.',
        night: 'Under the calm and gentle moon, I also find my focus.',
        both: "Indeed, I could code 24/7 if I didn't have to sleep!",
      },
      nextQuestionId: 'weather',
    },
    weather: {
      question: 'Are you most productive when it\'s sunny or raining? (sun/rain)',
      answers: {
        sun: 'The sun warms my heart and powers me to code.',
        rain: 'The rain washes away my distractions and allows me to focus.',
      },
      nextQuestionId: 'hasBeenCoding',
    },
    happiness: {
      question: 'Do arrays or objects make you happier? (arrays/objects)',
      answers: {
        arrays: 'I knew it, arrays are my favourite too.',
        objects: 'You\'re good at coding- objects are hard!',
      },
      nextQuestionId: 'timeOfDay',
    },
  };

  // Create a temporary variable to access the current answer set concisely.
  var currAnswerSet = questionAndAnswerSets[currAnswerSetId];

  // Logic to ask for and store user name.
  if (!userName) {
    if (input == '') {
      return 'Hey! I\'m Robocop. What\'s your name?';
    }
    userName = input;
    return `${userName}! What a cool name. How old are you?`;
  }

  if (!userAge) {
    // If user doesn't input anything, repeat the question
    if (input == '') {
      return `${userName}! What a cool name. How old are you?`;
    }
    userAge = Number(input);
    if (Number.isNaN(userAge)) {
      return 'Is that a valid age? How old are you?';
    }
    if (userAge < 20) {
      return `What a spritely age, ${userName}! ${currAnswerSet.question}`;
    }
    if (userAge < 60) {
      return `You're in your prime, ${userName}! ${currAnswerSet.question}`;
    }
    return `What a wise age, ${userName}! ${currAnswerSet.question}`;
  }

  // If user input is empty, the bot asks the question.
  if (input == '') {
    return `${userName}! ${currAnswerSet.question}`;
  }

  // If the user's answer is valid, update currentAnswerSetId to prep the next question, and
  // respond with the response to that answer.
  if (currAnswerSet.answers[input]) {
    // By default, each answer key contains a response string value
    var response = currAnswerSet.answers[input];
    // Retrieve the next answer set ID from the current answer set
    var nextAnswerSetId = currAnswerSet.nextQuestionId;
    // If answer set doesn't have fixed next question ID,
    // look for next question ID in specific answer's object.
    if (!nextAnswerSetId) {
      nextAnswerSetId = currAnswerSet.answers[input].nextQuestionId;
      // We also know that the response will now be nested inside each answer's object
      response = currAnswerSet.answers[input].response;
    }
    var nextAnswerSet = questionAndAnswerSets[nextAnswerSetId];
    currAnswerSetId = nextAnswerSetId;
    return `
      ${response} <br/><br/>
      ${userName}! ${nextAnswerSet.question}
    `;
  }
  // If the user's answer is invalid, ask user to enter a valid answer.
  return `Please enter a valid answer, ${userName}. ${currAnswerSet.question}`;
};

/**
 * More Comfortable: Chat Bot Fortune Telling
 */

var chatBotFortuneMain = function (input) {
  // Complete the More Comfortable: Chat Bot Fortune Telling below with chatBotFortuneMain as the main function.

  // The following implementation extends Single Chat Bot Answer Set
  var question = 'Let me tell your fortune. If you have a birthmark, where is it on your body? (head/torso/arms/legs)';
  // If user input is empty, the bot asks the question.
  if (input == '') {
    return question;
  }

  // Store valid user answers and the bot's responses to those answers.
  var answersAndResponses = {
    head: 'You have a great need for other people to like and admire you.',
    torso: 'You have a tendency to be critical of yourself.',
    arms: 'You have a great deal of unused capacity which you have not turned to your advantage.',
    legs: 'While you have some personality weaknesses, you are generally able to compensate for them.',
  };

  // If the user's answer is valid, respond with the response to that answer.
  if (answersAndResponses[input]) {
    return answersAndResponses[input];
  }
  // If the user's answer is invalid, ask user to enter a valid answer.
  return `Please enter a valid answer. ${question}`;
};