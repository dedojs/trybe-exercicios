const { expect } = require('chai'); // importamos o testador

// const calculaSituacao = require('../examples/calculaSituacao'); // funcao importada para teste

const calculaMedia = (nota) => {
  let situacao = '';
  if (nota >= 7 && nota <= 10) situacao = 'aprovado'
  else if (nota < 0 || nota > 10) situacao = 'nota incorreta'
  else { situacao = 'reprovado' }
  return situacao
}
// calculaMedia(10)

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaMedia(4);
    expect(resposta).to.be.equals('reprovado');
  });
});

describe('Quando a média for maior que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaMedia(8);
    expect(resposta).to.be.equals('aprovado');
  });
});

describe('Quando a média for igual a 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaMedia(7);
    expect(resposta).to.be.equals('aprovado');
  });
});

describe('Quando a média for menor que 0 ou maior que 10', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaMedia(11);
    const resposta1 = calculaMedia(-1);
    expect(resposta).to.be.equals('nota incorreta');
    expect(resposta1).to.be.equals('nota incorreta');
  });
});