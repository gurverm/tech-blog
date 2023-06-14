const signupForm = document.querySelector('#signup-form');

async function signup(e) {
  e.preventDefault();

  const loginCredentials = {
    username: document.querySelector('#signup-name').value.trim(),
    login: document.querySelector('#signup-name').value.trim(),
    password: document.querySelector('#signup-pass').value.trim(),
  };

  try {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(loginCredentials),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      //   Sign in automatically after signing up
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify(loginCredentials),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      }
    } else {
      alert(
        'This user exists! Try again with another username'
      );
    }
  } catch (err) {
    console.error(err);
  }
}

signupForm.addEventListener('submit', signup);