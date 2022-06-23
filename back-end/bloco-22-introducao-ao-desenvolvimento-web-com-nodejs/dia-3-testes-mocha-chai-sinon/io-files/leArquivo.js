const fs = require('fs');


const leArquivo = (nomearquivo) => {
  try {
    const conteudoDoArquivo = fs.readFileSync(nomearquivo, 'utf8');
    return conteudoDoArquivo
  } catch (err) {
    return null;
  }
}


module.exports = leArquivo;