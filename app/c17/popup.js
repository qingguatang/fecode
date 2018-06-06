(function() {
  var popup = document.querySelector('.popup');
  var handle = popup.querySelector('.handle');
  var panel = popup.querySelector('.panel');

  handle.addEventListener('click', function() {
    popup.classList.toggle('active');
  });

  document.addEventListener('click', function() {
    popup.classList.remove('active');
  });

  popup.addEventListener('click', function(e) {
    e.stopPropagation();
  })
})();