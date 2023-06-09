/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import inquirer from 'inquirer';

import mainMenu from '../games/mainMenu.js';

import { user } from '../bin/index.js';

const symbols = ['7', '%', '$', '#', '*'];

function randomIndex() {
  return Math.floor(Math.random() * (0 - 5) + 5);
}

function playGame(name) {
  const s1 = symbols[randomIndex()];
  const s2 = symbols[randomIndex()];
  const s3 = symbols[randomIndex()];
  console.clear();
  console.log('Welcome to the Slot Machine, test your luck!');
  console.log('             ╔══════════════╗\n'
            + '             ║              ║\n'
            + '             ║ Slot Machine ║\n'
            + '             ║              ║\n'
            + '             ╠══════════════╣\n'
            + '             ║              ║\n'
            + `             ║    ${`${s1} ${s2} ${s3}`}     ║\n`
            + '             ║              ║\n'
            + '             ╚══════════════╝');
  if (s1 === s2 && s2 === s3 && s1 === s3) {
    console.log('                 JACKPOT!');
    console.log(`Congratulations, ${name} you're very lucky!`);
  }
}

export default function slotmachine(name) {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'userChoice',
        message: 'Spin?',
        choices: ['Spin', 'Exit'],
      },
    ])
    .then((answers) => {
      const { userChoice } = answers;
      if (userChoice === 'Exit') {
        console.clear();
        mainMenu(user);
      } else {
        playGame(name);
        slotmachine(name);
      }
    });
}
