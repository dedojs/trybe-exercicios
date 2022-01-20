/* Utilizar a função Array.forEach para iterar sobre todos os elementos de um array;
Utilizar a função Array.find para encontrar o primeiro elemento de um array que satisfaça a uma condição;
Utilizar as funções Array.some e Array.every para testar se os elementos de um array satisfazem a uma condição;
Utilizar a função Array.sort para ordenar arrays de acordo com algum critério. */

const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    for (let i = 0; i < students.length; i += 1) {
      const student = students[i];
      if (student.grade >= 60) {
        student.approved = 'Aprovado';
      } else {
        student.approved = 'Recuperação';
      }
    }
  }
  
  verifyGrades();
  
  console.log(students);
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]

  const teste = [
    { name: 'Maria', grade: 90, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 56, approved: '' },
    { name: 'Ana', grade: 65, approved: '' },
  ];
  
  function verifyGrades1() {
    teste.forEach((student, index) => {
      if (student.grade >= 60) {
        teste[index].approved = 'Aprovado';
      } else {
        teste[index].approved = 'Recuperação';
      }
    });
  }
  
  verifyGrades1();
  
  console.log(teste);
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]

  const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    firstMultipleOf5 = numbers[index];
    break;
  }
}

console.log(firstMultipleOf5);
// 50

const numberse = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf51 = numberse.find((number) => number % 5 === 0);

console.log(firstMultipleOf51);
// 50