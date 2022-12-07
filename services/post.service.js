const getPost = async (id) => {
  let fullPost = await fetch(`http://localhost:3000/postsData/${id}`);

  fullPost = await fullPost.json();

  return fullPost;
};

const getPostComments = async (id) => {
  let fullPost = await fetch(`http://localhost:3000/postsData/${id}`);

  fullPost = await fullPost.json();

  return fullPost.coments;
};

export { getPost, getPostComments };
