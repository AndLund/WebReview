var numeroController = {
    trocarNumero: function (){
        let tagImagem = document.querySelector('.imagem')
        let jogNumber = (Number(tagImagem.getAttribute('value')) + 1)% 3
        //console.log(tagNumber, jogNumber)
        numeroView.render(tagImagem, jogNumber)
    }
}

