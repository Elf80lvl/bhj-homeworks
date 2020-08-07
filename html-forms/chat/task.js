//1. Реализуйте открытие окна чата при нажатии на красный боковой бэйдж
document.querySelector('.chat-widget').addEventListener('click', function() {
  this.classList.add('chat-widget_active');
  id = setTimeout(idleWarning, 5000);
});

const messages = document.querySelector( '.chat-widget__messages' );
let userMessage;
let id;
const input = document.getElementById('chat-widget__input');
const botMessages = [
  'Повторите вопрос, пожалуйста',
  'Слишком много запросов, пожалуйста, повторите позже',
  'Введите капчу',
  'Вы забыли представиться',
  'К сожалению, не могу ответить на ваш вопрос',
  'На ваш вопрос можно ответить утвердительно, а можно отрицательно',
  'Что вы имеете в виду?',
  'Почему вы спрашиваете?'
];

input.addEventListener('keyup', function(e){
  //2. По нажатию Enter, реализуйте отправку в чат непустого текстового сообщения
  if ((e.key === 'Enter') && this.value != '') {
    clearTimeout(id);
    userMessage = document.getElementById('chat-widget__input').value;
    //4. Проставляйте реальную дату переписки
    let currentDate = new Date();
    let hours = checkTime(currentDate.getHours());
    let minutes = checkTime(currentDate.getMinutes());
    messages.innerHTML += `
    <div class="message_client">
    <div class="message__time">${hours}:${minutes}</div> 
    <div class="message__text">${userMessage}</div>
    </div>
      `;

  this.value = '';

  //3. Реализуйте ответ робота (случайное сообщение из списка)
  messages.innerHTML += `
  <div class="message">
    <div class="message__time">${hours}:${minutes}</div>
    <div class="message__text">
      ${botMessages[Math.floor(Math.random() * botMessages.length)]}
    </div>
  </div>
  `;

  //Реализуйте автоматическую прокрутку окна чата до блока последнего комментария после каждого нового комментария.
  messages.lastElementChild.scrollIntoView();
  //При активном окне чата и простое 30 секунд, робот должен задать вопрос в чат
  } //end of if
});


//Приведение часов или минут к формату HH:MM
function checkTime(i) {
  return (i < 10) ? "0" + i : i;
}


function idleWarning(){
  let currentDate = new Date();
  let hours = checkTime(currentDate.getHours());
  let minutes = checkTime(currentDate.getMinutes());
  messages.innerHTML += `
  <div class="message">
    <div class="message__time">${hours}:${minutes}</div>
    <div class="message__text">
      Почему вы молчите?
    </div>
  </div>
  `;
}


