function testNum(n) {
  let resposta = '';
  if (n > 0) resposta = 'positivo';
  else if (n < 0) resposta = 'negativo';
  else if (typeof n != 'number') resposta = 'Insira um número';
  else if (n === 0) resposta = 'neutro'
  return resposta
}

module.exports = testNum;