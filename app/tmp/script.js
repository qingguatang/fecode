var colorInput = document.querySelector('.text-editor .color-input');
var bgColorInput = document.querySelector('.text-editor .bg-color-input');
var fontSizeSelect = document.querySelector('.text-editor .font-size-select');
var textInput = document.querySelector('.text-editor .text-input');
var addBtn = document.querySelector('.text-editor .add-btn');
var preview = document.querySelector('.text-editor .preview');

console.log(colorInput);
console.log(bgColorInput);
console.log(fontSizeSelect);
console.log(textInput);
console.log(addBtn); 
console.log(preview); 


function addText() {
  var color = colorInput.value;
  var bgColor = bgColorInput.value;
  var fontSize = fontSizeSelect.value;
  var text = textInput.value;
  console.log(color, bgColor, fontSize, text);

  var style = 'color:' + color + ';background:' +
      bgColor + ';font-size:' + fontSize + ';';
  var html = '<span style='+style+'>'+text+'</span>';
  preview.innerHTML = preview.innerHTML + html;
  textInput.value = '';
}

addBtn.addEventListener('click', addText);
