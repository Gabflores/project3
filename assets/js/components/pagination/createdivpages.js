import cleanNode from "../utils/clean.js";
import { containerPagination } from "../../utils/domElements.js";

const createdivspages = (result,numpages) => {
    
    cleanNode(containerPagination);
    
    for ( let i = 0 ; i< numpages; i++){
    
        const pagesDiv = document.createElement("div");
        pagesDiv.classList.add("pagesDiv__div");
        pagesDiv.append(i+1);
        containerPagination.append(pagesDiv); 
      //  pagesDiv.onclick = ()=>handlepage(result,i);
    }
}
export default createdivspages;