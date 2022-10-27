function item_filter(){

    var min, max, price, item, i;
  
    min = document.getElementById("input_min");
    max = document.getElementById("input_max");
    item = document.getElementsByClassName("item_card_grid"); // item에 브랜드 상자 받아오기
    arr = document.getElementsByClassName("input-number");
    for(i=0;i<item.length;i++){
        price = Number(arr[i].value);
        if(((min.value <= price) && (price <= max.value))){ // 가격 체크 후
            item[i].style.display = "block"; // 아이템 출력
        }
        else{
            item[i].style.display = "none"; // 아이템 미출력
        }
    }
}

function item_initializer(){

    var min, max, item, i, range_max, range_min, progress;
    
    progress = document.querySelector(".slider .progress");
    min = document.getElementById("input_min");
    max = document.getElementById("input_max");
    range_min = document.getElementById("range_min");
    range_max = document.getElementById("range_max");
    item = document.getElementsByClassName("item_card_grid"); // item에 브랜드 상자 받아오기
    for(i=0;i<item.length;i++){
            item[i].style.display = "block"; // 아이템 출력
    }
    max.value = null;
    min.value = null;
    range_min = null;
    range_max = null;
}
