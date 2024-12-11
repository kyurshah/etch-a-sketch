console.log("this is working");

const gridContainer = document.querySelector("#gridContainer");
const resetButton = document.querySelector("#resetButton");
const setGridSize = document.querySelector("#gridSizeButton");
const eraser = document.querySelector("#eraserButton");

let square = 16;
let totalSquares = square * square;


function squareProperty(grid) {
    let gridSize = 100 / square ;

    grid.innertext = "";
    grid.className = "square";
    grid.style.height = `${gridSize}%`;
    grid.style.width = `${gridSize}%`;
    grid.style.backgroundColor = "rgb(240, 240, 240)";
    grid.style.margin = 0;
    grid.style.padding = 0;
    grid.style.opacity = 0.05;
}

function rgbColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random ()* 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;

}

function mouseHoverEffect(grid) {
    grid.addEventListener("mouseover", function() {
        grid.style.backgroundColor = rgbColor();

        let currentOpacity = parseFloat(grid.style.opacity);
        if (currentOpacity < 1) {
          grid.style.opacity = (currentOpacity + 0.1).toFixed(1);
        }
    })

}

function createGrid() {

    for (let i = 0 ; i < totalSquares ; i++) {
        const grid = document.createElement("button");

        squareProperty(grid);
        gridContainer.appendChild(grid);

        mouseHoverEffect(grid);


    }
}

createGrid()

