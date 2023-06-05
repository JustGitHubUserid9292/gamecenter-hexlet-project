#!/usr/bin/env node
import readlineSync from 'readline-sync'

console.log("Welcome to Rock Paper Scissors!");
console.log('In this game, you have to beat the computer in three rounds.');

let isPlaying = true;
let playerScore = 0;
let computerScore = 0;

console.log('hello');
const getPlayerMove = () => {
  const move = readlineSync.question('Your move ');
  if (move === null) {
    isPlaying = false;
  }
  return move;
};

const getComputerMove = () => {
  const moves = ['rock', 'scissors', 'paper'];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const determineRoundResult = (playerMove, computerMove) => {
  if (playerMove === computerMove) {
    return 'tie';
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'scissors' && computerMove === 'paper') ||
    (playerMove === 'paper' && computerMove === 'rock')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
};

const displayRoundResult = (result) => {
  if (result === 'tie') {
    console.log('Once again!');
  } else if (result === 'win') {
    playerScore += 1;
    console.log(`You win ${playerScore} round(s)!`);
  } else {
    computerScore += 1;
    console.log(`Computer wins ${computerScore} round(s)!`);
  }
};

const displayFinalResult = () => {
  if (playerScore === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log('Computer wins!');
  }
  console.log(`Score: ${playerScore}:${computerScore}`);
};

const startNewGame = () => {
  console.clear(); 
  playerScore = 0;
  computerScore = 0;
};

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

while (isPlaying) {
  const playerMove = getPlayerMove();
  if (!isPlaying) {
    break;
  }
  const computerMove = getComputerMove();
  console.log(`Opponent's move: ${computerMove}`);
  const roundResult = determineRoundResult(playerMove, computerMove);
  displayRoundResult(roundResult);

  if (playerScore === 3 || computerScore === 3) {
    displayFinalResult();
    const playAgain = readlineSync.question("Do you want to play again? (yes/no): ");
    if (playAgain.toLowerCase() !== 'yes') {
      isPlaying = false;
      console.clear()
    } else {
      startNewGame()
    }
  }
}