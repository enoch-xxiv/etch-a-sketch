const container = document.querySelector("#container");
const generateButton = document.querySelector("#newGrid");

function generateGrid(gridLength) {
    for (i = 0; i < (gridLength ** 2); i++) {
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
}

generateButton.addEventListener("click", () => {
    let gridLength = prompt("How long would you like the square grid to be?");
    generateGrid(gridLength);
});