(function() {
  var menu = document.querySelector('.menu');

  // initMenu();

  // menu.addEventListener('click', function(event) {
  //   console.log(event.target.tagName);
  //   if (event.target.tagName == 'LI') {
  //     var lis = menu.querySelectorAll('li');
  //     var li = event.target;
  //     for (var i = 0; i < lis.length; i++) {
  //       lis[i].classList.remove('active');
  //     }
  //     li.classList.add('active');
  //   }
  // });

  $(menu).on('click', 'li', function() {
    var lis = menu.querySelectorAll('li');
    var li = this; //event.target;
    for (var i = 0; i < lis.length; i++) {
      lis[i].classList.remove('active');
    }
    li.classList.add('active');
  });

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
