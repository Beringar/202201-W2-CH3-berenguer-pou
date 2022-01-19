/*
proyecto Pasapalabra
Berenguer Pou
precourse ISDI Coders 2022-1
*/

const questionsSpanish = [
  {
    letter: "a",
    questions: [
      {
        question: "CON LA A. Apellido del autor de Javascript Mental Models",
        answer: "abramov",
      },
      {
        question:
          "CON LA A. Objeto JS que puede almacenar un conjunto de datos ordenado",
        answer: "array",
      },
      { question: "CONTIENE LA A. Cuando sale el sol", answer: "alba" },
    ],
  },
  {
    letter: "b",
    questions: [
      {
        question: "CON LA B. Tipo de valor que almacena 'true' o 'false'",
        answer: "booleano",
      },
      { question: "CON LA B. Capital de Catalunya", answer: "barcelona" },
      {
        question: "CONTIENE LA B. Sinónimo de terminar, finalizar",
        answer: "acabar",
      },
    ],
  },
  {
    letter: "c",
    questions: [
      {
        question: "CON LA C. Primer clasificado en un torneo",
        answer: "campeón",
      },
      {
        question: "CON LA C. Animal que adapta su color al entorno",
        answer: "camaleón",
      },
      {
        question:
          "CONTIENE LA C. Siglas de la antigua Unión Soviética en cirílico",
        answer: "cccp",
      },
    ],
  },
  {
    letter: "d",
    questions: [
      {
        question: "CON LA D. Nombre del gnomo más famoso del bosque",
        answer: "david",
      },
      { question: "CON LA D. Relativo a los dioses", answer: "divino" },
      {
        question:
          "CONTIENE LA D. Método que procesa elementos en un array y devuelve un solo valor final",
        answer: "reduce",
      },
    ],
  },
  {
    letter: "e",
    questions: [
      {
        question: "CON LA E. En una web se encuentran en una hoja y en cascada",
        answer: "estilos",
      },
      {
        question: "CON LA E. Madera oscura y noble muy apreciada",
        answer: "ébano",
      },
      {
        question:
          "CONTIENE LA E. Chiste gráfico que corre por las redes sociales",
        answer: "meme",
      },
    ],
  },
  {
    letter: "f",
    questions: [
      {
        question:
          "CON LA F. Método que selecciona elementos en un array según una condición",
        answer: "filter",
      },
      {
        question: "CON LA F. Tipo de pirata que no es corsario ni bucanero",
        answer: "filibustero",
      },
      {
        question: "CONTIENE la F. Reducir la presión, la tensión",
        answer: "aflojar",
      },
    ],
  },
  {
    letter: "g",
    questions: [
      {
        question: "CON LA G. Campo de trabajo siberiano creado por Stalin",
        answer: "gulag",
      },
      {
        question: "CON LA G. Marca americana  de dispositivos GPS",
        answer: "garmin",
      },
      {
        question: "CONTIENE LA G. Nombre del pallaso blanco por excelencia",
        answer: "augusto",
      },
    ],
  },
  {
    letter: "h",
    questions: [
      { question: "CON LA H. Comunicar oralmente", answer: "hablar" },
      {
        question: "CON LA H. Espacio del coche en el que viajan los pasajeros",
        answer: "habitáculo",
      },
      {
        question: "CONTIENE LA H. Más allà de las fuerzas humanas",
        answer: "sobrehumano",
      },
    ],
  },
  {
    letter: "i",
    questions: [
      { question: "CON LA I. País con muchos developers", answer: "india" },
      {
        question: "CON LA I. Nombre del zar ruso más terrible",
        answer: "iván",
      },
      {
        question: "CONTIENE LA I. La lengua de los enemigos de Astérix",
        answer: "latín",
      },
    ],
  },
  {
    letter: "j",
    questions: [
      {
        question: "CON LA J. Librería JS que ya quedó desfasada",
        answer: "jquery",
      },
      { question: "CON LA J. Si es de bellota es mejor", answer: "jamón" },
      { question: "CONTIENE LA J. Goya la pintó desnuda", answer: "maja" },
    ],
  },
  {
    letter: "k",
    questions: [
      {
        question: "CON LA K. Nombre del autor de You Don't Know JS Yet",
        answer: "kyle",
      },
      {
        question:
          "CON LA K. Elemento que hace pareja con un 'value' en un objeto JS",
        answer: "key",
      },
      {
        question: "CONTIENE LA K. Bebida espirituosa japonesa",
        answer: "sake",
      },
    ],
  },
  {
    letter: "l",
    questions: [
      {
        question: "CON LA L. Extensión de un array o string en JS",
        answer: "length",
      },
      {
        question: "CON LA L. Rey belga que colonizó el Congo",
        answer: "leopoldo",
      },
      {
        question: "CONTIENE LA L. Si no tienes una, cavar el hoyo será difícil",
        answer: "pala",
      },
    ],
  },
  {
    letter: "m",
    questions: [
      {
        question:
          "CON LA M. Nombre de una conocida base de datos no SQL de código abierto",
        answer: "mongodb",
      },
      {
        question: "CON LA M. Compañía que posee VSCode y Github",
        answer: "microsoft",
      },
      {
        question: "CONTIENE LA M. El tío más americano de todos",
        answer: "sam",
      },
    ],
  },
  {
    letter: "n",
    questions: [
      {
        question:
          "CON LA N. Valor indefinido que se asigna intencionalmente en JS",
        answer: "null",
      },
      { question: "CON LA N. Si no es un número en JS es...", answer: "nan" },
      {
        question:
          "CONTIENE LA N. Valor que almacena una variable no inicializada",
        answer: "undefined",
      },
    ],
  },
  {
    letter: "o",
    questions: [
      {
        question:
          "CON LA O. Siglas en inglés de la Programación Orientada a Objetos",
        answer: "oop",
      },
      { question: "CON LA O. Periódico deportivo argentino", answer: "olé" },
      {
        question:
          "CONTIENE LA O. Método que elimina el último elemento de un array",
        answer: "pop",
      },
    ],
  },
  {
    letter: "p",
    questions: [
      {
        question: "CON LA P. Cuando él no está manda marinero...",
        answer: "patrón",
      },
      {
        question:
          "CON LA P. Método que añade un nuevo elemento al final de un array",
        answer: "push",
      },
      {
        question: "CONTIENE LA P. La marca que fundó Steve Jobs",
        answer: "apple",
      },
    ],
  },
  {
    letter: "q",
    questions: [
      {
        question: "CON LA Q. Fabulación, un casi imposible...",
        answer: "quimera",
      },
      { question: "CON LA Q. Sinónimo de romper, partir", answer: "quebrar" },
      {
        question: "CONTIENE LA Q. Casi todos los manda Amazon",
        answer: "paquetes",
      },
    ],
  },
  {
    letter: "r",
    questions: [
      {
        question: "CON LA R. Lenguaje de programación de moda en 2021",
        answer: "rust",
      },
      {
        question: "CON LA R. Librería JS para crear UI's en aplicaciones web",
        answer: "react",
      },
      {
        question: "CONNTIENE LA R. Método JS para eliminar espacios...",
        answer: "trim",
      },
    ],
  },
  {
    letter: "s",
    questions: [
      {
        question: "CON LA S. No le gusta nada la criptonita",
        answer: "supermán",
      },
      {
        question:
          "CON LA S. Tipo de dato primitivo que almacena valores de texto en JS",
        answer: "string",
      },
      {
        question:
          "CONTIENE LA S. Siglas del lenguaje para dar estilo a los contenidos web",
        answer: "css",
      },
    ],
  },
  {
    letter: "t",
    questions: [
      {
        question: "CON LA T. Si el código no pasa por esta fase, algo va mal",
        answer: "testing",
      },
      {
        question: "CON LA T. Si la condición se cumple JS responde...",
        answer: "true",
      },
      {
        question: "CONTIENE la T. Nombre del rey de los Hunos",
        answer: "atila",
      },
    ],
  },
  {
    letter: "u",
    questions: [
      {
        question: "CON LA U. Uno de los planetas más exteriores de la galaxia",
        answer: "urano",
      },
      { question: "CON LA U. Elemento radioactivo", answer: "uranio" },
      {
        question: "CONTIENE LA U. Framework JS competidor de React",
        answer: "vue",
      },
    ],
  },
  {
    letter: "v",
    questions: [
      {
        question:
          "CON LA V. Nombre del príncipe que inspiró la leyenda de Drácula",
        answer: "vlad",
      },
      {
        question: "CON LA V. Compañía tecnológica fundada por Guillermo Rauch",
        answer: "vercel",
      },
      {
        question: "CONTIENE LA V. Framework JS de moda en 2021",
        answer: "svelte",
      },
    ],
  },
  {
    letter: "w",
    questions: [
      {
        question: "CON LA W. Nombre del personaje protagonista en Braveheart",
        answer: "william",
      },
      {
        question:
          "CON LA W. Conocido empaquetador de módulos y dependencias JS",
        answer: "webpack",
      },
      {
        question: "CON LA W. Siglas del servicio cloud de Amazon",
        answer: "aws",
      },
    ],
  },
  {
    letter: "x",
    questions: [
      { question: "CON LA X. Odio a lo extranjero", answer: "xenofobia" },
      {
        question: "CONTIENE LA X. Cayó en la marmita y ya no necesita pócima",
        answer: "obélix",
      },
      { question: "CONTIENE LA X. Relativo al eje", answer: "axial" },
    ],
  },
  {
    letter: "y",
    questions: [
      {
        question: "CON LA Y. Uno de los primeros buscadores en internet",
        answer: "yahoo",
      },
      {
        question:
          "CON LA Y. Herramienta de hierro macizo que usan los herreros",
        answer: "yunque",
      },
      {
        question: "CONTIENE LA Y. Saludo japonés que gusta a Terminator",
        answer: "sayonara",
      },
    ],
  },
  {
    letter: "z",
    questions: [
      {
        question: "CON LA Z. Nombre de la plaza más grande de México",
        answer: "zócalo",
      },
      {
        question: "CON LA Z. Framework CSS competidor de Bootstrap",
        answer: "zurb",
      },
      {
        question: "CONTIENE LA Z. Compañía que fundó MDN Web Docs",
        answer: "mozilla",
      },
    ],
  },
];

