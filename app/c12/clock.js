var textClock = document.querySelector('.text-clock');


function refreshTime() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  // 如何转换成2位，不够前面加0。
  var time = hour + ':' + minute + ':' + second;
  textClock.innerHTML = time; //'20:20:00';
}


setInterval(refreshTime, 1000);