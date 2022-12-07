import registerPost from "./registerPost.js";




window.addEventListener("DOMContentLoaded", () =>{
    const buttonRegister = document.getElementById("postRegister");
    console.log("hola,como");
    buttonRegister.onclick = () => registerPost();
});