const _mockrankings = [
  { name: "Abramov", score: 25 },
  { name: "Fowler", score: 23 },
  { name: "Flanagan", score: 24 },
  { name: "Kyle", score: 10 },
  { name: "Mary", score: 8 },
  { name: "Simmons", score: 12 },
  { name: "K.J.Henry", score: 15 },
];

const generateQuestionList = (questionSet) => {
  return questionSet.map((element) => {
    element.status = "";
    element.pasapalabraIndex = null;
    return element;
  });
};

const getUserName = (msg, errorMsg, allowSpaces) => {
  let input, validInput;
  const regExp = allowSpaces ? /w*$/ : /^\S*$/;
  do {
    input = prompt(msg);
    if (input === null) return null;
    else if (regExp.test(input) && input !== "") validInput = input;
    else alert(errorMsg);
  } while (!validInput);
  return validInput;
};

const askQuestion = (questionItem) => {
  let input, validInput;
  const regExp = /^\S*$/;
  do {
    input = prompt(questionItem.question);
    if (input === null) return null;
    else if (regExp.test(input)) validInput = input;
    else alert("❌ Error: Empty values are not allowed!");
  } while (!validInput);
  return validInput.toLowerCase();
};

const getRanking = (userName, score, gameId, currentRanking) => {
  if (score !== null) {
    currentRanking.push({
      name: `😃 ${userName.toUpperCase()} (game ${gameId})`,
      score: score,
    });
  }
  const updatedRanking = currentRanking
    .slice()
    .sort((a, b) => b.score - a.score)
    .map((player, i) => ({ rank: i + 1, ...player }));
  console.log(`Updated ranking after game ${gameId}:`);
  console.table(updatedRanking);
};

