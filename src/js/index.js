const botoes = document.querySelectorAll('.botao');

const biomas = document.querySelectorAll('.lugares');

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => { 

        desselecionarBotao();
        desselecionarlugares();

        botao.classList.add("selecionado");
         biomas[index].classList.add("selecionado")
    });
})

function desselecionarlugares() {
    const lugaresSelecionado = document.querySelector(".lugares.selecionado");
    lugaresSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}