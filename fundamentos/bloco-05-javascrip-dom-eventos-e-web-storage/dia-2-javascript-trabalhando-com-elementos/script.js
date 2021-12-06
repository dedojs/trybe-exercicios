// arquivo script.js
/*
console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p> 
*/

// 1 console.log(document.getElementById('elementoOndeVoceEsta'))
// 2 let paiOndeVcEsta = (document.getElementById('elementoOndeVoceEsta').parentElement).style.color= 'red';
// 3 let filhoDofilho = document.getElementById('elementoOndeVoceEsta').firstElementChild.innerHTML = 'Eu sei o que vcs fizeram no verão passado'

// 4 console.log(document.getElementById('pai').firstElementChild)

// 5 console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling)

// 6 console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling)

// 7 console.log(document.getElementById('elementoOndeVoceEsta').nextSibling.nextSibling)

// 8 console.log(document.getElementById('pai').lastElementChild.previousElementSibling)

// parte 2

//1
let pai = document.getElementById('pai')
console.log(pai)

let irmao = document.createElement('p')
let text = document.createTextNode("filho do pai")
irmao.appendChild(text)

let sobrinho = document.createElement('p')
sobrinho.innerText ='Sobrinho di de Lia'

pai.appendChild(sobrinho);
pai.appendChild(irmao);

//2
let segundoFilho = document.getElementById('elementoOndeVoceEsta')

let terceiroFilhoDoFilho = document.createElement('p')
let textfilho = document.createTextNode('terceiroFilhoDoElemento')
terceiroFilhoDoFilho.appendChild(textfilho)
segundoFilho.appendChild(terceiroFilhoDoFilho)

//3
let primeiroFilhoDoFilho = document.getElementById('elementoOndeVoceEsta').firstElementChild

let fiDoPrimeiroFi = document.createElement('section')
let textfi = document.createTextNode('Fi do Primeiro filho do filho')
fiDoPrimeiroFi.appendChild(textfi)

primeiroFilhoDoFilho.appendChild(fiDoPrimeiroFi)

//4
let terceiroFilhoDoElemento = fiDoPrimeiroFi.parentNode.nextSibling.nextSibling.nextSibling.nextSibling;


// parte 3 removendo

console.log(document.getElementById('paiDoPai').children)

let primeiroFilho = document.getElementById('pai').firstElementChild

pai.removeChild(primeiroFilho)

let terceiroFilhoDoPai = document.getElementById('pai').firstElementChild.nextElementSibling
//console.log('3 =', terceiroFilhoDoPai)
 pai.removeChild(terceiroFilhoDoPai)

 let quartoFilhoDoPai = document.getElementById('pai').firstElementChild.nextElementSibling
 //console.log('4 =', quartoFilhoDoPai)
 pai.removeChild(quartoFilhoDoPai)

let quintoFilho = document.getElementById('pai').firstElementChild.nextElementSibling.nextElementSibling
//console.log('5 =', quintoFilho)
pai.removeChild(quintoFilho)

let sextoFilho = document.getElementById('pai').firstElementChild.nextElementSibling
//console.log('6 =', sextoFilho)
pai.removeChild(sextoFilho)

let fidofi = segundoFilho.firstElementChild.nextElementSibling
//console.log('f',fidofi)
segundoFilho.removeChild(fidofi)

let irmaosdosfi = segundoFilho.firstElementChild.nextElementSibling
//console.log('f1',irmaosdosfi)
segundoFilho.removeChild(irmaosdosfi)

let firstFi = segundoFilho.firstElementChild
let fidoFirst = firstFi.firstElementChild
firstFi.removeChild(fidoFirst)





//console.log(document.getElementById('pai').childNodes)






