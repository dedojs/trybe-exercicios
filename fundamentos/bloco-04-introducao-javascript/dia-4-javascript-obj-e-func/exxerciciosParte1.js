/*
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  //1
  console.log('Bom dia, '+ info.personagem)

  //2
  info.recorrente = 'Sim';
  console.log(info)

  //3
  for (let i in info){
      console.log(i)
  }
console.log('')

//4
  for (let i in info){
      console.log(info[i])
  }
console.log('')
  //5
  let info1 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

  console.log(5)
  console.log(info['personagem'] + ' e ' + info1['personagem'])
  console.log(info['origem'] + ' e '+ info1['origem'])
  console.log(info['nota'] + ' e '+ info1['nota'])
  if(info.recorrente == "Sim" && info1.recorrente == 'Sim'){
      console.log('Ambos recorrentes')
  }

  */

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  //6
  let books = leitor.livrosFavoritos
  let livro = books[0]
  //console.log(livro.titulo)
  console.log('O livro favorito de '+ leitor.nome +' ' + leitor.sobrenome + ' se chama ' + "'" + livro.titulo + "'")

  //7
  leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      }
  )
  //console.log(leitor)

  console.log(leitor.nome + ' tem ' + books.length + ' livros favoritos')

