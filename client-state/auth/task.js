const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const form = document.getElementById('signin__form');
const spanId = document.getElementById('user_id');
const buttonExit = document.getElementById('signout__btn');

//При загрузке страницы, в случае, если в локальном хранилище имеется id пользователя, выведите блок #welcome с заданным id пользователя
if (localStorage.id) {
  welcome.classList.add('welcome_active');
  spanId.textContent = localStorage.id;
} else {
  signin.classList.add('signin_active');
}


form.addEventListener('submit', e => {  
  e.preventDefault();  
  let formData = new FormData(form);    
  let xhr = new XMLHttpRequest();    
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');  
  xhr.responseType = 'json';
  //Реализуйте механизм авторизации. Для этого передайте данные формы с помощью POST-запроса по адресу https://netology-slow-rest.herokuapp.com/auth.php
  xhr.onload = () => {
    if (xhr.response.success === true) {
      localStorage.id = xhr.response.user_id; //После успешного входа, сохраните полученный id-пользователя в локальное хранилище
      signin.classList.remove('signin_active');
      welcome.classList.add('welcome_active');
      spanId.textContent = localStorage.id; //При успешной авторизации, задайте id пользователя в блок #welcome и отобразите его
    } else {
      form.reset(); //После попытки авторизации данные из полей формы необходимо очищать
      alert('Неверный логин/пароль'); //Если авторизация не удалась, выведите сообщение «Неверный логин/пароль»
    }
  }
  xhr.send(formData);    
});

//Добавьте возможность деавторизации
buttonExit.addEventListener('click', ()=>{
  localStorage.removeItem('id');
  signin.classList.add('signin_active');
  welcome.classList.remove('welcome_active');
})
