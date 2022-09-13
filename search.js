function filter(){

  var value, shop_name, item, i;

  value = document.getElementById("value").value.toUpperCase();
  item = document.getElementsByClassName("item_box");

  for(i=0;i<item.length;i++){
    shop_name = item[i].getElementsByClassName("shop_name");
    if(shop_name[0].innerHTML.toUpperCase().indexOf(value) > -1){
      item[i].style.display = "list-item";
    }else{
      item[i].style.display = "none";
    }
  }
}