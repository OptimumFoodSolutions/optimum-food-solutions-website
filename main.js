/* ============================================================
   Optimum Food Solutions — main.js
   Mobil-menu, scroll-reveal, aktiv nav-highlight, mailto-formular.
   ============================================================ */
(function () {
  "use strict";

  /* ---- Årstal i footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Mobil-menu toggle ---- */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");

  function closeMenu() {
    if (!nav || !toggle) return;
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Åbn menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Luk menu" : "Åbn menu");
    });
    // Luk når et menupunkt vælges (mobil)
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    // Luk ved Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---- Scroll-reveal via IntersectionObserver ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Aktiv nav-highlight efter sektion i viewport ---- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.main-nav a[href^="#"]:not(.btn)')
  );

  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.getAttribute("id");
          navLinks.forEach(function (link) {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === "#" + id
            );
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---- Kontaktformular -> mailto ---- */
  var form = document.getElementById("kontakt-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var navn = (document.getElementById("navn") || {}).value || "";
      var email = (document.getElementById("email") || {}).value || "";
      var virksomhed = (document.getElementById("virksomhed") || {}).value || "";
      var besked = (document.getElementById("besked") || {}).value || "";

      var subject = "Henvendelse fra " + (navn || "website") +
        (virksomhed ? " (" + virksomhed + ")" : "");
      var bodyLines = [
        "Navn: " + navn,
        "E-mail: " + email,
        "Virksomhed: " + virksomhed,
        "",
        besked
      ];
      var href =
        "mailto:info@optimumfoodsolutions.dk" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\r\n"));

      window.location.href = href;
    });
  }
})();
