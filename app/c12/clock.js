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


refreshTime();
setInterval(refreshTime, 1000);


function setClockTime() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var hourPointer = document.querySelector('.clock .hour');
  var minutePointer = document.querySelector('.clock .minute');
  var secondPointer = document.querySelector('.clock .second');

  var hourDeg = hour * 30 - 90;
  var minuteDeg = minute * 6 - 90;
  var secondDeg = second * 6 - 90;

  hourPointer.style.transform = 'rotate('+hourDeg+'deg)';
  minutePointer.style.transform = 'rotate('+minuteDeg+'deg)';
  secondPointer.style.transform = 'rotate('+secondDeg+'deg)';
}

setClockTime();
setInterval(setClockTime, 1000);
