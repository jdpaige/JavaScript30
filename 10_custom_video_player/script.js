const video = document.querySelector("video");
const controls = document.getElementById("controls");
const stopBtn = document.getElementById("stop");
const pauseBtn = document.getElementById("pause");
const playBtn = document.getElementById("play");
const progress = document.getElementById("totalProgress");
const duration = document.getElementById("duration");
const time = document.getElementById("time");
const volOn = document.getElementById("volume-toggle");
const volOff = document.getElementById("mute");
const volSlide = document.getElementById("volume-slider");

let isPlaying = false;

// BASIC CONTROLS - STOP, PAUSE, PLAY
stopBtn.addEventListener("click", () => {
    video.pause();
    video.currentTime = 0;
    if (isPlaying) {
        playBtn.classList.toggle("hide");
        pauseBtn.classList.toggle("hide");
    }
    isPlaying = false;
});

pauseBtn.addEventListener("click", () => {
    video.pause();
    isPlaying = false;
    playBtn.classList.toggle("hide");
    pauseBtn.classList.toggle("hide");
});

playBtn.addEventListener("click", () => {
    video.play();
    isPlaying = true;
    playBtn.classList.toggle("hide");
    pauseBtn.classList.toggle("hide");
});

// VOLUME CONTROLS
volOn.addEventListener("click", () => {
    video.muted = true;
    volSlide.value = 0;
    volOn.classList.toggle("hide");
    volOff.classList.toggle("hide");
});

volOff.addEventListener("click", () => {
    video.muted = false;
    volSlide.value = video.volume * 100;
    volOn.classList.toggle("hide");
    volOff.classList.toggle("hide");
});

volSlide.addEventListener("input", () => {
    video.volume = volSlide.value / 100;
});

// PROGRESS BAR
video.addEventListener("timeupdate", () => {
    progress.style.width = `${100 * (video.currentTime / video.duration)}%`;
    parseInt(video.currentTime) < 10
        ? (time.innerText = `0:0${parseInt(video.currentTime)}/0:${parseInt(
              video.duration
          )}`)
        : (time.innerText = `0:${parseInt(video.currentTime)}/0:${parseInt(
              video.duration
          )}`);
});

duration.addEventListener("click", e => {
    const progressPercent = e.offsetX / duration.offsetWidth;
    video.currentTime = video.duration * progressPercent;
});
