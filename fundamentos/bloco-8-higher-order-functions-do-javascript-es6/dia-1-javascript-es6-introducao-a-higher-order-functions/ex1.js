/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com . */

/* const newEmployees = () => {
    const employees = {
      id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  }; */

 const criarEmail = (nome) => {
     const email = nome.toLowerCase().split(' ').join('_');
     return `Nome: ${nome}, Email: ${email}@trybe.com`
 }

 const criarFuncionario = (callback) => {
    const func = {
        id1: callback('Joao Doe'),
        id2: callback('Marcia Jurema'),
        id3: callback('Rosangela Filipa'),
    }
    return func
 }

 console.log(criarFuncionario(criarEmail))




const employGen = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_');
    return {nomeCompleto, email:`${email}@tryber.com`};
}
console.log(employGen('André Luis de Jesus Sousa'));

const newEmployer = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luci Cotinho'),
        id3: callback('Ostra Gomes')
    };
    return employees
}

console.log(newEmployer(employGen))