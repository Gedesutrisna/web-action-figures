let loginForm = document.querySelector('.login-form');
let registerForm = document.querySelector('.register-form');

document.addEventListener("DOMContentLoaded", function(event) {
  let loginBtn = document.querySelector('#login-btn');
  if (loginBtn) {
    loginBtn.onclick = () => {
      loginForm.classList.toggle('active');
    };
  }

  let registerLink = document.querySelector('#register-link');
  if (registerLink) {
    registerLink.onclick = () => {
      registerForm.classList.toggle('active');
      loginForm.classList.remove('active');
    };
  }

  let loginLink = document.querySelector('#login-link');
  if (loginLink) {
    loginLink.onclick = () => {
      loginForm.classList.toggle('active');
      registerForm.classList.remove('active');
    };
  }
});

let logoutForm = document.querySelector('.logout-form');

document.addEventListener("DOMContentLoaded", function(event) {
  let usernameBtn = document.querySelector('#logout-btn');
  if (usernameBtn) {
    usernameBtn.onclick = () => {
      logoutForm.classList.toggle('active');
    };
  }
});

