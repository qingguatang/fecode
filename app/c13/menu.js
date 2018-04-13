function initMenu() {
  // var li = document.querySelector('.menu li');
  // console.log(li);
  var lis = document.querySelectorAll('.menu li');
  console.log(lis);

  // 把它当作固定结构来学
  // 1. 在你没有熟练之前，括号里面只有一个地方可以改。
  for (var i = 0; i < lis.length; i++) {
    // 如果循环里面有处理事件
    // 就把它放到旁边的函数中
    // 学写代码的诀窍就是找出模式，然后使用套路解决
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


initMenu();