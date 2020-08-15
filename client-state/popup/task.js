const modal = document.getElementById('subscribe-modal');
const modalClose = document.getElementsByClassName('modal__close')[0];


//После закрытия окна, установите в cookie-файле информацию о закрытии окна
modalClose.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  document.cookie = 'modalClosed=1';
})

//Если после перезагрузки в cookie нет информации о закрытии, необходимо окно показать.
if (getCookie('modalClosed')) {
  modal.classList.remove('modal_active');
} else {
  modal.classList.add('modal_active');
}


function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}
