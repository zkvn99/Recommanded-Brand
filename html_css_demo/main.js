const toogleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});