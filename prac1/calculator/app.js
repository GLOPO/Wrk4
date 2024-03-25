let view = document.querySelector('#section-1');
view.style.color = 'black';
let numberDisplay = document.querySelector('p');
console.log(45);

let number = eval(numberDisplay.textContent)
console.log(typeof(number));

let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')
let six = document.querySelector('#six')
let seven = document.querySelector('#seven')
let eight = document.querySelector('#eight')
let nine = document.querySelector('#nine')
let zero = document.querySelector('#zero')
let multiply = document.querySelector('#times')

// 1 
function button1() {
  let number1 = eval(one.textContent);
  numberDisplay.innerHTML = number1;
}
one.addEventListener('click', button1)

// 2 
function button2() {
  let number2 = eval(two.textContent);
  numberDisplay.innerHTML = number2;
}
two.addEventListener('click', button2)

// 3
function button3() {
  let number3 = eval(three.textContent);
  numberDisplay.innerHTML = number3;
}
three.addEventListener('click', button3)

// 4 
function button4() {
  let number4 = eval(four.textContent);
  numberDisplay.innerHTML = number4;
};
four.addEventListener('click', button4)

// 5 
function button5() {
  let number5 = eval(five.textContent);
  numberDisplay.innerHTML = number5;
};
five.addEventListener('click', button5)

// 6 
function button6() {
  let number6 = eval(six.textContent);
  numberDisplay.innerHTML = number6;
};
six.addEventListener('click', button6)

// 7
function button7() {
  let number7 = eval(seven.textContent);
  numberDisplay.innerHTML = number7;
};
seven.addEventListener('click', button7)

// 8
function button8() {
  let number8 = eval(eight.textContent);
  numberDisplay.innerHTML = number8;
};
eight.addEventListener('click', button8)

// 9
function button9() {
  let number9 = eval(nine.textContent);
  numberDisplay.innerHTML = number9;
};
nine.addEventListener('click', button9)

// 0
function button0() {
  let number0 = eval(zero.textContent);
  numberDisplay.innerHTML = number0;
};
zero.addEventListener('click', button0)

//multiplication
function multiplication() {
  let times = multiply.textContent;
  numberDisplay.innerHTML = times;
}; 