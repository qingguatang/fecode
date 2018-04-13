var box = document.querySelector('.user-center');
var title = document.querySelector('.user-center .title');
var panel = document.querySelector('.user-center .panel');


// function togglePanel() {
//   if (panel.style.display == 'none') {
//     panel.style.display = 'block';
//   } else  {
//     panel.style.display = 'none';
//   }
// }

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


// 状态的切换
// 注意class是加在box上的。
// 这种东西的好处
function togglePanel() {
  if (box.classList.contains('active')) {
    box.classList.remove('active');
  } else {
    box.classList.add('active');
  }
}

title.addEventListener('click', togglePanel);