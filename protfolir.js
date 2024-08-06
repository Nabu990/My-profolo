let menu = document.querySelector('#menue')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


let header = document.querySelector('header')

header.classList.toggle('sticky', window.screenY > 100)

menu.classList.remove('bx-x')
navbar.classList.remove('active')

let form = document.getElementById('form')

form.addEventListener('submit', submit)

function submit (e){
   e.preventDefault();
let newData= JSON.parse(localStorage.getItem('data'))||{};
let newUser = {
  fullName: e.target[0].value,
  email: e.target[1].value,
  number: e.target[2].value,
  esubject:e.target[3].value,
  text: e.target[4].value
}
newData[e.target[1].value]= newUser;
localStorage.setItem('data', JSON.stringify(newData));
console.log(e.target[1].value)
}