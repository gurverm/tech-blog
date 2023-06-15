const newCommentBtn = document.querySelector('#new-comment-btn');
const newCommentForm = document.querySelector('#new-comment-form');
const editBtnGroup = document.querySelector('#edit-btn-group');
const editPostBtn = document.querySelector('#edit-post-btn');
const editPostForm = document.querySelector('#edit-post-form');
const deletePostBtn = document.querySelector('#delete-post-btn');
const commentsContainer = document.querySelector('#comments-container');
const currentPost = document
  .querySelector('#post')
  .getAttribute('data-post-id');

async function publishComment(e) {
  e.preventDefault();

  const comment = {
    body: document.querySelector('#comment-body').value.trim(),
    postId: currentPost,
  };

  try {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.reload();
    }
  } catch (err) {
    console.error(err);
  }
}

async function editPost(e) {
  e.preventDefault();

  const newPost = {
    title: document.querySelector('#edit-post-title').value.trim(),
    body: document.querySelector('#edit-post-body').value.trim(),
  };

  const response = await fetch(`/api/post/${currentPost}`, {
    method: 'PUT',
    body: JSON.stringify(newPost),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    window.location.reload();
  }
}

async function deletePost() {
  const response = await fetch(`/api/post/${currentPost}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  }
}

newCommentBtn.addEventListener('click', () => {
  newCommentForm.classList.remove('d-none');
  newCommentBtn.classList.add('d-none');
  newCommentForm.addEventListener('submit', publishComment);
});

if (editPostBtn) {
  editPostBtn.addEventListener('click', () => {
    editBtnGroup.classList.add('d-none');
    editPostForm.classList.remove('d-none');
    commentsContainer.classList.add('d-none');
    editPostForm.addEventListener('submit', editPost);
  });
  deletePostBtn.addEventListener('click', deletePost);
}