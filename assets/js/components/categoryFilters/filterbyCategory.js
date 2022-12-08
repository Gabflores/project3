import myRequest from "./request.js";
import calculatePages from "../pagination/calculatepages.js";
import showCard from "../cardContainer/showCard.js";
import { containerCards } from "../../utils/domElements.js";
import { principalNews } from "../../utils/domElements.js";
import cleanNode from "../../utils/clean.js";

const filterList = async (value) => {
  let listPosts = await myRequest();
  let filteredPosts = listPosts.filter((post) => {
    return post.tags === value;
  });
  calculatePages(filteredPosts);
  cleanNode(containerCards);
  showCard(filteredPosts.slice(3, 13), containerCards, "normal");
  cleanNode(principalNews);
  showCard(filteredPosts.slice(0, 3), principalNews, "principal");

  return filteredPosts;
};

export default filterList;
