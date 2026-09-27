document.addEventListener("DOMContentLoaded", () => {

  // SIGNUP VALIDATION
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      clearErrors();

      const name = document.getElementById("signupName").value.trim();
      const email = document.getElementById("signupEmail").value.trim();
      const password = document.getElementById("signupPassword").value;
      const confirm = document.getElementById("signupConfirm").value;

      let valid = true;

      if (name.length < 2) {
        setError("signupNameError", "Please enter your name.");
        valid = false;
      }

      if (!validEmail(email)) {
        setError("signupEmailError", "Enter a valid email address.");
        valid = false;
      }

      if (password.length < 6) {
        setError(
          "signupPasswordError",
          "Password must contain at least 6 characters."
        );
        valid = false;
      }

      if (password !== confirm) {
        setError(
          "signupConfirmError",
          "Passwords do not match."
        );
        valid = false;
      }

      if (!valid) return;

      // Frontend demo account using Local Storage
      localStorage.setItem(
        "wanderlyUser",
        JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      );

      const message = document.getElementById("signupMessage");
      message.textContent = "Account created successfully! Redirecting...";
      message.className = "form-message success";

      setTimeout(() => {
        location.href = "login.html";
      }, 900);
    });
  }

  // LOGIN VALIDATION
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      clearErrors();

      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;

      let valid = true;

      if (!validEmail(email)) {
        setError("loginEmailError", "Enter a valid email address.");
        valid = false;
      }

      if (!password) {
        setError("loginPasswordError", "Password is required.");
        valid = false;
      }

      if (!valid) return;

      const user = JSON.parse(
        localStorage.getItem("wanderlyUser") || "null"
      );

      const message = document.getElementById("loginMessage");

      if (
        user &&
        user.email === email &&
        user.password === password
      ) {
        localStorage.setItem("wanderlyLoggedIn", "true");

        message.textContent = `Welcome back, ${user.name}!`;
        message.className = "form-message success";

        setTimeout(() => {
          location.href = "index.html";
        }, 900);
      } else {
        message.textContent =
          "Demo login: create an account first or check your details.";
        message.className = "form-message fail";
      }
    });
  }
});
