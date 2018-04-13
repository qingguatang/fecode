function initMenuEvent() {
  // var li = document.querySelector('.menu li');
  // console.log(li);
  var lis = document.querySelectorAll('.menu li');
  console.log(lis);

  // 把它当作固定结构来学
  // 1. 在你没有熟练之前，括号里面只有一个地方可以改。
  for (var i = 0; i < lis.length; i++) {
    console.log(lis[i].innerHTML);

    // 如果循环里面有处理事件
    // 就把它放到旁边的函数中
    // 学写代码的诀窍就是找出模式，然后使用套路解决
    // 旁边，就放在它下面好了。
    addEvent(lis[i]);
  }

  function addEvent(li) {
    li.addEventListener('click', function() {
      for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove('active');
      }
      li.classList.add('active');
    });
  }
}


function initMenuItems() {
  console.log('init');
  // 字符串的拼装
  var menu = document.querySelector('.menu');
  var html = '<ul>';
  // html += '<li class="red">Red</li>';
  // html += '<li class="orange">Orange</li>';
  // html += '<li class="yellow">Yellow</li>';
  // html += '<li class="olive">Olive</li>';
  // html += '<li class="green">Green</li>';
  // html += '<li class="teal">Teal</li>';

  var list = ['Red', 'Orange', 'Yellow', 'Olive', 'Green', 'Teal'];
  for (var i = 0; i < list.length; i++) {
    var cls = list[i].toLowerCase();
    html += '<li class="'+cls+'">'+list[i]+'</li>'
  }

  html += '</ul>'
  menu.innerHTML = html;

  // DOM操作留到下一讲
}


initMenuItems();
initMenuEvent();