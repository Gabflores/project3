import assignEvent from "./components/categoryFilters/assignEvent.js";
import { arryfilters } from "./components/categoryFilters/getFilters.js";
import searchPost from "./components/search/search.js";
import { queryPost } from "./utils/domElements.js";

assignEvent(arryfilters);

const debounce = (fn, delay) => {
  let timeoutID;
  return function () {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      fn();
    }, delay);
  };
};

queryPost.addEventListener(
  "keyup",
  debounce((e) => {
    searchPost();
  }, 2000)
);
