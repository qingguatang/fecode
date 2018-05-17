(function() {
  var menu = document.querySelector('.menu');

  initMenu();


  function initMenu() {
    var lis = document.querySelectorAll('li');
    for (var i = 0; i < lis.length; i++) {
      addEvent(i);
    }
    function addEvent(index) {
      lis[index].addEventListener('click', function() {
        for (var i = 0; i < lis.length; i++) {
          lis[i].classList.remove('active');
        }
        lis[index].classList.add('active');
      });
    }
  }
})();
