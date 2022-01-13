const serie = {
    nome: 'got',
    genero: 'medieval',
    autor: 'George',
    peronagemPreferido: 'Ned',
    melhorEpisodio: 'Guerra de Winterfell',
    temporads: 8,
}

/* for (dados in serie) {
    console.log(`${dados}: ${serie[dados]}`)
} */

console.log(Object.keys(serie))

console.log(Object.values(serie))

/* Tente criar uma função que exiba as habilidades do objeto. Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução. */

/* function showObject (object) {
    for (let data in object) {
        console.log(`${data}, Nível:  ${object[data]}`)
    }
}
showObject(serie) */

function show(nome) {
    console.log(`${Object.keys(serie)} => ${Object.values(serie)}`)
}

show(serie)