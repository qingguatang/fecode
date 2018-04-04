console.log('hello');

var preview = document.querySelector('.text-editor .preview');

console.log(preview);

var color = '#ffffff';
var bgColor = '#0000ff';
var fontSize = '28px';
var text = '这是一段富文本';
// font-size

preview.innerHTML = '<span style="color:' + color + 
    '; background: '+bgColor+'; font-size: '+
    fontSize+'">'+text+'</span>';


    //ES6