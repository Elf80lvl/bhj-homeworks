if (localStorage.text) {
  document.getElementById('editor').value = localStorage.text;
}


document.getElementById('editor').addEventListener('keyup', function() {
  localStorage.text = this.value;
})


document.getElementById('delete').addEventListener('click', () => {
  document.getElementById('editor').value = '';
  localStorage.removeItem('text');
})



