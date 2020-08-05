const fontSizeButtons = Array.from(document.getElementsByClassName('font-size'));
const book = document.getElementById('book');
let size;

fontSizeButtons.forEach((element) => {
  element.addEventListener('click', fontSizeButtonClick);
});

//клик на кнопки размеры шрифта
function fontSizeButtonClick() {
  event.preventDefault();
  reset();
  this.classList.add('font-size_active');
  size = this.getAttribute('data-size');
  if (size != null) {
    book.classList.add('book_fs-' + size);
  }
}

//убрать все
function reset() {
  fontSizeButtons.forEach(function(elem) {
    elem.classList.remove('font-size_active');
  });
  book.classList.remove('book_fs-small');
  book.classList.remove('book_fs-big');
}



//Повышенный уровень сложности
//я сдаюсь

// const colorButtons = Array.from(document.getElementsByClassName('color'));
// let color;

// colorButtons.forEach((element) => {
//   element.addEventListener('click', colorButtonsClick);
// });

// function colorButtonsClick(){
//   event.preventDefault();
//   resetСolorButtons();
//   this.classList.add('color_active');
//   color = this.dataset['color'];
//   if (color != undefined) {
//     resetColor();
//     book.classList.add('book_color-' + color);
//   } else resetColor();
// }


// function resetСolorButtons() {
//   colorButtons.forEach(function(elem) {
//     elem.classList.remove('color_active');
//   });
// }

// function resetColor(){
//   book.classList.remove('book_color-gray');
//   book.classList.remove('book_color-whitesmoke');
// }