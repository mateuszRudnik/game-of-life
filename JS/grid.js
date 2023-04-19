function grid(rows) {
     const canva = document.querySelector(".canva")
        for(i=0; i<rows; i++){
            
            const element = document.createElement("div")
            element.className = "element"
            console.log(element)
            console.log(canva)
            canva.appendChild(element)
        }
}