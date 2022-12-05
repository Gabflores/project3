
import { containerCards } from "../../utils/domElements.js";
import cleanNode from "../../utils/clean.js";
import showResults from "../cardContainer/showResults.js";


const handlepage = (data,index) =>{
    console.log(data);
    cleanNode(containerCards);
    showResults(data.slice((index)*10,(index)*10 +10)) ;
    console.log(index);
}

export default handlepage;
