var tiempoTransicion = 5000;

var slider = document.querySelector('.slider');
var sliderWidth = slider.offsetWidth;
var currentSlide = 1;
var slideInterval = setInterval(nextSlide, tiempoTransicion);

function nextSlide() {
  if (currentSlide === 3) {
    currentSlide = 1;
  } else {
    currentSlide++;
  }
  slider.style.transform = 'translateX(' + (-sliderWidth * (currentSlide - 1)) + 'px)';
}




