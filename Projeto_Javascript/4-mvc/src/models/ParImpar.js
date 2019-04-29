var ParImpar = {
    getModel: function(escolhaJogador, parImparEscolha){
        return {
            jogador: Number(escolhaJogador),
            parImparEscolha: parImparEscolha,
            adversario: Math.floor(Math.random() * 5 + 1),
        }
    }
}
