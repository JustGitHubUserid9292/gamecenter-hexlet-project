#!/usr/bin/env node
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import readlineSync from 'readline-sync';

import mainMenu from '../games/mainMenu.js';

console.clear();
console.log('Welcome to Game Center!');
export const user = readlineSync.question('May I have your name? ');
console.log(`Hello, ${user}!`);

mainMenu(user);
