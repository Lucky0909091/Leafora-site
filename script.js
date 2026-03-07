(// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const menuPanel = document.getElementById("menuPanel");

if (hamburger && menuPanel) {
  hamburger.addEventListener("click", () => {
    const isOpen = menuPanel.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when clicking link
  menuPanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuPanel.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  // Close when tapping outside
  document.addEventListener("click", (e) => {
    const clickInside = menuPanel.contains(e.target) || hamburger.contains(e.target);
    if (!clickInside) {
      menuPanel.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
}
