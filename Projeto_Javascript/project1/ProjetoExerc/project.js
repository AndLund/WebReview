const valorCons = document.querySelector('.consumo')
const x = document.querySelectorAll('.btn')
function botao(botao02){
    if(botao02.textContent=='Ligar'){
        botao02.textContent='Desligar'
        botao02.classList.remove('btn-success')
        botao02.classList.add('btn-danger')
        valorCons.textContent=Number(valorCons.textContent)+40
        disjuntor()
    }else{
        botao02.textContent='Ligar'
        botao02.classList.remove('btn-danger')
        botao02.classList.add('btn-success')
        valorCons.textContent=Number(valorCons.textContent)-40
    }
}
function disjuntor(){
    if(Number(valorCons.textContent)>=160){
        for(let i=0;i<x.length;i++){
            if(x[i].textContent=='Desligar'){
                botao(x[i])
            }
            console.log(x[i].textContent,'Ligar')
        }  
    }
}

