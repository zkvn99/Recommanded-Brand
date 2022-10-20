const mobile_category_Btn = document.querySelector('.mobile_category_box')
const category_menu = document.querySelector('.indicator');
const mobile_category_Ctn = document.querySelector('.indicator::after')

mobile_category_Btn.addEventListener('click', () => {
    category_menu.classList.toggle('active');
});
category_menu.addEventListener('click', () => {
    category_menu.classList.remove('active');
});

