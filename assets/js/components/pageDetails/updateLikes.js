let myState = false;
const heartLikes = document.getElementById("buttonLikes");

const updateLike = () => {
  myState = !myState;

  const numLikes = document.getElementById("numberLikes");

  let myLikes = parseInt(numLikes.textContent);
  const currentLikes = myState ? myLikes + 1 : myLikes - 1;
  numLikes.removeChild(numLikes.firstChild);
  numLikes.append(currentLikes);
  myState && heartLikes.classList.add("button-heart--filled");
};

export default updateLike;
