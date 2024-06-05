const container = document.querySelector("#container");

for (i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.toggle("square");
    container.appendChild(div);
};

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "rgb(87, 103, 73)";
    });
});