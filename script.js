console.log("this is working");

const container = document.querySelector("#container");
const resetButton = document.querySelector("#resetButton");

let square = 16; 
let totalSquare = square * square; 
let color = "yellow"
let initialGridColor = "rgb(209, 204, 204)"


const madeGrid = function() {
    container.innerHTML = ""
    for (let i = 0 ; i < totalSquare ; i++) {
        const grid = document.createElement("div");
        const gridSize = 100 / square;
    
        grid.innerText = ""
        grid.className = "grid"
        grid.style.backgroundColor = initialGridColor;
        container.appendChild(grid);
        grid.addEventListener("mouseenter", function () {
            grid.style.backgroundColor = color;
        })
        grid.style.width = `${gridSize}%`;
        grid.style.height = `${gridSize}%`;
    }
}

madeGrid()


resetButton.addEventListener("click", function() {
    madeGrid()
})
