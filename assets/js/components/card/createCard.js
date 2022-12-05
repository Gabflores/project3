import { containerCards} from "../../utils/domElements.js";
//import {placeholderimage} from "../../../images/placeholderimage.png";

export default function createCard(
  titleResult,
  subtitleResult,
  bodyResult,
  authorResult,
  dateResult,
  likesResult,
  tagsResult,
  imgUrlResult,
) {
  const cardBox = document.createElement("div");
  cardBox.classList.add("cardscontainer-card");

  const containerAuthor = document.createElement("div");
  containerAuthor.classList.add("card-containerauthor");

  const authorCard = document.createElement("p");
  authorCard.classList.add("card-containerauthor__author");
  authorCard.append(authorResult);

  const titleCard = document.createElement("p");
  titleCard.classList.add("card__title");
  titleCard.append(titleResult);

  const subtitleCard = document.createElement("p");
  subtitleCard.classList.add("card__subtitle");
  subtitleCard.append(subtitleResult);

  const containerDate = document.createElement("div");
  containerDate.classList.add("card-containerdate");

  const dateCard = document.createElement("p");
  dateCard.classList.add("card-containerdate__date");
  dateCard.append(dateResult);

  const imgCard = document.createElement("img");
  imgCard.classList.add("card__img");
  imgCard.setAttribute("src",imgUrlResult);

  const containerInformation = document.createElement("div");
  containerInformation.classList.add("card-containerinformation");

  const containerText = document.createElement("div");
  containerText.classList.add("card-containertext");

  const containerLikes = document.createElement("div");
  containerLikes.classList.add("card-containerlikes");

  const likesCard = document.createElement("p");
  likesCard.classList.add("card-containerlikes__likes");
  likesCard.append(likesResult);

  const containerLearn = document.createElement("div");
  containerLearn.classList.add("card-containerlearn");

  const learnCard = document.createElement("a");
  learnCard.classList.add("card-containerLearn__learn");
  learnCard.append("LEARN MORE ->");
  //learnCard.setAttribute("href", urlResult);
  learnCard.setAttribute("target", "_blank");
  learnCard.setAttribute("rel", "noopener noreferrer");

  const containerTags = document.createElement("div");
  containerTags.classList.add("card-containertags");

  const tagsCard = document.createElement("p");
  tagsCard.classList.add("card-containertags_tags");
  tagsCard.append(tagsResult);

  cardBox.append(containerInformation);
  containerInformation.append(imgCard);
  containerInformation.append(containerText);
  containerText.append(containerDate);
  containerDate.append(dateCard);
  containerText.append(titleCard);
  containerText.append(subtitleCard);
  containerText.append(containerLearn);
  containerLearn.append(learnCard);
  containerInformation.append(containerLikes);
  containerLikes.append(likesCard);
  containerInformation.append(containerTags);
  containerTags.append(tagsCard);
  containerCards.append(cardBox);
}
