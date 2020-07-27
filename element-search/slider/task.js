const prev = document.getElementsByClassName('slider__arrow_prev'); //в этих случаях лучше использовать getElements или querySelector?
const next = document.getElementsByClassName('slider__arrow_next');
const items = document.getElementsByClassName('slider__item');

let active;
let counter = 0;

next[0].onclick = showNextSlide;
prev[0].onclick = showPrevSlide;


function showNextSlide () {
  counter = counter + 1;
  if (counter >= items.length) {
    document.getElementsByClassName('slider__item_active')[0].classList.remove('slider__item_active');
    items[0].classList.add('slider__item_active');
    counter = 0;
  } else {
    showSlide(counter, -1);
  }
}


function showPrevSlide(){
  counter = counter - 1;
  if (counter < 0) {
    items[0].classList.remove('slider__item_active');
    items[items.length - 1].classList.add('slider__item_active');
    counter = items.length - 1;
  } else {
    showSlide(counter, 1);
  }
}

function showSlide(counter, k){
  items[counter + k].classList.remove('slider__item_active');
  items[counter].classList.add('slider__item_active');
}
