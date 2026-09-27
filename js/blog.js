document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".read-more").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      showToast("Full blog article feature can be added as another page.");
    });
  });
});
