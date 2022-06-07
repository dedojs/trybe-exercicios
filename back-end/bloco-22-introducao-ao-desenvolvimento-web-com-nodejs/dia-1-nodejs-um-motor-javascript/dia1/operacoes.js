const readline = require('readline-sync')

const operations = {
  sum: (num1, num2) => console.log(`${num1} + ${num2} = ${num1 + num2}`),
  sub: (num1, num2) => console.log(`${num1} - ${num2} = ${num1 - num2}`),
  mul: (num1, num2) => console.log(`${num1} * ${num2} = ${num1 * num2}`),
  div: (num1, num2) => console.log(`${num1} / ${num2} = ${num1 / num2}`),
}

console.log('Calculadora Simples')
const num1 = readline.questionInt('Digite o primeiro número:');
const oper = readline.question("Digite a operação: (+, -, *, /)")
const num2 = readline.questionInt('Digite o segundo numero:');

switch(oper) {
  case "+":
    operations.sum(num1, num2)
    break;
  case "-":
    operations.sub(num1, num2)
    break;
  case "*":
    operations.mul(num1, num2)
    break;
  case "/":
    operations.div(num1, num2)
    break;
  default:
    console.log("Operação desconhecida!")
}

module.exports = {
  operations
}