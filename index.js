const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how much I make a year?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'It ceases to exist without me.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!'
];

var totalBatteries = batteryBatches.reduce(function(initialBatteries, currentBatch) {
  return initialBatteries + currentBatch;
}, 0);

function reducingToCount(array) {
//set variables to track each word count (0, 1, 2, etc)
  var zeroCount = 0, oneCount = 0, twoCount = 0, threeCount = 0, fourCount = 0,
  fiveCount = 0, sixCount = 0, sevenCount = 0, eightCount = 0, nineCount = 0,
  tenCount = 0, elevenCount = 0, twelveCount = 0, thirteenCount = 0, fourteenCount = 0,
  fifteenCount = 0;

  /*reduce callback called on array parameter that counts the number of words using .split(),
  //stores the count in a variable, and then has a series of
  if statements that compare the count variable to each count (integer) and increases the correct tracking variable */
  array.reduce(function(totalSum, line) {
    var wordCount = line.split(' ').length;
    switch (wordCount) {
      case 0:
        zeroCount++;
        break;
      case 1:
        oneCount++;
        break;
      case 2:
        twoCount++;
        break;
      case 3:
        threeCount++;
        break;
      case 4:
        fourCount++;
        break;
      case 5:
        fiveCount++;
        break;
      case 6:
        sixCount++;
        break;
      case 7:
        sevenCount++;
        break;
      case 8:
        eightCount++;
        break;
      case 9:
        nineCount++;
        break;
      case 10:
        tenCount++;
        break;
      case 11:
        elevenCount++;
        break;
      case 12:
        twelveCount++;
        break;
      case 13:
        thirteenCount++;
        break;
      case 14:
        fourteenCount++;
        break;
      case 15:
        fifteenCount++;
        break;

      default:
      console.log('Missed a match.')
    }
  }, 0)

  //object put together using the tracking variables and returned
  var countObject = {
    '0': zeroCount,
    '1': oneCount,
    '2': twoCount,
    '3': threeCount,
    '4': fourCount,
    '5': fiveCount,
    '6': sixCount,
    '7': sevenCount,
    '8': eightCount,
    '9': nineCount,
    '10': tenCount,
    '11': elevenCount,
    '12': twelveCount,
    '13': thirteenCount,
    '14': fourteenCount,
    '15': fifteenCount,
  }

//creating a function that removes key-value pairs with a property of 0
  function slimmingDown(object) {
    for (var property in object) {
      if (object[property] === 0) {
        delete object[property];
      }
    }
  }

  slimmingDown(countObject);

  return countObject;

}

var wordCountMap = reducingToCount(monologueLines);
