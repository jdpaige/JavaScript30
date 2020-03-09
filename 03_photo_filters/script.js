const photo = document.getElementById("photo");
const blur = document.getElementById("blur");
const brightness = document.getElementById("brightness");
const contrast = document.getElementById("contrast");
const hue = document.getElementById("hue");
const saturate = document.getElementById("saturate");
const sepia = document.getElementById("sepia");
const resetBtn = document.getElementById("reset-btn");

const inputs = document.querySelectorAll("input");

// global event listener
// this ensures multiple filters can be active at the same time
inputs.forEach(input => input.addEventListener("input", updateFilter));
function updateFilter() {
    photo.style.filter = `
        blur(${blur.value}px) 
        brightness(${brightness.value}%) 
        contrast(${contrast.value}%)
        hue-rotate(${hue.value}deg)
        saturate(${saturate.value}%)
        sepia(${sepia.value}%)
    `;
}

// Reset Button
resetBtn.addEventListener("click", reset);
function reset() {
    inputs.forEach(input => {
        input.value = input.dataset.originalValue;
        updateFilter();
    });
}
