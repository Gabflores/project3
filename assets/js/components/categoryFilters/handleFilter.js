import filteredList from "./filterbyCategory.js";

const handleFilter = (value) =>{

    console.log("soy el filtro "+value);
    filteredList(value);
};

export default handleFilter ;