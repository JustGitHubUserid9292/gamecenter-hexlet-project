/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import mainMenu from '../bin/index.js';

const hangmanArt = {
  0: '',
  1: `
    +---+
    |   |
        |
        |
        |
        |
  ======
  `,
  2: `
    +---+
    |   |
    O   |
        |
        |
        |
  ======
  `,
  3: `
    +---+
    |   |
    O   |
    |   |
        |
        |
  ======
  `,
  4: `
    +---+
    |   |
    O   |
   /|   |
        |
        |
  ======
  `,
  5: `
    +---+
    |   |
    O   |
   /|\\  |
        |
        |
  ======
  `,
  6: `
    +---+
    |   |
    O   |
   /|\\  |
   /    |
        |
  ======
  `,
  7: `
    +---+
    |   |
    O   |
   /|\\  |
   / \\  |
        |
  ======
  `,
  8: `
    +---+
    |   |
   [O   |
   /|\\  |
   / \\  |
        |
  ======
  `,
  9: `
    +---+
    |   |
   [O]  |
   /|\\  |
   / \\  |
        |
  ======
  `,
};

const words = ['cat', 'dog', 'sun', 'book', 'tree', 'ball', 'happy', 'rain', 'car', 'moon'];

let mistakes = 0;
const regex = /\w/g;

const restart = (name) => {
  if (readlineSync.keyInYNStrict('Do you want to play again?')) {
    startNewGame(name);
  } else {
    console.clear();
    mistakes = 0;
    mainMenu();
  }
};

const startNewGame = (name) => {
  mistakes = 0;
  console.clear();
  hangman(name);
};

export default function hangman(name) {
  const word = words[Math.floor(Math.random() * words.length)];
  const guessedWord = word.split('');
  const guess = word.replace(regex, '*').split('');
  let flag = '';

  while (flag === '') {
    console.log('Welcome to Hangman! In this game, you have to guess a word by its letters or guess the whole word.');
    console.log(hangmanArt[mistakes]);
    console.log(guess.join(' '));

    const type = readlineSync.question('Type: ');
    console.clear();

    let letterFound = false;
    for (let i = 0; i < guessedWord.length; i++) {
      if (guessedWord[i] === type) {
        guess[i] = type;
        letterFound = true;
      }
    }

    if (!letterFound) {
      mistakes += 1;
      if (mistakes === 9) {
        flag = 'lose';
        console.log(`You lose! The word was: ${word}`);
        restart(name);
      }
    }

    if (guess.join('') === word || type === word) {
      flag = 'win';
    }

    if (flag === 'win') {
      console.log(`Congratulations, ${name}! You won! The word was: ${word}`);
      restart(name);
    }
  }
}
