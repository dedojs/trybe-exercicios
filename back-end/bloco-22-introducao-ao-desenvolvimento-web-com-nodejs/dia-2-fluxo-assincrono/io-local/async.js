const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meuarquivo.txt', 'Meu textão4 a vingança final');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()