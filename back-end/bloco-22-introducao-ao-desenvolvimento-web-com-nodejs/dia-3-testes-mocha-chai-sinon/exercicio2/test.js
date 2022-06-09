const fs = require('fs');
const { expect } = require('chai');
const sinon = require('sinon');
const file = require('./writeFile');

const CONTEUDO = 'Olá mundo maluco!'

describe('Escrever no arquivo', () => {
  before(() => {
    sinon.stub(fs, 'readFileSync').returns(CONTEUDO)
  })

  after(() => {
    fs.readFileSync.restore();
  })

  it('Testar escrita', () => {;
    const nomeArquivo = 'arquivo.txt'
    const texto = 'Olá Mundo'
    file.writeFile(nomeArquivo, texto)
    const resp = file.readFileT(nomeArquivo, 'uttf8')
    expect(resp).to.be.equal('Olá mundo maluco!')
  })

  it('Testar existencia do arquivo', () => {
    const resp = file.readFileT('naoachanada.txt', 'uttf8')
    expect(resp).to.be.equal(null)
  })

})
