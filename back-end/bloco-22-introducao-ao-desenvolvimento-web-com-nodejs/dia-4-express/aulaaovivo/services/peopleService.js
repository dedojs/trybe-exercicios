const person = [
  {id: 0, name: 'jurema', age: 23},
  {id: 1, name: 'bob', age: 25},
];

createPeople = (req, res, next) => {
  const { name, age } = req.body
  const id = person.length

  person.push({ id, name, age });
  res.status(201).json({ id, name, age})
}

module.exports = { createPeople };