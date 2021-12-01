let numbers = [5,9,3,100,92,87,2]

for(i = 0; i<numbers.length; i++){
    console.log('n=', numbers)
    let num1=numbers[i]
    let num2=numbers[i+1]

    if (num1 > num2){
        numbers[i]=num2
        numbers[i+1]=num1
        i=-1
    }
}

console.log(numbers)