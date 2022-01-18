/* 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

const sort = () => {
    const num = Math.round((Math.random()*4)+1)
    return num
}

const verify = (numero, callback) => {
    const sort = callback()
    if (numero === sort) {
        return 'Parabéns você ganhou'
    } if(numero !== sort) {
        return "Tente novamente"
    }
};

console.log(verify(5, sort))


