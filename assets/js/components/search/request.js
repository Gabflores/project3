import calculatePages from "../pagination/calculatepages.js";
import showCard from "../cardContainer/showCard.js";
import { containerCards } from "../../utils/domElements.js";
import { principalNews } from "../../utils/domElements.js";
import cleanNode from "../../utils/clean.js";

const makeRequest = (url, query) => {
  const myRequest = async () => {
    const request = await fetch(`${url}?${query}`);
    const result = await request.json();
    console.log(result);
    return result;
  };

  const logData = async () => {
    const data = await myRequest();
    console.log(data);
    calculatePages(data);
    cleanNode(containerCards);
    showCard(data.slice(3, 13), containerCards, "normal");
    cleanNode(principalNews);
    showCard(data.slice(0, 3), principalNews, "principal");
  };

  logData();
};
export default makeRequest;
