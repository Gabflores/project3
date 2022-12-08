import assingHandlerComment from "./assignhandleComment.js";
import requestDetails from "./requestDetails.js";
import assingHandlerLike from "./assignHandlerLike.js";
import assingHandlerDelete from "./assignHandlerDelete.js";

const id = new URLSearchParams(window.location.search).get("id");

window.addEventListener("DOMContentLoaded", () => {
  requestDetails(id);
  assingHandlerComment(id);
  assingHandlerLike(id);
  assingHandlerDelete(id);
});
