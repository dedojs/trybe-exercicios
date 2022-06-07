const read = require('readline-sync');

const option = read.questionInt(`Qual script deseja rodar:
1: Indice de massa corporal
2: Cálculo de velocidade média
3: Sorteio e advinhação de 1 numero ente 1 e 10
4: Digite um número para que seja retornado o seu fatorial
5: Calculadora + - * /
6: Sequência de Fibonacci
Digite o número da opção escolhida: `)

switch(option) {
  case 1:
    require('./imc')
    break;
  case 2:
    require('./velocidade')
    break;
  case 3:
    require('./sorteio')
    break;
  case 4:
    require('./fatorial')
    break;
  case 5:
    require('./operacoes')
    break;
  case 6:
    require('./fibonacci')
    break;
  default:
    console.log('Opção inválida')
}