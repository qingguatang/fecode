var menu = document.querySelector('.menu');

var li = menu.querySelector('li');
var lis = menu.querySelectorAll('li');

console.log(li);
console.log(lis);

console.log(lis[0]);
console.log(lis[4]);

console.log(lis.length);

for (var i = 0; i < lis.length; i++) {
  console.log(lis[i].innerHTML);
  lis[i].innerHTML = lis[i].innerHTML + ' ' + i;
}