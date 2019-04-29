var parImparController = {
    jogoController : function(parImparEscolha){
        let jogador = document.querySelector('.jogador').value
        let modelo = ParImpar.getModel(jogador, parImparEscolha)

        var msg = ''
        if(modelo.parImparEscolha == 'par'){
            msg = (modelo.jogador + modelo.adversario) % 2 == 0 ?
                'Você ganhou' : 'Você perdeu'
        }else{
            msg = (modelo.jogador + modelo.adversario) % 2 == 0 ?
            'Você perdeu' : 'Você ganhou'
        }
        parImparView.render(modelo, msg)

    } 
}



