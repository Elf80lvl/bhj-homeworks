const loader = document.getElementById('loader');
const items = document.getElementById('items');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = 'json';

xhr.onload = () => {
  loader.classList.remove('loader_active');
  console.log(xhr.response.response.Valute);
  const valutes = xhr.response.response.Valute;
  //разметка внутри items изменена чтобы было похоже на то как в задании, одна валюта - одна строка
  for (valute in valutes) {
    items.innerHTML += `
    <div class="item">
    <span class="item__code"> ${valutes[valute].CharCode} </span>
    <span class="item__value"> ${valutes[valute].Value} </span>
    <span class="item__currency"> ${valutes[valute].Name} </span>
    </div>
    `
  }
}

xhr.send();
