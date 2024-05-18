const myAudio = document.querySelector("#my-audio");
console.log(myAudio);

// the following code block allows me to play and pause the audio track on a click of a button whilst also changing the icon and colour when pressed.

const playPauseButton = document.querySelector("#play-pause-btn");
console.log(playPauseButton);

playPauseButton.addEventListener("click", playPauseAudio);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function playPauseAudio() {
  if (myAudio.paused || myAudio.ended) {
    playPauseButton.style.backgroundColor = "#076757";
    playPauseImg.src = "https://img.icons8.com/glyph-neue/64/FFFFFF/pause.png";
    myAudio.play();
  } else {
    playPauseButton.style.backgroundColor = "#9fcbc4";
    playPauseImg.src =
      "https://img.icons8.com/ios-filled/50/FFFFFF/play--v1.png";
    myAudio.pause();
  }
}

//------------------------------------------------------

//the following code allows me to control the audio track via a mute and unmute function whilst also changing the colour on click.

const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
  if (myAudio.muted) {
    muteUnmuteButton.style.backgroundColor = "#9fcbc4";
    myAudio.muted = false;
  } else {
    muteUnmuteButton.style.backgroundColor = "#076757";
    myAudio.muted = true;
  }
}

//------------------------------------------------------

// the following code block shows the progress of the audio track via a progress bar.

myAudio.addEventListener("timeupdate", updateProgressBar);

const progressBarFill = document.querySelector("#progress-bar-fill");

function updateProgressBar() {
  const progress = (myAudio.currentTime / myAudio.duration) * 100;
  console.log(progress);
  progressBarFill.style.width = progress + "%";
}

//---------------------------------------------------------

// this section will introduce volume controls for the main audio track.

const increaseVolumeButton = document.querySelector("#increase-volume-btn");
console.log(increaseVolumeButton);
increaseVolumeButton.addEventListener("click", increaseVolume);

const decreaseVolumeButton = document.querySelector("#decrease-volume-btn");
console.log(decreaseVolumeButton);
decreaseVolumeButton.addEventListener("click", decreaseVolume);

function increaseVolume() {
  if (myAudio.volume < 0.9) {
    myAudio.volume += 0.1;
  }
}
function decreaseVolume() {
  if (myAudio.volume > 0.11) {
    myAudio.volume -= 0.1;
  }
}

myAudio.addEventListener("volumechange", updateVolume);

function updateVolume() {
  console.log("current volume is", myAudio.volume);
}

//---------------------------------------------------------

// this section was me trying introduce a randomizer for positive affirmations. I was unable to figure out how to get this code to work, but have left it in to show my logic. Maybe in the feedback you could explain why it didnt work.

// const msg = [
//   "You've Got This!",
//   "Keep Going!",
//   "Deep Breaths...",
//   "You're On Your Way!",
//   "Slay Mama!",
//   "Kudos For Trying Your Best!",
// ];

// const messages = document.querySelector("messages");
// const randomNo = Math.floor(Math.random() * 6);
// messages.textContent = msg[randomNo];

//--------------------------------------------

// This section is creating the ambient button controls, I used a play pause function with text buttons and a change of colour to show the sound and when it was turned on and off.

const rainAudio = document.querySelector("#rain-audio");
console.log(rainAudio);

const rainAudioBtn = document.querySelector("#rain");

rain.addEventListener("click", playRainAudio);

function playRainAudio() {
  if (rainAudio.paused || rainAudio.ended) {
    rainAudioBtn.style.backgroundColor = "#076757";
    rainAudio.play();
  } else {
    rainAudioBtn.style.backgroundColor = "#9fcbc4";
    rainAudio.pause();
  }
}

const oceanAudio = document.querySelector("#ocean-audio");
console.log(oceanAudio);

const oceanAudioBtn = document.querySelector("#ocean");

ocean.addEventListener("click", playOceanAudio);

function playOceanAudio() {
  if (oceanAudio.paused || oceanAudio.ended) {
    oceanAudioBtn.style.backgroundColor = "#076757";
    oceanAudio.play();
  } else {
    oceanAudioBtn.style.backgroundColor = "#9fcbc4";
    oceanAudio.pause();
  }
}

const riverAudio = document.querySelector("#river-audio");
console.log(riverAudio);

const riverAudioBtn = document.querySelector("#river");

river.addEventListener("click", playRiverAudio);

function playRiverAudio() {
  if (riverAudio.paused || riverAudio.ended) {
    riverAudioBtn.style.backgroundColor = "#076757";
    riverAudio.play();
  } else {
    riverAudioBtn.style.backgroundColor = "#9fcbc4";
    riverAudio.pause();
  }
}

const transportAudio = document.querySelector("#transport-audio");
console.log(transportAudio);

const transportAudioBtn = document.querySelector("#transport");

transport.addEventListener("click", playTransportAudio);

function playTransportAudio() {
  if (transportAudio.paused || transportAudio.ended) {
    transportAudioBtn.style.backgroundColor = "#076757";
    transportAudio.play();
  } else {
    transportAudioBtn.style.backgroundColor = "#9fcbc4";
    transportAudio.pause();
  }
}

const outdoorsAudio = document.querySelector("#outdoors-audio");
console.log(outdoorsAudio);

const outdoorsAudioBtn = document.querySelector("#outdoors");

outdoors.addEventListener("click", playOutdoorsAudio);

function playOutdoorsAudio() {
  if (outdoorsAudio.paused || outdoorsAudio.ended) {
    outdoorsAudioBtn.style.backgroundColor = "#076757";
    outdoorsAudio.play();
  } else {
    outdoorsAudioBtn.style.backgroundColor = "#9fcbc4";
    outdoorsAudio.pause();
  }
}
