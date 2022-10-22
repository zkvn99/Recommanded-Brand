var item_card_grid = document.querySelectorAll('.item_card_grid'),
color_count = document.querySelectorAll('.color_count'),
color_select = document.querySelectorAll('.color_select');

for(let i=0; i<item_card_grid.length; i++){
    item_card_grid[i].addEventListener('mouseover', () => {
        color_count[i].classList.toggle('active');
        color_select[i].classList.toggle('active');
})
    item_card_grid[i].addEventListener('mouseout', () => {
        color_count[i].classList.remove('active');
        color_select[i].classList.remove('active');
})/* 아이템 칸 마우스 갖다대면 생김 */
}
