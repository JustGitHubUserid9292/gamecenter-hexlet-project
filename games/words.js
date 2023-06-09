import readlineSync from 'readline-sync'

import inquirer from "inquirer";

import mainMenu from '../bin/index.js';

const questions = [
    'What is a citrus fruit that is yellow and sour, often used to make lemonade?',
    'What is a small, furry mammal that can roll into a ball for protection?',
    "What is a popular board game that involves moving pieces diagonally and capturing opponents' pieces?",
    'What is a season of the year that is known for warm weather, blooming flowers, and longer daylight hours?',
    'What is a famous painting created by Leonardo da Vinci that depicts a woman with outstretched arms and legs?',
    'What is a popular fast food item made from ground beef, lettuce, cheese, and a bun?',
    'What is a country in Europe known for its famous landmarks such as the Eiffel Tower and Louvre Museum?',
  ];
const answers = [
    ['Apple', 'Orange', 'Banana', 'Lemon'],
    ['Rabbit', 'Hamster', 'Hedgehog', 'Squirrel'],
    ['Chess', 'Scrabble', 'Monopoly', 'Checkers'],
    ['Summer', 'Winter', 'Spring', 'Autumn'],
    ['The Scream', 'Starry Night', 'The Birth of Venus', 'Vitruvian Man'],
    ['Pizza', 'Hamburger', 'Hot Dog', 'French Fries'],
    ['Germany', 'Italy', 'France', 'Spain'],
  ];
const correctAnswers = [
    'Lemon',
    'Hedgehog',
    'Checkers',
    'Spring',
    'Vitruvian Man',
    'Hamburger',
    'France',
  ];

export default function words(name) {

   console.log("Welcome to The Words Game!");
   console.log('In this game, you have to guess five words and win the computer in seven rounds.');

   let correctCount = 0
   let attempt = 7

   playGame()
 
   function playGame() {
    if (attempt !== 0 && correctCount < 5) {
        let random = randomNumber()
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'userChoice',
              message: `${questions[random]}`,
              choices: answers[random],
            },
          ])
          .then((answers) => {
            const userChoice = answers.userChoice;
            displayRoundResult(userChoice, random)
            playGame(); 
          });
      } else {
        displayFinalResult()
        if (readlineSync.keyInYNStrict("Do you want to play again?")) {
            startNewGame();
        } else {
            console.clear()
            mainMenu()
        }
      }
   }
   function randomNumber() {
    return Math.floor(Math.random() * (0 - 7) + 7);
  }
  
   function isCorrect(answer, number) {
    return answer === correctAnswers[number]
   }

   function displayRoundResult(answer, number) {
    if(isCorrect(answer, number)) {
      console.log('Correct!')
      correctCount += 1
    } else {
        console.log('Unfortunately, this is not the right answer')
        attempt -= 1
    }
   }

   function displayFinalResult() {
    if (correctCount === 5) {
      console.log(`Congratulations, ${name}!`)
    } else {
      console.log(`You lost. Try again! Correct answers given: ${correctCount}`)
    }
   }
   function startNewGame() {
    console.clear();
    correctCount = 0;
    attempt = 7;
    playGame();
}
}