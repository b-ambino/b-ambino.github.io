// const myHeading = document.querySelector("P");
// console.log(myHeading);
// console.log(myHeading.textContent);
// myHeading.textContent = "this is my new heading";

// const myPara = document.querySelectorAll("p");
// console.log(myPara);
// myPara.classList.add("purple-box");

// myPara[0].classList.add("purple-box");
// myPara[1].classList.add("coral-box");
// myPara[2].classList.add("lime-box");

// use shortcut instead of the above code. use For Let

// const myColors = ["purple-box", "coral-box", "lime-box"];

// for (let i = 0; i < 3; i++) {
//   myPara[i].classList.add(myColors[i]);
//   myPara[i].textContent = "New para " + i;
// }

const myImg = document.querySelector("#my-image");
console.log(myImg);

const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", toggleMe);

function toggleMe() {
  const myImg = document.querySelector("#my-image");
  console.log(myImg);
  myImg.classList.toggle("round");
  const myHeading = document.querySelector("h1");
  myHeading.etxtContent = myImg.dataset.catname;

  //   const myDiv = document.querySelector(".outer");
  //   console.log(myDiv);
  //   myDiv.classList
}

const myHeading = document.querySelector("h1");
myHeading.textContent = "new heading";
myHeading.innerHTML = `new <span class="coral-box"> heading</span>`;

// const myImg = document.querySelector("#my-image");

myImg.addEventListener("mouseover", makeItRound);
myImg.addEventListener("mouseout", makeItSquare);

function makeItRound() {
  myImg.classList.add("round");
}

function makeItSquare() {
  myImg.classList.add("square");
}
