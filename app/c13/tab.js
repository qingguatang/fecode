var tabs = document.querySelectorAll('.tab');

initTab(tabs[0]);
initTab(tabs[1], '.menu li');
initTab(tabs[2], false, '.panel', true);

function initTab(tab, navSelector, paneSelector, autoPlay) {
  console.log(navSelector);
  // var tab = document.querySelector('.tab');
  // if (navSelector == undefined) {
  //   navSelector = '.navs li';
  // }
  if (!navSelector) {
    navSelector = '.navs li';
  }
  if (paneSelector == undefined) {
    paneSelector = '.pane';
  }

  var lis = tab.querySelectorAll(navSelector);
  var panes = tab.querySelectorAll(paneSelector);

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

  // tab.querySelector('.navs li.active').dispatchEvent(event);
  for (var i = 0; i < lis.length; i++) {
    if (lis[i].classList.contains('active')) {
      lis[i].dispatchEvent(event);
      break;
    }
  }
}