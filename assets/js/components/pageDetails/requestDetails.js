import showDetails from "./showDetails.js";
import showComents from "./sectionComents.js";

const requestDetails = async (id) => {
    const response = await fetch("http://localhost:3000/postsData/" + id);
    const post = await response.json();
  
    const titlePost = post.title;
    const subtitlePost = post.subtitle;
    const bodyPost = post.body;
    const authorPost = post.author;
    const datePost = post.dateCreation;
    const likesPost = post.likes;
    const tagsPost = post.tags;
    const imageUrlPost = post.imageUrl;
    const commentsPost = post.coments;
  
    console.log(likesPost);
  
    showDetails(
      titlePost,
      subtitlePost,
      bodyPost,
      authorPost,
      datePost,
      likesPost,
      tagsPost,
      imageUrlPost
    );
  
    console.log(commentsPost);
    showComents(commentsPost);
  };
  
  export default requestDetails;