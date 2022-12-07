import myRequest from "./request.js";
import calculatePages from "../pagination/calculatepages.js";
import showCard from "../cardContainer/showCard.js";
import { containerCards } from "../../utils/domElements.js";
import {principalNews} from "../../utils/domElements.js";
import cleanNode from "../../utils/clean.js";

const filterList = async (value) => {

    let listPosts = await myRequest();
    let filteredPosts = listPosts.filter ((post)=>{
        return post.tags === value;
    });
    console.log(filteredPosts);
    calculatePages(filteredPosts);
    cleanNode(containerCards);
    showCard(filteredPosts.slice(3,13),containerCards) ;
    cleanNode(principalNews);
    showCard(filteredPosts.slice(0,3),principalNews) ;


   
    return filteredPosts;
    
};

export default filterList;