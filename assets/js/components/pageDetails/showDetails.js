const showDetails = (
  titlePost,
  subtitlePost,
  bodyPost,
  authorPost,
  datePost,
  likesPost,
  tagsPost,
  imageUrlPost
) => {
  const containerDetail = document.getElementById("detailsContainer");

  const detailBox = document.createElement("div");
  detailBox.classList.add("detailbox");

  const containerAuthor = document.createElement("div");
  containerAuthor.classList.add(
    "detailbox-containerinformation-containertext-containerauthor"
  );

  const authorDetail = document.createElement("p");
  authorDetail.classList.add(
    "detailbox-containerinformation-containertext-containerauthor__author"
  );
  authorDetail.append(authorPost);

  const titleDetail = document.createElement("p");
  titleDetail.classList.add(
    "detailbox-containerinformation-containertext__title"
  );
  titleDetail.append(titlePost);

  const subtitleDetail = document.createElement("p");
  subtitleDetail.classList.add(
    "detailbox-containerinformation-containertext__subtitle"
  );
  subtitleDetail.append(subtitlePost);

  const containerDate = document.createElement("div");
  containerDate.classList.add(
    "detailbox-containerinformation-containertext-containerdate"
  );

  const dateDetail = document.createElement("p");
  dateDetail.classList.add(
    "detailbox-containerinformation-containertext-containerdate__date"
  );
  dateDetail.append(datePost);

  const bodyDetail = document.createElement("p");
  bodyDetail.classList.add(
    "detailbox-containerinformation-containertext__bodyDetail"
  );
  bodyDetail.append(bodyPost);

  const imgDetail = document.createElement("img");
  imgDetail.classList.add(
    "detailbox-containerinformation__img"
  );
  
  const imgSource =
    imageUrlPost !== ""
      ? imageUrlPost
      : "../../../assets/images/placeholderimage.png";
  imgDetail.setAttribute("src", imgSource);
  const containerInformation = document.createElement("div");
  containerInformation.classList.add("detailbox-containerinformation");

  const containerText = document.createElement("div");
  containerText.classList.add("detailbox-containerinformation-containertext");

  const containerLikes = document.createElement("div");
  containerLikes.classList.add(
    "detailbox-containerinformation-containertext-containerlikes"
  );

  const likesDetail = document.createElement("p");
  likesDetail.classList.add(
    "detailbox-containerinformation-containertext-containerlikes__likes"
  );
  likesDetail.append(likesPost);

  const containerTags = document.createElement("div");
  containerTags.classList.add(
    "detailscontainer-detailbox-containerinformation-containertext-containertags"
  );

  const tagsDetail = document.createElement("p");
  tagsDetail.classList.add(
    "detailscontainer-detailbox-containerinformation-containertext-containertags_tags"
  );
  tagsDetail.append(tagsPost);

  detailBox.append(containerInformation);
  containerInformation.append(containerAuthor);
  containerAuthor.append(authorDetail);
  containerInformation.append(containerText);
  containerText.append(containerDate);
  containerDate.append(dateDetail);
  containerText.append(titleDetail);
  containerText.append(subtitleDetail);
  containerInformation.append(containerLikes);
  containerLikes.append(likesDetail);
  containerInformation.append(imgDetail);
  containerText.append(bodyDetail);
  containerInformation.append(containerTags);
  containerTags.append(tagsDetail);
  containerDetail.append(detailBox);

  return containerDetail;
};

export default showDetails;
