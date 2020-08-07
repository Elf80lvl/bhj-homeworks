const input = document.getElementById('task__input');
const form = document.getElementsByClassName('tasks__control')[0];
const tasksList = document.getElementById('tasks__list');

let tasks = [];
let placeTasks;

form.addEventListener('submit', submitForm);


function submitForm() {
  event.preventDefault();

  //добавляем таск в массив
  if (input.value) {
    tasks.push(input.value);
    updateTasks(tasks);
    form.reset();
  }
}

function updateTasks(tasks) {
  placeTasks = '';
  //добавляем таск в DOM
  for (let i = 0; i < tasks.length; i++) {
    placeTasks += `
          <div class="task" data-id="${i}">
              <div class="task__title">
              ${tasks[i]}
              </div>
              <a href="#" class="task__remove">&times;</a>
          </div>
      `
  }

  tasksList.innerHTML = placeTasks;

  //на иконки удаления
  const removeIcons = Array.from(document.getElementsByClassName('task__remove'));
  removeIcons.forEach((el) => {
    el.addEventListener('click', function(){
      tasks.splice(this.parentElement.dataset['id'], 1); //удаляем таск из массива
      this.parentElement.remove(); //удаляем таск из DOM
    })
  })
}




