// Get the burger icon and navigation menu
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

// Toggle the 'active' class to show or hide the menu
burger.addEventListener('click', () => {
  nav.classList.toggle('active');

  // Optional: toggle burger icon between ☰ and ✖
  burger.innerHTML = nav.classList.contains('active') ? '&times;' : '&#9776;';
});
