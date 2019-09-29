# JavaScript - Starter Course

## 1. Introdução

Linguagem que permite executar scripts interpretados a partir do client da aplicação (browser).

## Configurando ambiente

javascript - tag script.  
Boa prática:  
tag script como último elemento da tag body. Desta forma ao carregar a página o javascript pode ter acesso aos elementos desde o início.

## Variáveis e dados

**Não há tipagem**
js reconhece int,float, string,boolean.

_Declaração de variável_
var - escopo global
let - escopo local
const - escopo local/valor não pode ser alterado

ex: var nome = "Joao";

_Array_
var vetor = ['Paulo', 'Ana', 'Tiago'];

console.log(vetor[1])
(retorna Ana)
(console.log(''+''); como no java)

_Objeto_
var aluno = {
nome: 'Ana',
idade: 23,
peso: 75,
humano: true
};

console.log(aluno.idade);
(retorna 23)

## Funções

ex:
function soma(num1,num2) {
var num1 = 1, num2 = 2;
return num1+num2;
}

var result = soma(1,2);
console.log(result);

## Condicional

_==_ - verifica o valor
_===_ - verifica valor e tipo  
if e switch igual no C.

## Operadores lógicos

|| - ou
&& - e
! - não
!= / !== - diferente

## Operador ternário

condição ? positivo : negativo;
(igual em C)

## Repetição

(igual em C)
for - quando sabe a quantidade de repetições.
while - quando não se tem certeza.

## Intervalo e timeout

setInterval(nomeFunc,tempo(ms));

ex:
function exibeAlgo() {
console.log('Ola');
}

setInterval(exibeAlgo,1000);
(a cada 1 segundo (1000ms) a função é executada)
(não usa () pq no lugar de passar como parametro vai executar a função)

setTimeout(exibeAlgo,5000);
(exibe uma vez com o delay, no caso, de 5 segundos)

indexOf?
for..of?
