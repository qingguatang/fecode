var progress = document.querySelector('.red-packet .progress .bar');
var btn = document.querySelector('.red-packet .btn');


function onButtonClick() {
  // update();
  update2(1);
}

btn.addEventListener('click', onButtonClick);


function countDown() {
  // update('down');
  update2(-1);
}

setInterval(countDown, 1000);


function update(type) {
  console.log('hello');
  var value = parseInt(btn.innerHTML, 10);
  var newValue = value + 1;
  if (type == 'down') {
    newValue = value - 1;
  }
  btn.innerHTML = newValue;

  progress.style.width = newValue + '%'; 
}

function update2(diff) {
  console.log('hello');
  var value = parseInt(btn.innerHTML, 10);
  var newValue = value + diff;
  if (newValue < 0 || newValue >= 100) {
    newValue = 0;
  }
  btn.innerHTML = newValue;
  progress.style.width = newValue + '%'; 
}