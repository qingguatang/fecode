var btn = document.querySelector('.red-packet .btn');
var progress = document.querySelector('.red-packet .progress .value');


// function onButtonClick() {
//   var value = parseInt(btn.innerHTML, 10);
//   var newValue = value + 1;

//   if (newValue > 100) {
//     alert('Success!');
//     newValue = 0;
//   }

//   btn.innerHTML = newValue;
//   progress.style.width = newValue + '%';
// }


btn.addEventListener('click', function() {
  var value = parseInt(btn.innerHTML, 10);
  var newValue = value + 1;

  if (newValue > 100) {
    alert('Yeah!');
    newValue = 0;
  }

  btn.innerHTML = newValue;
  progress.style.width = newValue + '%';
});


function onTimeInterval() {
  var value = parseInt(btn.innerHTML, 10);
  var newValue = value - 1;
  if (newValue >= 0) {
    btn.innerHTML = newValue;
    progress.style.width = newValue + '%';

    if (newValue == 0) {
      setTimeout(function() {
        alert('Oh!');
      }, 0);
    }
  }
}

setInterval(onTimeInterval, 500);