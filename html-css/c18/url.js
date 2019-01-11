(function() {

  var app = document.querySelector('div.url-parser');
  var input = app.querySelector('.url-input');

  input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      var url = input.value.trim();
      if (!url) {
        return;
      }
      var info = parseUrl(url);
      console.log(info);
      renderUrlInfo(info);
    }
  });


  function parseUrl(url) {
    var re = /^([a-z]+:)\/\/([^:/]+)(?::(\d+))?(\/[^?]+)?(?:\?([^#]*))?(#.*)?$/;
    var match = re.exec(url) || [];
    return {
      protocal: match[1],
      hostname: match[2],
      port: match[3] || 80,
      path: match[4] || '',
      search: match[5] || '',
      hash: match[6] || ''
    }
  }

  function renderUrlInfo(info) {
    var box = app.querySelector('.info');
    var fields = ['protocal', 'hostname', 'port', 'path', 'search', 'hash'];
    fields.forEach(function(field) {
      var div = box.querySelector('.' + field + ' .value');
      div.innerHTML = info[field];
    });
  }

})();