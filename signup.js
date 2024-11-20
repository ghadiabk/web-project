let loginText = document.querySelector(".title-text .login");
let loginForm = document.querySelector("form.login");
let loginBtn = document.querySelector("label.login");
let signupBtn = document.querySelector("label.signup");
let signupLink = document.querySelector("form .signup-link a");
    signupBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
  });
  loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  });
  signupLink.onclick = (()=>{
    signupBtn.click();
    return false;
  });

document.querySelector("form.signup").addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("signup-email").value.trim();
  let password = document.getElementById("signup-password").value.trim();
  let confirmPassword = document.getElementById("confirm-password").value.trim();
  if (password !== confirmPassword) {
  alert("Passwords do not match.");
    return;
  }
  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some(user => user.email === email)) {
    alert("Email already registered. Please log in.");
    return;
    }
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! Please log in.");
      loginBtn.click();
  });

document.querySelector("form.login").addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("login-email").value.trim();
  let password = document.getElementById("login-password").value.trim();
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    alert("Login successful! Welcome back.");
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password.");
  }
});