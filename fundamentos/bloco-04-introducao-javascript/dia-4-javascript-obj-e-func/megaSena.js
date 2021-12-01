function generateGame(x){
    numeros =[]
    for(let i = 0; i<x; i++)
    numeros.push(Math.floor(Math.random()*60)+1)
    return numeros
}

let mega = generateGame(6)
console.log(mega)

let game =[5,6,9,8,7,3]

function jogomegaSena(game, mega){
    let acertados =[]
    let count = 0

    for(let i = 0; i<mega.length; i+=1){
        for(let i = 0; i<game.length; i+=1){
        if(mega[i]===game[i]){
            acertados.push(mega[i])
            count +=1

        }
    }
}
    console.log(acertados)
    if(acertados === 6){
        return 'Vencedor'
    }else{
        return 'Acertou apenas' + count
    }


}

console.log(game)

console.log(jogomegaSena(game, generateGame(6)))