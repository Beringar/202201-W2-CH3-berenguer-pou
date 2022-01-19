/*  
proyecto Bingo
Berenguer Pou
precourse ISDI Coders 2022-1
*/

const _mockrankings = [
  { name: "Abramov", score: 1520 },
  { name: "Fowler", score: 810 },
  { name: "Flanagan", score: 2340 },
  { name: "Kyle", score: 205 },
  { name: "Mary", score: 389 },
  { name: "Simmons", score: 540 },
  { name: "K.J.Henry", score: 1100 },
];
const BingoGame = (playerName, numBallsDrum, cardSize) => ({
  _playerName: playerName,
  _numBallsDrum: numBallsDrum,
  _cardSize: cardSize,
  _playerCard: [],
  _score: 0,
  _maxPunctuation: 10000,
  _turnCount: 0,
  _matches: 0,
  _line: { called: false, lineStr: "", turn: 0, lineIndex: 0, bonus: 0 },
  _isBingo: false,
  resetGameData() {
    this._turnCount = 0;
    this._matches = 0;
    this._line = {
      called: false,
      lineStr: "",
      turn: 0,
      lineIndex: 0,
      bonus: 0,
    };
    this._score = 0;
    this._isBingo = false;
    this.generateNewCard();
  },
  get playerName() {
    return this._playerName;
  },
  get numBallsDrum() {
    return this._numBallsDrum;
  },
  get playerCard() {
    return this._playerCard;
  },
  generateNewCard() {
    this._playerCard = generateBingoCard(
      getRandomNumbers(this._numBallsDrum, this._cardSize)
    );
  },
  get score() {
    return this._score;
  },
  get turnCount() {
    return this._turnCount;
  },
  get matches() {
    return this._matches;
  },
  get line() {
    return this._line;
  },
  callLine(lineIndex, turn) {
    if (!this._line.called) {
      const lineToCallStr = this._playerCard[lineIndex].reduce((acc, num) => {
        return acc + `🟢 ${num.number} `;
      }, "");
      console.log(
        `📣 📣 LINE!!!\nOn line ${lineIndex + 1} ➡️ ${lineToCallStr}`
      );
      this._line.called = true;
      this._line.lineStr = lineToCallStr;
      this._line.lineIndex = lineIndex;
      this._line.turn = turn;
    }
  },
  get isBingo() {
    return this._isBingo;
  },
  addTurnCount() {
    this._turnCount++;
  },
  addMatch() {
    this._matches++;
    if (this._matches === this._cardSize) this._isBingo = true;
  },
  getPrintableCard() {
    return this._playerCard.map((line) => {
      return line.map((num) => {
        return num.matched ? `⭐️ ${num.number}` : num.number;
      });
    });
  },
  calculateScore() {
    const pointsPerTurn =
      this._maxPunctuation / (this._numBallsDrum - this._cardSize);
    this._score = Math.ceil(
      this._maxPunctuation - (this._turnCount - this._cardSize) * pointsPerTurn
    );
    this._line.bonus = (this._turnCount - this._line.turn) * 100;
  },
});

// if alreadyPlayedNumbers argument is omitted a new card is generated.
const getRandomNumbers = (
  numBallsDrum,
  cardSize,
  alreadyPlayedNumbers = []
) => {
  const newNumbers = [];
  do {
    const randomNum = Math.ceil(Math.random() * numBallsDrum);
    if (!alreadyPlayedNumbers.includes(randomNum)) {
      alreadyPlayedNumbers.push(randomNum);
      newNumbers.push(randomNum);
    }
  } while (newNumbers.length < cardSize);
  return newNumbers;
};

const generateBingoCard = (numbers) => {
  const playerCard = [];
  const numbersPerLine = 5;
  if (numbers.length % numbersPerLine !== 0) return "Error";
  for (let line = 0; line < numbers.length / numbersPerLine; line++) {
    const lineNumbers = [];
    for (
      let i = numbersPerLine * line;
      i < numbersPerLine * line + numbersPerLine;
      i++
    ) {
      lineNumbers.push({ number: numbers[i], matched: false });
    }
    playerCard.push(lineNumbers);
  }
  return playerCard;
};

const checkCard = (num, bingoGame) => {
  const card = bingoGame.playerCard;
  let match = false;
  for (let line = 0; line < card.length; line++) {
    let lineMatches = 0;
    for (let i = 0; i < card[line].length; i++) {
      if (card[line][i].matched) {
        lineMatches++;
      } else if (card[line][i].number === num) {
        card[line][i].matched = true;
        lineMatches++;
        bingoGame.addMatch();
        match = true;
      }
      if (lineMatches === 5) bingoGame.callLine(line, bingoGame.turnCount);
    }
  }
  return match;
};

