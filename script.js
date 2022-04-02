'use strict';

document.querySelector('.highscore').textContent = 0;

let xnumber = Math.floor(Math.random() * 10) + 1;
// document.querySelector('.score').textContent = 20;
let score = document.querySelector('.score').textContent;
score = 20;

const message = function (x) {
  document.querySelector('.message').textContent = `${x}`;
};

const winner = function () {
  document.querySelector('body').style.backgroundColor = `#60b347`;
  document.querySelector('.number').style.width = '30rem';
};

const check = function (x) {
  if (x === xnumber) {
    message('🥇Correct');
    document.querySelector('.number').textContent = xnumber;
    HighScore(x);
    winner();
  } else {
    score -= 1;
    document.querySelector('.score').textContent = score;
    Helper(x);
    if (score === 0) {
      message('☠ Game Over');
    }
  }
};

const Helper = function (x) {
  if (x > xnumber) {
    message('🔢 Too High !');
  } else {
    message('🔢 Too low !');
  }
};
const HighScore = function (x) {
  let highscore = document.querySelector('.highscore').textContent;
  if (highscore < score) {
    document.querySelector('.highscore').textContent = score;
  }
};

const main = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message('⛔Write just integer number');
  } else if (score >= 1) {
    check(guess);
  }
};

document.querySelector('.check').addEventListener('click', function () {
  main();
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = `?`;
  xnumber = Math.floor(Math.random() * 10) + 1;
  score = 20;
  message('Start guessing...');
  document.querySelector('body').style.backgroundColor = `#222`;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
