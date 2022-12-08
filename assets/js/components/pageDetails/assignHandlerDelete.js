import handleDelet from "./handleDelete.js";

const buttonDelet = document.getElementById("deletePost");
const assingHandlerDelete = (id) => {
  buttonDelet.onclick = () => handleDelet(id);
};

export default assingHandlerDelete;
