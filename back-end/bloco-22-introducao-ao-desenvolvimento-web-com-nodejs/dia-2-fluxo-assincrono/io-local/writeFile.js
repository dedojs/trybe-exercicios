const fs = require('fs').promises;

fs.writeFile('./file3.txt', 'teste 3 promisse')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });