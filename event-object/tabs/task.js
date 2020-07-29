const tabs = Array.from(document.querySelectorAll('.tab'));
const contentTabs = document.querySelectorAll('.tab__content');

tabs.forEach(function(elem) {
  elem.addEventListener("click", tabClick);
});

function tabClick(){
  resetTabs();
  this.classList.toggle('tab_active');
  const index = [...this.parentElement.children].indexOf(this); //боже, храни stackoverflow
  resetContent();
  contentTabs[index].classList.add('tab__content_active');
}

function resetTabs() {
  tabs.forEach(function(elem) {
    elem.classList.remove('tab_active');
  });
}

function resetContent() {
  contentTabs.forEach(function(elem) {
    elem.classList.remove('tab__content_active');
  });
}