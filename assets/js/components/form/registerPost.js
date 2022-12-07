const fieldTitle = document.getElementById("postTitle");
const fieldSubtitle = document.getElementById("postSubtitle");
const fieldBody=document.getElementById("postBody");
const fieldAuthor=document.getElementById("postAuthor");
const fieldTags=document.getElementById("postTags");
const fieldImage=document.getElementById("postImage");

const registerPost = async () => {

    const newPost = {
        title: fieldTitle.value,
        subtitle: fieldSubtitle.value,
        body: fieldBody.value,
        author: fieldAuthor.value,
        dateCreation: "2022-12-25",
        likes: 0,
        tags: fieldTags.value,
        imageUrl: fieldImage.value,
             
      }
    ;

    console.log(newPost);
  
    const response = await fetch("http://localhost:3000/postsData", {
    method: "POST",
    body: JSON.stringify(newPost),
     headers: {
      "Content-Type": 'application/json'
    },  
  });
  }
  
  export default registerPost;
  