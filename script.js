/* Dark mode toggle. The saved choice is applied in <head> to avoid a flash. */
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");

  function label() {
    if (!btn) return;
    var dark = root.getAttribute("data-theme") === "dark";
    btn.setAttribute("aria-pressed", dark);
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }

  label();
  if (btn) {
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      label();
    });
  }
})();
