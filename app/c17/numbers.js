(function() {

  var reCalc = /^=(\w+)\(([^)]+)\)/;
  var app = document.querySelector('.numbers');

  init();

  art.on(app, 'input.text', 'focusout', function() {
    var input = this;
    var value = input.value.trim();
    var td = art.closest(input, '.cell');
    art.remove(input);
    td.dataset.value = value;
    td.innerHTML = getText(value);
    td.classList.remove('active');
    td.classList.toggle('num', isNum(value));
  });

  art.on(app, '.cell', 'click', function() {
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


  function init() {
    var column = 8;
    var row = 8;
    renderHeader(column);
    times(row, function(index) {
      renderRow(index + 1, column);
    });
  }

  function renderHeader(column) {
    var html = range(column)
      .map(function(index) {
        var v = String.fromCharCode('A'.charCodeAt(0) + index)
        return '<th>' + v + '</th>'
      }).join('');
    app.querySelector('table thead tr').innerHTML = '<th></th>' + html;
  }


  function renderRow(title, column) {
    var html = range(column)
      .map(function(index) {
        return '<td class="cell"></td>'
      }).join('');
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>' + title + '</td>' + html;
    app.querySelector('table tbody').appendChild(tr);
  }


  function getText(value) {
    var match = reCalc.exec(value);
    return match ? doCalc(match[1], match[2]) : value;
  }


  function doCalc(name, expr) {
    var parts = expr.split(/\s*,\s*/);
    console.log(parts);
    return '';
  }


  function isNum(text) {
    var re = /^\d+$/;
    return re.test(text);
  }

  function range(n) {
    var list = [];
    for (var i = 0; i < n; i++) {
      list.push(i) ;
    }
    return list;
  }

  function times(n, fn) {
    for (var i = 0; i < n; i++) {
      fn(i);
    }
  }
})();