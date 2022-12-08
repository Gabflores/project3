const deletePost = async (id) => {
  await fetch(`http://localhost:3000/postsData/${id}`, {
    method: "DELETE",
  });
};

export default deletePost;
