import assingHandlerComment from "./assignhandleComment.js";
import requestDetails from "./requestDetails.js";

const id = new URLSearchParams(window.location.search).get("id");

window.addEventListener("DOMContentLoaded", () =>
{ requestDetails(id);
  assingHandlerComment(id);
});


