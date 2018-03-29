const el = document.querySelector('.color-mixer');
var indicator = el.querySelector('.indicator');
var label = el.querySelector('.label');

var red = 0;
var green = 0;
var blue = 0;

var redInput = el.querySelector('.red input');
var greenInput = el.querySelector('.green input');
var blueInput = el.querySelector('.blue input');

redInput.addEventListener('input', refresh);
greenInput.addEventListener('input', refresh);
blueInput.addEventListener('input', refresh);

function refresh() {
  red = parseInt(redInput.value, 10);
  green = parseInt(greenInput.value, 10);
  blue = parseInt(blueInput.value, 10);
  doYourWork();
}

window.onload = refresh;