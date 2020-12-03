// function to create skew effect on scroll for art page
// (only works if page is refreshed due to javascript in index page)
const section = document.querySelector("section");
let currentPixel = window.pageYOffset;

const loop = function() {
  const newPixel = window.pageYOffset;
  const diff = newPixel - currentPixel;
  const speed = diff * 0.50;

  section.style.transform = "skewY(" + speed + "deg)";

  currentPixel = newPixel;

  requestAnimationFrame(loop);
};

loop();
