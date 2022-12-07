import createCard from "../card/createCard.js";
import createPrincipalCard from "../card/createPrincipalCard.js";
import handleCard from "../card/handleCard.js";
//import { containerCards} from "../../utils/domElements.js";
//import {principalNews} from "../../utils/domElements.js";

export const showCard = (pagelist, container, cardType) => {
  pagelist.map((element) => {
    const titleDetail = element.title;
    const subtitleDetail = element.subtitle;
    const bodyDetail = element.body;
    const authorDetail = element.author;
    const dateDetail = element.dateCreation;
    const likesDetail = element.likes;
    const tagsDetail = element.tags;
    const imageUrlDetail = element.imageUrl;

    let newCard;
    if (cardType === "principal") {
      newCard = createPrincipalCard(
        titleDetail,
        subtitleDetail,
        bodyDetail,
        authorDetail,
        dateDetail,
        likesDetail,
        tagsDetail,
        imageUrlDetail,
        container
      );
    } else {
      newCard = createCard(
        titleDetail,
        subtitleDetail,
        bodyDetail,
        authorDetail,
        dateDetail,
        likesDetail,
        tagsDetail,
        imageUrlDetail,
        container
      );
    }

    console.log("newcard");
    container.append(newCard);

    newCard.onclick = () => handleCard(element.id);
  });
};

export default showCard;
