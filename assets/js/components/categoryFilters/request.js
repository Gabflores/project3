const myRequest = async () => {
  let uri = "http://localhost:3000/postsData?_sort=dateCreation&_order=desc";
  const request = await fetch(uri);
  const resultList = await request.json();
  return resultList;
};

export default myRequest;
