const buttonElement = document.querySelector('.js-btn');
const bodyElement = document.querySelector('body');
const iconElement = document.querySelector('.fa-solid');
const icon = document.querySelector('.icon');
buttonElement.addEventListener('click',()=>{
    if(iconElement.classList.contains('fa-sun')){
        iconElement.classList.remove('fa-sun');
        iconElement.classList.add('fa-moon');
        bodyElement.classList.remove('morning');
        bodyElement.classList.add('night');
        buttonElement.style.backgroundColor = "#151B54";
        icon.href = './images/moon.png';
    }
    else{
        iconElement.classList.remove('fa-moon');
        iconElement.classList.add('fa-sun');
        bodyElement.classList.remove('night');
        bodyElement.classList.add('morning');
        buttonElement.style.backgroundColor = "#9BD4D0";
        icon.href = './images/sun.png';
    }
});