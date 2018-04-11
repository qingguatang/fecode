var progress = document.querySelector('.red-packet .progress .bar');
var btn = document.querySelector('.red-packet .btn');


function onButtonClick() {
  console.log('hello');
  var value = parseInt(btn.innerHTML, 10);
  var newValue = value + 1;
  btn.innerHTML = newValue;

  progress.style.width = newValue + '%';
}

btn.addEventListener('click', onButtonClick);


function countDown() {
  console.log('count down');
  var value = parseInt(btn.innerHTML, 10);
  var newValue = value - 1;
  btn.innerHTML = newValue;

  progress.style.width = newValue + '%';
}

setInterval(countDown, 1000);

