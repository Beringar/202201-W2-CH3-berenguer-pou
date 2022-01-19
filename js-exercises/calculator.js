/*  
proyecto Calculator
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
    const input = prompt("Type a number:");
    if (input === null) return null;
    if (Number.isNaN(Number(input)) || input.trim() === "")
      input.trim() === "" // we handle empty values as invalid inputs because "" would throw 0! (but if user types 0 is OK.)
        ? alert("Value is empty! Please type a number.")
        : alert(`${input} is not a valid number. Please type it again!`);
    else value = Number(input);
  }
  return value;
}

function makeCalculations(arrNumbers) {
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
}

function isdiCalculator(limit = 2) {
  if (typeof limit !== "number" || limit <= 0) {
    console.log("Limit has to be a number greater than 0!");
    return;
  }
  const numList = []; // we will store valid numbers in an array to make it reusable for calculator-pro project with minor changes.
  let onlyOneNumber = false;
  let numListMsg = "Numbers in the list: ";
  console.log("Hello! ISDICalculator started!");
  while (!onlyOneNumber && numList.length < limit) {
    const number = getAndCheckInput();
    if (number !== null) {
      numList.push(number);
      console.log((numListMsg += `${number} `)); // logs the list of accumulated valid numbers
    } else if (numList.length === 0) {
      console.log("Bye! You have cancelled ISDI Calculator");
      return; // stops the program if user escapes before having at least one number in the list
    } else if (numList.length === 1) onlyOneNumber = true;
  }
  makeCalculations(numList);
  console.log("Bye! ISDI Calculator has ended calculations");
}

isdiCalculator(2); // we call the main function with a limit of 2, as required in proyecto calculator, but any postive number works.
