document.addEventListener('DOMContentLoaded', function() {
  var navMenu = document.querySelector('nav ul');
  var toggleIcon = document.querySelector('.toggle-icon');

  toggleIcon.addEventListener('click', function() {
    navMenu.classList.toggle('collapsed');
  });
});
