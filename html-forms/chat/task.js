//1. Реализуйте открытие окна чата при нажатии на красный боковой бэйдж
document.querySelector('.chat-widget').addEventListener('click', function(){
  this.classList.add('chat-widget_active');
  //При активном окне чата и простое 30 секунд, робот должен задать вопрос в чат
  clearTimeout(id);
  id = setTimeout(botAnnoying, 30000);
});


const input = document.getElementById('chat-widget__input');
let id;
let userMessage;
let currentDate;
let currentHours;
let currentMinutes;
const messages = document.querySelector( '.chat-widget__messages' );
const botMessages = [
  'Пожалуйста, повторите вопрос',
  'Вы забыли представиться',
  'Слишком много запросов, повторите через несколько минут',
  'Введите капчу',
  'На ваш вопрос можно ответить утвердительно',
  'Извините, произошла ошибка, повторите позже'
];


input.addEventListener('keyup', function(e){
  //2. По нажатию Enter, реализуйте отправку в чат непустого текстового сообщения
  if ((e.key === 'Enter') && (this.value != '')) {
    clearTimeout(id);
    userMessage = this.value;
    getCurrentDate();
    messages.innerHTML += `
    <div class="message_client">
      <div class="message__time">${currentHours}:${currentMinutes}</div>
      <div class="message__text">
        ${userMessage}
      </div>
    </div>
    `;

    this.value = '';

    //3. Реализуйте ответ робота (случайное сообщение из списка)
    //4. Проставляйте реальную дату переписки
    messages.innerHTML += `
    <div class="message">
      <div class="message__time">${currentHours}:${currentMinutes}</div>
      <div class="message__text"> ${botMessages[Math.floor(Math.random() * botMessages.length)]}
      </div>
    </div>
    `;

    //Реализуйте автоматическую прокрутку окна чата до блока последнего комментария после каждого нового комментария
    messages.lastElementChild.scrollIntoView();
    //При активном окне чата и простое 30 секунд, робот должен задать вопрос в чат
    id = setTimeout(botAnnoying, 5000);
  }//end of if

});


function getCurrentDate(){
  currentDate = new Date();
  currentHours = checkTime(currentDate.getHours());
  currentMinutes = checkTime(currentDate.getMinutes());
}


//Приведение в формат HH:MM
function checkTime(i) {
  return (i < 10) ? "0" + i : i;
}


//При активном окне чата и простое 30 секунд, робот должен задать вопрос в чат
function botAnnoying(){
  getCurrentDate();
  messages.innerHTML += `
  <div class="message">
    <div class="message__time">${currentHours}:${currentMinutes}</div>
    <div class="message__text"> Я могу вам чем-нибудь помочь?
    </div>
  </div>
  `;
  messages.lastElementChild.scrollIntoView();
}