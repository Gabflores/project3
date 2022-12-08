import deletePost from "./deletePost.js";

const handleDelet = (id) => {
  let confirmation = window.confirm("Are you sure?");
  if (confirmation) {
    deletePost(id);
  }
};

export default handleDelet;
