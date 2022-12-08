import handleFilter from "./handleFilter.js";

const assignEvent = (arryfilters) => {
  arryfilters.map((filter) => {
    const nameCategory = filter.id;
    filter.onclick = () => handleFilter(nameCategory);
  });
};

export default assignEvent;
