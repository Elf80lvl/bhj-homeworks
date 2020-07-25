const links = Array.from(document.getElementsByClassName('menu__link'));

//Используя цикл зарегистрируйте обработчики события click на элементах с классом menu__link
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function(){
    //Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс menu_active
    if ( this.parentElement.querySelector('.menu_sub').classList.contains('menu_sub') ) {
      event.preventDefault();
      this.parentElement.querySelector('.menu_sub').classList.toggle('menu_active'); 
    }
  }
}