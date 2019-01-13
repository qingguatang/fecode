initMenu();


function initMenu() {
  var menu = document.querySelector('.menu');

  var li = menu.querySelector('li');
  var lis = menu.querySelectorAll('li');

  console.log(li);
  console.log(lis);

  console.log(lis[0]);
  console.log(lis[4]);

  console.log(lis.length);

  for (var i = 0; i < lis.length; i++) {
    console.log(lis[i].innerHTML);
    lis[i].innerHTML = lis[i].innerHTML + ' ' + i;
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
