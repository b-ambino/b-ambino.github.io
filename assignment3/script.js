const sections = document.querySelectorAll(".wrapper");
console.log(sections);

const progressBarFill = document.querySelector(".progress-bar-fill");
let newWidth = 0;

// below is how the survey will use a drag and drop feature to improve user joy and experience taking a survey.

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
  draggedElement = document.getElementById(data);
}

// here is the array for the questions which will change when the user clicks next question
// When the user finishes all the questions, the survey will display a final message.
// as the user answers questions, the progress bar will fill, allowing them to know how long
// close they are to finishing the survey.

const questions = [
  "What is the best season for holidays?",
  "What season encourages you to see friends?",
  "What season inspires you?",
  "What season has the best meals?",
];

let counter = 0;
let display = document.querySelector("h3");
display.innerText = questions[counter];

let btn = document.getElementById("next-question");

btn.addEventListener("click", () => {
  if (counter < sections.length) {
    sections[counter].classList.remove("show");
    counter++;

    if (counter != sections.length) {
      display.innerText = questions[counter];
      sections[counter].classList.add("show");
    } else {
      display.innerText = "Thank You For Answering All The Questions!";
    }

    newWidth += 25;
    progressBarFill.style.width = newWidth + "%";
  }
});

// If I had more time and could find the easier solution, I would have made the next question display
//a finished text box and figured out a reset button on the quiz to start it again for local use with different
//users but since I am still a really amateur/beginner coder I was unable to find a good solution without it messing
//up the rest of the code so I have left it for the time being.
