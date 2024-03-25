"use strict"

//Declaring variables
const img = document.querySelector('img');
const btn = document.querySelector('.btn');
const inputPwd = document.querySelector('.input-pwd');
const inputName = document.querySelector('.input-name');
const inputEmail = document.querySelector('.input-email');

// Variables for holding assets
const eyeOpen = "./asset/eye-open.svg";
const eyeClose = "./asset/eye-close.svg"

// Function to reveal Password
function revealPwd() {
  if(inputPwd.type === "password") {
    inputPwd.setAttribute("type", "text")
    img.setAttribute("src", eyeOpen)
  } else {
    inputPwd.setAttribute("type", "password")
    img.setAttribute("src", eyeClose)
  }
}
img.addEventListener("click", revealPwd)

// Function for the form
function validateForm(e) {
  e.preventDefault()
  if(!inputEmail.value || !inputName.value || !inputPwd.value) {
    alert("All fields must be filled")
  } else if (inputEmail.value || inputName.value || inputPwd.value) {
    alert(`Your name is ${inputName.value}, your email is ${inputEmail.value} and your password is ${inputPwd.value}`);
  }
}
btn.addEventListener("click", validateForm);