const gridContainer = document.querySelector("#gridContainer");
const resetButton = document.querySelector("#resetButton");
const setGridSize = document.querySelector("#gridSizeButton");


// Creating inital grid 
let square = 16;

function squareProperty(grid) {
    let gridSize = 100 / square ;

    grid.innertext = "";
    grid.className = "square";
    grid.style.height = `${gridSize}%`;
    grid.style.width = `${gridSize}%`;
    grid.style.backgroundColor = "rgb(240, 240, 240)";
    grid.style.margin = 0;
    grid.style.padding = 0;
    grid.style.opacity = 0.0;
    grid.style.backgroundColor = rgbColor();
}

function rgbColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random ()* 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;

}



function mouseHoverEffect(grid) {
    grid.addEventListener("mouseover", function() {

        let currentOpacity = parseFloat(grid.style.opacity);
        if (currentOpacity < 1) {
          grid.style.opacity = (currentOpacity + 0.1).toFixed(1);
        }
    })

}

function createGrid() {
    let totalSquares = square * square;
    for (let i = 0 ; i < totalSquares ; i++) {
        const grid = document.createElement("div");
        squareProperty(grid);
        gridContainer.appendChild(grid);

        mouseHoverEffect(grid);
    }
}

createGrid();

// Reset Button functionality 
function reset() {
    gridContainer.innerHTML = "";
    square = 16;
    createGrid();
}


resetButton.addEventListener("click", function() {
    reset();
})


// Set Gride Size Button functionality
function userPrompt() {
    let userPrompt = prompt("what size grind would you like? [Between 4 and 100]");
    if (userPrompt < 4 || userPrompt > 100){
        userPrompt = 16;
        alert("default set to 16 grid");
    }

    return userPrompt;
}

setGridSize.addEventListener("click", function() {
    gridContainer.innerHTML = "";
    square = userPrompt();
    createGrid();
})
