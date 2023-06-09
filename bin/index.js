#!/usr/bin/env node

import inquirer from "inquirer";

import readlineSync from 'readline-sync'

import rps from "../games/rps.js";

console.log('Welcome to Game Center!')
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`)

inquirer
  .prompt([
    {
      type: 'list',
      name: 'userChoice',
      message: 'Choice the game',
      choices: ['Rock Papers Scissors', 'Exit']
    }
  ])
  .then((answers) => {
    const userChoice = answers.userChoice;
    if (userChoice === 'Rock Papers Scissors') {
      console.clear()
      rps(name)
    }
    if (userChoice === 'Exit') {
      console.clear()
      console.log(`See you next time, ${name}!`)
    }
  });