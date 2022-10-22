const category_Btn = document.querySelector('.category_box'),
category_Active = document.querySelector('.indicator'),
category_view = document.querySelector('.indicator.acitve');

category_Btn.addEventListener('mouseover', () => {
    category_Btn.classList.toggle('active');
    category_Active.classList.toggle('active');
})
category_Active.addEventListener('mouseleave', () => {
    category_Btn.classList.remove('active');
    category_Active.classList.remove('active');
})