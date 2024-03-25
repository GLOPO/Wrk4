'use strict'

let num = document.getElementsByClassName('number');
let number = [...num];

let btn01 = document.querySelectorAll('.btn-1');
let btn1 = [...btn01];

let btn02 = document.querySelectorAll('.btn-2');
let btn2 = [...btn02];

let btn03 = document.querySelectorAll('.btn-3');
let btn3 = [...btn03];

let newGame = document.querySelector('#new-game');

btn1.forEach((singleTag) => singleTag.addEventListener('click', () => {
  number.forEach((singleTag) => singleTag.textContent ++ )
}));

btn2.forEach((singleTag) => singleTag.addEventListener('click', () => {
  number.forEach((singleTag) => singleTag.textContent =+ 2 )
}));

