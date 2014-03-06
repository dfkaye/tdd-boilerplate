// main boilerplate

;(function () {

  // node.js
  if (typeof module != "undefined") {
    module.exports = boilerplate;
  }
  // browser
  if (typeof window != "undefined") {
    !window.boilerplate && (window.boilerplate = boilerplate);
  }

  function boilerplate() {
    return 'boilerplate';
  }
}());