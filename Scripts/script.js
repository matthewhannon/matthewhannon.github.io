let menuButton = document.querySelector('.nav-mobile-button');
const menuDisplay = document.querySelector('.nav-mobile-menu');
let mainDisplay = document.querySelector('body');

menuButton.addEventListener('click', () => {
    menuDisplay.classList.toggle('menu-flex')

})