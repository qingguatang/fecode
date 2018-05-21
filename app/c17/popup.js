(function() {
  var popup = document.querySelector('.popup');
  var handle = popup.querySelector('.handle');
  var panel = popup.querySelector('.panel');


  handle.addEventListener('click', function() {
    popup.classList.toggle('active');
  });

})();