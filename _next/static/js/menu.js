const mobileButton = document.querySelector('.Header_mobile___Ad_r');
const mobileNav = document.querySelector('.Header_mobileNav__BRyxT');
const closeButton = document.querySelector('.Header_mobileNav__close__OLAju');

mobileButton.addEventListener('click', () => {
    mobileNav.classList.add('Header_mobileNav__active__Vuhjv');
});

closeButton.addEventListener('click', () => {
    mobileNav.classList.remove('Header_mobileNav__active__Vuhjv');
});
