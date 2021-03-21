const gridContainer = document.querySelector(".grid-container");

function makeGrid(gridSize) {
    gridContainer.style.gridTemplateColumns = "repeat(" + gridSize + ", 1fr)"

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            var square = document.createElement("div");
            gridContainer.appendChild(square, gridContainer.firstChild);

            square.id = "square-" + i + "x" + j;
            square.className = "square";
        }
    }

    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "rgb(" + Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + ")";
            square.style.outline = "none";
        });
    });
}

function removeGrid() {
    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        gridContainer.removeChild(square);
    });
}

makeGrid(16); //initial grid

const changeSizeButton = document.querySelector("#change-size-button");

changeSizeButton.addEventListener("click", () => {
    do {
        var gridSize = parseInt(prompt("Enter new grid size (1-100): "), 10);
    } while (gridSize < 1 || gridSize > 100 || isNaN(gridSize));

    removeGrid();
    makeGrid(gridSize);
});

const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.style.backgroundColor = "transparent";
        square.style.outline = "1px solid teal";
    });
});