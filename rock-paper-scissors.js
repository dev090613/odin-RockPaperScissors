const HUMAN_WIN = "human";
const COM_WIN = "computer";
const DRAW = "draw";
const WIN_SCORE = 3;
const enToKo = {
  "rock": "바위 🪨", "paper": "보 📜", "scissors": "가위 ✂️",
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
  // Return whoWin
  let whoWin = "";
  if (computerChoice === 'rock') {
    switch (humanChoice) {
      case "rock":
        whoWin = DRAW;
        break;
      case "paper":
        whoWin = HUMAN_WIN;
        break;
      case "scissors":
        whoWin = COM_WIN;
        break;
    }
  } else if (computerChoice === 'paper') {
    switch (humanChoice) {
      case "rock":
        whoWin = COM_WIN;
        break;
      case "paper":
        whoWin = DRAW;
        break;
      case "scissors":
        whoWin = HUMAN_WIN;
        break;
    }
  } else {
    switch (humanChoice) {
      case "rock":
        whoWin = HUMAN_WIN;
        break;
      case "paper":
        whoWin = COM_WIN;
        break;
      case "scissors":
        whoWin = DRAW;
        break;
    }
  }
  // sayResult(result, computerChoice, humanChoice)
  return whoWin; // HUMAN_WIN, COMWIN, DRAW;
}

function sayResult(whoWin, computerChoice, humanChoice) {
  switch (whoWin) {
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
  return string.at(0).toUpperCase() + string.slice(1,)
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor( Math.random() * ( max - min + 1 ) + min )
}

function getHumanChoice() {
  return prompt("Rock, Paper, Scissors?")
        .toLowerCase()
}

function getComputerChoice() {
  const randomInt = getRandomInt(1, 3);
  let computerChoice = ""
  
  if (randomInt === 1) {
    computerChoice = "rock";
  } else if( randomInt === 2) {
    computerChoice = "paper"
  } else {
    computerChoice = "scissors"
  }
  return computerChoice;
};

function gameOver(computerScore, humanScore) {
  let finalWinner = ""
  if (computerScore > humanScore) {
      finalWinner = "Computer"
    } else if (humanScore > computerScore) {
      finalWinner = "Human"
    }
  // console.log(`The Winner is ${winner}`)
  return finalWinner;
  }

function whoGotScore(winner) {
  if (winner === HUMAN_WIN) {
    humanScore++;
  } else if (winner === COM_WIN) {
    computerScore++;
  }
  return ;
}

const resultDiv = document.querySelector(".result")
const btns = document.querySelector(".btns")
btns.addEventListener("click", (e) => {
  const target = e.target;
  const humanChoice = target.id
  const computerChoice = getComputerChoice()
  const winner = playRound(computerChoice, humanChoice);

  if (winner === DRAW) {
    const para = document.createElement("p");
    para.innerHTML = 
      `DRAW!!<br>
      Human: ${enToKo[humanChoice]}, Computer: ${enToKo[computerChoice]}<br>
      Score: ${humanScore} vs ${computerScore}`;
    resultDiv.appendChild(para)
    // alert(
    // );
  } else if (winner === HUMAN_WIN || winner === COM_WIN) {
    whoGotScore(winner);
    const para = document.createElement("p");
    para.innerHTML = 
      `The winner is ${capitalize(winner)}!!<br>
      Human: ${enToKo[humanChoice]}, Computer: ${enToKo[computerChoice]}<br>
      Score: ${humanScore} vs ${computerScore}`;
    resultDiv.appendChild(para);
  };

  if (humanScore === WIN_SCORE || computerScore === WIN_SCORE) {
    const finalWinner = gameOver(computerScore, humanScore);
    const para = document.createElement("p");
    const removes = document.querySelector(".btns")

    para.textContent = `Final winner is ${capitalize(finalWinner)}`;
    resultDiv.appendChild(para);
    removes.remove()
  };
});
