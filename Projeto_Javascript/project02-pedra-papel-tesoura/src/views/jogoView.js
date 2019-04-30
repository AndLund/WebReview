var jogoView = {
    render: function( jogoModelo, msg ){
        document.querySelector( '.resultado' ).textContent = msg
        var tagcpu = document.querySelector( '.cpu' )
        
        var nomeImagem = " "
        if (jogoModelo.cpu == 0)
            nomeImagem = 'pedra'
        else if (jogoModelo.cpu == 1)
            nomeImagem = 'papel'
        else
            nomeImagem = 'tesoura'
        
        tagcpu.setAttribute( 'value', jogoModelo.cpu )
        tagcpu.setAttribute( 'src', '../../img/' + nomeImagem + '.png' )
        tagcpu.setAttribute( 'alt', nomeImagem )
    }
}