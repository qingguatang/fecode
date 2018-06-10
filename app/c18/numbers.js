(function() {

  var reCalc = /^=(\w+)\(([^)]+)\)/;
  var app = document.querySelector('.numbers');
  var thBox = app.querySelector('thead tr');
  var trBox = app.querySelector('tbody');

  init();

  art.on(app, 'input.text', 'focusout', function() {
    var input = this;
    var value = input.value.trim();
    var td = art.closest(input, '.cell');
    art.remove(input);
    td.dataset.value = value;
    renderTd(td);

    Array.from(app.querySelectorAll('.calc')).forEach(renderTd);
  });

  function renderTd(td) {
    var value = td.dataset.value;
    var isCalc = reCalc.test(value);
    var text = isCalc ? getCalcText(value) : value;
    td.innerHTML = text;
    td.classList.remove('active');
    td.classList.toggle('num', isNum(text));
    td.classList.toggle('calc', isCalc);
  }

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

  art.on(app, '.add-col', 'click', function() {
    var col = getColNum();
    var th = document.createElement('th');
    th.innerHTML = numToChar(col);
    thBox.appendChild(th);
    var trs = Array.from(trBox.querySelectorAll('tr'));
    trs.forEach(function(tr) {
      var td = document.createElement('td');
      td.classList.add('cell');
      tr.appendChild(td);
    });
  });

  art.on(app, '.add-row', 'click', function() {
    var col = getColNum();
    var row = trBox.querySelectorAll('tr').length;
    renderRow(row + 1, col);
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
        return '<th>' + numToChar(index) + '</th>'
      }).join('');
    thBox.innerHTML = '<th></th>' + html;
  }


  function renderRow(title, column) {
    var html = range(column).map(getCellHtml).join('');
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>' + title + '</td>' + html;
    trBox.appendChild(tr);
  }


  function getCellHtml() {
    return '<td class="cell"></td>';
  }

  function getCalcText(value) {
    var match = reCalc.exec(value);
    return doCalc(match[1], match[2]);
  }

  function doCalc(name, expr) {
    var column = getColNum();
    var parts = expr.split(/\s*,\s*/);
    var list = Array.from(app.querySelectorAll('.cell')).map(function(cell) {
      return cell.dataset.value;
    });
    var values = [].concat.apply([], parts.map(function(part) {
      return getExprValue(list, part, column)
    }));
    var fn = Exprs[name];
    return fn ? fn(values) : '';
  }

  function getExprValue(list, expr, column) {
    var reRange = /^(\w+):(\w+)$/
    var match = reRange.exec(expr);
    return match ?
      getValues(list, getRangeIndices(textToIndex(match[1]), textToIndex(match[2])), column) :
      getValues(list, [textToIndex(expr)])
  }


  function getValues(list, indices, column) {
    return indices.map(function(index) {
      var pos = index[0] * column + index[1];
      return list[pos];
    });
  }

  function getRangeIndices(from, to) {
    var list = [];
    for (var i = from[0]; i <= to[0]; i++) {
      for (var j = from[1]; j <= to[1]; j++) {
        list.push([i, j]);
      }
    }
    return list;
  }

  function getColNum() {
    return app.querySelectorAll('thead th').length - 1;
  }

  function textToIndex(text) {
    var re = /^([A-Z])(\d+)$/;
    var match = re.exec(text);
    if (match) {
      return [
        parseInt(match[2], 10) - 1,
        match[1].charCodeAt(0) - 'A'.charCodeAt(0)
      ];
    }
    return false;
  }


  function isNum(text) {
    var re = /^\d+(\.\d+)?$/;
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


  function numToChar(num) {
    return String.fromCharCode('A'.charCodeAt(0) + num)
  }

  var Exprs = {
    sum: function(values) {
      values = filterNum(values);
      return sum(values);
    },

    mean: function(values) {
      values = filterNum(values);
      return values.length > 0 ? sum(values) / values.length : 0;
    }
  };

  function filterNum(list) {
    return list.filter(function(v) {
      return /^\d+(\.\d+)?$/.test(v);
    });
  }

  function sum(list) {
    return list.reduce(function(acc, v) {
      return acc + (parseFloat(v) || 0);
    }, 0)
  }
})();