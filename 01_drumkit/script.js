const keyVals = [65, 83, 68, 70, 71, 72, 74, 75, 76];

window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", stopTransition));

function playSound(e) {
    // only run if the key pressed is a key in our drumpad
    if (keyVals.includes(e.keyCode)) {
        // 'presses' the key on the DOM
        const keyEl = document.getElementById(`key-${e.keyCode}`);
        keyEl.classList.add("playing");

        // play the corresponding audio file
        const soundEl = document.getElementById(`audio-${e.keyCode}`);
        soundEl.currentTime = 0;
        soundEl.play();
    }
}

function stopTransition(e) {
    this.classList.remove("playing");
}
