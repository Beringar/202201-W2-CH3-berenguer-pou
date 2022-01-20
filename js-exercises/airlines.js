/* eslint-disable no-alert */
/*  
proyecto airlines
Berenguer Pou
precourse ISDI Coders 2022-1
*/

const mockFlights = [
  { id: 123, to: "Bilbao", from: "Barcelona", cost: 58, scale: false },
  { id: 287, to: "New York", from: "Barcelona", cost: 490, scale: false },
  { id: 333, to: "Los Angeles", from: "Madrid", cost: 800, scale: true },
  { id: 221, to: "Paris", from: "Barcelona", cost: 228, scale: false },
  { id: 99, to: "Roma", from: "Barcelona", cost: 110, scale: false },
  { id: 23, to: "London", from: "Madrid", cost: 140, scale: false },
  { id: 843, to: "Madrid", from: "Barcelona", cost: 60, scale: false },
  { id: 154, to: "Tokyo", from: "Madrid", cost: 1420, scale: true },
  { id: 777, to: "Shangai", from: "Barcelona", cost: 1380, scale: true },
  { id: 521, to: "Sydney", from: "Barcelona", cost: 1620, scale: true },
  { id: 32, to: "Tel-Aviv", from: "Madrid", cost: 630, scale: false },
];
function getPromptInput(msg, errorMsg) {
  let input;
  let validInput;
  do {
    input = prompt(msg);
    if (input === null) return null;
    if (/^\S*$/.test(input)) {
      validInput = input;
    } else {
      alert(errorMsg);
    }
  } while (!validInput);
  return validInput;
}

function sortFlights(flights) {
  return flights.slice().sort((a, b) => a.id - b.id);
}

function getAveragePrice(flights) {
  return flights.reduce((acc, flight) => acc + flight.cost, 0) / flights.length;
}

function printFlights(flights) {
  console.log("ℹ️ List of available flights:");
  sortFlights(flights).forEach((flight) => {
    console.log(
      `🛫 flight ${
        flight.id
      } from ${flight.from.toUpperCase()} to ${flight.to.toUpperCase()} has a cost of € ${
        flight.cost
      } and does ${
        flight.scale ? "make stopovers 🛑" : "not make any stopovers"
      }.`
    );
  });
}
function printLastDestinations(numFlights) {
  const lastFlights = sortFlights(mockFlights).filter(
    (item, index, array) => index >= array.length - numFlights
  );
  console.table(lastFlights, ["to", "id"]);
}

function airlines() {
  console.log(`💻 Airlines Console started...`);
  const username = getPromptInput(
    "Please, enter your username:",
    "Incorrect name! You must enter a valid name."
  );
  if (username === null) {
    console.log("⏹ You have stopped Airlines Console. Bye!");
    return;
  }
  console.log(`👋 Welcome ${username}!`);
  printFlights(mockFlights);
  console.log(
    `ℹ️ The average price of available flights is: ${getAveragePrice(
      mockFlights
    ).toFixed(2)}€`
  );
  console.log(
    `ℹ️ Flights with stopovers: ${mockFlights.reduce((acc, flight) => {
      let accumulator = acc;
      if (flight.scale) accumulator += 1;
      return accumulator;
    }, 0)}`
  );
  console.log("ℹ️ These are the last 5 destinations of scheduled flights:");
  printLastDestinations(5);
  console.log("⏹ End of Airlines Console. Bye!");
}

airlines();
