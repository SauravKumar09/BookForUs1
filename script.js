let searchBar = document.querySelector('.search input');
let searchIcon = document.querySelector('.search .bx');

searchIcon.addEventListener('click' , () => {
    searchBar.style.display = "block";
    searchIcon.style.borderRadius = "none";
});