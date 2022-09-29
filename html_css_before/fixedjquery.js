$( document ).ready( function() {
    var navOffset = $( '.navbar' ).offset(); //메뉴의 위치 파악
    $( window ).scroll( function() { // 스크롤 할 때 함수 실행
      if ( $( document ).scrollTop() > navOffset.top ) { //문서 스크롤바 위치가 메뉴의 수직 위치보다 아래면
        $( '.navbar' ).addClass( 'header_fixed' ); // 메뉴 jbFixed클래스를 추가하여 고정
      }
      else {
        $( '.navbar' ).removeClass( 'header_fixed' ); // 그렇지 않으면 제거
      }
    });
  } );