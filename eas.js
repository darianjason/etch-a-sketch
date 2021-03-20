const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        var square = document.createElement("div");
        container.appendChild(square, container.firstChild);

        square.id = "square-" + i + "x" + j;
        square.className = "square";
    }
}