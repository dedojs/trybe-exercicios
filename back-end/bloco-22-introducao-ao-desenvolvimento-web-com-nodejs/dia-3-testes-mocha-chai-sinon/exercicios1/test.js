const { expect } = require('chai');
const testNum = require('./testNum.js');

describe('Testar um número', () => {
  it('é positivo', () => {
    const resposta = testNum(5)
    expect(resposta).to.be.equals('positivo')
  })
  it('é negativo', () => {
    const resposta = testNum(-1)
    expect(resposta).to.be.equal('negativo')
  })
  it('é neutro', () => {
    const resposta = testNum(0)
    expect(resposta).to.be.equal('neutro')
  })
  it('o valor inserido deve ser um número', () => {
    const resposta = testNum('a')
    expect(resposta).to.be.equal('Insira um número')
  })
})