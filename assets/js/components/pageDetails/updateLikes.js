let myState= false;
const heartLikes = document.getElementById("buttonLikes");

const updateLike = () =>{
    myState =! myState;
    const numLikes = document.getElementById("numberLikes");
    
    let myLikes = parseInt(numLikes.textContent);
    // myState ? heartLikes.setAttribute("class","active");
    const currentLikes= myState  ?  myLikes+1 : myLikes-1;
    numLikes.removeChild(numLikes.firstChild);
    numLikes.append(currentLikes);
};

export default updateLike;