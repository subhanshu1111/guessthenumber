'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '😂 Bro got the rizz';
document.querySelector('.score').textContent = '12';
document.querySelector('.guess').value = 23;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
//fu
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔️ no number selected');
  } else if (guess === secretNumber) {
    //when player wins the game
    highScore = score;
    displayMessage('Correct Guess 🎊');
    document.querySelector('.highscore').textContent = highScore;

    document.querySelector('.number').textContent = secretNumber;
    //manipulating css styles in DOM
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost! 🤯');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  displayScore(score);
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});

/*Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK �
*/
