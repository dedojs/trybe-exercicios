const read = require('readline-sync')

const velocidade = (distancia, tempo) => {
  return ((distancia/tempo).toFixed(2))
};

console.log('Vamos calcular é velocidade média do seu veículo, favor informa a distancia em metros e o tempo em segundos')
const distancia = read.questionInt('Qual a distância? ');
const tempo = read.questionInt('Qual o tempo? ');
const result = velocidade(distancia,tempo)
console.log(`A velocidade média é de ${result} m/s`)

module.exports = { velocidade };