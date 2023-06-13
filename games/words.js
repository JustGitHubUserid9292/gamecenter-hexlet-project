import readlineSync from 'readline-sync'

import inquirer from "inquirer";

import mainMenu from '../bin/index.js';

const questions = [
  {
    question: 'What is the capital of France?',
    answers: ['Paris', 'London', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: ['Venus', 'Mars', 'Jupiter'],
    correctAnswer: 'Mars'
  },
  {
    question: 'Who painted the Mona Lisa?',
    answers: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso'],
    correctAnswer: 'Leonardo da Vinci'
  },
  {
    question: 'What is the tallest mountain in the world?',
    answers: ['Mount Kilimanjaro', 'Mount Everest', 'Mount Fuji'],
    correctAnswer: 'Mount Everest'
  },
  {
    question: 'What is the chemical symbol for gold?',
    answers: ['Ag', 'Au', 'Hg'],
    correctAnswer: 'Au'
  },
  {
    question: 'What is the capital of Canada?',
    answers: ['Toronto', 'Ottawa', 'Vancouver'],
    correctAnswer: 'Ottawa'
  },
  {
    question: 'Which animal is known as the "king of the jungle"?',
    answers: ['Lion', 'Tiger', 'Giraffe'],
    correctAnswer: 'Lion'
  },
  {
    question: 'Who wrote the novel "Pride and Prejudice"?',
    answers: ['Jane Austen', 'Emily Bronte', 'Charlotte Bronte'],
    correctAnswer: 'Jane Austen'
  },
  {
    question: 'Which country is home to the kangaroo?',
    answers: ['Australia', 'South Africa', 'Brazil'],
    correctAnswer: 'Australia'
  },
  {
    question: 'What is the chemical symbol for silver?',
    answers: ['Si', 'S', 'Ag'],
    correctAnswer: 'Ag'
  },
  {
    question:  'What is a season of the year that is known for warm weather, blooming flowers, and longer daylight hours?',
    answers: ['Summer', 'Winter', 'Spring', 'Autumn'],
    correctAnswer: 'Spring'
  },
  {
    question: 'What is a country in Europe known for its famous landmarks such as the Eiffel Tower and Louvre Museum?',
    answers:  ['Germany', 'Italy', 'France', 'Spain'],
    correctAnswer: 'France'
  },
  {
    question:  'What is a famous painting created by Leonardo da Vinci that depicts a woman with outstretched arms and legs?',
    answers: ['The Scream', 'Starry Night', 'The Birth of Venus', 'Vitruvian Man'],
    correctAnswer: 'Vitruvian Man'
  },
];

export default function words(name) {

   console.log("Welcome to The Words Game!");
   console.log('In this game, you have to guess five words and win the computer in seven rounds.');

   let correctCount = 0
   let attempt = 7
   let index = 0

   playGame()
   shuffleArray(questions)

   function playGame() {
    if (attempt !== 0 && correctCount < 5 && index !== 7) {
      index += 1
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'userChoice',
              message: `${questions[index].question}`,
              choices: questions[index].answers,
            },
          ])
          .then((answers) => {
            const userChoice = answers.userChoice;
            displayRoundResult(userChoice, index)
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
   
   function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
   function isCorrect(answer, index) {
    return answer === questions[index].correctAnswer
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
    index = 0;
    attempt = 7;
    shuffleArray(questions)
    playGame();
}
}