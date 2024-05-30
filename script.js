document.addEventListener('DOMContentLoaded', function() {
  var navMenu = document.querySelector('nav ul');

  document.querySelector('.toggle-nav').addEventListener('click', function() {
    navMenu.classList.toggle('collapsed');
  });
});
