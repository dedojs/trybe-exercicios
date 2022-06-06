const calc = require('./imc')
const readline = require('readline-sync')

console.log('Digite seu peso e altura para calsular seu IMC')
const peso = readline.questionFloat('Qual o seu peso? ');
const altura = readline.questionFloat('Qual a sua altura? ');
const result = calc.imc(peso, altura);
console.log(`Seu imc é ${result}`)


  if(result < 18.5) {
    console.log('Abaixo de 18,5')
  } else if (result >= 18.5 && result <= 24.9) {
      console.log('Peso normal')
  } else if (result >= 25 && result <= 29.9) {
      console.log('Sobrepeso')
  } else if (result >= 30 && result <= 34.9) {
      console.log('Obesidade grau I')
  } else if (result >= 35 && result <= 39.9) {
      console.log('Obesidade grau II')
  } else {
    console.log('Obesidade graus III e IV')
  };
