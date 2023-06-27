/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import inquirer from 'inquirer';

import rps from './rps.js';

import words from './words.js';

import slotmachine from './slotmachine.js';

import shootthedice from './shootthedice.js';

import hangman from './hangman.js';

export default function mainMenu(name) {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'userChoice',
        message: 'Choose the game',
        choices: ['Rock Paper Scissors', 'The Words Game', 'Slot Machine', 'Shoot The Dice', 'Hangman', 'Exit'],
      },
    ])
    .then((answers) => {
      const { userChoice } = answers;
      if (userChoice === 'Rock Paper Scissors') {
        console.clear();
        rps(name);
      }
      if (userChoice === 'The Words Game') {
        console.clear();
        words(name);
      }
      if (userChoice === 'Slot Machine') {
        console.clear();
        slotmachine(name);
      }
      if (userChoice === 'Shoot The Dice') {
        console.clear();
        shootthedice(name);
      }
      if (userChoice === 'Hangman') {
        console.clear();
        hangman(name);
      }
      if (userChoice === 'Exit') {
        console.clear();
        console.log(' ');
        console.log(`See you next time, ${name}!`);
      }
    });
}
