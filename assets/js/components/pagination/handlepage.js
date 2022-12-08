import { containerCards } from "../../utils/domElements.js";
import cleanNode from "../../utils/clean.js";
import showCard from "../cardContainer/showCard.js";

const handlepage = (data, index) => {
  cleanNode(containerCards);

  showCard(data.slice(index * 10 + 3, index * 10 + 13), containerCards);

  window.scrollTo({
    top: 2000,
    behavior: "auto",
  });
};

export default handlepage;
