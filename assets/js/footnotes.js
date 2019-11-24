document.addEventListener('DOMContentLoaded', function () {
  var sups = document.querySelectorAll('.post-content sup');
  sups.forEach(function (sup, i) {
    var content = sup.innerHTML;
    sup.innerHTML = '[' + (i + 1) + ']';
    sup.style.cursor = 'pointer'
    tippy(sup, {
      content: content,
      animation: 'perspective',
      theme: 'light-border',
      interactive: true,
    });
  });
});
