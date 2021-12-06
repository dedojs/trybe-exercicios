//exemplo
let fruits = [3, 4, 10, 1, 12];
let soma=0;
for(i=0;i<fruits.length;i+=1){
    soma += fruits[i]
}

if(soma>15){
    console.log('o valor da soma é = ', soma)
}else{
    console.log("valor menor que 16")
}

//---------//

const z = 9;

let resultado = 100;
for(let i = 0; i<=z; i+=1){
    resultado -= 1;

}

console.log(resultado)

// exeercicios //

let n = 5
let linha = ''
let coluna = ''
 
/*for(let i = 1; i<=n; i+=1){
    linha +='*'
    
    console.log(linha)
    
}*/

for(let i = n; i>0; i-=1){
    linha +='*'
    for(let c = 0; c<n; c+=1){
   }
}
for(x=0; x<n; x+=1){
    console.log(linha)
}

// fatorial

var inicio = 10
var fat = 1;
let res = ' '
for(let i = inicio; i>0; i-=1){
    fat *= i
    
}
console.log('fat=',fat)

// palavra
let word = 'banana'
let w = word.split('').reverse().join('')
console.log(w)

//array de string
let array = ['java', 'javascript', 'python', 'html', 'css'];
let tam = []
let maior =''
let menor = ''
for(let i = 0; i<array.length; i+=1){
    tam.push(array[i].length)
    tam.sort(function(a,b){return a-b})
    if(tam[0]==array[i].length){
        menor = array[i]
    }
    if (tam[tam.length-1] == array[i].length){
        maior = array[i]
    }
}

console.log(tam[tam.length-1])
console.log(maior)
console.log('A menor palavra é : '+ menor + ' e a maior palavra é: ' + maior)

// primo

let numero = 100;
let primos = [2,3,5,7]
for(let i=2; i<=numero; i+=1){
    
    if( i % 2 != 0 && i%3 !=0 && i%5!=0 && i%7 != 0){
        primos.push(i)
    }
}
console.log(primos)
console.log('O maior número é = '+ primos[primos.length -1])

let divisors = 0;
let number = 50;
let pryme =[]
for(let i = 2; i<=number; i+=1){
    let r = false
    for(let c = 2; c<=number; i+=1)
    if(i%c==0){
        divisors +=1
      
    }
    
}

console.log(pryme)
