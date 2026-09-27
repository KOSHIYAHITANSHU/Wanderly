function getWishlist() {
  return JSON.parse(localStorage.getItem("wanderlyWishlist") || "[]");
}

function saveWishlist(list) {
  localStorage.setItem("wanderlyWishlist", JSON.stringify(list));
  updateWishlistCount();
}

function updateWishlistCount() {
  const count = getWishlist().length;
  document.querySelectorAll("#wishCount").forEach(el => {
    el.textContent = count;
  });
}

function toggleWishlist(id) {
  const list = getWishlist();
  const index = list.indexOf(id);

  if (index === -1) {
    list.push(id);
    showToast("Added to your wishlist ❤️");
  } else {
    list.splice(index, 1);
    showToast("Removed from your wishlist");
  }

  saveWishlist(list);

  if (typeof renderDestinations === "function") renderDestinations();
  if (typeof renderWishlist === "function") renderWishlist();
  if (typeof renderDetails === "function") renderDetails();
}
