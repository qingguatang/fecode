// 1 

function addText() {
  var editor = document.querySelector('.text-editor');
  var preview = editor.querySelector('.preview');

  var colorInput = document.querySelector('.text-editor .color-input');
  var color = colorInput.value;

  var bgColorInput = document.querySelector('.text-editor .bg-color-input');
  var bgColor = bgColorInput.value;

  var fontSizeSelect = document.querySelector('.text-editor .font-size-select');
  var fontSize = fontSizeSelect.value;

  var textInput = document.querySelector('.text-editor .text-input');
  var text = textInput.value;

  var boldCheckbox = document.querySelector('.text-editor .bold-checkbox');
  console.log(boldCheckbox.checked);

  var fontWeight = 'normal';
  if (boldCheckbox.checked) {
    console.log('bold');
    fontWeight = 'bold';
  }

  var lastHtml = preview.innerHTML;
  preview.innerHTML = lastHtml + '<span style="color:' + color +
      '; font-weight: ' + fontWeight +
      '; background: '+bgColor+'; font-size: '+
      fontSize+'">'+text+'</span>';

  textInput.value = '';
}

// 2
var addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', addText);




// 其他例子
function log() {
  // console.log('a');
  // console.log('b');
  // console.log('c');
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
