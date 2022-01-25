/* 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
Dica: use parâmetro rest . */

const sum = (...args) => args
.reduce(((n1, n2) => n1 + n2), 0);


console.log(sum(1,2,5,6,7,8,9,3,4,5,6,7,8,12,13,14,17,18,19));
