var art = (function() {

  var exports = {};


  exports.on = function(el, selector, event, fn) {
    el.addEventListener(event, function(e) {
      if (childMatch(el, e.target, selector)) {
        fn.apply(e.target, arguments);
      }
    });
  };

  exports.closest = function(el, selector) {
    while (el) {
      if (matches(el, selector)) {
        return el;
      }
      el = el.parentNode;
    }
    return null;
  };


  exports.remove = function(el) {
    el.parentNode.removeChild(el);
  }

  return exports


  function childMatch(parent, el, selector) {
    while (el && el !== parent) {
      if (matches(el, selector)) {
        return true;
      }
      el = el.parentNode;
    }
    return false;
  }


  function matches(el, selector) {
    return typeof el.matches === 'function' && el.matches(selector);
  }
})();