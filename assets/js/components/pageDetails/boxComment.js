const containerComents = document.getElementById("commentsContainer");

const createCardComment = (author, body, date) => {
  const commentCard = document.createElement("div");
  commentCard.classList.add("commentcontainer-commentCard");

  const authorComment = document.createElement("p");
  authorComment.classList.add("commentCard_author");
  authorComment.setAttribute("id","commentAuthor");
  authorComment.append(author);

  const bodyComment = document.createElement("p");
  bodyComment.classList.add("commentCard_body");
  bodyComment.setAttribute("id","commentBody");
  bodyComment.append(body);

  const dateComment = document.createElement("p");
  dateComment.classList.add("commentCard_date");
  dateComment.setAttribute("id","commentDate");
  dateComment.append(date);

  commentCard.append(authorComment);
  commentCard.append(bodyComment);
  commentCard.append(dateComment);
  containerComents.append(commentCard);
};

export default createCardComment;
