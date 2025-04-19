const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm.email.value.trim();
  const password = loginForm.password.value;

  if (!email || !password) {
    loginMessage.textContent = 'Email and password are required.';
    loginMessage.style.color = 'red';
    return;
  }

  // Redirect based on email domain
  if (email.endsWith('.seller')) {
    window.location.href = 'lessor.html'; // Seller page
  } else {
    window.location.href = 'home.html'; // Normal user page
  }
});
