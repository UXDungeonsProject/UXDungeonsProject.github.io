const menuBars = document.querySelector(".menu-bars");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

menuBars.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    menuBars.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    menuBars.classList.remove("active");
    navMenu.classList.remove("active");
}