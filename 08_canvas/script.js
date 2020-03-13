const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const pageX = document.getElementById("x");
const pageY = document.getElementById("y");
const resetPen = document.getElementById("btn-resetPen");
const resetAll = document.getElementById("btn-resetAll");
const minusPen = document.getElementById("btn-minusPen");
const plusPen = document.getElementById("btn-plusPen");
const seconds = document.getElementById("sec");
const colors = document.querySelectorAll(".color");
// const styles = document.getElementById("styles");

// default context values
ctx.lineCap = "round";
ctx.lineJoin = 'round';

function show(e) {
    ctx.beginPath();
    ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
    canvas.addEventListener("mousemove", display);
}

function display(e) {
    const xCoord = e.pageX - e.target.offsetLeft;
    const yCoord = e.pageY - e.target.offsetTop;
    let ms = 0;

    ctx.lineTo(xCoord, yCoord);
    ctx.stroke();
}

function changePenSize(e) {
    e.deltaY < 0 ? (ctx.lineWidth += 3) : (ctx.lineWidth -= 3);
}

canvas.addEventListener("mousedown", show);
canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", display);
});

resetAll.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.lineWidth = 1;
});

resetPen.addEventListener("click", () => (ctx.lineWidth = 1));

// document.addEventListener("wheel", changePenSize);
minusPen.addEventListener("click", () => (ctx.lineWidth -= 3));
plusPen.addEventListener("click", () => (ctx.lineWidth += 3));

// styles.addEventListener("change", () => (ctx.lineCap = styles.value));

colors.forEach(color => {
    color.addEventListener(
        "click",
        () => (ctx.strokeStyle = color.dataset.color)
    );
});
