function grid() {
    const Grid = document.querySelector(':root')
    const Columns = document.getElementById('rangeColumns').value
    const Rows = document.getElementById('rangeRows').value
    const canva = document.querySelector(".canva")

    Grid.style.setProperty('--grid-cols', Columns)
    Grid.style.setProperty('--grid-rows', Rows)

    const Elements = Columns * Rows
        for(i=0; i<Elements; i++){
            
            const element = document.createElement("div")
            element.className = "element"
            console.log(element)
            console.log(canva)
            canva.appendChild(element)
        }
    }

function log() {
    const valueColumns = document.getElementById('rangeColumns').value
    const valueRows = document.getElementById('rangeRows').value
    console.log(`
    Columns: ${valueColumns}
    Rows: ${valueRows}`)
}
