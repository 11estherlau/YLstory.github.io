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
  if (menu.style.display === 'none') {
    // Add a click event listener
    menu.style.display = 'block';
  } else {
    // If the menu is displayed, hide the menu
    menu.style.display = 'none';
  }
});
