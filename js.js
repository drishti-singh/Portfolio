const ham = document.querySelector('.ham');
const ul = document.querySelector('.ul');
const header = document.querySelector('.header.container');
ham.addEventListener('click',()=>{
    ham.classList.toggle('active');
    ul.classList.toggle('active');
})
