const myRequest = async () => {
  let uri = "http://localhost:3000/postsData?_sort=dateCreation&_order=desc";
  const request = await fetch(uri);
  const resultList = await request.json();

  return resultList;
};

export default myRequest;

/* 
export function makeRequest() {
    logData();
  
    async function myRequest() {
      const request = await fetch("http://localhost:3000/postsData");
      const result = await request.json();
      const resultList = await result.response.results;
      return resultList;
    }
  
    async function logData() {
      const data = await myRequest();
      //showResults(data);
      calculate(data);
      return data;
    }
}
 */
