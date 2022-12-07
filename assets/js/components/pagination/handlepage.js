import { containerCards } from "../../utils/domElements.js";
import cleanNode from "../../utils/clean.js";
import showCard from "../cardContainer/showCard.js";

const handlepage = (data, index) => {
  console.log(data);
  cleanNode(containerCards);
  console.log("momo");
  showCard(data.slice(index * 10 + 3, index * 10 + 13), containerCards);
  console.log("index" + index);

  window.scrollTo({
    top: 350,
    behavior: "auto",
  });
};

export default handlepage;
