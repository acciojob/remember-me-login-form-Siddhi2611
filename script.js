//your JS code here. If required.
// Select elements
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// On page load, check if credentials exist in localStorage
window.onload = function () {
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (savedUser && savedPass) {
    existingBtn.style.display = "block"; // Show "Login as existing user"
  }
};

// Handle form submit
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const user = username.value.trim();
  const pass = password.value.trim();

  if (!user || !pass) {
    alert("Please enter username and password.");
    return;
  }

  alert(`Logged in as ${user}`);

  if (checkbox.checked) {
    // Save credentials
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    existingBtn.style.display = "block";
  } else {
    // Remove previously saved credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }
});

// Handle "Login as existing user"
existingBtn.addEventListener("click", function () {
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});
