let item_card_grid = document.querySelector('.item_card_grid'),
color_count = document.querySelector('.color_count'),
color_switch = document.querySelector('.color_select').children,
i;

for(i=0;i<item_card_grid.length;i++){
    item_card_grid[i].addEventListener('mouseover', () => {
        color_count.classList.toggle('active');
        color_switch[i].classList.toggle('active');
})}

for(i=0;i<item_card_grid.length;i++){
    item_card_grid[i].addEventListener('mouseover', () => {
        color_count.classList.remove('active');
        color_switch[i].classList.remove('active');
    })}/* 아이템 칸 마우스 갖다대면 생김 */

/*const mobile_category_Btn = document.querySelector('.mobile_category_box')
const category_menu = document.querySelector('.indicator');
const mobile_category_Ctn = document.querySelector('.indicator::after')

mobile_category_Btn.addEventListener('click', () => {
    category_menu.classList.toggle('active');
});
category_menu.addEventListener('click', () => {
    category_menu.classList.remove('active');
});

*/