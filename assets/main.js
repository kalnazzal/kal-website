/* KAL Construction and Services, Inc. — shared site script
   Mobile nav toggle and the footer year. Kept intentionally minimal: if
   this file fails to load, every nav link still works as a plain anchor
   and all page content remains visible. */
(function () {
  "use strict";

  var toggle = document.getElementById("navtoggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    function closeNav() {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function (e) {
      // Stop this click from immediately reaching the document listener
      // below, which would otherwise see it as an "outside click" and
      // close the menu the same instant it opens.
      e.stopPropagation();
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });

    // Clicking anywhere outside the open menu closes it.
    document.addEventListener("click", function (e) {
      if (!nav.classList.contains("open")) return;
      if (nav.contains(e.target)) return;
      closeNav();
    });

    // Escape closes it too, and returns focus to the toggle button.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        closeNav();
        toggle.focus();
      }
    });

    // If the window is resized past the point where the menu becomes an
    // inline row again, make sure it isn't left stuck open underneath it.
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1550 && nav.classList.contains("open")) {
        closeNav();
      }
    });
  }

  // Keep the footer copyright year correct without needing a yearly edit.
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
