/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/*  
proyecto Calculator-pro
Berenguer Pou
precourse ISDI Coders 2022-1
*/
function sqrt(number) {
  return Math.sqrt(number);
}

function getAndCheckInput() {
  // returns null is user escapes the prompt dialog or a number if input is a valid number
  let value;
  while (value === undefined) {
    // eslint-disable-next-line no-alert
    const input = prompt("Type a number:");
    if (Number.isNaN(input)) {
      // eslint-disable-next-line no-alert
      alert(`${input} is not a valid number. Please type it again!`);
    } else {
      switch (input) {
        case null:
          return null;
        case "":
          // eslint-disable-next-line no-alert
          alert("Value is empty! Please type a number.");
          break;
        default:
          value = Number(input);
          break;
      }
    }
  }
  return value;
}

function isdiCalculatorPro() {
  const numList = [];
  let stopCalculations = false;
  let numListMsg = "Numbers in the list: ";
  console.log("Hello! ISDICalculator-Pro started!");
  function getNewValues(moreNumbers) {
    while (moreNumbers) {
      const number = getAndCheckInput();
      if (number !== null) {
        numList.push(number);
        console.log((numListMsg += `${number} `)); // logs the list of accumulated valid numbers
      } else if (numList.length === 0) {
        console.log("You have stopped ISDI Calculator!");
        moreNumbers = false;
        stopCalculations = true; // used to avoid while loops and end the program if user escapes before having at least one number in the list
      } else if (number === null) {
        moreNumbers = false;
        makeCalculations(numList, numListMsg);
      }
    }
  }
  getNewValues(true);
  while (!stopCalculations) {
    const answer = confirm(
      "Do you want to continue calculations with more numbers?"
    );
    if (answer) getNewValues(true);
    else stopCalculations = true;
  }
  console.log("Bye! End of program ISDI Calculator-pro :)");
}

function makeCalculations(arrNumbers, numberListStr) {
  console.log(`>>> Begin calculations for ${numberListStr} ...`);
  if (arrNumbers.length === 1) {
    if (arrNumbers[0] < 0) {
      console.log(
        `${arrNumbers[0]} is a negative number! It's not possible to calculate its square root.`
      );
    } else
      console.log(
        `You just added one number! The square root of ${
          arrNumbers[0]
        } is: ${sqrt(arrNumbers[0]).toFixed(3)}`
      );
  } else {
    // calculates operations and prints results for any array of numbers
    const results = [
      { sum: arrNumbers[0] },
      { rest: arrNumbers[0] },
      { multiply: arrNumbers[0] },
      { division: arrNumbers[0] },
    ];
    for (let i = 1; i < arrNumbers.length; i++) {
      results[0].sum += arrNumbers[i];
      results[1].rest -= arrNumbers[i];
      results[2].multiply *= arrNumbers[i];
      results[3].division /= arrNumbers[i];
    }
    // print Results to the console
    for (let i = 0; i < results.length; i++) {
      for (const key in results[i]) {
        console.log(
          `Result of ${key} operation is: ${Number(results[i][key].toFixed(3))}`
        );
      }
    }
  }
  console.log(`>>> End calculations for ${numberListStr} ...`);
}

isdiCalculatorPro();
