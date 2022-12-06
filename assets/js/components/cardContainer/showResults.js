import createCard from "../card/createCard.js";
import handleCard from "../card/handleCard.js";

export const showResults = (pagelist) => {
    pagelist.map(element => {
      const titlePost = element.title;
      const subtitlePost = element.subtitle;
      const bodyPost = element.body;
      const authorPost = element.author;
      const datePost = element.dateCreation;
      const likesPost = element.likes;
      const tagsPost = element.tags;
      const imageUrlPost = element.imageUrl;

     let newcard = createCard(titlePost, subtitlePost, bodyPost, authorPost,datePost,likesPost,tagsPost,imageUrlPost);
      newcard.onclick = () => handleCard (element.id);

    })
  };

  export default showResults;