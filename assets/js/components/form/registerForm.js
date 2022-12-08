import registerPost from "./registerPost.js";

window.addEventListener("DOMContentLoaded", () => {
  const buttonRegister = document.getElementById("postRegister");
  buttonRegister.onclick = () => registerPost();
});
