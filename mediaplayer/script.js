const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// the following code block allows me to play and pause the video on a click of a button

const playPauseButton = document.querySelector("#play-pause-btn");
console.log(playPauseButton);

playPauseButton.addEventListener("click", playPauseVideo);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function playPauseVideo() {
  if (myVideo.paused || myVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
    myVideo.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    myVideo.pause();
  }
}

//------------------------------------------------------

//the following code allows me to control the sound via a mute and unmute function

const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
  if (myVideo.muted) {
    muteUnmuteButton.style.backgroundColor = "#d5cea3";
    myVideo.muted = false;
  } else {
    muteUnmuteButton.style.backgroundColor = "#8f8b6f";
    myVideo.muted = true;
  }
}

//------------------------------------------------------

// the following code block illustrates progress bar

myVideo.addEventListener("timeupdate", updateProgressBar);

const progressBarFill = document.querySelector("#progress-bar-fill");

function updateProgressBar() {
  const progress = (myVideo.currentTime / myVideo.duration) * 100;
  console.log(progress);
  progressBarFill.style.width = progress + "%";
}

//------------------------------------------------------

// the following code will make the video full screen

myVideo.addEventListener("dblclick", goFullscreen);

const fullscreenButton = document.querySelector("#fullscreen-btn");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", goFullscreen);

function goFullscreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
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
  myVideo.currentTime = 16.0;
}

const stepTwoButton = document.querySelector("#step-two-btn");
console.log(stepTwoButton);

stepTwoButton.addEventListener("click", gotoStepTwo);

function gotoStepTwo() {
  myVideo.currentTime = 53.0;
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
  if (myVideo.volume < 0.9) {
    myVideo.volume += 0.1;
  }
}
function decreaseVolume() {
  if (myVideo.volume > 0.11) {
    myVideo.volume -= 0.1;
  }
}

myVideo.addEventListener("volumechange", updateVolume);

function updateVolume() {
  console.log("current volume is", myVideo.volume);
}

//---------------------------------------------------------

// this section will introduce a looping button
