const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  }
}

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
}

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );

  return authors.map(serialize).map(getNewAuthor);
}

const findById = async (id) => {
  const [authorsData] = await connection.execute(
    `SELECT id, first_name, middle_name, last_name FROM
    model_example.authors WHERE id=?;`, [id]
  );

  if (authorsData.length === 0) return null

  const { firstName, middleName, lastName } = authorsData.map(serialize)[0];

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName
  })
}

module.exports = {
  getAll,
  findById,
};