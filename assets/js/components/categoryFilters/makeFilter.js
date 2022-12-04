import handleFilter  from "./handleFilter.js";


const makeFilter = (arryfilters) =>  {
    arryfilters.map ( filter => {
        const nameCategory = filter.id;
        console.log(nameCategory);
       filter.onclick = () => handleFilter (nameCategory);
    })
};

export default makeFilter;