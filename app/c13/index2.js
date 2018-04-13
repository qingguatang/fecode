function initUserCenter(box) {
  var title = box.querySelector('.title');
  var panel = box.querySelector('.panel');

  title.addEventListener('click', function() {
    if (box.classList.contains('active')) {
      box.classList.remove('active');
    } else {
      box.classList.add('active');
    }
  });
}

// function initUserCenter2() {
//   var box2 = document.querySelector('.user-center-2');
//   var title2 = box2.querySelector('.title');
//   var panel2 = box2.querySelector('.panel');

//   title2.addEventListener('click', function() {
//     if (box2.classList.contains('active')) {
//       box2.classList.remove('active');
//     } else {
//       box2.classList.add('active');
//     }
//   });
// }


var box = document.querySelector('.user-center');
initUserCenter(box);

var box2 = document.querySelector('.user-center-2');
initUserCenter(box2);


// 1. 函数就是给一段代码加个名称
// 2. 给函数添加参数，这样可以适合不同的情况，避免代码重复。
