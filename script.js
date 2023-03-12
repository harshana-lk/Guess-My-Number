'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 13;
// document.querySelector('.number').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20; //state variable

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber, typeof guessNumber);

  // when there is no input
  if (!guessNumber) {
    document.querySelector('.message').textContent = '😒 Input a Number !';

    //  when palyer wins the game
  } else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number !';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // when player inputs a number that too high
  } else if (guessNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😿 You lose the game!';
      document.querySelector('.score').textContent = 0;
    }

    //  when player inputs a number that too low
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😿 You lose the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
