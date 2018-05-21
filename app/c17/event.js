var elms = Array.from(document.querySelectorAll('*'));
console.log(elms);
elms.push(window, document);

for (var i = 0; i < elms.length; i++) {
  elms[i].addEventListener('click', eventHandler, true);
  elms[i].addEventListener('click', eventHandler2, false);
}

function eventHandler(e) {
  console.log('capture', e.currentTarget);
}

function eventHandler2(e) {
  console.log('bubble', e.currentTarget);
}