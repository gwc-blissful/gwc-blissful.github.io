
var sliderImages;
var arrowLeft;
var arrowRight;
var current;
function init() {
  sliderImages = document.querySelectorAll(".slide");
  arrowLeft = document.querySelector("#arrow-left");
  arrowRight = document.querySelector("#arrow-right");
  current = 0;
  startSlide();
}

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  if (sliderImages) {
  sliderImages[0].style.display = "block";
}
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}


  // Left arrow click
function lClick(){
    if (current == 0) {
      current = sliderImages.length - 1;
    }
    slideLeft();
  }

  // Right arrow click
 function rClick() {
    if (current == sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  }
