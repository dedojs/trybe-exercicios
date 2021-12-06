/* aula 01 */
let pizza = ['4 queijos', 'Frango com catupiry', 'Calabresa', 'Palmito', 'Salame']
pizza.push('Chocolate')
//pizza.sort() -> ordena o array
pizza.unshift('Peito de peru') // adiciona na primeira posição
pizza.pop() // remove ultimo item
pizza.shift() // remove primeiro item
console.log('index of ' + pizza.indexOf('Calabresa')) // indexOf localiza a posição da string no array
for (let i = 0; i < pizza.length; i+=1){
    console.log(pizza[i])
}

//exercicio

let menu =['home', 'serviços', 'portfolio', 'links']
let menuServices = menu[1];
let indexOfPortfolio = menu.indexOf('portfolio')
menu.push('Contato')
console.log(menuServices)
console.log(indexOfPortfolio)
console.log(menu)


/*aula 02 = for */

var x = 5;
for(i=1;i<=10;i+=1){
    console.log(x + ' x ' + i + ' = ' + x*i)
}

var listaDeNomes= ['Andre', 'Camila', 'Lara', 'Luisa', 'Bob']
for(i=0;i<listaDeNomes.length; i+=1){
    console.log("Olá "+listaDeNomes[i]+ " seja bem vindo(a)")
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for(c=0;c<groceryList.length;c+=1){
    console.log(groceryList[c])
}

/* aula03  => for  of*/


let numeros = [10,233,322,411,566];
for(let numero of numeros) {
  console.log(numero);
}

let word = "hello tudo bem bob"
let letras=[];
for(let letra of word){
    letras.push(letra)
    console.log(letra)
    
}
//console.log(letras)


let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum *= 3;
  console.log(sum);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(let nome of names){
    console.log(nome)
}

