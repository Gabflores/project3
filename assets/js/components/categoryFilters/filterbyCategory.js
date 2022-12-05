import myRequest from "./request.js";
import calculatePages from "../pagination/calculatepages.js";
const filterList = async (value) => {

    let listPosts = await myRequest();
    let filteredPosts = listPosts.filter ((post)=>{
        return post.tags === value;
    });
    console.log(filteredPosts);
    calculatePages(filteredPosts);
    
    return filteredPosts;
    
};

export default filterList;