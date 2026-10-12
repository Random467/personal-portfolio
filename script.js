(function () {
  "use strict";

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  setupMobileNav();
  setupHeaderScroll();
  setupNavHighlight();
  setupNavClickClose();

  function setupMobileNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
      toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
    });
  }

  function setupNavClickClose() {
    const nav = document.getElementById("site-nav");
    const toggle = document.querySelector(".nav-toggle");
    if (!nav) return;

    nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        if (toggle) {
          toggle.setAttribute("aria-expanded", "false");
          toggle.setAttribute("aria-label", "Open menu");
        }
      });
    });
  }

  function setupHeaderScroll() {
    const header = document.getElementById("site-header");
    if (!header) return;

    const onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function setupNavHighlight() {
    const navLinks = document.querySelectorAll(".site-nav a[data-nav]");
    if (!navLinks.length) return;

    const sectionIds = ["skills", "experience", "projects"];
    const sections = sectionIds
      .map(function (id) {
        return document.getElementById(id);
      })
      .filter(Boolean);

    if (!sections.length) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle("is-active", link.getAttribute("data-nav") === id);
          });
        });
      },
      {
        root: null,
        rootMargin: "-" + (prefersReduced ? "0px" : "45%") + " 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
