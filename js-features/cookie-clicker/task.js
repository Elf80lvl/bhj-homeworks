const cookie = document.getElementById('cookie');
const clicker__counter = document.getElementById('clicker__counter');

cookie.onclick = function(){
  if (this.width === 200) {
    this.width = 250;
  }else {
    this.width = 200;
  };

  clicker__counter.textContent = parseInt(clicker__counter.textContent) + 1; 
}
