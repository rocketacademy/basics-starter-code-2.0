/**
 * Base: Mad Libs Adjectives
 */

 var words = []

 var getRandomIndex = function (arrayLength) {
   // create a random number from zero to array length minus one.
   // this number is in the range from the first
   // index (zero) to the last index (array length minus one)
   var randomIndex = Math.floor(Math.random() * arrayLength)
   return randomIndex
 }
 
 var madLibsAdjectivesMain = function (input) {
   // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
   if (input == 'create') {
     // get a random index from the array
     var randomIndex = getRandomIndex(words.length)
 
     // use the random index to get a random word value from the array
     var randomAdj = words[randomIndex]
 
     // create the full Mad Lib sentence
     var madLib =
       '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
       randomAdj +
       ' wife.'
 
     return madLib
   }
 
   // add a word to the array
   words.push(input)
 
   // set instructions text
   var myOutputValue = 'Enter an adjective or type "create" to madlib.'
   return myOutputValue
 }
 
 /**
  * Comfortable: Input and Create Mode
  */
 
 // Default to input mode
 var inputCreateMode = 'input'
 
 // New list of adjectives to avoid conflict with `words`
 var inputCreateWords = []
 
 var madLibsInputCreateMain = function (input) {
   // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.
   if (input == 'input') {
     inputCreateMode = 'input'
     // Show user list of adjectives when switching back to input mode
     return `
        You have switched to input mode.<br/><br/>
        Enter an adjective or type "create" to switch to create mode.
      `
   }
 
   if (input == 'create') {
     inputCreateMode = 'create'
     return `
        You have switched to create mode.<br/><br/>
        Hit Submit to madlib.
      `
   }
 
   if (inputCreateMode == 'create') {
     // get a random index from the array
     var randomIndex = getRandomIndex(inputCreateWords.length)
 
     // use the random index to get a random word value from the array
     var randomAdj = inputCreateWords[randomIndex]
 
     // create the full Mad Lib sentence
     var madLib = `
        "WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdj} wife.<br/><br/>
        Hit Submit again to madlib or type "input" to switch to input mode.
      `
 
     return madLib
   }
 
   // if the current mode is 'input' and input is valid (not empty string)
   // input.trim() cuts whitespace from both ends of the string - if the
   // result is not an empty string, it is valid
   if (inputCreateMode == 'input' && input.trim() != '') {
     // add a word to the array
     inputCreateWords.push(input)
     return `You have added ${input}. Enter another adjective or type "create" to madlib.`
   }
 
   // set instructions text
   var myOutputValue =
     'Enter an adjective or type "create" to switch to create mode.'
   return myOutputValue
 }
 
 /**
  * Comfortable: Input Multiple Words
  */
 
 // Default to input mode, renamed mode name to avoid conflict with `inputCreateMode`
 var multipleWordsMode = 'input'
 
 // New list of adjectives to avoid conflict with `words`
 var multipleWordsWords = []
 
 var parseInputWords = function (inputString) {
   // Assume inputString is a string of words separated by a space
   // return value is an array of each substring separated by a space in inputString
   return inputString.split(' ')
 }
 
 var madLibsMultipleWordsMain = function (input) {
   // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
   if (input == 'input') {
     multipleWordsMode = 'input'
     // Show user list of adjectives when switching back to input mode
     return `
        You have switched to input mode.<br/><br/>
        Enter a list of adjectives separated by a space each or type "create" to switch to create mode.
      `
   }
 
   if (input == 'create') {
     multipleWordsMode = 'create'
     return `
        You have switched to create mode.<br/><br/>
        Hit Submit to madlib.
      `
   }
 
   if (multipleWordsMode == 'create') {
     // get a random index from the array
     var randomIndex = getRandomIndex(multipleWordsWords.length)
 
     // use the random index to get a random word value from the array
     var randomAdj = multipleWordsWords[randomIndex]
 
     // create the full Mad Lib sentence
     var madLib = `
        "WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdj} wife.<br/><br/>
        Hit Submit again to madlib or type "input" to switch to input mode.
      `
 
     return madLib
   }
 
   if (multipleWordsMode == 'input') {
     // If input is empty, prompt user to input words
     if (input.trim() == '') {
       return `Please input adjectives separated by a space each to fill in our Mad Lib.`
     }
 
     // Otherwise, save the user-inputted words for later
     var inputWords = parseInputWords(input)
     // Add all input words to the relevant word array
     // We could also accomplish this in fewer lines with JS' array concat() method
     // https://www.w3schools.com/jsref/jsref_concat_array.asp
     for (var counter = 0; counter < inputWords.length; counter += 1) {
       multipleWordsWords.push(inputWords[counter])
     }
     // Create feedback for the user on input
     // The array join() method joins an array's items into a string,
     // separated by the string passed as an argument
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
     var feedbackMessage = `
        You have added ${inputWords.join(
          ', '
        )} to our list of adjectives.<br/><br/>Enter another list of adjectives separated by a space each or type "create" to switch to create mode.
      `
     return feedbackMessage
   }
 }
 
 /**
  * More Comfortable: Mad Libs Multiple Word Types
  */
 
 // Store a global wordType variable to determine what word type gets inputted in input mode
 var currWordType = 'exclamations'
 
 // Store different word types in their own global array
 var exclamations = []
 var adverbs = []
 var nouns = []
 var adjs = []
 
 // Default to input mode, renamed mode name to avoid conflict with `inputCreateMode`
 var multipleTypesMode = 'input'
 
 // Create a feedback message for user input
 var generateInputPrompt = function (nextWordType) {
   return `
      Our list of exclamations is ${exclamations.join(', ')} <br/><br/>
      Our list of adverbs is ${adverbs.join(', ')} <br/><br/>
      Our list of nouns is ${nouns.join(', ')} <br/><br/>
      Our list of adjectives is ${adjs.join(', ')} <br/><br/>
      Please input ${nextWordType} separated by a space each to fill in our Mad Lib. <br/><br/>
      If you have input words for each word type, type "create" to enter create mode to generate complete Mad Libs.
    `
 }
 
 // Store the user-inputted words in the relevant global word array
 var storeInputWords = function (inputWords) {
   // Initialise empty variable as placeholder for the word array we wish to add to
   var wordArray
   // Define wordArray to be the relevant array depending on the current input word type
   if (currWordType == 'exclamations') {
     wordArray = exclamations
   } else if (currWordType == 'adverbs') {
     wordArray = adverbs
   } else if (currWordType == 'nouns') {
     wordArray = nouns
   }
   // This assumes anything not any of the word types above is an adjective
   else {
     wordArray = adjs
   }
   // Add all input words to the relevant word array
   // We could also accomplish this in fewer lines with JS' array concat() method
   // https://www.w3schools.com/jsref/jsref_concat_array.asp
   for (var counter = 0; counter < inputWords.length; counter += 1) {
     wordArray.push(inputWords[counter])
   }
 }
 
 // Get the next word type that the user should input
 // Our hard-coded order is exclamations > adverbs > nouns > adjectives
 var getNextWordType = function () {
   if (currWordType == 'exclamations') {
     return 'adverbs'
   }
   if (currWordType == 'adverbs') {
     return 'nouns'
   }
   if (currWordType == 'nouns') {
     return 'adjectives'
   }
   return 'exclamations'
 }
 
 // Return a random element in the given array
 var getRandomElemInArray = function (arr) {
   return arr[Math.floor(Math.random() * arr.length)]
 }
 
 var completeMadLibMultipleWords = function () {
   // Get a random word from each word type
   var randomExc = getRandomElemInArray(exclamations)
   var randomAdverb = getRandomElemInArray(adverbs)
   var randomNoun = getRandomElemInArray(nouns)
   var randomAdj = getRandomElemInArray(adjs)
   // Return the completed Mad Lib
   return `
      "${randomExc}!" he said ${randomAdverb} as he jumped into his convertible ${randomNoun} and drove off with his ${randomAdj} wife. <br/><br/>
      Hit Submit to complete the Mad Lib again, or enter "input" to input more words.
    `
 }
 
 var madLibsMultipleTypesMain = function (input) {
   // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
   if (input == 'input') {
     multipleTypesMode = 'input'
     // Show user list of adjectives when switching back to input mode
     return `
        You have switched to input mode. <br/><br/>
        ${generateInputPrompt(currWordType)}
      `
   }
 
   if (input == 'create') {
     multipleTypesMode = 'create'
     return 'You have switched to create mode. Hit Submit to complete the Mad Lib.'
   }
 
   if (multipleTypesMode == 'input') {
     // If input is empty, prompt user to input words
     if (input.trim() == '') {
       return `Please input ${currWordType} separated by a space each to fill in our Mad Lib.`
     }
 
     // Otherwise, save the user-inputted words for later
     var inputWords = parseInputWords(input)
     storeInputWords(inputWords)
     // Notice the following logic. We generate the feedback message using currWordType,
     // then set currWordType to nextWordType, then return the feedback message to the user.
     var nextWordType = getNextWordType()
     // Create feedback for the user on input
     var feedbackMessage = `
        You have added ${inputWords.join(
          ', '
        )} to our list of ${currWordType}.<br/><br/>
        ${generateInputPrompt(nextWordType)}
      `
     // Cycle to the next word type for the next user input
     currWordType = nextWordType
     return feedbackMessage
   }
 
   if (multipleTypesMode == 'create') {
     // When user Submits in create mode, return a completed Mad Lib with 1 of the stored adjectives.
     return completeMadLibMultipleWords()
   }
 
   // If we reach this part of control flow, something went wrong
   return 'Oops, something went wrong!'
 }
 
 /**
  * More Comfortable: Popular Mad Libs
  */
 
 // Default to input mode, renamed mode name to avoid conflict with `inputCreateMode`
 var popularMode = 'input'
 
 // Store word frequencies in parallel arrays to word arrays. Our program should keep the lengths
 // of corresponding arrays the same, e.g. exclamations has same length as exclamationsFrequencies
 var exclamationsFrequencies = []
 var adverbsFrequencies = []
 var nounsFrequencies = []
 var adjectivesFrequencies = []
 
 var generateInputPromptWithPopular = function (nextWordType) {
   // Reuse generateInputPrompt from More Comfortable: Mad Libs Multiple Word Types
   return `
      ${generateInputPrompt(nextWordType)} <br/><br/>
      You can also type "popular" to enter create mode with only the most popular words so far
    `
 }
 
 // Store the user-inputted words in the relevant global word array
 var storeInputWordsWithFrequency = function (inputWords) {
   // Initialise empty variable as placeholder for the word array we wish to add to
   var wordArray
   var wordFreqArray
   // Define wordArray to be the relevant array depending on the current input word type
   if (currWordType == 'exclamations') {
     wordArray = exclamations
     wordFreqArray = exclamationsFrequencies
   } else if (currWordType == 'adverbs') {
     wordArray = adverbs
     wordFreqArray = adverbsFrequencies
   } else if (currWordType == 'nouns') {
     wordArray = nouns
     wordFreqArray = nounsFrequencies
   }
   // This assumes anything not any of the word types above is an adjective
   else {
     wordArray = adjs
     wordFreqArray = adjectivesFrequencies
   }
   // Add all input words to the relevant word array
   // We could also accomplish this in fewer lines with JS' array concat() method
   // https://www.w3schools.com/jsref/jsref_concat_array.asp
   for (var counter = 0; counter < inputWords.length; counter += 1) {
     wordArray.push(inputWords[counter])
     // For each new input word, add a 0 frequency for that word in wordFreqArray at the same index
     wordFreqArray.push(0)
   }
 }
 
 var getRandomElemInArrayAndIncrFreq = function (arr, freqArr) {
   // Choose a random index in the word array
   var randomIndex = Math.floor(Math.random() * arr.length)
   // Increment frequency of element at chosen index
   freqArr[randomIndex] += 1
   // Return the element at the random index
   return arr[randomIndex]
 }
 
 var getPopularElemInArray = function (arr, freqArr) {
   // Find the index of most frequent item in freqArr
   // Indexes in freqArr correspond 1-1 to indexes in arr
   var indexOfMostFrequentElem = freqArr.indexOf(Math.max(...freqArr))
   return arr[indexOfMostFrequentElem]
 }
 
 var completeMadLibMultipleWordsWithModes = function (createMode) {
   // If we are in normal create mode, return completed Mad Lib with random words
   if (createMode == 'create') {
     // Get a random word from each word type
     var selectedExc = getRandomElemInArrayAndIncrFreq(
       exclamations,
       exclamationsFrequencies
     )
     var selectedAdverb = getRandomElemInArrayAndIncrFreq(
       adverbs,
       adverbsFrequencies
     )
     var selectedNoun = getRandomElemInArrayAndIncrFreq(nouns, nounsFrequencies)
     var selectedAdj = getRandomElemInArrayAndIncrFreq(
       adjs,
       adjectivesFrequencies
     )
   }
   // Otherwise, if we are in create popular mode, get the most popular word from each word type
   else {
     selectedExc = getPopularElemInArray(exclamations, exclamationsFrequencies)
     selectedAdverb = getPopularElemInArray(adverbs, adverbsFrequencies)
     selectedNoun = getPopularElemInArray(nouns, nounsFrequencies)
     selectedAdj = getPopularElemInArray(adjs, adjectivesFrequencies)
   }
   // Return the completed Mad Lib
   return `
      "${selectedExc}!" he said ${selectedAdverb} as he jumped into his convertible ${selectedNoun} and drove off with his ${selectedAdj} wife. <br/><br/>
      Hit Submit to complete the Mad Lib again, enter "input" to input more words, "create" to create random Mad Libs, or "popular" to create the most popular Mad Lib.
    `
 }
 
 var madLibsPopularMain = function (input) {
   // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
   if (input == 'input') {
     popularMode = 'input'
     // Show user list of adjectives when switching back to input mode
     // Reuse currWordType from More Comfortable: Mad Libs Multiple Word Types
     return `
        You have switched to input mode. <br/><br/>
        ${generateInputPromptWithPopular(currWordType)}
      `
   }
 
   if (input == 'create') {
     popularMode = 'create'
     return 'You have switched to create mode. Hit Submit to complete the Mad Lib.'
   }
 
   // If user specifies popular mode, generate Mad Lib with most frequently chosen words so far.
   if (input == 'popular') {
     popularMode = 'createPopular'
     return 'You have switched to create popular mode. Hit Submit to complete the Mad Lib.'
   }
 
   if (popularMode == 'input') {
     // If input is empty, prompt user to input words
     if (input.trim() == '') {
       return `Please input ${currWordType} separated by a space each to fill in our Mad Lib.`
     }
 
     // Otherwise, save the user-inputted words for later
     var inputWords = parseInputWords(input)
     storeInputWordsWithFrequency(inputWords)
     // Notice the following logic. We generate the feedback message using currWordType,
     // then set currWordType to nextWordType, then return the feedback message to the user.
     var nextWordType = getNextWordType()
     // Create feedback for the user on input
     var feedbackMessage = `
        You have added ${inputWords} to our list of ${currWordType}.<br/><br/>
        ${generateInputPromptWithPopular(nextWordType)}
      `
     // Cycle to the next word type for the next user input
     currWordType = nextWordType
     return feedbackMessage
   }
 
   if (popularMode.startsWith('create')) {
     // When user Submits in create mode, return a completed Mad Lib with 1 of the stored adjectives.
     return completeMadLibMultipleWordsWithModes(popularMode)
   }
 
   // If we reach this part of control flow, something went wrong
   return 'Oops, something went wrong!'
 }
 
 /**
  * More Comfortable: Sets of Mad Libs
  */
 
 // Default to input mode, renamed mode name to avoid conflict with `inputCreateMode`
 var setsMode = 'input'
 
 var completeRandomMadLibMultipleWordsWithModes = function (createMode) {
   // If we are in normal create mode, return completed Mad Lib with random words
   if (createMode == 'create') {
     // Get a random word from each word type
     var selectedExc = getRandomElemInArrayAndIncrFreq(
       exclamations,
       exclamationsFrequencies
     )
     var selectedAdverb = getRandomElemInArrayAndIncrFreq(
       adverbs,
       adverbsFrequencies
     )
     var selectedNoun = getRandomElemInArrayAndIncrFreq(nouns, nounsFrequencies)
     var selectedAdj = getRandomElemInArrayAndIncrFreq(
       adjs,
       adjectivesFrequencies
     )
   }
   // Otherwise, if we are in create popular mode, get the most popular word from each word type
   else {
     selectedExc = getPopularElemInArray(exclamations, exclamationsFrequencies)
     selectedAdverb = getPopularElemInArray(adverbs, adverbsFrequencies)
     selectedNoun = getPopularElemInArray(nouns, nounsFrequencies)
     selectedAdj = getPopularElemInArray(adjs, adjectivesFrequencies)
   }
   // Select a random Mad Lib
   var madLibs = [
     `"${selectedExc}!" he said ${selectedAdverb} as he jumped into his convertible ${selectedNoun} and drove off with his ${selectedAdj} wife.`,
     `She asked ${selectedAdverb} for the ${selectedNoun} and when they were rude, she said ${selectedExc} and hung up the ${selectedAdj} phone.`,
   ]
   var randomMadLibIndex = Math.floor(Math.random() * madLibs.length)
   var selectedMadLib = madLibs[randomMadLibIndex]
 
   // Return the completed Mad Lib
   return `
      ${selectedMadLib} <br/><br/>
      Hit Submit to complete the Mad Lib again, enter "input" to input more words, "create" to create random Mad Libs, or "popular" to create the most popular Mad Lib.
    `
 }
 
 var madLibsSetsMain = function (input) {
   // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
   if (input == 'input') {
     setsMode = 'input'
     // Show user list of adjectives when switching back to input mode
     return `
        You have switched to input mode. <br/><br/>
        ${generateInputPromptWithPopular(currWordType)}
      `
   }
 
   if (input == 'create') {
     setsMode = 'create'
     return 'You have switched to create mode. Hit Submit to complete the Mad Lib.'
   }
 
   // If user specifies popular mode, generate Mad Lib with most frequently chosen words so far.
   if (input == 'popular') {
     setsMode = 'createPopular'
     return 'You have switched to create popular mode. Hit Submit to complete the Mad Lib.'
   }
 
   if (setsMode == 'input') {
     // If input is empty, prompt user to input words
     if (input.trim() == '') {
       return `Please input ${currWordType} separated by a space each to fill in our Mad Lib.`
     }
 
     // Otherwise, save the user-inputted words for later
     var inputWords = parseInputWords(input)
     storeInputWordsWithFrequency(inputWords)
     // Notice the following logic. We generate the feedback message using currWordType,
     // then set currWordType to nextWordType, then return the feedback message to the user.
     var nextWordType = getNextWordType()
     // Create feedback for the user on input
     var feedbackMessage = `
        You have added ${inputWords} to our list of ${currWordType}.<br/><br/>
        ${generateInputPromptWithPopular(nextWordType)}
      `
     // Cycle to the next word type for the next user input
     currWordType = nextWordType
     return feedbackMessage
   }
 
   if (setsMode.startsWith('create')) {
     // When user Submits in create mode, return a completed Mad Lib with 1 of the stored adjectives.
     return completeRandomMadLibMultipleWordsWithModes(setsMode)
   }
 
   // If we reach this part of control flow, something went wrong
   return 'Oops, something went wrong!'
 }
 