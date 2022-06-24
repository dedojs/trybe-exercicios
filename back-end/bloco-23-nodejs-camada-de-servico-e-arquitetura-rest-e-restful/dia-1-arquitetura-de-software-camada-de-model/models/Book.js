const connection = require('./connection')

const getAllBooks = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books;',
  )

  return books
}

const getByAuthorId = async (id) => {
  const [author_id] = await connection.execute(
    `SELECT title from model_example.books
    where author_id = ?;`, [id]
  )

  if(author_id.length === 0) return null

  return author_id
}

const isvalid = (title, author_id) => {
  if (!title || title.length < 3) return false
  if (!author_id || author_id.length === 0) return false
return true
}

const createBook = async (title, author_id) => {
  connection.execute (
    'INSERT INTO model_example.books (title, author_id) VALUES (?, ?);',
    [title, author_id]
  )
}

module.exports = {
  getAllBooks,
  getByAuthorId,
  isvalid,
  createBook,
};