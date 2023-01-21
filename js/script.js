const grid = document.querySelector(`.grid-container`);
const buttonGenerate = document.querySelector(`.grid-generate`);
const clearButton = document.querySelector(`.clear`);
const eraserButton = document.querySelector(`.eraser`);
const oneColorButton = document.querySelector(`.black`);
const randomColorButton = document.querySelector(`.color-button`)
let cells = document.querySelectorAll(`grid-item`);
let generatedGrid = new Array(2);

/**
 * Function to update the background color
 * @param {*cell the object the event listner will be added to} cell
 * @param {*color which color to change to} color
 */
function updateBackgroundColor(cell, color){
    cell.style.backgroundColor = color;
}

/**
 * Creates a grid
 * @param {*x How many rows to create} x 
 * @param {*y How many columns to create} y 
 */
function createGrid(x = 16, y = 16){
    for(let i = 0; i <= x; i++){
        generatedGrid[i] = new Array(2);
    }

    let cellNumber = 0;
    
    for(let i = 0; i < x; i++){
        for(let j = 0; j < y; j++){
            let cell = document.createElement(`div`);
            cell.classList.add(`grid-item`);
            cell.classList.add(`${cellNumber++}`);
            cell.style.gridColumnStart = j;
            cell.style.gridColumnEnd = j + 1;
            cell.style.gridRowStart = i;
            cell.style.gridRowEnd = i + 1;
            cell.style.padding = "10px";
            cell.style.backgroundColor = "white";
            generatedGrid[i][j] = i + j;
            cell.addEventListener(`mouseenter`, (e) =>{
                updateBackgroundColor(e.target, "black");
            });
            grid.appendChild(cell);
        }
    }
    cells = document.querySelectorAll(`grid-item`);    
}

/**
 * Function to emptry the grid items from the DOM
 */
function emptyGrid(){
    cells = document.querySelectorAll(`.grid-item`);
    cells.forEach(cell => grid.removeChild(cell));
}

buttonGenerate.addEventListener(`click`, (e) =>{
    emptyGrid();
    if(generatedGrid != null) generatedGrid = [];
    
    let x = prompt(`How many rows?`);
    while(x > 64){
        alert(`You entered to high row number. You entered ${x} Please renter a new number`);
        x = prompt(`How many rows?`);
    }
    let y = prompt(`How many columns?`);
    while(y > 64){
        alert(`You entered to high column number. You entered ${y} Please renter a new number`);
        y = prompt(`How many columns?`);
    }

    createGrid(x,y);
})

clearButton.addEventListener(`click`, (e) =>{
    cells = document.querySelectorAll(`.grid-item`);
    cells.forEach(cell => updateBackgroundColor(cell, "white"));
});

eraserButton.addEventListener(`click`, (e) => {
    cells = document.querySelectorAll(`.grid-item`);
    cells.forEach(cell => {
        cell.addEventListener(`mouseenter`, (e) => updateBackgroundColor(e.target, "white"));
    })
});

oneColorButton.addEventListener(`click`, (e) => {
    cells = document.querySelectorAll(`.grid-item`);
    cells.forEach(cell => {
        cell.addEventListener(`mouseenter`, (e) => updateBackgroundColor(e.target, "black"));
    })
});

randomColorButton.addEventListener(`click`, (e) => {
    cells = document.querySelectorAll(`.grid-item`);

    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    let color = `rgb(${x},${y},${z})`;

    cells.forEach(cell => {
        cell.addEventListener(`mouseenter`, (e) => updateBackgroundColor(e.target, color));
    })
});

createGrid();