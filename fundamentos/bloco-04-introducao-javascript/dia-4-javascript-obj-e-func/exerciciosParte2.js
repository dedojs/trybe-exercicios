//1

function palindrome (palavra){
    let pala = palavra
    //console.log(pala)
    let invertida =[]
    invertida.push(pala.split('').reverse())
    let invert = invertida[0]
    //console.log(invert)
    let iguais = 0;
    for(let i = 0; i<=pala.length-1; i+=1){
        
            //console.log( pala[i] + ' = ' + invert[i])
        if(pala[i] === invert[i]){
            iguais +=1
            //console.log(iguais)
        }else{
            return false
        }
}

    if (iguais == palavra.length){
        return true
    }
    
}


//console.log(palindrome('ovo'))


//2

let teste = [2,3,6,7,10,1]
function max_index(array){
    let maior = Math.max.apply(null, array)
    console.log(teste.indexOf(maior))
    
}

//max_index(teste)


//3

let nums3 = [2,3,6,7,10,0,-3]
function min_index(array){
    let menor = Math.min.apply(null, array)
    console.log(teste.indexOf(menor))
    
}

//min_index(teste)


4//
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Astrogildoleno']

function max_char(array){
    let max = ''
    let maxchar =[]
    for(i=0; i<array.length; i+=1){
        //console.log(array[i].length)
        maxchar.push(array[i].length)
        //console.log(maxchar)
          
    }
    max = Math.max.apply(null,maxchar)
    let ind = maxchar.indexOf(max)
    console.log(array[ind])
    
}

//max_char(nomes)

//5 

let nums5 = [2, 3, 2, 5, 8, 2, 3,3,3,3]

function repeat (ar){
    let cont = 0
    ar.sort()
    let rep = []
    let rep2=[]
    
    for(i=0;i<ar.length-1;i+=1){
        console.log(ar[i],ar[i+1])
        if(ar[i]===ar[i+1]){
            rep.push(ar[i])
        }
    }
   
    for(i=0;i<rep.length;i+=1){
        if(rep[i]==rep[i+1]){
            rep2.push(rep[i])
        }
    }
    }
    


    console.log(rep2)
    
}

repeat(nums5)

//6 

function sum_n(n){
    let num = []
    let soma=0
    for(i=1;i<=n;i+=1){
        num.push(i)
    }
    console.log(num)
    for(i=0;i<num.length;i+=1){
        soma += num[i]
        
    }
    console.log(soma)
}

//sum_n(5)

7//

function string (a,b){
    console.log(b)
    let len = b.length
    console.log(len)
    let cort = a.slice(-len)
    console.log(cort)
    if(cort == b){
        return true
    }else{
        return false
    }
    
}

// console.log(string('joaofernando', 'nando'))



