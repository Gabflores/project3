import showDetails from "./showDetails.js";

const id = new URLSearchParams(window.location.search).get('id');

const requestDetails = async () => {
    const response = await fetch('http://localhost:3000/postsData/' + id);
    const post = await response.json();

    const titlePost = post.title;
    const subtitlePost = post.subtitle;
    const bodyPost = post.body;
    const authorPost = post.author;
    const datePost = post.dateCreation;
    const likesPost = post.likes;
    const tagsPost = post.tags;
    const imageUrlPost = post.imageUrl;

    console.log(likesPost);


    showDetails(titlePost,subtitlePost,bodyPost,authorPost,datePost,likesPost,tagsPost,imageUrlPost);
  }

window.addEventListener('DOMContentLoaded', () => requestDetails());

export default requestDetails;