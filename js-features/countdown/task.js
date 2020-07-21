const timer = document.getElementById('timer');

function minusOne(){
  timer.textContent -= 1;
  if (timer.textContent < 0) {
    alert('Вы победили в конкурсе');
    clearInterval(intId);
    timer.textContent = 0;
  };
}

const intId = setInterval(minusOne, 1000);