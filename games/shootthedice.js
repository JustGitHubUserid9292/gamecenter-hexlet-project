import inquirer from "inquirer";

import mainMenu  from '../bin/index.js';

const DICE_ART = {
    1: "┌─────────┐\n│         │\n│    ●    │\n│         │\n└─────────┘",
    2: "┌─────────┐\n│  ●      │\n│         │\n│      ●  │\n└─────────┘",
    3: "┌─────────┐\n│  ●      │\n│    ●    │\n│      ●  │\n└─────────┘",
    4: "┌─────────┐\n│  ●   ●  │\n│         │\n│  ●   ●  │\n└─────────┘",
    5: "┌─────────┐\n│  ●   ●  │\n│    ●    │\n│  ●   ●  │\n└─────────┘",
    6: "┌─────────┐\n│  ●   ●  │\n│  ●   ●  │\n│  ●   ●  │\n└─────────┘"
}

function playGame(name) {
  const p1 = Math.floor(Math.random() * (0 - 6) + 6);
  const p2 = Math.floor(Math.random() * (0 - 6) + 6);
  const c1 = Math.floor(Math.random() * (0 - 6) + 6);
  const c2 = Math.floor(Math.random() * (0 - 6) + 6);
  console.clear()
  console.log('Welcome to the Shoot The Dice, in this game you have to find out which is stronger than your luck or the computer!')
  console.log(`Your result: \n${DICE_ART[p1] + ' ' + DICE_ART[p2]}    Computer result: \n${DICE_ART[p1] + ' ' + DICE_ART[p2]}`)
}

export default function shootthedice(name) {
    inquirer
    .prompt([
      {
        type: 'list',
        name: 'userChoice',
        message: 'Dice?',
        choices: ['Dice', 'Exit'],
      },
    ])
    .then((answers) => {
      const userChoice = answers.userChoice;
      if (userChoice === 'Exit') {
        console.clear()
        mainMenu()
      } else { 
      playGame(name) 
      shotthedice(name)
      }
    });
}