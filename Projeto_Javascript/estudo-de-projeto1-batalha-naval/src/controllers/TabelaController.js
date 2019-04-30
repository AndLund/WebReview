// Usei classe devido à necessidade de salvar estado (matriz de resposta)

class TabelaController{
    constructor(){
        tabelaView.render()
        this.state = {
            tabuleiro: []
        }
        this.geraTabela()
        this.sorteiaNavios()
    }

    geraTabela(){
        let tabuleiro = []
        for(let i = 0; i < 8; i++){
            let line = []
            for(let j = 0; j < 8; j++){
                let elem = '0'
                line.push(elem)
            }
            tabuleiro.push(line)
        }
        this.state.tabuleiro = tabuleiro
    }

    sorteiaNavios(){
        // 0 - horizontal, 1 - vertical
        let navio1 = {tamanho: 5, sentido: Math.floor( Math.random() * 2 )}
        let navio2 = {tamanho: 4, sentido: Math.floor( Math.random() * 2 )}
        let navio3 = {tamanho: 3, sentido: Math.floor( Math.random() * 2 )}
        let navio4 = {tamanho: 2, sentido: Math.floor( Math.random() * 2 )}
        
        this.preencheNavio(navio1)
        this.preencheNavio(navio2)
        this.preencheNavio(navio3)
        this.preencheNavio(navio4)
    }
    preencheNavio(navio){

        
        if(navio.sentido == 0){
            let y = Math.floor( Math.random() * 8 )
            let x = Math.floor( Math.random() * (8 - navio.tamanho) )

            var podeColocar = true
            for(var i = 0; i<navio.tamanho ; i++ ){
                if(this.state.tabuleiro[x+i][y] == '1'){
                    podeColocar = false
                }
            }
            if(podeColocar){
                for(var i = 0; i<navio.tamanho ; i++ ){
                    this.state.tabuleiro[x+i][y] = '1'
                }
            }else{
                this.preencheNavio(navio)
            }

        }else{
            let y = Math.floor( Math.random() * (8 - navio.tamanho) )
            let x = Math.floor( Math.random() * 8 )

            var podeColocar = true
            for(var i = 0; i<navio.tamanho ; i++ ){
                if(this.state.tabuleiro[x][y+i] == '1'){
                    podeColocar = false
                }
            }
            if(podeColocar){
                for(var i = 0; i<navio.tamanho ; i++ ){
                    this.state.tabuleiro[x][y+i] = '1'
                }
            }else{
                this.preencheNavio(navio)
            }
        }
    }
       
}