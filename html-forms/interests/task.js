const checkboxes = Array.from(document.querySelectorAll('.interest__check'));
let parentCheckbox;
let children;


checkboxes.forEach(function(elem){
  elem.addEventListener('click', inputClick);
});


function inputClick(){
  //console.log(  this.closest('.interest').querySelector('.interests_active').querySelectorAll('.interest__check')  )
  children = Array.from( this.closest('.interest').querySelector('.interests_active').querySelectorAll('.interest__check'));
  //console.log(children)
  if (this.checked) {
    children.forEach((el) => {
      el.checked = true;
    })
  } else {
    children.forEach((el) => {
      el.checked = false;
    })
  }

  

}







// function inputClick(){
//   //cчитаем сколько чекбоксов было чекнуто
//   counterOfChecked = this.closest('.interests').querySelectorAll('.interest__check:checked').length;

//   //родительский чекбокс
//   parentCheckbox = this.closest('.interests_active').closest('.interest').querySelector('.interest__check');

//   if (counterOfChecked >= this.parentNode.parentNode.parentNode.children.length) {
//     parentCheckbox.checked = true;
//     parentCheckbox.indeterminate = false;
//   } else if (counterOfChecked === 0) {
//     parentCheckbox.checked = false;
//     parentCheckbox.indeterminate = false;
//   } else if (counterOfChecked === 1) {
//     parentCheckbox.indeterminate = true;
//   }

//   //как сделать проверку что мы кликаем на parentCheckbox?

// }