"use strict"
let number = document.querySelector(".number");
let inpOfGuess = document.querySelector('.guess');
let checkBtn = document.querySelector('.btn-checker');
let message = document.querySelector('.message');
let againBtn = document.querySelector('.btn-again');
let score = document.querySelector('.score');

function gamer(e) {
  e.preventDefault()
  let body = document.body.style;
  let randomNumGen = Math.ceil(Math.random() * 6);
  console.log(randomNumGen);
  if(!inpOfGuess.value) {
    message.textContent = "input field must not be empty"

  } else if(Number(inpOfGuess.value) > randomNumGen) {
    message.textContent = "you guessed higher";
    number.textContent = randomNumGen;
    score.textContent --;
    body.backgroundColor = 'blue';

  } else if(Number(inpOfGuess.value) < randomNumGen) {
    message.textContent = "you guessed lower";
    number.textContent = randomNumGen;
    score.textContent --;
    body.backgroundColor = 'yellow';
  } else {
    message.textContent = "you guessed correctly";
    number.textContent = randomNumGen;
    // score.textContent --;
    body.backgroundColor = 'green';
  }

  if(Number(score.textContent) < 1) {
    checkBtn.disabled = true;
  }
};
checkBtn.addEventListener('click', gamer)

function refresh() {
  location.reload()
}
againBtn.addEventListener('click', refresh)

// do == you gueesed correctly and gree
// once <1 disable button and game over
// again to refresh