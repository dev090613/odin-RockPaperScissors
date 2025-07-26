function getComputerChoice() {

  // Math.random을 활용한다.
  // 배열은 사용하지 않는다.
  // 'rock', 'paper', 'scissors' 중 하나를 반환
  let comChoice = ""
  const randomNumber = Math.random();
  // console.log(randomNumber)
  
  if (randomNumber < 0.33) {
    comChoice = "rock";
  } else if( randomNumber < 0.66) {
    comChoice = "paper"
  } else {
    comChoice = "scissors"
  }
  // console.log(`${randomNumber}, ${comChoice}`)
  return comChoice;
};

getComputerChoice()
