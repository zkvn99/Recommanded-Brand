let indicator = document.querySelector('.indicator').children,
shop_mall = document.querySelector('.shop_mall').children;

for(let i=0; i<indicator.length; i++)
{
    indicator[i].onclick = function(){
        for(let x=0; x<indicator.length; x++)
        {
            indicator[x].classList.remove('active');
        }
        this.classList.add('active');
        const displayItems = this.getAttribute('data-filter');
        for(let z=0; z<shop_mall.length; z++)
        {
            shop_mall[z].style.transform = 'scale(0)';
            setTimeout(()=>{
                shop_mall[z].style.display = 'none';
            }, 500);

            if ((shop_mall[z].getAttribute('data-category') == displayItems) || displayItems == 'all')
            {
                shop_mall[z].style.transform = 'scale(1)';
                setTimeout(()=>{
                    shop_mall[z].style.display = 'block';
                }, 500);  
            }
        }
    }
}