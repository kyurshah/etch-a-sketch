console.log("this is working");

const container = document.querySelector("#container");
// const grid1 = document.querySelectorAll(".grid");

// console.log(grid1)

let square = 16; 
let totalSquare = square * square; 


for (let i = 0 ; i < totalSquare ; i++) {
    const grid = document.createElement("button");
    grid.innerText = "HELLO"
    grid.className = "grid"
    container.appendChild(grid);
    grid.addEventListener("mouseenter", function () {
        grid.style.backgroundColor = "black";
    })
    grid.addEventListener("mouseleave", function () {
        grid.style.backgroundColor = "grey";
    })
}

// grid1.addEventListener("click", function () {
//     grid1.backgroundColor = "white";
// })

