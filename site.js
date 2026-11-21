(function () {
  var group = document.getElementById('animGroup');
  var fold = document.getElementById('foldBtn');
  if (group && fold) {
    fold.addEventListener('click', function () {
      var open = group.classList.toggle('open');
      fold.textContent = open ? '[-]' : '[+]';
      fold.setAttribute('aria-expanded', String(open));
    });
  }

  var sidebar = document.getElementById('sidebar');
  var mark = document.getElementById('mark');
  var mobile = window.matchMedia('(max-width: 820px)');
  function setMenu(open) {
    sidebar.classList.toggle('menu-open', open);
    if (mobile.matches) { mark.setAttribute('aria-expanded', String(open)); }
  }
  if (sidebar && mark) {
    mark.addEventListener('click', function (e) {
      if (!mobile.matches) { return; }
      e.preventDefault();
      setMenu(!sidebar.classList.contains('menu-open'));
    });
    sidebar.querySelectorAll('.nav a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
    mobile.addEventListener('change', function () { setMenu(false); mark.removeAttribute('aria-expanded'); });
  }

  document.querySelectorAll('video').forEach(function (v) {
    v.addEventListener('click', function () { if (v.paused) { v.play(); } else { v.pause(); } });
  });
})();
