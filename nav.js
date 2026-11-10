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

var siteHeader = document.getElementById('siteHeader');
if (siteHeader) {
  var updateHeaderShadow = function () {
    siteHeader.classList.toggle('scrolled', window.scrollY > 8);
  };
  updateHeaderShadow();
  window.addEventListener('scroll', updateHeaderShadow, { passive: true });
}

var revealTargets = document.querySelectorAll('h2, .card, .pill');
revealTargets.forEach(function (el) { el.classList.add('reveal'); });
if ('IntersectionObserver' in window) {
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(function (el) { revealObserver.observe(el); });
} else {
  revealTargets.forEach(function (el) { el.classList.add('in'); });
}
