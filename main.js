

const removeText = document.getElementById('usun')
const addText = document.getElementById('dodaj')
const text = document.getElementById('tekst')

addText.onclick = () => {
    text.textContent = "Akademia 108"
}

// removeText.onclick = () => {
//     text.textContent = ''
// }

removeText.onclick = function (){
    text.textContent = ""
}