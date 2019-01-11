var delegate = (function() {

  function delegate(element, event, selector, fn) {
    element.addEventListener(event, function(e) {
      var el = closest(e.target, selector, element);
      if (el) {
        e.delegateTarget = el;
        fn(e);
      }
    });
  }

  function closest(element, selector, stop) {
    while (element && element !== stop) {
      if (element.matches(selector)) {
        return element;
      }
      element = element.parentNode;
    }
    return null;
  }

  return delegate;
})();
