// Scroll reveals for the editorial sections (DESIGN-BRIEF.md, ANIMATION):
//  - [data-reveal="lines"]: a headline rises line by line from behind a mask (800ms, 110ms apart)
//  - [data-reveal="img"]:   a photograph fades in and settles from 1.08 to 1
//  - [data-reveal="up"]:    a block fades up 16px
//  - [data-draw]:           a line that draws itself as the section scrolls through the screen
// Only transform and opacity move. Under reduced motion, or without IntersectionObserver, nothing is
// hidden: the head script in app/layout.tsx only sets html.rv when motion is allowed, and its timer
// (html.rv-done) shows everything if this file never runs. The words themselves are never changed:
// headline words are wrapped in spans, their text left as it is.
(function () {
  var html = document.documentElement;
  if (!html.classList.contains("rv")) return;
  window.__rvReady = true;

  // wrap each word of a headline in a span, then group the words by line into masks
  function splitLines(el) {
    if (el.dataset.split) return;
    el.dataset.split = "1";
    var words = [];
    Array.prototype.slice.call(el.childNodes).forEach(function (node) {
      if (node.nodeType === 3) {
        var parts = node.textContent.split(/(\s+)/);
        var frag = document.createDocumentFragment();
        parts.forEach(function (p) {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
          var w = document.createElement("span");
          w.className = "rv-w";
          w.textContent = p;
          frag.appendChild(w);
          words.push(w);
        });
        node.parentNode.replaceChild(frag, node);
      } else if (node.nodeType === 1) {
        node.classList.add("rv-w");
        words.push(node);
      }
    });
    // group by the line each word sits on
    var lines = [];
    var lastTop = null;
    words.forEach(function (w) {
      var top = w.offsetTop;
      if (lastTop === null || Math.abs(top - lastTop) > 4) { lines.push([]); lastTop = top; }
      lines[lines.length - 1].push(w);
    });
    lines.forEach(function (line, i) {
      var mask = document.createElement("span");
      mask.className = "rv-line";
      var inner = document.createElement("span");
      inner.className = "rv-inner";
      inner.style.setProperty("--i", i);
      var first = line[0];
      first.parentNode.insertBefore(mask, first);
      mask.appendChild(inner);
      // move the line's words and the spaces between them into the mask
      var node = first;
      var last = line[line.length - 1];
      while (node) {
        var next = node.nextSibling;
        inner.appendChild(node);
        if (node === last) {
          if (next && next.nodeType === 3) inner.appendChild(next);
          break;
        }
        node = next;
      }
    });
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        if (el.dataset.reveal === "lines") splitLines(el);
        requestAnimationFrame(function () { el.classList.add("is-in"); });
        io.unobserve(el);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.01 }
  );
  // pages other than the home page carry no data-reveal: tag their headings, photographs and lists here
  var tag = function (sel, kind) {
    document.querySelectorAll("main " + sel).forEach(function (el) {
      if (el.hasAttribute("data-reveal") || el.closest("[data-reveal]")) return;
      el.setAttribute("data-reveal", kind);
    });
  };
  tag("h2", "lines");
  tag(".frame--photo:has(img)", "img");
  tag(".rows", "up");
  tag(".card", "up");
  tag("form", "up");
  document.querySelectorAll("[data-reveal]").forEach(function (el) { io.observe(el); });

  // the header gains a soft shadow once the page has scrolled
  var nav = document.querySelector("header.nav");
  if (nav) {
    var mark = function () { nav.classList.toggle("is-scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", mark, { passive: true });
    mark();
  }

  // lines that draw with the scroll: --draw goes 0 to 1 as the element crosses the screen
  var draws = Array.prototype.slice.call(document.querySelectorAll("[data-draw]"));
  if (draws.length) {
    var ticking = false;
    var update = function () {
      ticking = false;
      var vh = window.innerHeight;
      draws.forEach(function (el) {
        var r = el.getBoundingClientRect();
        var p = (vh * 0.85 - r.top) / (vh * 0.55);
        el.style.setProperty("--draw", Math.max(0, Math.min(1, p)).toFixed(3));
      });
    };
    var onScroll = function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }
})();
