// escreva greet abaixo
/* 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
Dica: use default params . */

const greet = (name, gret = 'Hi') => `${gret} ${name}`



console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'