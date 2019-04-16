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

var variavel = '4'
console.log(variavel)

if(variavel){
    console.log("Entrou")
}else{
    console.log('Não entrou')
}








