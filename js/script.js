document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeButton = document.getElementById("themeToggle");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  // Load saved Light/Dark mode from Local Storage
  const savedTheme = localStorage.getItem("wanderlyTheme") || "light";

  if (savedTheme === "dark") {
    body.classList.add("dark");
  }

  updateThemeButton();

  // Dark/Light mode
  if (themeButton) {
    themeButton.addEventListener("click", () => {
      body.classList.toggle("dark");

      localStorage.setItem(
        "wanderlyTheme",
        body.classList.contains("dark") ? "dark" : "light"
      );

      updateThemeButton();
    });
  }

  // Mobile navigation
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  updateWishlistCount();
});

function updateThemeButton() {
  const button = document.getElementById("themeToggle");

  if (button) {
    button.textContent = document.body.classList.contains("dark")
      ? "☀️"
      : "🌙";
  }
}

function showToast(message) {
  const oldToast = document.querySelector(".toast");

  if (oldToast) {
    oldToast.remove();
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2200);
}
