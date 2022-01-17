// Dados
const professionalBoard = [
    {
      id: '8579-6',
      firstName: 'Ana',
      lastName: 'Gates',
      specialities: ['UX', 'Design'],
    },
    {
      id: '5569-4',
      firstName: 'George',
      lastName: 'Jobs',
      specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    },
    {
      id: '4456-4',
      firstName: 'Leila',
      lastName: 'Zuckerberg',
      specialities: ['Context API', 'RTL', 'Bootstrap'],
    },
    {
      id: '1256-4',
      firstName: 'Linda',
      lastName: 'Bezos',
      specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
    },
    {
      id: '9852-2-2',
      firstName: 'Jeff',
      lastName: 'Cook',
      specialities: ['Ruby', 'SQL'],
    },
    {
      id: '4678-2',
      firstName: 'Paul',
      lastName: 'Dodds',
      specialities: ['Backend'],
    },
  ];
  
  // Pesquisa
  const verifyData = (id, detail) => {
    let listId = [];
    const user = professionalBoard[0];
    const listDetail = Object.keys(user);
    for(let i of professionalBoard){
      listId.push(i.id);
    };
    let resultId = listId.includes(id);
    let resultDetail = listDetail.includes(detail);
    if(resultId === false) {
      throw new Error ("ID não identificada");
    } else if (resultDetail === false) {
      throw new Error ("Informação indisponível");
    } 
  };

  const searchEmployee = (id, detail) => {
    // Implemente seu código aqui
    try {
    verifyData(id, detail);
    } catch (error) {
      throw error.message
    } finally {
      for(let i in professionalBoard) {
        if(id === professionalBoard[i].id) {
          if(detail === 'firstName') {
            return (`Id: ${id} ${detail}: ${professionalBoard[i].firstName}`);
          } else if(detail === 'lastName') {
            return (`Id: ${id} ${detail}: ${professionalBoard[i].lastName}`);
          } else if (detail === 'specialities') {
            return (`Id: ${id} ${detail}: ${professionalBoard[i].specialities}`);
          } else {
            throw new Error ("Informação indisponível");
          }
        }
      }
    }
  }; 

  console.log(searchEmployee('4678-2', 'firstName'));


module.exports = searchEmployee