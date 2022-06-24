const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3000

const Author = require('./models/Author')
const Book = require('./models/Book')

app.use(bodyParser.json());

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
})

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id)
  if(!author) return res.status(404).json({message:'Id não encontrado'})
  res.status(200).json(author);
})

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Data Invalid'})
  };
  await Author.createAuthor(first_name, middle_name, last_name);

  res.status(201).json({ message: 'create success'})
})

app.get('/books', async (req, res) => {
  const books = await Book.getAllBooks();
  res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Book.getByAuthorId(id);

  if(!books) return res.status(404).json({message:'Not Found'})
  
  res.status(200).json(books);
})

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body
  if (!Book.isvalid(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos'})
  }
  await Book.createBook(title, author_id)

  res.status(201).json({ message: 'Livro criado com sucesso!'})
})


app.listen(port, () => console.log(`Example app listening on port, ${ port }`));