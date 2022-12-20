let passwordInput = document.getElementById("password"),
  toggle = document.getElementById("btnToggle"),
  icon = document.getElementById("eyeIcon");

function togglePassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.add("fa-eye-slash");
    icon.classList.remove("fa-eye");
    console.log("show");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
    console.log("hide");
  }
}

function checkInput() {}

toggle.addEventListener("click", togglePassword, false);
passwordInput.addEventListener("keyup", checkInput, false);
