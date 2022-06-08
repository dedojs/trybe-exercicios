// 1 Crie uma função que receba três parâmetros e retorna uma Promise.

const mathOp = (a, b, c) => {
  const promise = new Promise ((resolve, reject) => {
    if (typeof a != 'number'|| typeof b != 'number' || typeof c != 'number') reject (new Error('Informe apenas números'))
    const result = ((a + b) * c)
    if (result < 50) reject (new Error('Valor muito baixo'))
    resolve(result)
  });
  return promise
}

// 2 Escreva um código para consumir a função construída no exercício anterior.
// Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1).
/*
let rand = [];
const exec = (n) => {
  for (let i = 0; i < n; i += 1) {
    rand.push(Math.floor(Math.random() * 100 + 1))
}
  return rand
}
*/
const getRandom = () => Math.floor(Math.random() * 100 + 1)
const generate = () => {
  const randomNum = Array.from({length: 3}).map(getRandom);
  console.log(randomNum)
  return randomNum;
}

/*
mathOp(...generate())
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`err: ${err.message}`));
*/
 //3 Reescreva o código do exercício anterior para que utilize async/await.
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async.


/*
const mathOp2 = async () => {
  const randomNum = Array.from({length: 3}).map(getRandom);
  try {
    const result2 = await mathOp2(...randomNum);
    console.log(result2)
  } catch (err) {
    console.error(err.message);
  }
}

mathOp2()
*/