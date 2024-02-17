function reloadPage() {
    window.location.reload()
}

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
        makePageInventory(page)
    }

}

function makePageInventory(page) {
    page.innerHTML = `
            <section class="page-inventory">
                <div class="armor-inventory">
                    <div class="info-topo">Armas e Armaduras</div>
                    <div class="information">
                        <div class="armour">
                            <p>Garras Longas</p>
                            <img src="./src/assets/garras-icone.png" alt="garras-icone">
                        </div>
                        <div class="armour">
                            <p>Garras Longas</p>
                            <img src="./src/assets/garras-icone.png" alt="garras-icone">
                        </div>
                    </div>   
                </div>
                <div class="images-inventory">
                    <img src="./src/assets/emblema-guerreiro.png" alt="emblema-guerreiro">
                    <img src="./src/assets/emblema-mago.png" alt="emblema-guerreiro">
                    <img src="./src/assets/emblema-bruxo.png" alt="emblema-guerreiro">
                </div>
                <div class="itens-inventory">
                    <div class="info-topo">Itens</div>
                    <div class="information">
                        <div class="armour">
                            <p>Poção de vida</p>
                            <div class="iten-box-desc">
                                <p>4</p>
                            </div>
                        </div>
                        <div class="armour">
                            <p>Poção de vida</p>
                            <div class="iten-box-desc">
                                <p>4</p>
                            </div>
                        </div>
                    </div>   
                </div>
            </section>
        `
}