let indicator = document.querySelector('.indicator').children;
let item_list = document.querySelector('.item_content_grid').children;

for(let i=0; i<indicator.length; i++)
{
    indicator[i].onclick = function(){
        for(let x=0; x<indicator.length; x++)
        {
            indicator[x].classList.remove('active');
        }
        this.classList.add('active');
        const displayItems = this.getAttribute('data-filter');
        for(let z=0; z<item_list.length; z++)
        {
            item_list[z].style.display = 'none';

            if ((item_list[z].getAttribute('data-category') == displayItems) || displayItems == 'all')
            {
                item_list[z].style.display = 'block';
            }
        }
    }
}