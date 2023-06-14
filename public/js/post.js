const posts = document.querySelectorAll('.post-card');

posts.forEach((post) => {
  post.addEventListener('click', (e) => {
    const clickedPost = e.target.closest('.post-card');
    if (clickedPost) {
      const postId = clickedPost.getAttribute('data-post-id');
      location.replace(`/post/${postId}`);
    }
  });
});