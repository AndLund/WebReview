console.log('hello')

var x = 18

console.log(ehMaior(x))

function ehMaior(x){
    if(x<18){
        return false
    }else{
        return true
    }
}
/*
for(var i=0;i<10;i++){
    console.log(i)
    if(i%2==0){
        console.log(`${i} eh par`)
    }else{
        console.log(`${i} eh impar`)
    }
}
*/
var lista01 = [
    {nome:'Anderson',idade:'32'},
    {nome:'Glauber',idade:'30'},
    {nome:'Sanderson',idade:'17'},
    {nome:'DraGlenda',idade:'16'},
    {nome:'Thalles',idade:'50'}
    ]

for(var i=0;i<lista01.length;i++){
    console.log(ehMaior(lista01[i].idade))
    if(ehMaior(lista01[i].idade)){
        console.log(`${lista01[i].nome} eh maior de idade`)
    }else{
        console.log(`${lista01[i].nome} eh menor de idade`)
    }
}

