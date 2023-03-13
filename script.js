'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 13;
// document.querySelector('.number').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; //state variable

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber, typeof guessNumber);

  // when there is no input
  if (!guessNumber) {
    // document.querySelector('.message').textContent = '😒 Input a Number !';
    displayMessage('😒 Input a Number !');

    //  when palyer wins the game
  } else if (guessNumber === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number !';
    displayMessage('🎉 Correct Number !');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guessNumber > secretNumber ? '📈 Too high' : '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😿 You lose the game!';
      displayMessage('😿 You lose the game!');
      document.querySelector('.score').textContent = '0';
    }
  }

  // when player inputs a number that too high
  // } else if (guessNumber > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😿 You lose the game!';
  //     document.querySelector('.score').textContent = '0';
  //   }

  //   //  when player inputs a number that too low
  // } else if (guessNumber < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😿 You lose the game!';
  //     document.querySelector('.score').textContent = '0';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = '';
});
