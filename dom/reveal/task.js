//для массива элементов
const elementsToReveal = Array.from(document.getElementsByClassName('reveal'));

const classToAdd = 'reveal_active';

window.addEventListener('scroll', scrollThis);

function scrollThis() {
  addClassIfVisible(elementsToReveal);
}

function addClassIfVisible(array){
  array.forEach(element => {
    let rect = element.getBoundingClientRect();
    if ( (rect.top >= 0) && (rect.bottom <= window.innerHeight) ){
      element.classList.add(classToAdd);
    }
  });
}




//для отдельныx элементов
// const elementToReveal = document.getElementsByClassName('reveal')[0];
// const elementToReveal2 = document.getElementsByClassName('reveal')[1];
// const classToAdd = 'reveal_active';

// window.addEventListener('scroll', scroll);

// function scroll() {
//   addClassIfVisible(elementToReveal);
//   addClassIfVisible(elementToReveal2);
// }

// function addClassIfVisible(el){
//   let rect = el.getBoundingClientRect();
//   if ((rect.top >= 0) && (rect.bottom <= window.innerHeight)){
//     el.classList.add(classToAdd);
//   }
// }




//заметки
// // Полностью видимый return true:
// let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
// // частично видимый return true: //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
// return isVisible;
