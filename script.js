'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 13;
// document.querySelector('.number').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function () {
  const nermo = Number(
    (document.querySelector('.guess').value = Math.trunc(
      Math.random() * 20 + 1
    ))
  );
  if (nermo !== 10) {
    document.querySelector('.message').textContent = '😒 Wrong Number !';
  } else if (nermo == 10) {
    document.querySelector('.message').textContent = '🎉 Correct Number !';
  }
});
