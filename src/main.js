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
    if(optionButton === "Atributos") {
        makePageAtribute(page)
    }
    if(optionButton === "Habilidades") {
        makePageAbility(page)
    }
    if(optionButton === "Entidades") {
        makePageEntity(page)
    }
    if(optionButton === "História") {
        makePageHistory(page)
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

function makePageAtribute(page) {
    page.innerHTML = `
    <section class="page-atribute">
        <div class="img-one">
            <img src="./src/assets/emblema-atributo.png" alt="emblema-atributo">
        </div>
        <div class="atributes">
            <div class="info-topo">Atributos</div>
            <div class="information">
                <div class="atribute-box">
                    <div class="atribute-box-info">
                        <p>Força</p>
                        <img src="./src/assets/emblema-forca.png" alt="emblema-forca">
                    </div>
                    <div class="atribute-box-points">
                        <div class="points-left">
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                        </div>
                        <div class="points-right">
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                        </div>
                    </div>
                </div>
                <div class="atribute-box">
                    <div class="atribute-box-info">
                        <p>Força</p>
                        <img src="./src/assets/emblema-forca.png" alt="emblema-forca">
                    </div>
                    <div class="atribute-box-points">
                        <div class="points-left">
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                        </div>
                        <div class="points-right">
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                        </div>
                    </div>
                </div>
                <div class="atribute-box">
                    <div class="atribute-box-info">
                        <p>Força</p>
                        <img src="./src/assets/emblema-forca.png" alt="emblema-forca">
                    </div>
                    <div class="atribute-box-points">
                        <div class="points-left">
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                        </div>
                        <div class="points-right">
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                        </div>
                    </div>
                </div>
                <div class="atribute-box">
                    <div class="atribute-box-info">
                        <p>Força</p>
                        <img src="./src/assets/emblema-forca.png" alt="emblema-forca">
                    </div>
                    <div class="atribute-box-points">
                        <div class="points-left">
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                        </div>
                        <div class="points-right">
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                        </div>
                    </div>
                </div>
                <div class="atribute-box">
                    <div class="atribute-box-info">
                        <p>Força</p>
                        <img src="./src/assets/emblema-forca.png" alt="emblema-forca">
                    </div>
                    <div class="atribute-box-points">
                        <div class="points-left">
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                        </div>
                        <div class="points-right">
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                        </div>
                    </div>
                </div>
                <div class="atribute-box">
                    <div class="atribute-box-info">
                        <p>Força</p>
                        <img src="./src/assets/emblema-forca.png" alt="emblema-forca">
                    </div>
                    <div class="atribute-box-points">
                        <div class="points-left">
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                        </div>
                        <div class="points-right">
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                            <div class="circle-point"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="img-two">
            <img src="./src/assets/emblema-atributo.png" alt="emblema-atributo">
        </div>
    </section>
        `
}

function makePageAbility(page) {
    page.innerHTML = `
    <section class="page-ability">
        <div class="armor-inventory">
            <div class="info-topo">Habilidades</div>
            <div class="information">
                <div class="ability-box">
                    <img src="./src/assets/garras-icone.png" alt="garras-icone">
                    <p>Parede de Gelo</p>
                    <div class="ability-box-desc">
                        <p class="ability-exp">12 exp</p>
                        <p class="ability-type">M</p>
                    </div>
                </div>
        
            </div>   
        </div>
   
        <div class="itens-inventory">
            <div class="info-topo">Em Desenvolvimento</div>
            <div class="information">
                <div class="ability-box">
                    <p class="pts">12/25 pts</p>
                    <p class="ability-name">Clone de gelo</p>
                    <div class="ability-box-desc">
                        <p class="ability-exp">12 exp</p>
                        <p class="ability-type">M</p>
                    </div>
                </div>
            </div>   
        </div>
    </section>
        `
}

function makePageEntity(page) {
    page.innerHTML = `
        <section class="page-entity">
            <div class="entity-info">
                <div class="info-topo">Criaturas e Entidades</div>
                <div class="information">
                    <div class="entity-box">
                        <img src="./src/assets/entidade-lobo.png" alt="entidade-lobo">
                        <div class="entity">
                            <p class="entity-info-name">Nevorafh</p>
                            <p class="entity-info-status">(Lendário)</p>
                        </div>
                        <div class="entity-info-mensures">
                            <p class="entity-info-name">Nível</p>
                            <div class="ent-box-desc">200</div>
                        </div>
                        <div class="entity-info-mensures">
                            <p class="entity-info-name">Quant.</p>
                            <div class="ent-box-desc">1</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="entity-page-img">
                <img src="./src/assets/circulo-invocacao.png" alt="circulo-invocacao">
            </div>
        </section>
        `
}

function makePageHistory(page) {
    page.innerHTML = `
        <section class="page-history">
            <div class="history-info">
                <div class="info-topo">História</div>
                <div class="information">
                    <p class="history-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ullam consequatur consequuntur quidem illum ratione vel quam, earum itaque dolorem? Repellat tempore mollitia dolores qui hic provident quasi facilis placeat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ullam consequatur consequuntur quidem illum ratione vel quam, earum itaque dolorem? Repellat tempore mollitia dolores qui hic provident quasi facilis placeat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ullam consequatur consequuntur quidem illum ratione vel quam, earum itaque dolorem? Repellat tempore mollitia dolores qui hic provident quasi facilis placeat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ullam consequatur consequuntur quidem illum ratione vel quam, earum itaque dolorem? Repellat tempore mollitia dolores qui hic provident quasi facilis placeat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ullam consequatur consequuntur quidem illum ratione vel quam, earum itaque dolorem? Repellat tempore mollitia dolores qui hic provident quasi facilis placeat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ullam consequatur consequuntur quidem illum ratione vel quam, earum itaque dolorem? Repellat tempore mollitia dolores qui hic provident quasi facilis placeat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ullam consequatur consequuntur quidem illum ratione vel quam, earum itaque dolorem? Repellat tempore mollitia dolores qui hic provident quasi facilis placeat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ullam consequatur consequuntur quidem illum ratione vel quam, earum itaque dolorem? Repellat tempore mollitia dolores qui hic provident quasi facilis placeat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ullam consequatur consequuntur quidem illum ratione vel quam, earum itaque dolorem? Repellat tempore mollitia dolores qui hic provident quasi facilis placeat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ullam consequatur consequuntur quidem illum ratione vel quam, earum itaque dolorem? Repellat tempore mollitia dolores qui hic provident quasi facilis placeat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ullam consequatur consequuntur quidem illum ratione vel quam, earum itaque dolorem? Repellat tempore mollitia dolores qui hic provident quasi facilis placeat.
                    </p>
                    <img class="icon-perf-hist" src="./src/assets/emblema-perfil.png" alt="emblema-perfil">
                </div>
            </div>
        </section>
        `
}
