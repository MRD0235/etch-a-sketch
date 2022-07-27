const body = document.querySelector('body')
const div = document.createElement('div')

div.setAttribute("id", "container")
body.appendChild(div)

const container = document.querySelector('#container')
const sideSize = 16
for (let j = 0; j < sideSize; j++) {
    let row = document.createElement('div')
    row.setAttribute("id", "rows")
    for (let i = 0; i < sideSize; i++) {
        let d = document.createElement('div')
        d.setAttribute("class", "boxes")
        row.appendChild(d)
    }
    container.appendChild(row)
}