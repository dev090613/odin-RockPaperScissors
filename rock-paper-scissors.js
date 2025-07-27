const HUMAN_WIN = "human win";
const COM_WIN = "computer win";
const DRAW = "draw";

let humanScore = 0;
let computerScore = 0;
let computerChoice = '';
let humanChoice = '';

function sayResult(result) {
  switch (result) {
    case COM_WIN:
      console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`)
      break;
    case HUMAN_WIN:
      console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`)
      break;
    case DRAW:
      console.log("DRAW!!!!")
      break;
  }
}

function capitalize(string) {
  return string.at().toUpperCase() + string.slice(1,)
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor( Math.random() * ( max - min + 1 ) + min )
}

function getComputerChoice() {

  const randomInt = getRandomInt(1, 3);
  
  if (randomInt === 1) {
    computerChoice = "rock";
  } else if( randomInt === 2) {
    computerChoice = "paper"
  } else {
    computerChoice = "scissors"
  }
  return computerChoice;
};

function getHumanChoice() {
  humanChoice = prompt("Rock, Paper, Sscissors?")
                      .toLowerCase()
  return humanChoice;
}

function playRound(computerChoice, humanChoice) {
  // "You lose! Paper beats Rock"
  let result = "";
  if (computerChoice === 'rock') {
    switch (humanChoice) {
      case "rock":
        result = DRAW;
        break;
      case "paper":
        result = HUMAN_WIN;
        humanScore++;
        break;
      case "scissors":
        result = COM_WIN;
        computerScore++;
        break;
    }
  } else if (computerChoice === 'paper') {
    switch (humanChoice) {
      case "rock":
        result = COM_WIN;
        computerScore++;
        break;
      case "paper":
        result = DRAW;
        break;
      case "scissors":
        result = HUMAN_WIN;
        humanScore++;
        break;
    }
  } else {
    switch (humanChoice) {
      case "rock":
        result = HUMAN_WIN;
        humanScore++;
        break;
      case "paper":
        result = COM_WIN;
        computerScore++;
        break;
      case "scissors":
        result = DRAW;
        break;
    }
  }

  sayResult(result)
  return [ computerScore, humanScore ];
}

function playGame(round) {
  i = 0;
  while (i < round) {
    [ computerScore, humanScore ] 
      = playRound(getComputerChoice(), getHumanChoice())
    console.log(
      `com: ${computerScore}, hum: ${humanScore}`
    );
    i++;
  }
}

playGame(5)
