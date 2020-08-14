if (localStorage.text) {
  document.getElementById('editor').value = localStorage.text;
}


document.getElementById('save').addEventListener('click', () => {
  localStorage.setItem('text', document.getElementById('editor').value);
})


document.getElementById('delete').addEventListener('click', () => {
  document.getElementById('editor').value = '';
})



