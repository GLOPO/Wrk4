// headingOneTag.innerHTML = 'Glory';
// let btn2 = document.querySelector('.btn-warning')
// function changeNumber() {
//   let headingOneTag = document.querySelector('h1');
//   let randomNumber = Math.floor(Math.random() * 10);
//   headingOneTag.innerHTML = randomNumber
// }
// btn2.addEventListener('click', changeNumber)


// dec.addEventListener('click',function(){
  //     h1.innerText = "Steff"
  // })
  
  
  // line 6
  // function bodyChanger(){
    //     document.body.style.backgroundColor = "red"
    // }
    // inc.addEventListener('click',bodyChanger)
    
    let dec = document.querySelector('.dec');
    let h1 = document.querySelector('h1');
    let inc = document.querySelector('.inc')
    let res = document.querySelector('.res')
    let body = document.querySelector('body').style;
    let numberZer0 = eval(h1.innerText);
    console.log(numberZer0);
    console.log(h1.innerText);
    
      if(numberZer0 <= -1) {
        body.backgroundColor = 'red';
      } else if (numberZer0 === 0) {
        body.backgroundColor = 'yellow';
      } else{
        body.backgroundColor = 'green';
      };

//decrease
function decremental() {
  h1.innerText --;
}
dec.addEventListener('click', decremental)

//increase
function incremental() {
  h1.innerText ++;
}
inc.addEventListener('click', incremental)

//reset
function reset() {
  h1.innerText = 0;
}
res.addEventListener('click', reset)

// ===================
// COLOR FLIPPER
// ===================

let btn = document.querySelector('#button')
// let colorFLipper = ()=>{
//   let colors = ["red","blue","yellow","pink"];
//   let randomGen = Math.ceil(Math.random()* colors.length);

//   document.body.style.backgroundColor = colors[randomGen] 
// }

// btn.addEventListener('click',colorFLipper)

// setInterval(colorFLipper,500)

// my color flipper
// let colorFlipper = () => {
//   let colors = ['cyan', 'plum', 'goldenrod', 'pink'];
//   let randomGeneration = Math.ceil(Math.random() * colors.length);

//   document.body.style.backgroundColor = colors[randomGeneration];
// };
// btn.addEventListener('click', colorFlipper)
// setInterval(colorFlipper, 5000)


// ===============
// FOR HEX COLORS
// ===============


let num = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
function getRandomNumber(){
    let getRandom = Math.ceil(Math.random() * num.length)
    return getRandom
}
// let newGen = getRandomNumber()
// #num[getRandomNumber]
function changeBgr(){
    let hash = "#";
    for(let i = 0; i < 6; i++){
        hash += num[getRandomNumber()]
    }
    document.body.style.backgroundColor = hash
}

btn.addEventListener('click',changeBgr)
