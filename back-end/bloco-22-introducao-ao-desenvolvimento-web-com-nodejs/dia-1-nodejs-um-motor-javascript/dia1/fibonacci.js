const read = require('readline-sync')

const fibo = (n) => {
  let fibonacci = []
  fibonacci[0] = 1;
  fibonacci[1] = 1;
  for (let i = 2; i <= (n - 1); i += 1) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i -1];
  }
  return fibonacci
}

console.log('Bem vindos a sequencia Fibonacci!')
const resp = read.questionInt('Digite a quantidade desejada de elementos retornados da sequência Fibonacci: ')
console.log(fibo(resp))

module.exports = { fibo }
