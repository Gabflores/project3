import {postsData} from "../../../data.js";

const filteredList = (value) => {
    let filteredPosts = postsData.filter ((post)=>{
        return post.tags === value;
    });
    console.log(filteredPosts);
    return filteredPosts;
};

export default filteredList;