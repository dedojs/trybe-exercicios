const menu = {
    food: {
        coxinha: 3.9,
        sopa: 5.5,
    },
    drink: {
        agua: 2.0,
        cerveja: 5.5,
    }
}
// transformando o conteudo de 2 objetos em um unico objeto, dentro de um array
const resume = [{...menu.food, ...menu.drink}]

console.log(menu)
console.log(resume)

console.log('-----------------------')

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

console.log('-----------------------')

const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6, ...numbers];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]

console.log('-----------------------')

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

console.log('-----------------------')

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

console.log('-----------------------')

const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  };
  
  const customer = { ...people, ...about };
  console.log(customer); /* {
    id: 101,
    name: 'Alysson',
    age: 25,
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer'
  } */

  console.log('-----------------------')

  // para fixar

  // Faça uma lista com as suas frutas favoritas
const specialFruit = ['melancia', 'banana', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['suco de laranha', 'maça', 'abacaxi'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const xTudo = [...specialFruit, ...additionalItens]
  return xTudo
};

console.log(fruitSalad(specialFruit, additionalItens));