const fieldAuthor = document.getElementById("newCommentAuthor");
const fieldBody = document.getElementById("newCommentInput");
//const fieldDate = document.getElementById("commentDate");

const sendComment = async (id) => {
  //e.preventDefault();
  const updatecomment = ({
      id: id,
    coments: {
      authorComment: fieldAuthor.value,
      bodyComment: fieldBody.value,
      dateComment: "21/09/21",
    }
  });
  console.log(updatecomment);

  const response = await fetch("http://localhost:3000/postsData", {
  method: "PUT",
  body: JSON.stringify(updatecomment),
   headers: {
    "Content-Type": 'application/json'
  },  
});
}

export default sendComment;
