const loginForm = document.querySelector('#login-form');

async function login(e) {
  e.preventDefault();

  const loginCredentials = {
    login: document.querySelector('#login-name').value.trim(),
    password: document.querySelector('#login-pass').value.trim(),
  };

  try {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify(loginCredentials),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Login failed. Please try again');
    }
  } catch (err) {
    console.error(err);
  }
}

loginForm.addEventListener('submit', login);