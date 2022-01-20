/* A função find é utilizada para achar o primeiro elemento que satisfaça a condição passada. Então, a função que deverá ser passada precisa retornar true ou false */

const numbers = [19, 21, 31, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 22
console.log('-------------------------------')
/* 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista: */
const numbers1 = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;
const i = numbers1.find(findDivisibleBy3And5)

const j = numbers1.find((number) => number % 3 === 0 && number % 5 === 0)

console.log(j)
