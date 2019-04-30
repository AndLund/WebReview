var jogadaController = {
    fazerJogada: (e, i, j) => {
        let jogada = jogadaModel.criarJogada(e, i, j)
        let classe = tabelaController.state.tabuleiro[jogada.x][jogada.y] == '1' ? 'acertou' : 'errou'
        jogadaView.render(classe, jogada)
    }
}