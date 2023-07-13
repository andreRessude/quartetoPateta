const patetas = document.querySelectorAll('.pateta');

patetas.forEach(pateta => {
    pateta.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, bahavior: 'smooth'});
        }
        removerSelecaoDoPateta();
        pateta.classList.add('selecionado');

        alterarImagemPatetaSelecionado(pateta);
        alterarNomePatetaSelecionado(pateta);
        alterarDescricaoPatetaSelecionado(pateta);

    })
})

function alterarDescricaoPatetaSelecionado(pateta) {
    const descricaoPateta = document.getElementById('descricao-pateta');
    descricaoPateta.innerText = pateta.getAttribute('data-description');
}

function alterarImagemPatetaSelecionado(pateta) {
    const imagemPatetaGrande = document.querySelector('.pateta-grande');
    const idPateta = pateta.attributes.id.value;
    imagemPatetaGrande.src = `./src/imagens/card-${idPateta}.png`;
}

function alterarNomePatetaSelecionado(pateta) {
    
    const nomePateta = document.getElementById('nome-pateta');
    nomePateta.innerText = pateta.getAttribute('data-name');
}

function removerSelecaoDoPateta() {
    const patetaSelecionado = document.querySelector('.selecionado');
    patetaSelecionado.classList.remove('selecionado');
}