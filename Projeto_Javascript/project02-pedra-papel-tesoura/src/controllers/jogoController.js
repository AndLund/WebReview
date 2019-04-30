var jogoController = {
    jogar:  function(){
        // let tagNumber = document.querySelector()
        let jogNumber = Number(document.querySelector('.imagem').getAttribute('value'))
        let cpuNumber = Math.floor(Math.random() * 3)
        //console.log(jogNumber,cpuNumber)
        let jogoModelo = JogoModel.getModel(jogNumber,cpuNumber)
        console.log(jogoModelo)
        let msg = " "
        
        // 0 - Pedra / 1 - Papel / 2 - Tesoura
        
        if(jogoModelo.jogador==jogoModelo.cpu) {
            msg = 'Empate'
        }else if(Math.abs(jogoModelo.jogador-jogoModelo.cpu) == 1){
            msg = jogoModelo.jogador > jogoModelo.cpu ? 'Vitória' : 'Derrota'
        }else{
            msg = jogoModelo.jogador < jogoModelo.cpu ? 'Vitória' : 'Derrota'
        }
        //console.log(msg)
        jogoView.render(jogoModelo,msg)    
    }
}