const mobileMenuBtn = document.querySelector('.header__menu--btn');
const mobileMenu = document.querySelector('.tablet');

mobileMenuBtn.addEventListener('click', function(evt) {
    console.log(evt.target)
    mobileMenu.classList.toggle('mobile__menu--active')
})