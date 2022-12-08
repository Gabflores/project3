import handleLike from "./handleLike.js";
const likes = document.getElementById("buttonLikes");

const assingHandlerLike = (id) => {
  likes.onclick = () => handleLike(id);
};

export default assingHandlerLike;
