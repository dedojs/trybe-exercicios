const validUsers = [
  {username: 'MestreCuca', password:'MinhaSenhaSuperSeguraSQN'},
  {username: 'Jurema', password:'1234'},
  {username: 'bob', password:'1234'}
];

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if(!username || !password) {
    return res.status(401).json({ message: 'Username or password can`t be blanck!'})
  }

  const foundUser = validUsers.find((user) => user.username === username);

  if( !foundUser ) return res.status(401).json({ message: 'Invalid credentials!' })

  if ( username !== foundUser.username || password !== foundUser.password ) {
    return res.status(401).json({ message: 'Invalid credentials!'})
  }

  req.user = foundUser;
  next();
};

module.exports = authMiddleware;

