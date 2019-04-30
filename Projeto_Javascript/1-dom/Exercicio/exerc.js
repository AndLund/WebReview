console.log('olar')
function mudar(botao01){
    console.log(botao01)
    //botao01.textContent = 'Deslogar'
    if(botao01.textContent=='Logar'){
        botao01.textContent = 'Deslogar'
        botao01.classList.remove('botaoLogar')
        botao01.classList.add('botaoDeslogar')
    }else{
        botao01.textContent = 'Logar'
        botao01.classList.remove('botaoDeslogar')
        botao01.classList.add('botaoLogar')
    }
}