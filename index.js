let container = document.querySelector(".container");

function createGrid(size) {
    container.innerHTML = ''; // Clear existing grid items

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (i=0;i<size*size;i++) {
        let div = document.createElement("div");
        div.style.border = "1px dotted black";
        container.appendChild(div);

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = 'black' 
        })
    }     
}

let size;
let gridsize = document.querySelector(".gridsize");
gridsize.addEventListener("click", () => {
    size = prompt("enter square number?");
    if (size > 100 || size < 0) {   
        size = prompt("only enter 1-100")
        createGrid(size)
    }
    createGrid(size)
})
createGrid(16);


let clear = document.querySelector(".clear")
function clearGrid() {
    clear.addEventListener("click", () => {

        const gridItems = container.querySelectorAll("div");
        gridItems.forEach(item => {
            item.style.backgroundColor = "transparent"; // Reset color
        });
        
        container.style.backgroundColor = 'whitesmoke';
    });
}

clearGrid();

function getRandomColor() {
    const letters = '0123456789ABCDEF'; // Possible characters in a hex color
    let color = '#'; // Start with a '#' to indicate a hex color
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // Add a random character
    }
    return color; // Return the generated color
}


let randomColorButton = document.querySelector(".rainbow");
randomColorButton.addEventListener("click", () => {
    const gridItems = container.querySelectorAll("div");
    gridItems.forEach(item => {
        item.addEventListener("click", () => {
            item.style.backgroundColor = getRandomColor();
        }) ;
    });
});

randomColorButton.addEventListener("click", () => {
    const gridItems = container.querySelectorAll("div");
        gridItems.forEach(item => {
            item.addEventListener("mouseover", () => {
                item.style.backgroundColor = getRandomColor()
            })          
        });
});

let eraser = document.querySelector(".eraser");
eraser.addEventListener("click", () => {
    const gridItems = container.querySelectorAll("div");
        gridItems.forEach(item => {
            item.addEventListener("mouseover", () => {
                item.style.backgroundColor = "transparent";
            })          
        });
});