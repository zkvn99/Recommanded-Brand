/* price 화면 나타나기 */
const price_onclick = document.querySelector('.price_onclick'),
price_wrapper = document.querySelector('.price_container'),
price_close = document.querySelector('.input_price i')

price_onclick.addEventListener('click', () => {
    price_wrapper.classList.toggle('active');
    price_onclick.classList.toggle('active');
});
price_close.addEventListener('click', () => {
    price_wrapper.classList.remove('active');
    price_onclick.classList.remove('active');
});
/* price 화면 나타나기 */
