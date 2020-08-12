const form = document.getElementById('form');
let progress = document.getElementById('progress'); 

form.addEventListener('submit', submitForm);

function submitForm(){
  event.preventDefault();
  //file
  let file = document.getElementById('file').files[0];
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);

  //Form Object
  let formData = new FormData();

  //progress
  xhr.upload.onprogress = function(event) {
    progress.max = event.total;
    progress.value = event.loaded;
  }

  formData.append('file', file);
  //request
  xhr.send(formData);
  console.log(file);
}
