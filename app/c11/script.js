// 1 

function addText() {
  var preview = document.querySelector('.text-editor .preview');

  var colorInput = document.querySelector('.text-editor .color-input');
  var color = colorInput.value;

  var bgColorInput = document.querySelector('.text-editor .bg-color-input');
  var bgColor = bgColorInput.value;

  var fontSizeSelect = document.querySelector('.text-editor .font-size-select');
  var fontSize = fontSizeSelect.value;

  var textInput = document.querySelector('.text-editor .text-input');
  var text = textInput.value;


  var boldCheckbox = document.querySelector('.text-editor .bold-checkbox');
  // var fontWeight = 'normal';
  // if (boldCheckbox.checked) {
  //   fontWeight = 'bold';
  // }

  var fontWeight = boldCheckbox.checked ? 'bold' : 'normal';

  var underlineCheckbox = document.querySelector('.text-editor .underline-checkbox');
  // var decorate = 'none';
  // if (underlineCheckbox.checked) {
  //   decorate = 'underline';
  // }

  var decorate = underlineCheckbox.checked ? 'underline' : 'none';

  var lastHtml = preview.innerHTML;
  preview.innerHTML = lastHtml + '<span style="color:' + color + 
      '; font-weight: ' + fontWeight + '; text-decoration: ' + decorate +
      '; background: '+bgColor+'; font-size: '+
      fontSize+'">'+text+'</span>';

  textInput.value = '';
}

// 2
var addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', addText);


function log() {
  console.log('a');
  console.log('b');
  console.log('c');
}

// log();
// log();
// log();

var addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', log);

// 1
function setTitleStyle() {
  var h1 = document.querySelector('h1');
  var colorInput = document.querySelector('.text-editor .color-input');
  var color = colorInput.value;
  h1.style.color = color; //'#f00';
}

// 2
// var colorInput = document.querySelector('.text-editor .color-input');
// colorInput.addEventListener('change', setTitleStyle);
