import {postsData} from "../../../data.js";
import calculatePages from "../pagination/calculatepages.js";
const filterList = (value) => {
    let filteredPosts = postsData.filter ((post)=>{
        return post.tags === value;
    });
    console.log(filteredPosts);
    calculatePages(filteredPosts);
    
    return filteredPosts;
    
};

export default filterList;