var myButton = document.querySelector('.my-button');
var myText = document.querySelector('.my-text');

myButton.addEventListener('click', function() {
  var value = myText.value.trim();
  if (!value) {
    alert('请输入内容');
    return;
  }
  console.log(value);

  var num = parseInt(value, 10);
  console.log(num);
  // if (!num) {
  if (isNaN(num)) {
    alert('请输入数字');
    return;
  }

});
