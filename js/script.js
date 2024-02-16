// Making the Logo Blinking at every 1 Second
let logo = document.getElementById("logo");
setInterval(() => logo.hidden = !logo.hidden, 1000);

// Accessing DOM elements for Responsive Header
const menu = document.querySelector('.menu-list');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const navLinks = document.querySelectorAll(".navLinks");

// Get the menu trigger element and the menu container
const menuTrigger = document.querySelector('.menu-trigger');
const menuContainer = document.getElementById('menu-container');


/* Responsive Header in Mobile View*/
menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
}
cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}

// Show the menu when hovering over or clicking the trigger
   menuTrigger.addEventListener('mouseenter', () => {
   menuContainer.style.display = 'block';
 });
 
// Hide the menu when moving the mouse out of the container
   menuContainer.addEventListener('mouseleave', () => {
   menuContainer.style.display = 'none';
 });

// Iterate over anchors to add some functionality
for( var i = 0; i < navLinks.length; i++) {
   navLinks[i].addEventListener('click', () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
   })
}
 

