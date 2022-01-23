const product = {
    names: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

/*   const { name } = product;
console.log(name); // Smart TV Crystal UHD */

const { names, seller } = product;
console.log(names); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

console.log('------------------------')

// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };
  
  // desestruturando o objeto:
  const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
  
  // imprimindo os valores:
  console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

  console.log('------------------------')

const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };
  
  const { workDays, weekend } = daysOfWeek;
  console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(weekend); // ['Saturday', 'Sunday']

  const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

console.log('--------------------------')

const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
  const { a: nome, b: classAssigned, c: subject } = student;
  
  console.log(nome); // Maria
  console.log(classAssigned); // Turma B
  console.log(subject); // Matemática

  console.log('-------------------------')

  const products = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  
  const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
  };
  
  printProductDetails(products); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

 