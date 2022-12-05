import filterList from "./filterbyCategory.js";

const handleFilter = (value) =>{
  let filteredList = filterList(value);
  return filteredList;
};

export default handleFilter ;