let navMain = document.querySelector('.main-navigation');
let navToggle = navMain.querySelector('.main-navigation__toggle');

navMain.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('main-navigation--closed');
  navMain.classList.toggle('main-navigation--opened');
});
