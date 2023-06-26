#!/usr/bin/env node
import readlineSync from 'readline-sync';

import inquirer from 'inquirer';

import rps from '../games/rps.js';

import words from '../games/words.js';

import slotmachine from '../games/slotmachine.js';

import shootthedice from '../games/shootthedice.js';

console.clear()
console.log('Welcome to Game Center!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

mainMenu()

export default function mainMenu() {
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
      const userChoice = answers.userChoice;
      if (userChoice === 'Rock Paper Scissors') {
        console.clear();
        rps(name);
      }
      if (userChoice === 'The Words Game') {
        console.clear()
        words(name)
      }
      if (userChoice === 'Slot Machine') {
        console.clear()
        slotmachine(name)
      }
      if (userChoice === 'Shoot The Dice') {
        console.clear()
        shootthedice(name)
      }
      if (userChoice === 'Hangman') {
        console.clear()
        //hangman()
      }
      if (userChoice === 'Exit') {
        console.clear();
        console.log(' ');
        console.log(`See you next time, ${name}!`);
      }
    });
}