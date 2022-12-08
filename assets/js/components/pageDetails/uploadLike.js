/*const uploadLike = () => {
const fieldAuthor = document.getElementById("newCommentAuthor");
const fieldBody = document.getElementById("newCommentInput");
//const fieldDate = document.getElementById("commentDate");

const sendComment = async (id) => {
  //e.preventDefault();
  const updateComment = {
      id: id,
      coments: {
      authorComment: fieldAuthor.value,
      bodyComment: fieldBody.value,
      dateComment: "21/09/21",
    }
  };
  console.log(updateComment);

  const response = await fetch("http://localhost:3000/coments", {
  method: "POST",
  body: JSON.stringify(updateComment),
   headers: {
    "Content-Type": 'application/json'
  },  
});
}

export default sendComment;
};

export default uploadLike */
