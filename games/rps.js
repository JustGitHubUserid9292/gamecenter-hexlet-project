/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';

import inquirer from 'inquirer';

import mainMenu from '../bin/index.js';

export default function rps(name) {
  console.log('Welcome to Rock Paper Scissors!');
  console.log('In this game, you have to beat the computer in three rounds.');

  let playerScore = 0;
  let computerScore = 0;

  playGame();

  function playGame() {
    if (playerScore < 3 && computerScore < 3) {
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'userChoice',
            message: 'Your move: ',
            choices: ['rock', 'scissors', 'paper'],
          },
        ])
        .then((answers) => {
          const { userChoice } = answers;
          const computerChoice = generateComputerChoice();

          console.clear();
          console.log("Opponent's move:", computerChoice);
          displayRoundResult(determineWinner(userChoice, computerChoice));

          playGame();
        });
    } else {
      displayFinalResult();
      if (readlineSync.keyInYNStrict('Do you want to play again?')) {
        startNewGame();
      } else {
        console.clear();
        mainMenu();
      }
    }
  }

  function generateComputerChoice() {
    const moves = ['rock', 'scissors', 'paper'];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  }

  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'tie';
    } if (
      (userChoice === 'rock' && computerChoice === 'scissors')
        || (userChoice === 'scissors' && computerChoice === 'paper')
        || (userChoice === 'paper' && computerChoice === 'rock')
    ) {
      return 'win';
    }
    return 'lose';
  }

  function displayRoundResult(result) {
    if (result === 'tie') {
      console.log('Once again!');
    } else if (result === 'win') {
      playerScore += 1;
      console.log(`You win ${playerScore} round(s)!`);
    } else {
      computerScore += 1;
      console.log(`Computer wins ${computerScore} round(s)!`);
    }
  }

  const displayFinalResult = () => {
    if (playerScore === 3) {
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log('Computer wins!');
    }
    console.log(`Score: ${playerScore}:${computerScore}`);
  };

  function startNewGame() {
    console.clear();
    playerScore = 0;
    computerScore = 0;
    playGame();
  }
}
