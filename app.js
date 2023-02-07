window.onload = function() { 
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    console.log("menu clicked");
    menuLinks.classList.toggle('is-active');
    menuLinks.classList.toggle('active'); 
})
};