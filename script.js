const cellElements = document.querySelectorAll("[data-cell]")
const board = document.querySelectorAll("[data-board]")

let isCircleTurn = false;

const placeMark = (cell, classToAdd) => { 
    cell.classList.add(classToAdd)
}

const swapTurn = () => {
    isCircleTurn = !isCircleTurn

    board.classList.remove("x")
    board.classList.remove("circle")

    if(isCircleTurn){
        board.classList.add("circle")
    }else{
        board.classList.add("x")
    }
}

const handleClick = (e) => {
    //colocar o X ou circulo
    const cell = e.target
    const classToAdd = isCircleTurn ? "circle" : "x"
    placeMark(cell, classToAdd)
    
    //Verificar por vitoria

    //verificar por vitoria

    //mudar o simbolo
    swapTurn()
}

for (const cell of cellElements){
    cell.addEventListener("click", handleClick, {once: true})
}

