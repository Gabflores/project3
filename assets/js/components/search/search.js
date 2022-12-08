import { queryPost } from "../../utils/domElements.js";
import { urlSearch } from "../variables.js";
import makeRequest from "./request.js";

const searchPost = () => {
  let paramQuery = "";
  queryPost.value !== ""
    ? (paramQuery = `&q=${queryPost.value}`)
    : (paramQuery = "");

  makeRequest(urlSearch, paramQuery);
};

export default searchPost;
