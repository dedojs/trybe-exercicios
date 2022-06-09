const fs = require('fs')

function writeFile(nome, texto) {
  fs.writeFileSync(`./${nome}`, texto)
}

function readFileT(nome) {
  try {
    const conteudo = fs.readFileSync(nome, 'utf8')
    return conteudo
  }catch(err) {
    return null
  }

}

module.exports = {
  writeFile,
  readFileT
};