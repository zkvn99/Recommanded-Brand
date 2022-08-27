var nav = document.getElementsByClassName("navbar");

    window.onscroll = function sticky() {
      if(window.pageYOffset > nav[0].offsetTop) {
        nav[0].classList.add("header_fixed");
      } else {
        nav[0].classList.remove("header_fixed");
      }
    }