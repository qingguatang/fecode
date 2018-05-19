(function() {
  var menu = document.querySelector('.menu');

  initMenu();


  function initMenu() {
    var lis = menu.querySelectorAll('li');
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
})();
