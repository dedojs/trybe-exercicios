let cars = ['Saab', 'Volvo', 'BMW']

for (let index in cars){
    console.log(cars[index])
}

let car ={
    type: 'Fiat',
    model: '500',
    color: 'white',
};
console.log(' ')
for(let index in car){
    console.log(index, car[index])
    
    //console.log(index)
    
    //console.log(car)
    
    //console.log(car[index])
}

// diferenças for in e for of

let food = ['hamburguer', 'bife', 'acaraje']

for(let position in food){ // pega o indice
    console.log(position)
}

for(let value of food){ // pega o valor
    console.log(value)
}

let names = {
    person1:'Joao',
    person2: 'Marta',
    person3: 'Jorge',

}

for(let hi in names){
    console.log('Olá ' + names[hi])
}

let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020,
}
console.log(' ')
for(let data in carro){
    console.log(carro[data])
}

