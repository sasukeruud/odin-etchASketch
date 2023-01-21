const grid = document.querySelector(`.grid-container`);
const buttonGenerate = document.querySelector(`.grid-generate`);
let generatedGrid;

console.log(grid);

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
            grid.appendChild(cell);
        }
    }

    console.log(generatedGrid);
}

function emptyGrid(){
    cells = document.querySelectorAll(`.grid-item`);
    cells.forEach(cell => grid.removeChild(cell));
}

buttonGenerate.addEventListener(`click`, (e) =>{
    emptyGrid();
    if(generatedGrid != null) generatedGrid = [];
    else generatedGrid = new Array(2);
    
    let x = prompt(`How many rows?`);
    let y = prompt(`How many columns?`);

    createGrid(x,y);
})