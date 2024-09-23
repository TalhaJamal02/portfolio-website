const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  hamburger.classList.toggle('active');
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('nav-active');
    hamburger.classList.remove('active');
  });
});
