document.addEventListener('DOMContentLoaded', function() {
  var navMenu = document.querySelector('nav ul');
  var toggleIcon = document.querySelector('.toggle-icon');

  toggleIcon.addEventListener('click', function() {
    navMenu.classList.toggle('collapsed');
  });
});

// Get menu and icon elements
var menu = document.querySelector('.toggle-menu');
var icon = document.querySelector('.toggle-icon');

// Add a click event listener
icon.addEventListener('click', function() {
  menu.classList.toggle('show-menu');
});