const getPromptInput = (msg, errorMsg, allowSpaces) => {
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

const stats = (bingoGame) => {
  if (bingoGame.isBingo) {
    return `🎉 BINGOOO!!!\nYou have won after ${
      bingoGame.turnCount
    } turns.\nScore: ${bingoGame.score}.\nLine (${
      bingoGame.line.lineStr
    }) was called in turn ${bingoGame.line.turn}.\nLine bonus: ${
      bingoGame.line.bonus
    }\n\n🏆 Your final SCORE: ${
      bingoGame.score + bingoGame.line.bonus
    }\n\nClick OK to see final Rankings in your console`;
  } else {
    return `🙁 Ooohhh..! \nYou have aborted the game after ${bingoGame.turnCount} turns.\nYour score is: ${bingoGame.score}.\nClick OK to see final Rankings in your console`;
  }
};

const getRanking = (bingoGame, gameId, currentRanking) => {
  currentRanking.push({
    name: `😃 ${bingoGame.playerName.toUpperCase()} (game ${gameId})`,
    score: bingoGame.score + bingoGame.line.bonus,
  });
  const updatedRanking = currentRanking
    .slice()
    .sort((a, b) => b.score - a.score)
    .map((player, i) => ({ rank: i + 1, ...player }));
  console.table(updatedRanking);
};

const newGame = (bingoGame, gameId) => {
  console.clear();
  const alreadyPlayedNumbers = [];
  const playerName = bingoGame.playerName;
  bingoGame.resetGameData();
  let readyToPlay = false;
  do {
    console.log(`New card for player ${playerName.toUpperCase()} ⬇️`);
    console.table(bingoGame.getPrintableCard());
    const isCardAccepted = confirm(
      `Do you want to start Bingo with the card assigned to you?\nIf you want to change your card, just click Cancel and you'll get a new one!`
    );
    if (isCardAccepted) readyToPlay = true;
    else bingoGame.generateNewCard();
  } while (!readyToPlay);
  let nextTurn = false;
  do {
    console.clear();
    bingoGame.addTurnCount();
    const newRandomNumber = getRandomNumbers(
      bingoGame.numBallsDrum,
      1,
      alreadyPlayedNumbers
    )[0];
    const isMatch = checkCard(newRandomNumber, bingoGame);
    console.log(
      `${bingoGame.playerName.toUpperCase()}'s card after turn: ${
        bingoGame.turnCount
      }`
    );
    console.table(bingoGame.getPrintableCard());
    if (bingoGame.isBingo) {
      bingoGame.calculateScore();
      alert(stats(bingoGame));
      nextTurn = false;
    } else {
      nextTurn = confirm(
        `Turn: ${bingoGame.turnCount}\nNumber ➡️ ${newRandomNumber}\n${
          isMatch ? "✅ You had a match!! 😁" : "❌ Not in your card! ☹️"
        }\n\nDo you want to play a new number?`
      );
    }
  } while (nextTurn);
  if (!bingoGame.isBingo) alert(stats(bingoGame));
  getRanking(bingoGame, gameId, _mockrankings);
};

const startBingo = (numBallsDrum, cardSize) => {
  if (cardSize > numBallsDrum || cardSize % 5 !== 0) {
    console.error(
      `Invalid parameters in startBingo(${numBallsDrum}, ${cardSize}) function call!\n\nnumBallsDrum (the number of balls in the Bingo drum) has to be greater than cardSize (the quantity of numbers we want in each bingo card, any integer value greater than cardSize is accepted).\nAlso cardSize has to be a multiple of 5, in order to have lines of 5 numbers in bingo cards (5, 10, 15, 20... are accepted values).`
    );
    return;
  }
  console.log("Welcome to ISDI Bingo! Program started...");
  alert(scoreRulesMsg);
  const playerName = getPromptInput(
    "🤖 Let's play BINGO!\n\nEnter your name:",
    "Error: Invalid name! Spaces or empty values are not allowed!",
    false
  );
  if (!playerName) {
    console.log("❗️Bye! You have cancelled Bingo program!");
    return;
  }
  let gameId = 1;
  const game = BingoGame(playerName, numBallsDrum, cardSize);
  console.log(`👋 Hello, ${playerName}!`);
  newGame(game, gameId);
  let playAgain = false;
  do {
    playAgain = confirm("Do you want to play a new game?");
    if (playAgain) {
      gameId++;
      newGame(game, gameId);
    }
  } while (playAgain);
  console.log("End of Bingo Program... Bye! 😉");
};

const scoreRulesMsg = `😃 Welcome to ISDI CODERS BINGO!!\n
🏆 Scoring rules:
If you play with a ⚪️ 75-ball bingo drum and your 🔢 card has 15 numbers, you can only call Bingo! in a minimum of 15 turns and a maximum of 75, that is, you have 60 different possibilities to win between turn 15 and turn 75.
The scoring system is dynamic: you start with a maximum score of 15.000 points that is divided by this number of possible turns where you could win (15.000 / (75-15) = 250).
So, for each turn that you do not get the bingo, you lose 😥 250 points from your initial maximum score.
In addition, you will have a Bonus❗️ that will depend on when you call 📣 Line!
If Bingo 🎉 is called on turn 70 and the line was called on turn 50, you will get 100 points for each turn between the line turn and the bingo final turn ((70-50) * 100 = 2000 points!).
A line called on turn 30 has much more bonus points than a line called on turn 60 of the game!
(👀 look at the code to find out how I figured out the function to calculate scores!)
If you continue playing without exiting the program you can play against yourself and compare scores!\n
LET'S PLAY!! 😉`;

startBingo(75, 15);
