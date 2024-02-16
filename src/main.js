function changeColor(element) {
    const optionChoice = document.querySelector(".option-choice")

    if(optionChoice !== null)
        optionChoice.classList.remove("option-choice")

    element.classList.add("option-choice")

}

function changePage(element) {
    const optionButton = element.innerText  

    const page = document.querySelector(".pages")  
    page.innerHTML = ""
    
    if(optionButton === "Inventário") {
        page.innerHTML = `${optionButton}`
    }

}