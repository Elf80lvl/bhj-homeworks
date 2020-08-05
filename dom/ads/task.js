const elements = Array.from(document.getElementsByClassName('rotator__case'));
const classActivator = 'rotator__case_active';
let activeElement;
let speed = elements[0].dataset['speed'];

let id = setTimeout(rotator, speed); 


function rotator(){
  //находим нужный элемент с классом
  elements.forEach((element) => {
    if (element.classList.contains(classActivator)){
      activeElement = element;
    }
    //добавляем цвет из атрибута
    element.style.color = element.dataset['color'];
  });

  //переключаем класс на следующий элемент и удаляем из текущего
  if (!isLastChild(activeElement)) {
    activeElement.nextElementSibling.classList.add(classActivator);
    activeElement.classList.remove(classActivator);
    speed = activeElement.nextElementSibling.dataset['speed']; //скорость следующего элемента
    setTimeout(rotator, speed);
  } else {
    elements[0].classList.add(classActivator);
    activeElement.classList.remove(classActivator);
    speed = elements[0].dataset['speed']; //скорость следующего элемента = скорость первого элемента, т.к. переходим в начало
    setTimeout(rotator, speed);
  }

}


function isLastChild(el) {
  return (el === el.parentNode.children[el.parentNode.children.length-1]) 
}


