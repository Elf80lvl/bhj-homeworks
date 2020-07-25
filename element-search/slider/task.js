const prev = document.getElementsByClassName('slider__arrow_prev');
const next = document.getElementsByClassName('slider__arrow_next');

const items = document.getElementsByClassName('slider__item');
let active;
let counter = 0;

next[0].onclick = function(){
  counter = counter + 1;
  active = document.getElementsByClassName('slider__item_active');
  if (counter >= items.length) {
    active[0].classList.remove("slider__item_active");
    document.querySelector('.slider__item').classList.add('slider__item_active');
    counter = 0;
  } else {
      active = document.getElementsByClassName('slider__item_active');
      active[0].nextElementSibling.classList.add("slider__item_active");
      active[0].classList.remove("slider__item_active");
  }
}


prev[0].onclick = function(){
  counter = counter - 1;
  console.log(counter);
  if (counter <= 0) {
    items[items.length-1].classList.add("slider__item_active");
    document.querySelector('.slider__item_active').classList.remove('slider__item_active');
    counter = items.length;
    console.log(counter);
  }else {
    active = document.getElementsByClassName('slider__item_active');
    active[0].previousElementSibling.classList.add("slider__item_active");
    active[1].classList.remove("slider__item_active");
    console.log(counter);
  }
}



//next
  // active = document.getElementsByClassName('slider__item_active');
  // active[0].nextElementSibling.classList.add("slider__item_active");
  // active[0].classList.remove("slider__item_active");

//prev
  // let active = document.getElementsByClassName('slider__item_active');
  // active[0].previousElementSibling.classList.add("slider__item_active");
  // active[1].classList.remove("slider__item_active");