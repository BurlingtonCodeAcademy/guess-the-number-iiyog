

const readline = require('readline');
const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function ask(questionText) {
    return new Promise((resolve, reject) => {
      rl.question(questionText, resolve);
    });
  }

const rl = readline.createInterface(process.stdin, process.stdout);
const randomNum = Math.floor(Math.random() * 100) + 1;
const attemptedGuess = 5;
const lowNumber = 1;
const highNumber  = 100;
//console.log(randomNum);

//computer guesses

const computerGuess = (max, min) => {
  let guess = (min + max) /2;
  const randomNum = Math.floor(Math.random() * 100) + 1;
  return Math.floor(guess);
  console.log(guess);
}


 

start();

async function start() {
  let play = true;
  let topNumber = 100
  let bottomNumber = 1
  let currentGuess = computerGuess(topNumber, bottomNumber);
  console.log("Let's play a game. You make up a number and I MacBook Pro will try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  
  console.log('You entered: ' + secretNumber);
  rl.close() 
  
  

  while (playing) {
    let yesOrNo = await ask("is your number " + currentGuess + "? ");
    if (yesOrNo.toLowerCase().includes("yes")) {
      console.log("You're correct, that is my number!");
      process.exit();
    } else {
      let highOrLow = await ask("Is your number higher or lower? ");
      if (highOrLow.toLowerCase().includes("higher")) {
        lowerBound = currentGuess;
        currentGuess = computerGuess(upperBound, lowerBound);
      } else if (highOrLow.toLowerCase().includes("lower")) {
        upperBound = currentGuess;
        currentGuess = computerGuess(upperBound, lowerBound);
      } else {
        console.log("Please type higher or lower");
      }
    }
  }
}

  // Now try and complete the program.
 

  process.exit();



