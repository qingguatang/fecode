(function() {

  var app = document.querySelector('.numbers');

  art.on(app, 'input.text', 'focusout', function() {
    var input = this;
    var value = input.value.trim();
    var td = art.closest(input, 'td');
    art.remove(input);
    td.dataset.value = value;
    td.innerHTML = getText(value);
    td.classList.remove('active');
  });

  art.on(app, 'td', 'click', function() {
    var td = this;
    var input = document.createElement('input');
    input.classList.add('text');
    input.setAttribute('type', 'text');
    input.value = td.dataset.value || '';
    td.innerHTML = '';
    td.classList.add('active');
    td.appendChild(input);
    input.focus();
  });


  var reCalc = /^=(\w+)\(([^)]+)\)/

  function getText(value) {
    var match = reCalc.exec(value);
    return match ? doCalc(match[1], match[2]) : value;
  }


  function doCalc(name, expr) {
    var parts = expr.split(/\s*,\s*/);
    console.log(parts);
    return '';
  }

})();