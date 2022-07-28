const body = document.querySelector('body')
const div = document.createElement('div')
div.setAttribute("id", "container")
body.appendChild(div)

const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', clearGrid)

const gridButton = document.querySelector('#changeSize')
gridButton.addEventListener('click', changeSize)

function gridSetup(sideSize) {
    for (let j = 0; j < sideSize; j++) {
        let row = document.createElement('div')
        row.setAttribute("id", "rows")
        for (let i = 0; i < sideSize; i++) {
            let d = document.createElement('div')
            d.setAttribute("class", "boxes")
            d.addEventListener("mouseover", () => {
                d.setAttribute("id", "colored")
            })
            row.appendChild(d)
        }
        container.appendChild(row)
    }
}

function changeSize() {
    sideSize = prompt("Set a size for the grid:", 16)
    clearGrid()
    removeDiv()
    gridSetup(sideSize)
}

function removeDiv() {
    const parent = document.querySelector('#container')
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function clearGrid() {
    let coloredBoxes = document.querySelectorAll('#colored')
    coloredBoxes.forEach(coloredBox => {
        coloredBox.removeAttribute("id", "colored")
    })
}