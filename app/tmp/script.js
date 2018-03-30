function doYourWork() {
  var bgColor = 'rgb(' + red + ',' + blue + ',' + green + ')';

  var indicator = document.querySelector('.color-mixer .indicator');
  indicator.style.backgroundColor = bgColor;

  var label = document.querySelector('.color-mixer .label');
  label.innerHTML = bgColor;
}


// function doYourWork() {
//   var r = red.toString(16);
//   if (r.length == 1) {
//     r = '0' + r;
//   }
//   var g = green.toString(16);
//   if (g.length == 1) {
//     g = '0' + g;
//   }
//   var b = blue.toString(16);
//   if (b.length == 1) {
//     b = '0' + b;
//   }
//   var bgColor16 = '#' + r + g + b;
//   indicator.style.backgroundColor = bgColor16;
//   label.innerHTML = bgColor16;
// }