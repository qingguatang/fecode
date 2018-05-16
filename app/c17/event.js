var elms = Array.from(document.querySelectorAll('*'));
elms.push(window, document);

elms.forEach(function(elm) {
  elm.addEventListener('click', function(e) {
    console.log('capture', e.currentTarget);
  }, true);

  elm.addEventListener('click', function(e) {
    console.log('bubble', e.currentTarget);
  }, false);
});


// var three = document.querySelector('.three');
// three.addEventListener('click', function(e) {
//   e.stopPropagation();
// }, true);