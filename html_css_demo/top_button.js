var backToTop = () => {
    // Scroll | button show/hide
    window.addEventListener('scroll', () => {
      if (document.querySelector('html').scrollTop > 100) {
        document.querySelector('#top_button').style.display = "block";
      } else {
        document.querySelector('#top_button').style.display = "none";
      }
    });
    // back to top
    document.querySelector('#top_button').addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    })
  };
  backToTop();