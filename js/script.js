
'use strict';


/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}





/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});









function loadinganimation() {
  
  gsap.from(" .header", {
    y: 0,
    
    opacity: 0,
    delay: 0.9,
    duration: 0.8,
    stagger: 0.3,
  });
  gsap.from(" #home .container", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from(".features-list", {
    y:100,
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
    stagger:0.3,
  });
  gsap.from(".about-banner", {
 
    y: 100,
    
    scale: 0.9,

    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  });
  gsap.from(".about-content", {
    x: 100,
    
    scale: 0.9,

    opacity: 0,
    delay: 1.5,
    duration: 0.5,
  });
}
 
loadinganimation();


