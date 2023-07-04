'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

const displyaMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number';
    displyaMessage('No Number');
  } else if (guess == secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!!!';
    displyaMessage('Correct Number!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? ' Too High!!!' : ' Too Low';
      displyaMessage(guess > secretNumber ? ' Too High!!!' : ' Too Low');
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost !!!';
      displyaMessage('You lost !!!');
    }
  }
  // } else if (secretNumber < guess) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' Too High!!!';
  //     score--;

  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost !!!';
  //   }
  // } else if (secretNumber > guess) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' Too Low!!!';
  //     score--;

  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost !!!';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  // location.reload();
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start Guessing';
  displyaMessage('Start Guessing');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
