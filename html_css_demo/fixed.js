var nav = document.getElementsByClassName("navbar");
var search = document.getElementsByClassName("Search_container");

    window.onscroll = function sticky() {
      if(window.pageYOffset > nav[0].offsetTop) {
        nav[0].classList.add("header_fixed");
        search[0].classList.add("Search_fixed");
      } else {
        nav[0].classList.remove("header_fixed");
        search[0].classList.remove("Search_fixed");
      }
    }