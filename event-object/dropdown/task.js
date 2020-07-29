const btn = document.querySelector('.dropdown__value'); 
const dropdownList =  document.querySelector('.dropdown__list');

btn.addEventListener('click', btnClick);

function btnClick(){
  dropdownList.classList.toggle('dropdown__list_active');
}


const items = document.querySelectorAll('.dropdown__item');

items.forEach(function(elem) {
  elem.addEventListener("click", itemClick);
});

function itemClick(){
  event.preventDefault();
  dropdownList.classList.toggle('dropdown__list_active');
  btn.textContent = this.textContent;
}







