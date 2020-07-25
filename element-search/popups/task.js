//В момент запуска скрипта, покажите окно #modal_main
document.getElementById('modal_main').classList.add('modal_active');

//Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close
const ElemClose = document.getElementsByClassName('modal__close');
for (let i = 0; i < ElemClose.length; i++) {
  ElemClose[i].onclick = function() {
    const modals = document.getElementsByClassName('modal')
    for (let i = 0; i < modals.length; i++) {
      modals[i].classList.remove('modal_active')
    } 
  }
}

//По нажатию на элемент с классом show-success покажите окно #modal_success
success = document.getElementsByClassName('show-success');
success[0].onclick = function() {
  document.getElementById('modal_success').classList.add('modal_active');
}









