(() => {
  const hamburger = document.getElementById("hamburger");
  const menuPanel = document.getElementById("menuPanel");

  if (!hamburger || !menuPanel) return;

  const closeMenu = () => {
    menuPanel.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
  };

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = menuPanel.classList.toggle("show");
    hamburger.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (e) => {
    if (!menuPanel.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  menuPanel.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
})();

