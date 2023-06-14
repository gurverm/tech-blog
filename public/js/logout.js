const logoutBtn = document.querySelector('#logout-btn');

async function logout() {
  try {
    const response = await fetch('/api/user/logout', {
      method: 'POST',headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {document.location.replace('/login');}
  } catch (err) {
    console.error(err);
  }
}
logoutBtn.addEventListener('click', logout);