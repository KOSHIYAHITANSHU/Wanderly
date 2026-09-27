function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setError(id, message) {
  const element = document.getElementById(id);
  if (element) element.textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(element => {
    element.textContent = "";
  });
}
