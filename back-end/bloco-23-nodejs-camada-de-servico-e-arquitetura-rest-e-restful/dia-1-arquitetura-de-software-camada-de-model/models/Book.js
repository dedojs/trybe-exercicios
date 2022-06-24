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
  
  return author_id
}

module.exports = {
  getAllBooks,
  getByAuthorId,
};