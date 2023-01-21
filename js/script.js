const grid = document.querySelector(`.grid-container`);
const buttonGenerate = document.querySelector(`.grid-generate`);
let cells = document.querySelectorAll(`grid-item`);
let generatedGrid = new Array(2);

/**
 * Function to update the background color
 * @param {*cell the object the event listner will be added to} cell
 */
function updateBackgroundColor(cell){
    cell.style.backgroundColor = "black";
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
                updateBackgroundColor(e.target);
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

createGrid();