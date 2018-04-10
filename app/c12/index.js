var btn = document.querySelector('.red-packet .btn');

function onButtonClick() {
  var value = parseInt(btn.innerHTML, 10);
  var newValue = value + 1;
  btn.innerHTML = newValue;
}

btn.addEventListener('click', onButtonClick);