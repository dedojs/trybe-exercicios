const op = require('./velocidade')
const read = require('readline-sync')

console.log('Vamos calcular é velocidade média do seu veículo, favor informa a distancia em metros e o tempo em segundos')
const distancia = read.questionInt('Qual a distância? ');
const tempo = read.questionInt('Qual o tempo? ');
const result = op.velocidade(distancia,tempo)
console.log(`A velocidade média é de ${result} m/s`)
