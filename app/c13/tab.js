initTab();

function initTab() {
  var tab = document.querySelector('.tab');
  var lis = tab.querySelectorAll('.navs li');
  var panes = tab.querySelectorAll('.pane');

  for (var i = 0; i < lis.length; i++) {
    addEvent(i);
  }

  function addEvent(index) {
    var li = lis[index];
    li.addEventListener('click', function() {
      for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove('active');
        panes[i].style.display = 'none';
      }
      li.classList.add('active');
      panes[index].style.display = 'block';
    });
  }

  var event = new Event('click');
  // lis[0].dispatchEvent(event);

  tab.querySelector('.navs li.active').dispatchEvent(event);
}