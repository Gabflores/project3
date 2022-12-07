const fieldAuthor = document.getElementById("newCommentAuthor");
const fieldBody = document.getElementById("newCommentInput");
//const fieldDate = document.getElementById("commentDate");


const sendComment = async () => {
 //e.preventDefault();

 const comment = {
    author: fieldAuthor.value,
    body: fieldBody.value,
    date: "21/09/21",
 }

/*  await fetch('http://localhost:3000/postsData',{
 method: 'POST',lñ-
 body: JSON.stringify(comment)

 });

 let uri = 'http://localhost:3000/postsData';
 const request = await fetch(uri);
 const resultList = await request.json();
 */
console.log(comment);

};

export default sendComment;