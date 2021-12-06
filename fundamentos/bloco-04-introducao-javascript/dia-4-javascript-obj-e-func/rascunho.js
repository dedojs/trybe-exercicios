//1
/*
function palindrome (palavra){
    let pala = palavra
    //console.log(pala)
    let invertida =[]
    invertida.push(pala.split('').reverse())
    //console.log(invertida)
    let invert = invertida
    //console.log(invert)
    let iguais = 0;
    for(let i = 0; i<=pala.length-1; i+=1){
            //console.log( pala[i] + ' = ' + invertida[0][i])
        if(pala[i] === invertida[0][i]){
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


console.log(palindrome('asa'))
*/

//5

let nums5 = [2, 3, 2, 5, 8, 2,3,5,8,3,2,9,10,3,3,3,3,5]

function repeat (ar){
    let cont = 0
    ar.sort()
    let rep = {
        
    }
    let rep2=[]
    for(let i=0;i<nums5.length-1;i+=1){
        if(nums5[i]==nums5[i+1]){
            rep = (nums5[i])
            
        }
       
    }
    
console.log(rep.numerosRepetidos)
console.log(rep2)
console.log(cont)
    
    
}

repeat(nums5)
/*
var counts = {};
nums5.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
console.log(counts)*/

/*
let nums = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

for (let i = 0; i < nums.length; i += 1) {
  for (let c = 0; c < i; c += 1) {
     // console.log(i, c)
    if (nums[i] < nums[c]) {
      let maior = nums[i];
      nums[i] = nums[c];
      nums[c] = maior;
    }
  }
  console.log(nums)
  
}
*/


