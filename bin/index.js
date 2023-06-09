#!/usr/bin/env node
import readlineSync from 'readline-sync'

import inquirer from 'inquirer';

import rps from '../games/rps.js';

import words from '../games/words.js';

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
        choices: ['Rock Paper Scissors', 'The Words Game', 'Exit'],
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
      if (userChoice === 'Exit') {
        console.clear();
        console.log(' ');
        console.log(`See you next time, ${name}!`);
      }
    });
}