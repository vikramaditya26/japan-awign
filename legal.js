/* Language + theme handling for the standalone privacy / terms pages. */

(function () {
  "use strict";

  var RIGHTS = {
    ja: "© 2026 Awign AI Operations. マイナビグループ. All rights reserved.",
    en: "© 2026 Awign AI Operations. Part of the Mynavi Group. All rights reserved.",
  };

  function apply(l) {
    document.documentElement.lang = l;
    try { sessionStorage.setItem("awign_lang", l); } catch (e) {}

    document.querySelectorAll("[data-lang]").forEach(function (el) {
      el.classList.toggle("on", el.getAttribute("data-lang") === l);
    });

    Object.keys(RIGHTS).forEach(function (k) {
      document.getElementById("l-" + k).classList.toggle("on", k === l);
    });

    var rights = document.querySelector("[data-legal-rights]");
    if (rights) rights.textContent = RIGHTS[l];
  }

  window.setLang = apply;

  window.toggleTheme = function () {
    var root = document.documentElement;
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.classList.add("theming");
    root.setAttribute("data-theme", next);
    localStorage.setItem("awign_theme", next);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        root.classList.remove("theming");
      });
    });
  };

  // Japanese unless the visitor already picked another language.
  var saved = null;
  try { saved = sessionStorage.getItem("awign_lang"); } catch (e) {}
  apply(RIGHTS[saved] ? saved : "ja");
})();
