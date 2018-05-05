var app = document.querySelector('.reading-app');


initWordsPanel();


function initWordsPanel() {
  var panel = app.querySelector('.words-panel');

  var lis = panel.querySelectorAll('.list li');
  for (var i = 0; i < lis.length; i++) {
    addEvent(i);
  }
  function addEvent(index) {
    var li = lis[index];
    li.addEventListener('click', function() {
      for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove('active');
      }
      li.classList.add('active');
    });
  }
}