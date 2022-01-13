const pessoa = {
    nome: 'Camila',
    idade: 40,
    conjugue: 'Andre',
    filhas:['lara','luisa'],
    pet: 'Bob'
}

const localidade = {
    cidade: 'Vitoria da conquista',
    estado: 'Bahia'
}

const profissao = 'enfermeira'

const lasName = 'Jardim'

const filiacao = {
    pai: 'Moacir',
    mae: 'Maria Lucia'
}

Object.assign(pessoa, localidade, filiacao)

/* console.log(pessoa) */

/* const person = {
    name:'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person); */



  const novaPessoa = Object.assign({},pessoa)
  novaPessoa.nome = 'Andre';
  novaPessoa.conjugue = 'Camila'
  novaPessoa.pai = 'Ananias'
  novaPessoa.mae = 'Nilza',
  

  console.log(pessoa)
  console.log(novaPessoa)