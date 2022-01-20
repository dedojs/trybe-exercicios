/* As funções some e every são parecidas. A primeira retorna true se ao menos um elemento de um array satisfaz a uma condição. A segunda retorna true se todos os elementos de um array satisfazem a uma condição.  */

//some = algum
const listNames = ['Maria', 'Manuela', 'Morge', 'Micardo', 'Milson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('M', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

console.log('------------------------')

const numeros = [10, 37, 96, 45, 17, 04]

const verify = (num, numeros) => numeros.some((item) => item === num);
console.log(verify(10, numeros))

console.log('------------------------')

// every

const grades = {
    portugues: 'Aprovado',
    matematica: 'Aprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );
  
  console.log(verifyGrades(grades));

  console.log('------------------------')

  const itens = {
     televisao: 'ok',
     radio: 'ok',
     pc: 'ok'
    };

    const verifyItens = (array) => (
        Object.values(array).every((situacao) => situacao === 'ok') 
    );

    console.log(verifyItens(itens))

    console.log('------------------------')

    // fixar 1 a

    const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

    const hasName = (arr, name) => (
        arr.some((nome) => nome === name)
    )

    console.log(hasName(names, 'Andre'))

    // fixar 1 b

    const people = [
        { name: 'Mateus', age: 19 },
        { name: 'José', age: 18 },
        { name: 'Ana', age: 23 },
        { name: 'Cláudia', age: 20 },
        { name: 'Bruna', age: 19 },
      ];
      
      const verifyAges = (arr, minimumAge) => (
        arr.every((item) => item.age >= minimumAge)
      );
      
      const findName = (arr, name) => (
          arr.find((nome) => nome.name === name)
      );
      console.log(findName(people, 'Cláudia'))
      
      console.log(verifyAges(people, 18));

      // const j = numbers1.find((number) => number % 3 === 0 && number % 5 === 0)

    

    
