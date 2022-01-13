const cliente1 = {
    nome: 'andre',
    idade: 41,
    cpf: 12546578996
}

console.log(cliente1)

cliente1.sobrenome = 'sousa'

console.log(cliente1)

/* const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  customer[newKey] = lastName;
  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  customer[newKey] = fullName;
  console.log(customer); */

  cliente1.fullname = `${cliente1.nome} ${cliente1.sobrenome}`

  console.table(cliente1)

  /* crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele. */

  const cliente2 = {
      nome: 'nel',
  }


  function newKey(object, chave, value) {
      const novocampo = chave
      object[novocampo] = value
      console.log(object)
  }

  newKey(cliente2, 'idade', '55');