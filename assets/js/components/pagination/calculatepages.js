import createdivspages from "./createdivpages.js";

const calculatePages = (result) => {

    let numPages = "";
    (result.length % 10 ===0) ? (numPages =  Math.trunc(result.length/10)) : (numPages =  Math.trunc(result.length/10) + 1);
    createdivspages(result, numPages);
   console.log(result.length/10);
    console.log(numPages);
    return numPages
};

export default calculatePages;