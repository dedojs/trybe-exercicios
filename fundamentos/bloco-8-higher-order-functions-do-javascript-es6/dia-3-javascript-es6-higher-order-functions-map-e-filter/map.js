// Veja a diferença entre fazer uma mesma função usando for e em seguida usando map :

const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
  const fullNames = [];
  
  for (let index = 0; index < persons.length; index += 1) {
    fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
  }
  
  console.log(fullNames);

  console.log('---------------')
 
  const fullNames1 = persons.map((person) => `${person.firstName} ${person.lastName}`);
  
  console.log(fullNames1); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

  console.log('---------------')

  const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

console.log('---------------')

const negativeNumbers1 = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > 0) {
    negativeNumbers1.push(numbers[index] * -1);
  } else {
    negativeNumbers1.push(numbers[index]);
  }
}

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

console.log('---------------')

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]

console.log('---------------')

const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
});
console.log(paresMenoresQueCinco); // Retorno: [2, 4]