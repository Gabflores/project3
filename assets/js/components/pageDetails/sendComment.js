const fieldAuthor = document.getElementById("newCommentAuthor");
const fieldBody = document.getElementById("newCommentInput");
//const fieldDate = document.getElementById("commentDate");

const sendComment = async (id) => {
  //e.preventDefault();

  const newcomment = {
    id: id,
    coments: {
      authorComment: fieldAuthor.value,
      bodyComment: fieldBody.value,
      dateComment: "21/09/21",
    },
  }

  console.log("nuevo comentario");

/* await fetch("http://localhost:3000/postsData", {
  headers: {
    "Content-Type": "application/json",
  },
  method: "POST",
  body: JSON.stringify(newcomment),
}); */
}

/*
 let uri = 'http://localhost:3000/postsData';
 const request = await fetch(uri);
 const resultList = await request.json();
 */
export default sendComment;
