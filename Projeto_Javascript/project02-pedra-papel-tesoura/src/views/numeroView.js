var numeroView = {
    render: function(tagImagem, jogNumber){
        var nomeImagem = " "
        if (jogNumber==0)
            nomeImagem = 'pedra'
        else if (jogNumber==1)
            nomeImagem = 'papel'
        else
            nomeImagem = 'tesoura'
        
        
            tagImagem.setAttribute('value',jogNumber)
            tagImagem.setAttribute('src','../../img/'+nomeImagem+'.png')
            tagImagem.setAttribute('alt',nomeImagem)
    }
}