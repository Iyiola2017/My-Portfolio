// const { links } = require("express/lib/response");
// const { Navbar } = require("react-bootstrap");

var typed = new Typed('.multiple-text',{
  strings:['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
  typeSpeed:100,
  backSpeed:100,
  backdDelay: 1000,
  loop:true,
});

// TOGGLE ICON BAR

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
};




// scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 30;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  })   ;

  //  sticky Navbar

  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // REMOVE TOGGLE ICON BAR WHEN NAVBAR LINK IS CLICKED (SCROLL)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

