document.addEventListener("DOMContentLoaded", function () {
  // Add animation class to header on page load
  const animatedHeader = document.getElementById("animatedHeader");
  const animatedHeroLeft = document.getElementById("animatedHeroLeft");
  const animatedHeroRight = document.getElementById("animatedHeroRight");
  animatedHeader.classList.add("animate-header");
  animatedHeroLeft.classList.add("animate-hero-left");
  animatedHeroRight.classList.add("animate-hero-right");
});

function toggleSlider() {
  var slider = document.getElementById("slider");
  slider.classList.toggle("slider_opened");
}
