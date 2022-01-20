/* Por último, existe a função sort . Ela permite ordenar um array de acordo com algum critério estabelecido. Veja este exemplo com um array de strings: */

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]

const points1 = [40, 100, 1, 5, 25, 10];
points1.sort((a, b) => b - a);
console.log(points1); // [ 100, 40, 25, 10, 5, 1 ]

console.log('-----fixar sort-----')

// Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 18 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
 //people.sort()

 //console.log(people);

 people.sort((b, a) => a.age - b.age);
  console.log(people)

  

 let igual;
 var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
  ];
  people.sort((a, b) =>  {
    console.log(`${a.age} e ${b.age}`)
      if (a.age === b.age) {
          
          igual = a.age
      }
  });
  
  console.log(people)
  console.log(igual)
  
  