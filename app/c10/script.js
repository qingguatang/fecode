
function doYourWork() {

// alert('hello world');

var label = document.querySelector('.color-mixer .label');

// var red = 176;
// var green = 36;
// var blue = 115;

// label.innerHTML = 'rgb(76,36,152)';
var color ='rgb(' + red + ',' + green + ',' + blue + ')'; 
label.innerHTML = color;

var a = document.querySelector('h2');
a.innerHTML = '我要修改下标题';

var message = 'aaabbb';

// alert(message);

var indicator = document.querySelector('.color-mixer .indicator');

console.log(indicator);

indicator.style.backgroundColor = color; // 'rgb(' + red + ',' + green + ',' + blue + ')';
// background-color


label.style.fontSize = '20px';
label.style.fontWeight = 'bold';
// font-size

a.style.color = 'red';

}