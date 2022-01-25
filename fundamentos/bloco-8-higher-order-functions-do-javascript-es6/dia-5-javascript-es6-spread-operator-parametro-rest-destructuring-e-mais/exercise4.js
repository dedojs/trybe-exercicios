const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  
  // escreva filterPeople abaixo
/*   4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
Dica: use object destructuring . */

const [nicole, harry, toby, frida, fernando] = people

//andre 1
/* const filterPeople = (args) => args
.filter((element) => (element.bornIn >= 1901 && element.bornIn < 2001 && element.nationality === 'Australian'))

console.log(filterPeople(people)) */

// andre 2
/* const filterPeople = ({bornIn, nationality}) => [nicole, harry, toby, frida, fernando]
.filter((element) => 
    (element.bornIn >= 1901 && element.bornIn < 2001 && element.nationality === 'Australian') 
)
console.log(filterPeople([nicole, harry, toby, frida, fernando])) */

// gabarito

const filterPeople = (arr) => arr.filter(({nationality, bornIn}) => 
nationality === 'Australian' && bornIn >= 1901 && bornIn <= 2000);

console.log(filterPeople(people))

//passado os parametros desejados diretamente no filter
