const read = require('readline-sync')

const fat = (n) => {
  let z
  for (let i = n - 1; i >= 1; i -= 1) {
    z = n *= i
  }
  return z
};

console.log('Bem vindo ao fatorial node!')
let resp = read.questionInt('Digite o numero desejado: ')
if (resp <= 0 ) {
  console.log('Numero inválido!')
  resp = read.questionInt('Digite o numero desejado: ')
};
const resultado = fat(resp)
console.log(`O fatorial de ${resp} é ${resultado}`)

module.exports = {fat}
