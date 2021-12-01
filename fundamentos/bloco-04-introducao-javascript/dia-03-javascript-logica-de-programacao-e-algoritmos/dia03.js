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

