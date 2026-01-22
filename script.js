// script.js
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    alert(`Welcome, ${username}!`);
    // Redirect or validate
  } else {
    alert("Please enter both username and password.");
  }
}

// Password toggle
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";

  togglePassword.classList.toggle("fa-eye-slash");
  togglePassword.classList.toggle("fa-eye");

  // Dinamic aria-label
  togglePassword.setAttribute("aria-label", isPassword ? "Show password" : "Hide password");

});

