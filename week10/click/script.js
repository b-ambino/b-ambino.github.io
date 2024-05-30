const catButton = document.querySelector("#cat-button");
console.log(catButton);
catButton.addEventListener("click", increaseLikes);

let likeCount = 0;
const likes = document.querySelector("#likes");
console.log(likes);

function increaseLikes() {
  console.log("i m clicked");
  likeCount++;
  likes.textContent = likeCount;
}
