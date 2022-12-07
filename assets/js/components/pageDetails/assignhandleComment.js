import handleComment from "./handleComment.js";

const button = document.getElementById("buttonComment");

const assingHandlerComment = (id) => {
    button.onclick = () => handleComment(id);
  };


export default assingHandlerComment;

