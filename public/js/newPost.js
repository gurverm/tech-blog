const newPostForm = document.querySelector('#new-post-form');

async function publish(e) {
  e.preventDefault();

  const post = {
    title: document.querySelector('#post-title').value.trim(),
    body: document.querySelector('#post-body').value.trim(),
  };

  try {
    const response = await fetch('/api/post/', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    }
  } catch (err) {
    console.error(err);
  }
}

newPostForm.addEventListener('submit', publish);