var x = 2
var nome = "Glauber"
console.log(`x = ${x}`)
console.log(`Oi meu nome e ${nome}`)


var x1 = 3
let x2 = 2
const x3 = 4

function test1(){
    console.log("oi")
}

function test2(paramentro = 55){
    console.log(paramentro)
}

test1()
test2() //Parametro com valor padrão

var test3 = (n1, n2) => n1+n2 // Arrow Function

console.log( test3(3, 6) )

// For Normal
for(var i =0 ; i<4; i++){
    console.log(i)
}

var n = 0

// For recursivo
function recur(n){
    if(n >= 3){
        console.log(n)
    }else{
        console.log(n)
        recur(++n)
    }
}
recur(n)

// Operador ternário

var variavel = 4
console.log( variavel == 4 ? 'Vale 4' : "Não vale 4" )

var variavel = '4'
console.log(variavel)
if(variavel){
    console.log("Entrou")
}else{
    console.log('Não entrou')
}


// LISTAS

var list = [1, 'fasdf', 3] 
console.log(list)

list.push(5)
console.log(list)

list.pop()
console.log(list)

var list2 = [4, 7, 1, 8, 3]
list2.sort()


console.log("LISTA ORDENADA: " + list2)
var list3 = ['a', 'da', 'abt', 'gu']
console.log( list3.sort() )


console.log(`TAMANHO DA LISTA: ${list2.length}`)


for(var j = 0; j<list2.length; j++){
    console.log( list2[j] )
}



// MÉTODOS

console.log('essa string'.toUpperCase() )
console.log('ESSA STRING'.toLowerCase() )
console.log('                 ESSA STRING                               '.trim())
console.log('ESSA STRING'.replace("STRING", "COISA") )

// EXPRESSAO REGULAR - AVANÇADO
console.log('essa string string string string'.replace(/string/ig, "COISA") )
console.log("vamos 3 supor 2 qu1e te1m mui5to 3nume3ro n2o me3io dessa str5ing")
console.log("vamos 3supor2 qu1e te1m mui5to 3nume3ro n2o me3io dessa str5ing".replace(/\d*/ig, ''))
console.log('Glauber12345'.replace(/string/ig, "COISA") )
console.log(/\w\w\d\d/ig.exec('Glauber12345'))




// OBJECT (JSON)


var carro = {
    modelo: 'uno',
    marca: 'fiat',
    cor: 'vermelho',
    dono: 'Glauber',
    rodas: [
        {roda1: 'michelan'},
        {roda2: 'michelan'}
    ]
}

console.log(carro.cor)
console.log(carro.modelo)
console.log(carro.dono)
carro.dono = 'Anderson'
console.log(carro)




var test = [
    {nome: 'asdf'},
    {nome: 'gfdgdfg'}
]

for(var i = 0; i<test.length; i++){
    console.log(test[i])
}


