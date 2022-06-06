const op = require('./game')
const read = require('readline-sync')

console.log("Vamos brinca de advinhar!")

// console.log('Gostaria de jogar?');
let resposta = read.question('Gostaria de jogar? Digite S caso queira continuar e qualquer outra letra para sair para sair do programa: ' )
while (resposta === 's' || resposta === 'S') {
  const numJogador = read.questionInt("Escolha um numero entre 1 e 10: ");
  const resp = op.numero();
  console.log(`O numero escolhido foi: ${resp}`)
  if (resp === numJogador) {
    console.log('Parabéns você venceu!')
  } else {
    console.log('Errrrrou!')
  }
  resposta = read.question('Gostaria de jogar? Digite S caso queira continuar e qualquer outra letra para sair para sair do programa: ' )
}
console.log('Obrigado! até a próxima')
