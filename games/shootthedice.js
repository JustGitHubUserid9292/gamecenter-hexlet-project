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
  const p1 = Math.floor(Math.random() * (1 - 7) + 7);
  const p2 = Math.floor(Math.random() * (1 - 7) + 7);
  const c1 = Math.floor(Math.random() * (1 - 7) + 7);
  const c2 = Math.floor(Math.random() * (1 - 7) + 7);
  console.clear()
  console.log('Welcome to Shoot The Dice! Roll the dice to compete against the computer and try to get more score than it!')
  console.log('Your result:')
  const p1Lines = DICE_ART[p1].split('\n');
  const p2Lines = DICE_ART[p2].split('\n');

  for (let i = 0; i < p1Lines.length; i++) {
    console.log(`${p1Lines[i]}  ${p2Lines[i]}`);
  }
  console.log('Computer result:')
  const c1Lines = DICE_ART[c1].split('\n');
  const c2Lines = DICE_ART[c2].split('\n');

  for (let n = 0; n < c1Lines.length; n++) {
    console.log(`${c1Lines[n]}  ${c2Lines[n]}`);
  }
  if ((p1 + p2) > (c1 + c2)) {
    console.log(`Congratulations, ${name}! You won! Score: ${p1 + p2}`)
  } else {
    console.log(`Computer won! You can try again, ${name}! Score: ${c1 + c2} `) 
  }
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
      shootthedice(name)
      }
    });
}