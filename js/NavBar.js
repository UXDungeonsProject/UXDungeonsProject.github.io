const menuBars = document.querySelector(".menu-bars");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
let scrolled;

menuBars.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

// If scrolling is detected closeMenu() is called
window.addEventListener('scroll', () => {
    scrolled = window.scrollY;
    // console.log(scrolled);
        if (scrolled >= 5){
            closeMenu();
        }
});

function mobileMenu() {
    menuBars.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    menuBars.classList.remove("active");
    navMenu.classList.remove("active");
}