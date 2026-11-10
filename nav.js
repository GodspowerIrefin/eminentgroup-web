document.querySelectorAll('.nav-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var nav = document.getElementById('mainNav');
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});

document.querySelectorAll('#mainNav a').forEach(function (a) {
  a.addEventListener('click', function () {
    var nav = document.getElementById('mainNav');
    nav.classList.remove('open');
    document.querySelectorAll('.nav-toggle').forEach(function (btn) {
      btn.setAttribute('aria-expanded', 'false');
    });
  });
});
