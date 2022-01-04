function teste(frase){

    var nova =''
    for(let i = 0; i<frase.length; i+=1){
        if(frase[i] === 'a'){
            nova += 1
        }else if(frase[i] === 'e'){
            nova += 2
        }else if(frase[i] === 'i'){
            nova += 3
        }else if(frase[i] === 'o'){
            nova += 4
        }else if(frase[i] === 'u'){
            nova += 5
        }
        else{
            nova += frase[i]
        }
    }
    
    return nova
}

console.log(teste('andre luis'))