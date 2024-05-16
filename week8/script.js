const myAudio = document.querySelector("#my-audio");
console.log(myAudio);

// the following code block allows me to play and pause the video on a click of a button

const playPauseButton = document.querySelector("#play-pause-btn");
console.log(playPauseButton);

playPauseButton.addEventListener("click", playPauseAudio);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function playPauseAudio() {
  if (myAudio.paused || myAudio.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
    myAudio.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    myAudio.pause();
  }
}

//------------------------------------------------------

//the following code allows me to control the sound via a mute and unmute function

const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
  if (myAudio.muted) {
    muteUnmuteButton.style.backgroundColor = "#d5cea3";
    myAudio.muted = false;
  } else {
    muteUnmuteButton.style.backgroundColor = "#8f8b6f";
    myAudio.muted = true;
  }
}

//------------------------------------------------------

// the following code block illustrates progress bar

myAudio.addEventListener("timeupdate", updateProgressBar);

const progressBarFill = document.querySelector("#progress-bar-fill");

function updateProgressBar() {
  const progress = (myAudio.currentTime / myAudio.duration) * 100;
  console.log(progress);
  progressBarFill.style.width = progress + "%";
}

//------------------------------------------------------

// the following code will make the video full screen

myAudio.addEventListener("dblclick", goFullscreen);

const fullscreenButton = document.querySelector("#fullscreen-btn");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", goFullscreen);

function goFullscreen() {
  if (!document.fullscreenElement) {
    myAudio.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

//--------------------------------------------------------

// the following code block introduces timestamps

const stepOneButton = document.querySelector("#step-one-btn");
console.log(stepOneButton);

stepOneButton.addEventListener("click", gotoStepOne);

function gotoStepOne() {
  myAudio.currentTime = 16.0;
}

const stepTwoButton = document.querySelector("#step-two-btn");
console.log(stepTwoButton);

stepTwoButton.addEventListener("click", gotoStepTwo);

function gotoStepTwo() {
  myAudio.currentTime = 53.0;
}

//---------------------------------------------------------

// this section will introduce volume controls

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

// this section will introduce a looping button
