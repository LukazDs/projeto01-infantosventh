function changeColor(element) {
    const optionChoice = document.querySelector(".option-choice")

    if(optionChoice !== null)
        optionChoice.classList.remove("option-choice")

    element.classList.add("option-choice")
}