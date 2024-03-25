"use strict"

//DOM ---- Document Object Model
//The process of reaching elements in html page and using it in JavaScript is known as querying DOM

// document.body.style.backgroundColor = "yellow";
// document.body.style.color = "pink";
// DRY Dont repeat your self

//let's set a variable to avoid repeatition DRY
// let body = document.body.style
// body.backgroundColor = "yellow";
// body.color = "pink"
//getElementById() 
// ======================
// Select the element you want
//Decide the effect you want to apply to the selection
//getElementBtId("element") -- make sure the id matches
//We can assign to a variable or go straight using document. continously
//Lets do the basics so you can understand cause we would go into complex things which in turn would need the basic things

// let headingTag = document.getElementById(`heading-1`).style;
// headingTag.color = `red`;
// headingTag.backgroundColor = `yellow`;

//getElementsByTagName()
//HTML collection which is also similar to an array like object
//index, length properties would work but not all array methods will work

// let heading2Tag = document.getElementsByTagName(`h2`)
// console.log(heading2Tag)

// let newHeading = [...heading2Tag]
// newHeading.forEach((singleTag) => singleTag.style.color = `green`)

//getElemantsByClassName()
//HTML collection which is also similar to an array like object
//index, length properties would work but not all array methods will work

// let listItems = document.getElementsByClassName(`state`)
// console.log(listItems);

// let newListItems = [...listItems]
// newListItems.forEach((singleTag) => singleTag.style.backgroundColor = `purple`)

//Our last 2 methods
//querySelector(`any CSS`) -- I selects the first element that matches the selector picked
//querySelectorAll(`any CSS`) -- selects all, forEach would work here
// ---- Select the element or group of methods you want 
// ---- Decide the effect you want to apply

// ===========================
// querySelector(`any css`)
// ===========================

// let listedItem = document.querySelector(".state");
// console.log(listedItem);

// =============================
// querySelectorAll(`any css`)
// =============================

let listedItem = document.querySelectorAll(`.state`)
console.log(listedItem[0]);
listedItem.forEach((singlLi) => singlLi.style.color = `red`)

// innerText()
// let pTag = document.querySelector(`p`);
// console.log(pTag);
// console.log(pTag.innerText);
// pTag.innerText += `None of the above`;

//textContent() === has ability to see hidden text.
// console.log(pTag.textContent);

// innerHTML() === changing the content of a tag in the document
let newPara = document.querySelector("p");
newPara.innerHTML = "<h1>We don change am </h1>"

// changing attribute
const link = document.querySelector("a");
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://facebook.com')
link.innerText = 'Link to Facebook'

// classList  ===== manipulation of elements
// className  ===== class assigned to element
// contain    ===== gives boolean respone true or false

let headingTag5 = document.querySelector('h5');
console.log(headingTag5);
console.log(headingTag5.className);
console.log(headingTag5.classList.contains('blue'));
console.log(headingTag5.classList.contains('red'));

let hasClass = headingTag5.classList.contains('blue')
if(hasClass) {
  console.log('e get am');
} else {
  console.log('e no get am');
}

//events
// select the element and decide the effect
// what effect?
// addEventListener()


// Ternary Operator
let btn = document.querySelector('.btn2');
let paraTag = document.querySelector('.para');
function changeColor() {
  let hasBlue = paraTag.classList.contains('blue')
   hasBlue ? paraTag.classList.remove('blue') : paraTag.classList.add('blue');
  btn.textContent = "Click to untrigger"
}
btn.addEventListener("click", changeColor)

// function changeColor() {
// let hasBlue = paraTag.classList.contains('red')
// if(hasBlue) {
//   paraTag.classList.remove('red')
// }
// else {
//   paraTag.classList.add('red')
// }
// }
// btn.addEventListener("click", changeColor)

//convert to ternary operator

function getFee(isMember) {
  return isMember ? `$2.00` : `$10.00`;
}
console.log(getFee())

const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage);

const greeting = (person) => {
  const name = person ? person.name : "stranger";
  return `Howdy, ${name}`
}
console.log(greeting({name : "Alice"}));
console.log(greeting(null));

// dark and light mode
// ===================================
let body = document.querySelector('body');
let img = document.querySelector('img');
let sunImg = './assets/light_mode_FILL0_wght400_GRAD0_opsz24.svg'
let moonImg = './assets/dark_mode_FILL0_wght400_GRAD0_opsz24.svg'

let changeMode = () => {
  let bodyClass = body.classList.contains('dark')
  if(bodyClass) {
    body.classList.remove('dark');
    img.setAttribute('src', moonImg)
  } else {
    body.classList.add('dark');
    img.setAttribute('src', sunImg)
  };
}
img.addEventListener('click', changeMode);

let form = document.querySelector('form');
let btn22 = document.querySelector('.btnn');

function showAndHide(){
  let hasHide = form.classList.contains('hide');
  if(hasHide){
   form.classList.remove('hide')
  }else{
    form.classList.add('hide')
  }

}

btn22.addEventListener('click',showAndHide)

