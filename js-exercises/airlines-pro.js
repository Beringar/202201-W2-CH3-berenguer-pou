/*  
proyecto airlines-pro
Berenguer Pou
precourse ISDI Coders 2022-1
*/

const flights = [
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

function airlines(maxFlights, lastFlights, flights) {
  console.log(`💻 Airlines Console started...`);
  const username = getPromptInput(
    "Please, enter your username:",
    "Incorrect name! You must enter a valid name.",
    false,
    false
  );
  if (username === null) {
    console.log("🟥 End of Airlines Console. Bye!");
    return;
  }
  console.log(`👋 Welcome ${username}!`);
  printFlights(flights);
  console.log(
    `ℹ️ The average price of available flights is: ${getAveragePrice(
      flights
    ).toFixed(2)}€`
  );
  console.log(
    `ℹ️ Flights with stopovers: ${flights.reduce((acc, flight) => {
      if (flight.scale) acc += 1;
      return acc;
    }, 0)}`
  );
  console.log(
    `ℹ️ These are the last ${lastFlights} destinations of scheduled flights:`
  );
  printLastDestinations(lastFlights, flights);
  const userRole = getPromptInput(
    "Please, enter your role (user or admin):",
    "Invalid input. Allowed values are: user, admin.",
    false,
    false,
    "user",
    "admin"
  );
  if (userRole === null) {
    console.log("🟥 End of Airlines Console. Bye!");
    return;
  }
  switch (userRole.toLowerCase()) {
    case "admin":
      airlinesAdmin(maxFlights, flights);
      break;
    case "user":
      airlinesUser(flights);
      break;
    default:
      break;
  }
  console.log("🟥 End of Airlines Console. Bye!");
}

function airlinesAdmin(maxFlights, flights) {
  let endAdminConsole = false;
  while (!endAdminConsole) {
    const option = getPromptInput(
      "⚙️ Airlines-pro ADMIN console\n\n1) Add a new flight\n2) Remove a flight\n3) Print Flight list\n4) Exit Airlines-Pro program\n\nEnter the number of desired option:",
      "Invalid input. Allowed inputs are 1, 2, 3 or 4.",
      false,
      false,
      "1",
      "2",
      "3",
      "4"
    );
    if (option === null) return;
    switch (option) {
      case "1":
        addFlight(maxFlights, flights);
        break;
      case "2":
        removeFlight(flights);
        break;
      case "3":
        printFlights(flights);
        break;
      case "4":
        endAdminConsole = true;
        break;
      default:
        break;
    }
  }
}

function airlinesUser(flights) {
  let endUserConsole = false;
  while (!endUserConsole) {
    const option = getPromptInput(
      "👤 Airlines-pro USER console\n\n1) Search for flights by a reference price\n2) Exit Airlines-Pro program\n\nEnter the number of desired option:",
      "Invalid input. Allowed inputs are 1 or 2.",
      false,
      false,
      "1",
      "2"
    );
    if (option === null) return;
    switch (option) {
      case "1":
        if (searchFlightsByPrice(flights)) endUserConsole = true;
        break;
      case "2":
        endUserConsole = true;
        break;
      default:
        break;
    }
  }
}

function searchFlightsByPrice(flights) {
  let endFindPrices = false;
  const price = Number(
    Number.parseFloat(
      getPromptInput(
        "Please enter the amount of your reference price:",
        "Invalid input. Ticket price must be a number",
        true
      )
    ).toFixed(2)
  );
  if (isNaN(price)) {
    console.log(
      "❗️You have cancelled Search for flights by a reference price"
    );
    return;
  }
  while (!endFindPrices) {
    const option = getPromptInput(
      `Your reference price is: € ${price}\n1) Search for flights more expensive than € ${price}\n2) Search for flights cheaper than € ${price}\n3) Search for flights with the same price of €${price}\n4) Exit Airlines-Pro program\nEnter the number of desired option:`,
      "Invalid input. Allowed inputs are 1, 2, 3 or 4.",
      false,
      false,
      "1",
      "2",
      "3",
      "4"
    );
    if (option === null) {
      console.log(
        "❗️You have cancelled Search for flights by a reference price"
      );
      return;
    }
    switch (option) {
      case "1":
      case "2":
      case "3":
        if (getFlightsByPrice(price, option, flights)) endFindPrices = true;
        break;
      case "4":
        endFindPrices = true;
        break;
      default:
        break;
    }
  }
  return true;
}

function getFlightsByPrice(price, option, flights) {
  let msg = "";
  const filteredFlights = flights.filter((flight) => {
    let condition;
    switch (option) {
      case "1":
        msg = "more expensive than";
        condition = flight.cost > price;
        break;
      case "2":
        msg = "cheaper than";
        condition = flight.cost < price;
        break;
      case "3":
        msg = "with equal price of";
        condition = flight.cost === price;
        break;
      default:
        break;
    }
    return condition;
  });
  printFlights(
    filteredFlights,
    `🟦 Results for your criteria ==> Flights ${msg} € ${price}.`
  );
  if (filteredFlights.length === 0) return;
  if (bookFlight(filteredFlights)) return true;
}

function bookFlight(filteredFlights) {
  let id, checkId;
  do {
    id = Number.parseInt(
      getPromptInput(
        "Book a ticket now!\nJust type the ID of the flight you want to book:",
        "Invalid input. ID must be a number",
        true
      )
    );
    if (isNaN(id)) {
      console.log("❗️You have cancelled book a ticket");
      return;
    }
    checkId = filteredFlights.findIndex((flight) => flight.id === id);
    if (checkId === -1)
      alert(
        `❗️ There is no flight in the list with ID ${id}. Please enter the ID of an existing flight.`
      );
  } while (checkId === -1);
  console.log(
    `✅ ✈️ You have booked a flight ticket for flight with ID: ${id} Thank you!. See you soon!`
  );
  return true;
}

function removeFlight(flights) {
  let id, checkId;
  do {
    id = Number.parseInt(
      getPromptInput(
        "Type the ID of the flight you want to remove:",
        "Invalid input. ID must be a number",
        true
      )
    );
    if (isNaN(id)) {
      console.log("❗️You have cancelled Remove a flight");
      return;
    }
    checkId = flights.findIndex((flight) => flight.id === id);
    if (checkId === -1)
      alert(
        `❗️ There is no flight in the list with ID ${id}. Please enter the ID of an existing flight.`
      );
  } while (checkId === -1);
  flights.splice(checkId, 1);
  console.log(
    `❌ Flight with ID: ${id} has been removed from the list. Total flights: ${flights.length}`
  );
}

function addFlight(maxFlights, flights) {
  if (maxFlights === flights.length) {
    alert(
      `You have reached the maximum number of ${maxFlights} flights in the schedule.\nIf you want to add a new flight, please remove first one or more flights.`
    );
    return;
  }
  const newFlight = createFlight(flights);
  if (!newFlight) {
    console.log("❗️You have cancelled Add new Flight");
    return;
  }
  flights.push(newFlight);
  console.log(
    `✅ New flight with ID: ${newFlight.id} has been added to the list. Total flights: ${flights.length}`
  );
}

function getAveragePrice(flights) {
  return flights.reduce((acc, flight) => acc + flight.cost, 0) / flights.length;
}

function printFlights(
  flights,
  msg = "ℹ️ List of available flights sorted by ID."
) {
  console.log(msg + ` Total flights: ${flights.length}`);
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

function sortFlights(flights) {
  return flights.slice().sort((a, b) => a.id - b.id);
}

function printLastDestinations(numFlights, flights) {
  const lastFlights = sortFlights(flights).filter(
    (item, index, array) => index >= array.length - numFlights
  );
  console.table(lastFlights, ["to", "id"]);
}

function getPromptInput(msg, errorMsg, numType, allowSpaces, ...allowedValues) {
  let input, validInput;
  const regExp = allowSpaces ? /w*$/ : /^\S*$/;
  do {
    input = prompt(msg);
    if (input === null) return null;
    if (regExp.test(input)) {
      if (allowedValues.includes(input.toLocaleLowerCase())) validInput = input;
      else if (numType && !isNaN(input)) validInput = input;
      else if (allowedValues.length === 0 && !numType) validInput = input;
      else alert(errorMsg);
    } else alert(errorMsg);
  } while (!validInput);
  return validInput;
}

function createFlight(flights) {
  let id, scale, checkId;
  do {
    const id = Number.parseInt(
      getPromptInput(
        "Type a numeric ID for the new flight:",
        "Invalid input. ID must be a number",
        true
      )
    );
    checkId = flights.findIndex((flight) => flight.id === id);
    if (checkId > -1)
      alert(
        `ID ${id} already exists in the listing! Please choose another numerical value.`
      );
  } while (checkId > -1);
  if (isNaN(id)) return;
  const to = getPromptInput(
    `Flight ID: ${id}. City of destination?`,
    "error city",
    false,
    true
  );
  if (to === null) return;
  const from = getPromptInput(
    `Flight ID: ${id}, to: ${to}. City of depature?`,
    "error city",
    false,
    true
  );
  if (from === null) return;
  const cost = Number(
    Number.parseFloat(
      getPromptInput(
        `Flight ID: ${id}, to: ${to}, from: ${from}. Ticket price?`,
        "Invalid input. Ticket price must be a number",
        true
      )
    ).toFixed(2)
  );
  if (isNaN(cost)) return;
  scale = getPromptInput(
    `Flight ID: ${id}, to: ${to}, from: ${from}, cost: ${cost}. Does make stopovers? (Type Y or N)`,
    "Invalid input. Allowed inputs are 'Y' or 'N'",
    false,
    false,
    "y",
    "n"
  );
  if (scale === null) return;
  scale = scale.toLowerCase() === "y";
  return { id, to, from, cost, scale };
}
airlines(15, 5, flights);
