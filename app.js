const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const DRAW = 'DRAW';
const WIN = 'Your WInner';
const LOST = 'You LOST';

/*Arrow Functions and Terinary Operator */
const decideWinner = (cChoice , pChoice) => 
   cChoice === pChoice ? DRAW : ( 
    cChoice === ROCK && pChoice === SCISSORS 
  || cChoice === SCISSORS && pChoice === ROCK 
  || cChoice === PAPER && pChoice === ROCK
  || cChoice === SCISSORS && pChoice === PAPER
  ) ? LOST : WIN;


/* Without Terinary Operator */

  // if(cChoice === pChoice){
  //   return DRAW;
  // }else if ( 
  //     cChoice === ROCK && pChoice === SCISSORS 
  //   || cChoice === SCISSORS && pChoice === ROCK 
  //   || cChoice === PAPER && pChoice === ROCK
  //   || cChoice === SCISSORS && pChoice === PAPER
  //   ){
  //     return LOST
  //   }
  //   else{
  //     return WIN
  //   }



const computerChoice = function (){
  const randomvalue = Math.random();
  if (randomvalue < 0.36){
    return ROCK;
  }else if ( randomvalue < 0.76){
    return PAPER;
  }else {
    return SCISSORS;
  }
}

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

startGameBtn.addEventListener('click', function() {
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  const computerSelection = computerChoice();
  const Winner = decideWinner(computerSelection , playerSelection);
  console.log(Winner);
});
