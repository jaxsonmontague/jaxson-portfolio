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
  var menu = document.getElementById('menuToggle');
  if (sidebar && menu) {
    menu.addEventListener('click', function () {
      var open = sidebar.classList.toggle('menu-open');
      menu.textContent = open ? 'close' : 'menu';
      menu.setAttribute('aria-expanded', String(open));
    });
    sidebar.querySelectorAll('.nav a').forEach(function (a) {
      a.addEventListener('click', function () {
        sidebar.classList.remove('menu-open');
        menu.textContent = 'menu';
        menu.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('video').forEach(function (v) {
    v.addEventListener('click', function () { if (v.paused) { v.play(); } else { v.pause(); } });
  });
})();
