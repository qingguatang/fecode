function initUserCenter() {
  var box = document.querySelector('.user-center');
  var title = box.querySelector('.title');
  // var title = document.querySelector('.title');
  var panel = box.querySelector('.panel');
  // var panel = document.querySelector('.user-center .panel');


  title.addEventListener('click', function() {
    console.log('hello');

    if (box.classList.contains('active')) {
      box.classList.remove('active');
    } else {
      box.classList.add('active');
    }
  });
}

initUserCenter();