/* burgermenu */
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  burger.addEventListener("click", function () {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
  });
});

/* slideshow */
var slideIndex = 1;
slideShow(slideIndex);

function slideMove(n) {
  slideShow((slideIndex += n));
}

function slideShow(n) {
  var i;
  var slide = document.getElementsByClassName("picture");

  if (n > slide.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slide.length;
  }

  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }

  slide[slideIndex - 1].style.display = "block";
}
