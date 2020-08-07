const links = Array.from(document.getElementsByClassName('has-tooltip'));
let linkRect;
let linkHeight;


links.forEach((el) => {
  el.addEventListener('click', clickTheLink);
});


function clickTheLink() {
  event.preventDefault();
  //удаление подсказки если уже есть
  const hintToDelete = document.querySelector('.tooltip');
  if (hintToDelete) {
    if (this.getAttribute('title') === hintToDelete.textContent) {
      hintToDelete.remove();
        return
    }
    hintToDelete.remove();
}
  //формируем подсказку
  const hint = document.createElement('div');
  hint.classList.add('tooltip');
  //вычисляем нужное положение подсказки относительно ссылки
  linkRect = this.getBoundingClientRect();
  linkHeight = this.getBoundingClientRect().bottom - this.getBoundingClientRect().top;
  hint.style.top = linkRect.top + linkHeight + 'px';
  hint.style.left = linkRect.left + 'px';
  hint.style.display = 'block';
  hint.textContent = this.getAttribute('title');
  //Добавьте подсказке дополнительный атрибут data-position для настройки места появления подсказки
  // hint.dataset.positionTop = hint.style.top;
  // hint.dataset.positionLeft = hint.style.left;

  // console.log(hint);
  document.body.append(hint);
}

