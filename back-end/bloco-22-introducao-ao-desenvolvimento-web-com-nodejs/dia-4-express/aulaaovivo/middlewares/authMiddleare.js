const validUser = {
  username: 'andre',
  password:'1234'
};

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;
  const token = req.headers.authorization

  if(!token || token === undefined) return next({ code: 401, message: 'missing token'});

  if(!username || !password) {
    return res.status(401).json({ message: 'missing user ou pass'})
  };

  if (username !== validUser.username || password !== validUser.password) {
    return res.status(401).json({ message: 'Invalid'})
  };

  next();
}

module.exports = authMiddleware;