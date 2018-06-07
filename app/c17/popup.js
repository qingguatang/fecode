(function() {
  var popup = document.querySelector('.popup');
  var handle = popup.querySelector('.handle');
  var panel = popup.querySelector('.panel');
  var timer;

  handle.addEventListener('mouseenter', function() {
    popup.classList.add('active');
  });

  popup.addEventListener('mouseleave', function() {
    timer = setTimeout(function() {
      popup.classList.remove('active');
    }, 1000);
    console.log(timer);
  });

  popup.addEventListener('mouseenter', function() {
    clearTimeout(timer)
  });
})();