const page = document.querySelector(".page");

let navMain = page.querySelector('.main-navigation');
let navToggle = navMain.querySelector('.main-navigation__toggle');

navMain.classList.remove('main-navigation--nojs');
navMain.classList.add('main-navigation--closed');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('main-navigation--closed');
  navMain.classList.toggle('main-navigation--opened');
});

const separator = document.querySelector(".separator");

if (separator) {
  const itemBefore = separator.querySelector(".separator__item--before");
  const buttonBefore = separator.querySelector(".separator__button--before");
  const buttonAfter = separator.querySelector(".separator__button--after");
  const transitionScale = separator.querySelector(".separator__transition-scale");
  const transitionButton = separator.querySelector(".separator__transition-button");

  let isCaught = false;

  transitionButton.addEventListener("mousedown", function() {
    isCaught = true;
  });

  page.addEventListener("mouseup",  function() {
    isCaught = false;
  });

  transitionScale.addEventListener("mousemove", function(evt) {
    let shift = evt.pageX - this.offsetLeft;

    if (isCaught && shift >= 0 && shift <= this.offsetWidth) {
      let itemBeforeWidth = shift / this.offsetWidth * 100;

      transitionButton.style.transitionDuration = "0s";
      transitionButton.style.left = itemBeforeWidth + "%";

      itemBefore.style.transitionDuration = "0s";
      itemBefore.style.width = 100 - itemBeforeWidth + "%";
    }
  });

  buttonBefore.addEventListener("click", function() {
    itemBefore.style.transitionDuration = "1s";
    itemBefore.style.width = "100%";

    transitionButton.style.transitionDuration = "1s";
    transitionButton.style.left = "0%";

  });

  buttonAfter.addEventListener("click", function() {
    itemBefore.style.transitionDuration = "1s";
    itemBefore.style.width = "0";

    transitionButton.style.transitionDuration = "1s";
    transitionButton.style.left = "100%";
  });
}
