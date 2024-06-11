// const progressBarFill = document.querySelector("#progress-bar-fill");

// progressBarFill.style.width = 33.33%;

//DOM Elements
// const boxes = document.querySelectorAll(".final"),
//   image = document.querySelector(".inner");

// //Loop through each boxes element
// boxes.forEach((box) => {
//   //When a draggable element dragged over a box element
//   box.addEventListener("dragover", (e) => {
//     e.preventDefault(); //Prevent default behaviour
//   });

//   //When a draggable element is dropped on a box elemen
//   box.addEventListener("drop", () => {
//     box.appendChild(getElement);
//     box.classList.remove("hovered");
//   });
// });

// the above is me trying to get the dragging to work but it not working, I would love feedback on why that code didnt work

// below is how I managed to get the drag and drop to work.

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

// here is the array for the questions which will change when the user clicks next question

const QUESTIONS = [
  "What is the best season for holidays?",
  "What season encourages you to see friends?",
  "What season inspires you?",
  "What season has the best meals?",
];

let counter = 0;
let display = document.querySelector("h3");
display.innerText = QUESTIONS[counter];

let btn = document.getElementById("next-question").innerHTML = Math.random();

btn.addEventListener("click", () => {
  counter++;
  display.innerText = QUESTIONS[counter];
});

// below is trying to get the next question button to reset the positions of the dragable answers. unfortunately I cannot get it working.

// function reset1() {
//   var wrapper = document.getElementById(".wrapper");
//   wrapper.innerHTML = html;
// }
// var html;
// window.onload = function () {
//   html = document.getElementById(".wrapper").innerHTML;
// };
}