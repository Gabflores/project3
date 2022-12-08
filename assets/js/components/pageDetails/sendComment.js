import { getPost, getPostComments } from "../../../../services/post.service.js";

const fieldAuthor = document.getElementById("newCommentAuthor");
const fieldBody = document.getElementById("newCommentInput");

const sendComment = async (id) => {
  const previousComments = await getPostComments(id);
  console.log(previousComments);
  const updatedComments = {
    coments: [
      ...previousComments,

      {
        authorComment: fieldAuthor.value,
        bodyComment: fieldBody.value,
        dateComment: "21/09/21",
      },
    ],
  };

  await fetch(`http://localhost:3000/postsData/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updatedComments),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default sendComment;