const playNewRosco = (playerName, gameId, questionSet) => {
  const letters = generateQuestionList(questionSet);
  let hits = 0;
  let errors = 0;
  let pasapalabraWords = null;
  console.clear();
  console.log(`🏁 Let's play game ${gameId}!!`);
  roscoLoop: do {
    for (let i = 0; i < letters.length; i++) {
      if (letters[i].status === "🟢" || letters[i].status === "🔴") continue;
      let questionIndex;
      if (letters[i].pasapalabraIndex === null)
        questionIndex = Math.floor(Math.random() * letters[i].questions.length);
      else questionIndex = letters[i].pasapalabraIndex;
      const response = askQuestion(letters[i].questions[questionIndex]);
      console.clear();
      switch (response) {
        case null:
        case "end":
          console.log("❌ Oops! You have ended current game!");
          break roscoLoop;
        case "pasapalabra":
          console.log("pasapalabra");
          letters[i].status = "🔵";
          letters[i].pasapalabraIndex = questionIndex;
          break;
        case letters[i].questions[questionIndex].answer:
          letters[i].status = "🟢";
          hits++;
          break;
        default:
          letters[i].status = "🔴";
          errors++;
          console.log(
            `Wrong❗️❗️ Correct answer is: ${letters[i].questions[
              questionIndex
            ].answer.toUpperCase()}`
          );
          break;
      }
      console.log(
        `Hits: ${hits} Errors: ${errors}\n${letters.reduce(
          (acc, current) => acc + current.status,
          ""
        )}`
      );
    }
    pasapalabraWords = letters.filter(
      (letter) => letter.status === "🔵"
    ).length;
  } while (pasapalabraWords > 0);
  console.log(
    `${playerName.toUpperCase()}, you have answered ${hits} correct words`
  );
  if (pasapalabraWords === 0)
    getRanking(playerName, hits, gameId, _mockrankings);
  else getRanking(playerName, null, gameId, _mockrankings);
};

const pasapalabra = (questionsArray) => {
  let gameId = 0;
  let playAgain = false;
  const userName = getUserName(
    "🤖 Welcome to Pasapalabra Game!\n\nPlease, enter your name:",
    "❌ Error: enter a valid name.\nSpaces or empty value are not accepted.",
    false
  );
  if (userName === null) {
    console.log("❌ Oops! You have stopped the program! Bye!");
    return;
  }
  do {
    gameId++;
    playNewRosco(userName, gameId, questionsArray);
    playAgain = confirm("Do you want to play a new Rosco??");
  } while (playAgain);
  console.log("🤖 End of Pasapalabra program! Bye!");
};

pasapalabra(questionsSpanish);
