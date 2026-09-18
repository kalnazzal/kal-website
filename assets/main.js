/* KAL Construction and Services, Inc. — shared site script
   Mobile nav toggle and the footer year. Kept intentionally minimal: if
   this file fails to load, every nav link still works as a plain anchor
   and all page content remains visible. */
(function () {
  "use strict";

  var toggle = document.getElementById("navtoggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Keep the footer copyright year correct without needing a yearly edit.
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
