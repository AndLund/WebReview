var jogadaView = {
    render: (classe, jogada) => {
        jogada.tag.classList.add(classe)
        jogada.tag.removeAttribute('onclick')
    }
}