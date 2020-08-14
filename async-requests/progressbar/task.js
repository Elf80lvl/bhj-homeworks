const form = document.getElementById('form');
let progress = document.getElementById('progress'); 

form.addEventListener('submit', submitForm);

function submitForm(){
  event.preventDefault();
  //file
  //let file = document.getElementById('file').files[0];
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
  //Form Object
  let formData = new FormData(form);
  //progress
  xhr.upload.onprogress = function(event) {
    progress.max = event.total;
    progress.value = event.loaded;
  }
  //go
  xhr.send(formData);
  console.log(file);
}


// let progress = document.getElementById('progress');
// let form = document.getElementById('form');
// form.addEventListener('submit', e => {    
//     let formData = new FormData(form);    
//     let xhr = new XMLHttpRequest();    
//     xhr.upload.addEventListener('progress', e => progress.value = e.loaded / e.total);    
//     xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');    
//     xhr.send(formData);    
//     e.preventDefault();
// });