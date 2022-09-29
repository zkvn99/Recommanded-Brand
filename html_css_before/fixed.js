var nav = document.getElementsByClassName("navbar");

    window.onscroll = function sticky() {
      if(window.pageYOffset > nav[0].offsetTop) { 
        nav[0].classList.add("header_fixed"); // 상단 메뉴바 고정
      } else {
        nav[0].classList.remove("header_fixed"); // 그렇지 않으면 메뉴바 제거
      }
    }