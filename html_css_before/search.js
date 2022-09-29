function filter(){

  var value, shop_name, item, i;

  value = document.getElementById("value").value.toUpperCase(); // value에 검색 value 받아오기 대문자로
  item = document.getElementsByClassName("item_box"); // item에 브랜드 상자 받아오기

  for(i=0;i<item.length;i++){ // item 길이만큼 증가
    shop_name = item[i].getElementsByClassName("shop_name"); // 브랜드명 받아오기
    if(shop_name[0].innerHTML.toUpperCase().indexOf(value) > -1){ // 문자열 체크 후
      item[i].style.display = "list-item"; // 아이템 출력
    }else{
      item[i].style.display = "none"; // 아이템 미출력
    }
  }
}
