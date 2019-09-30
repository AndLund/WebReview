# DOM

É a arvore de elementos dentro do html. O js pode manipular esses elementos dentro do DOM.

## Funções vistas

tag button

- onclick
- onmouseover

tag input
-onkeypress

_obs : é possível chamar funções._

document._ - objeto do documento, ou seja, da página html.
document.getElementById('nomeDaId) - retorna o elemento que contem aquela Id.
_.getElementsByTagName('input') - retorna uma HTMLCollection com todos os inputs.
*.getElementsByTagName('input')[index] - quando eu quero um input especifico.
*getElementsByClassName - pega as classes.

_obs: como Id é único retorna apenas um elemento. Porém getElementsByTagName e getElementsByClassName retornam vetores, pq possuem varios elementos._

_.querySelector('body div#app input'); - pega input que está dentro de uma div com id app que está dentro do body.
_.querySelector('input') - retorna um elemento
\*.querySelectorAll('input') - retorna todos os elementos input, no caso.

button.botao - pega o button com a classe botao.

btnElement.onclick = function() {
alert('msg');
} - quando o botao em clicado ativa a função que emite um alerta.

nomeVariavel.value - retorna o valor armazenado.

---

var linkElement = document.createElement('a') - cria tag a.

linkElement.setAttribute('href','http://google.com);

var textElement = document.createTextNode('Acessar google');
linkElement.appendChild(textElement);

com esses dados criou-se:
tag a com o site da google como href e com o texto acessar google dentro da tag.

---

É possível alterar estilo tbm.

ex:
var boxElement = document.querySelector('.box);

boxElement.style.width = 100;
boxElement.style.height = 100;
boxElement.style.backgroundColor = white;
