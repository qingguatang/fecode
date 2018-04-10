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
    alert('Success!');
    newValue = 0;
  }

  btn.innerHTML = newValue;
  progress.style.width = newValue + '%';
});