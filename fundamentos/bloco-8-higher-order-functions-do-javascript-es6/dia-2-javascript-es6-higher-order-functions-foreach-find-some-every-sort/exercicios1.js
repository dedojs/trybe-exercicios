const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

/*   1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
Dica: use a função find . */

function authorBornIn1947(arr, year) {
    const findBook = arr.find((obra) => obra.author.birthYear === year)
    const nameAuthor = findBook.author
    console.log('questao 1', nameAuthor)
  }
  //console.log(books[0].author.birthYear)
  authorBornIn1947(books, 1947)

/*   2 - Retorne o nome do livro de menor nome.
Dica: use a função forEach . */

 /*  function smallerName(arr) {
    arr.forEach((book, index) => {
        arr[index].tam = book.name.length
    })
   arr.sort((a, b) => a.tam - b.tam)
   console.log(arr[0].name)
  }
 
  smallerName(books) */

  function smallerName (arr) {
    let nameBook = arr[0].name;
    arr.forEach((book) => {
        if (book.name.length < nameBook.length) {
            nameBook = book.name
        }
    })
    console.log('questão 2', nameBook)
}
  smallerName(books)

 // 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

 function getNameBook(arr) {
    const verifyItem = (arr) => arr.name.length === 26;
    const expectedResult = arr.find(verifyItem)
    console.log('questao 3', expectedResult)
}

getNameBook(books)

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc(arr) {
    arr.sort((b, a) => a.releaseYear - b.releaseYear)
    console.log('questao 4', arr)
}

booksOrderedByReleaseYearDesc(books)

//5 Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

function everyoneWasBornOnSecXX(arr) {
    const expectedResult = (arr) => (
        Object.values(arr).every((item) => item.author.birthYear > 1901 )
    )
    console.log('5 = ', expectedResult(arr))
     
}

everyoneWasBornOnSecXX(books)

//6  - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

function someBookWasReleaseOnThe80s(arr) {
    const expectedResult = (arr) => (
        Object.values(arr).some((item) => item.releaseYear > 1980 && item.releaseYear < 1990)
    );
    console.log('6 = ', expectedResult(arr))
}

someBookWasReleaseOnThe80s(books)

/* 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário. */

function authorUnique(arr) {
    let year;
    let resp;
    let repetido = []
    arr.sort((a, b) => a.author.birthYear - b.author.birthYear)
    console.log(arr)
    arr.sort((a, b) => {
        if(a.author.birthYear === b.author.birthYear) {
            year = a.author.birthYear
            repetido.push(a.author.birthYear)
            resp = false
        } else {
            resp = true
        }
    })
    console.log('7 = ', resp, year, repetido)
}
authorUnique(books)