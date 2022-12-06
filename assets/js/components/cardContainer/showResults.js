import createCard from "../card/createCard.js";
import handleCard from "../card/handleCard.js";

export const showResults = (pagelist) => {
    pagelist.map(element => {
      const titleDetail = element.title;
      const subtitleDetail = element.subtitle;
      const bodyDetail = element.body;
      const authorDetail = element.author;
      const dateDetail = element.dateCreation;
      const likesDetail = element.likes;
      const tagsDetail = element.tags;
      const imageUrlDetail = element.imageUrl;

     let newcard = createCard(titleDetail, subtitleDetail, bodyDetail, authorDetail,dateDetail,likesDetail,tagsDetail,imageUrlDetail);
      newcard.onclick = () => handleCard (element.id);

    })
  };

  export default showResults;