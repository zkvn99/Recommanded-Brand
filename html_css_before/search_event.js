const searchBtn = document.querySelector(".searchBtn");
const cancelBtn = document.querySelector(".cancelBtn");
const search_box = document.querySelector(".search_box");
const searchInput = document.querySelector("input");

searchBtn.onclick = () =>{
  search_box.classList.add("active");
  searchInput.classList.add("active");
  searchBtn.classList.add("active");
  cancelBtn.classList.add("active");
}

cancelBtn.onclick = () =>{
    search_box.classList.remove("active");
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
    cancelBtn.classList.remove("active");
  }