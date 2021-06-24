import Player from "./Player.js";

const button = document.querySelector(".lichaam");
let lightModeOn = false;
// Lightmode
const changeHandler = function(){
    lightModeOn = true;
    const polestar = document.querySelector(".jumbotron");
    polestar.classList.toggle("jumbotronLM");

    const nav = document.querySelector("nav");
    nav.classList.toggle("navLM");
    
    let subpagina, a;
    subpagina = document.querySelectorAll(".subpagina");
    for (a = 0; a < subpagina.length; a++) {
    subpagina[a].classList.toggle("subpaginaLM");
    }

    const body = document.querySelector(".lichaam");
    body.classList.toggle("lichaamLM");

    let tekst, b;
    tekst = document.querySelectorAll(".tekst");
    for (b = 0; b < tekst.length; b++) {
      tekst[b].classList.toggle("tekstLM");
    }

    const container = document.querySelector(".container");
    container.classList.toggle("containerLM");

    const footer = document.querySelector(".kopie");
    footer.classList.toggle("kopieLM");    
}

button.addEventListener("click-disabled", changeHandler);
// setInterval
setInterval(function(){
  
    const currentDate = new Date();

    if(lightModeOn === false){
        if(currentDate.getHours() >= 8 && currentDate.getHours() <= 19 ){
                changeHandler();
                console.log(currentDate.getHours());
        }
    }
    else if(lightModeOn === true){
        console.log(currentDate.getHours());
    }
}, 1000);

// Eventlistener voor themeswitcher button
const knopje = document.querySelector(".knopje")
knopje.addEventListener("click", changeHandler);

// Players script
// Variabelen
const playerNameInputField = document.querySelector('.input-field-player-name');
const addPlayerButton = document.querySelector('.add-player-button');
const resetGameButton = document.querySelector('.reset-game-button');

// Elements of player one
const playerOneLabel = document.querySelector('.player-one-label');
const addPointsPlayerOneButton = document.querySelector('.add-points-player1-button');

// Elements of player two
const playerTwoLabel = document.querySelector('.player-two-label');
const addPointsPlayerTwoButton = document.querySelector('.add-points-player2-button');

// Array of players
let players = []; 

// Starting version of the game
resetGame(); 

// Event listeners
if (addPlayerButton) {
  addPlayerButton.addEventListener("click", addPlayer);
}

if (resetGameButton) {
resetGameButton.addEventListener("click", resetGame);
}

if (addPointsPlayerOneButton) {
addPointsPlayerOneButton.addEventListener("click", addPointsPlayerOne);
}

if (addPointsPlayerTwoButton) {
addPointsPlayerTwoButton.addEventListener("click", addPointsPlayerTwo);
}

// Functions
function addPlayer() {
  if (players.length >= 2) {
      alert("There are 2 players (or more) already. Press Reset button to start a new game.");       
      return;
  }

  const playerName = playerNameInputField.value;
  let symbol = "X";
  if (players.length == 1) {
      symbol = "O";
  }
  const newPlayer = new Player(playerName, symbol); 
  
  players.push(newPlayer);

  printPlayers();
}

function printPlayers() {
  playerNameInputField.value = "";

  console.log("Print your players here");

  if (players.length == 0) {
      console.log("No one to play");
      playerOneLabel.innerHTML = "Enter player one..";
      playerTwoLabel.innerHTML = "Enter player two..";
      return;
  }

  playerOneLabel.value

  for(let i = 0; i < players.length; i++) {
      let playersText = "";
      let player = players[i];

      playersText += "Name: " + player.name + "<br>";
      playersText += "Symbol: " + player.symbol + "<br>";
      playersText += "Points: " + player.points + "<br>";

      console.log("Player is: " + JSON.stringify(players[i]) + JSON.stringify(playerOneLabel.points));

      if (i == 0) {
          playerOneLabel.innerHTML = playersText;

          addPointsPlayerOneButton.parentElement.style.visibility = "visible";// Shows add points button
      } else if (i == 1) {            
          playerTwoLabel.innerHTML = playersText;

          addPointsPlayerTwoButton.parentElement.style.visibility = "visible";// Shows add points button
      } else {
          return;
      }
  }
}

function resetGame() {
  console.log("Resetting the game");
  players = [];
  printPlayers();
}

function addPointsPlayerOne() {
  console.log("Adding a point to score of player 1");
  players[0].addPoints();

  printPlayers();
}

function addPointsPlayerTwo() {
  console.log("Adding a point to score of player 2");
  players[1].addPoints();

  printPlayers();
}

// TicTacToe
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}

function handleClick(e) {
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setBoardHoverClass()
  }
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'Draw!'
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`

    let symbol = "X";

    if (circleTurn) {
      symbol = "O";
    }

    for(let i = 0; i < players.length; i++) {
      if (symbol === players[i].symbol) {
        players[i].addPoints();
        console.log(`Player ${symbol} won and has ${players[i].points} points`);
        printPlayers();
      }
    }

  }
  winningMessageElement.classList.add('show')
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  })
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

function swapTurns() {
  circleTurn = !circleTurn
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}
