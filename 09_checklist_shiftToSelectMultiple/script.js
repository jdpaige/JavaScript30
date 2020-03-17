const checkbox = document.getElementById("checkbox");
const boxes = document.querySelectorAll("input");
let lastChecked;
let lastCheckedEl;
let shiftDown = false;

boxes.forEach(box => {
    box.addEventListener("change", () => {
        if (shiftDown && lastChecked) {
            if (box.dataset.option > lastChecked) {
                // when the checked box is ahead of last checked
                if (box.checked === false) {
                    for (let i = lastChecked; i <= box.dataset.option; i++) {
                        boxes[i].checked = false;
                    }
                } else {
                    for (let i = lastChecked; i <= box.dataset.option; i++) {
                        boxes[i].checked = true;
                    }
                }
            } else {
                // when the checked box is behind last checked
                if (box.checked === false) {
                    for (let i = box.dataset.option; i <= lastChecked; i++) {
                        boxes[i].checked = false;
                    }
                } else {
                    for (let i = box.dataset.option; i <= lastChecked; i++) {
                        boxes[i].checked = true;
                    }
                }
            }
        }
        lastChecked = parseInt(box.dataset.option);
        lastCheckedEl = box;
    });
});

// Event listeners for whether or not Shift is being held down
window.addEventListener("keydown", e => {
    if (e.key === "Shift") {
        shiftDown = true;
    }
});

window.addEventListener("keyup", e => {
    if (e.key === "Shift") {
        shiftDown = false;
    }
});
