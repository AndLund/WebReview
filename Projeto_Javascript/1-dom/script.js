// DOM - Document Object Model

const pTest = document.querySelector('.test')
const lista = document.querySelector('.lista')


function mudaMsg(){
    // pTest.textContent = 'Tudo bom?'
    if(pTest.classList.contains('sumiu')){
        pTest.classList.remove('sumiu')
    }else{
        pTest.classList.add('sumiu')
    } 

}

function adicionaItem(){
    var li = document.createElement('li')
    li.textContent = 'Elemento da lista'
    li.classList.add('elemento')
    lista.appendChild(li)

}
function removeItem(){
    // const elem = document.querySelector('.elemento')
    const elems = document.querySelectorAll('.elemento')
    // console.log(elems.length)
    const ultimo = elems[elems.length - 1]
    // console.log(lista)
    lista.removeChild(ultimo)
    
}

console.log(lista)