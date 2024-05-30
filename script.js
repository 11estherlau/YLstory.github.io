document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.toggle-nav').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('collapsed');
  });
});
