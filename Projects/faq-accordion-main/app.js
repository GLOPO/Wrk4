let imgBtn = document.querySelector('.img');
let pContent = document.querySelector('.pTag');
let minus = "./assets/images/icon-minus.svg";
let add = "./assets/images/icon-plus.svg"

let showMore = () => {
  let hidden = pContent.classList.contains('hide');
  if(hidden) {
    pContent.classList.remove('hide');
    pContent.classList.add('visible');
    imgBtn.setAttribute("src", minus)
  }else {
    pContent.classList.remove('visible');
    pContent.classList.add('hide');
    imgBtn.setAttribute('src', add)
  }
  console.log('like');
}
imgBtn.addEventListener('click', showMore);