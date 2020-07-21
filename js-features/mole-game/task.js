const holes = document.getElementsByClassName('hole');

//напишите функцию getHole( index ), которая по индексу будет возвращать нужный элемент
function getHole(index) {
  return holes[index]
};

//Используя цикл зарегистрируйте для каждой лунки обработчик событий
//(!) это было самое сложное, связать getHole выше и это. Когда самая сложная часть заключается в реализации чеего-то, что не имеет отношения к изучаемой теме, значит задача плохая
for (let i = 0; i < holes.length; i++) {
    getHole(i).addEventListener('click', click);
}

let count = 0;
let misses = 0;

//Проверьте наличие нужного класса и увеличьте значение нужного счетчика
function click(){
  if (this.classList.contains('hole_has-mole')){
    count = parseInt(document.getElementById('dead').textContent);
    count = count + 1;
    document.getElementById('dead').textContent = count;
    this.classList.remove('hole_has-mole'); //чтобы нельзя было кликать несколько раз по лунке с кротом
  } else {
    misses = misses + 1;
    document.getElementById('lost').textContent = misses;
  }

  if (count === 10){
    alert('Победа!');
    resetGame(); //По выигрышу или проигрышу обнулите статистику
  }

  if (misses === 5){
    alert('Поражение!'); 
    resetGame(); //По выигрышу или проигрышу обнулите статистику
  }
}

//По выигрышу или проигрышу обнулите статистику
function resetGame(){
  count = 0;
  misses = 0;
  document.getElementById('lost').textContent = misses;
  document.getElementById('dead').textContent = count;
}





