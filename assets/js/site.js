(() => {
  const toggle = document.querySelector(".nav-toggle");
  const navigation = document.querySelector(".site-nav");

  const closeMenu = () => {
    if (!toggle || !navigation) return;
    toggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
    const label = toggle.querySelector(".sr-only");
    if (label) label.textContent = "메뉴 열기";
  };

  if (toggle && navigation) {
    toggle.addEventListener("click", () => {
      const shouldOpen = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(shouldOpen));
      navigation.classList.toggle("is-open", shouldOpen);
      const label = toggle.querySelector(".sr-only");
      if (label) label.textContent = shouldOpen ? "메뉴 닫기" : "메뉴 열기";
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 720) closeMenu();
    });
  }

  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/+$/, "") || "/";
    if (linkPath !== "/" && currentPath.startsWith(linkPath)) {
      link.setAttribute("aria-current", "page");
    }
  });

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
})();
