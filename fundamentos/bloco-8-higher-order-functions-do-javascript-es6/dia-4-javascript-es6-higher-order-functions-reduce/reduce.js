const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum1 = (result, number) => result + number;
const sumNumbers1 = numbers.reduce(getSum1);
console.log(sumNumbers1); // 113

console.log('------------------')


const getSum2 = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers2 = numbers.reduce(getSum2, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers2); // 113

console.log('------------------')

const numbers1 = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers1.reduce(getBigger, 0);
console.log(bigger); // 85

console.log('------------------')

const numbers3 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pares = (number) => number % 2 === 0;
const sum = (n1, n2) => n1 + n2;

const letEven = numbers3.filter(pares)
const letSumEven = letEven.reduce(sum)
console.log(letEven, letSumEven)

console.log('------------------')

const sumEven = (n1, n2) => (
    (n2 % 2 === 0) ? n1 + n2 : n1 
)

const sumNumber = (arr) => arr.reduce(sumEven, 0)

console.log(sumNumber(numbers3))

console.log('---------------------')