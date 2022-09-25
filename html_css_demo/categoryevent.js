const category_Btn = document.querySelector('.category_box');
const category_menu = document.querySelector('.indicator');

category_Btn.addEventListener('click', () => {
    category_menu.classList.toggle('active');
});
