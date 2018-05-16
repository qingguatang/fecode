var art = (function() {

  var exports = {};


  exports.on = function(el, selector, event, fn) {
    el.addEventListener(event, function(e) {
      if (matches(el, e.target, selector)) {
        fn.apply(this, arguments);
      }
    });
  };

  return exports


  function matches(parent, el, selector) {
    while(el && el !== parent) {
      if (el.matches(selector)) {
        return true;
      }
      el = el.parentNode;
    }
    return false;
  }
})();