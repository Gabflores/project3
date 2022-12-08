import createCardComment from "./boxComment.js";

const showComents = (comments) => {
  console.log(comments);
  comments.map((comment) => {
    const commentAuthor = comment.authorComment;
    const commentBody = comment.bodyComment;
    const commentDate = comment.dateComment;

    createCardComment(commentAuthor, commentBody, commentDate);
  });
};

export default showComents;
