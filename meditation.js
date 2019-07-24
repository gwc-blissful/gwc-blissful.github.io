let sliderImages = document.querySelectorAll('.slide')
  arrowLeft = document.querySelector('#arrow-left')
  arrowRight = document.querySelector('#arrow-right')
  current = 0;

// Clear all Images
funtion reset(){
  for (let i = 0; i < sliderImages.length; i++){
    sliderImages[i].style.display = 'none';
  }
}

// Initializes slider
funtion startSlide(){
  reset();
  sliderImages[0].style.display = 'block';
}

// Show preview
function slideLeft(){
  reset();
  sliderImages[current -1].style.display = 'block';
}

// Show next
function slideRight (){
  reset();
  sliderImages[current + 1].style.display = 'block';
}
// Left arrow click
arrowLeft.addEventListener('click', function(){
  if(curent === 0){
    current = sliderImages.length - 1;
  } else {
    current --;
  }
  slideLeft();
});
// Right arrow click
arrowRight.addEventListener('click', function(){
  if(curent === sliderImages.length -1){
    current = 0;
  } else {
    current++;
  }
    slideRight();

});

startSlide();
