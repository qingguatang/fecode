// var box = document.querySelector('.user-center');
// var title = document.querySelector('.user-center .title');
// var panel = document.querySelector('.user-center .panel');

// var box = document.querySelector('.user-center');
// var title = box.querySelector('.title');
// var panel = box.querySelector('.panel');


// 1
// function togglePanel() {
//   if (panel.style.display == 'none') {
//     panel.style.display = 'block';
//   } else  {
//     panel.style.display = 'none';
//   }
// }

// 2
// var show = false;
// function togglePanel() {
//   if (show) {
//     panel.style.display = 'none';
//     // show = false;
//   } else {
//     panel.style.display = 'block';
//     // show = true;
//   }
//   show = !show;
// }

// 移到下面来，这样不用切换
var box = document.querySelector('.user-center');
var title = box.querySelector('.title');
var panel = box.querySelector('.panel');

// 3
// 状态的切换
// 注意class是加在box上的。
// 这种方式的的好处

// function togglePanel() {
//   if (box.classList.contains('active')) {
//     box.classList.remove('active');
//   } else {
//     box.classList.add('active');
//   }
// }

// 4 优化选择器
// title.addEventListener('click', togglePanel);
title.addEventListener('click', function() {
  if (box.classList.contains('active')) {
    box.classList.remove('active');
  } else {
    box.classList.add('active');
  }
});
// 初学者注意大括号和括号，如果不能正常工作呢，看console，它会告诉你哪里有错的。
