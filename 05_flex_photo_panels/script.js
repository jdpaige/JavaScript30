const items = document.querySelectorAll(".flex__item");

items.forEach(item => {
    item.addEventListener("click", toggleFocus);
    console.log(item.firstElementChild);
});

function toggleFocus() {
    items.forEach(item => {
        if (item === this) {
            item.classList.toggle("focused");
            item.firstElementChild.classList.toggle("show");
            item.lastElementChild.classList.toggle("show");
        } else if (item.classList.contains("focused")) {
            item.classList.remove("focused");
            item.firstElementChild.classList.remove("show");
            item.lastElementChild.classList.remove("show");
        }
    });
}
