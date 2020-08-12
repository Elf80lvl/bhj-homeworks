const poll = document.getElementsByClassName('poll')[0];
const pollTitle = document.getElementById('poll__title');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';

//Загрузите случайный опрос, отправив GET-запрос по адресу: https://netology-slow-rest.herokuapp.com/poll.php
xhr.onload = () => {
  console.log(xhr.response);
  pollTitle.textContent = xhr.response.data.title;
  const answers = xhr.response.data.answers;
  //Отобразите вопрос и список ответов в виде кнопок
  for (let i = 0; i < answers.length; i++) {
    let button = document.createElement('button');
    button.textContent = xhr.response.data.answers[i];
    button.classList.add('poll__answer');
    document.body.appendChild(button);
    button.addEventListener('click', buttonClick);
  }
}

xhr.send();


//При нажатии на какую-либо кнопку, выведите диалоговое окно с надписью «Спасибо, ваш голос засчитан!»
function buttonClick(){
  alert('Спасибо, ваш голос засчитан!');
  location.reload();
}